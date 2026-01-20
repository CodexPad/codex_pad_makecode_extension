#include "codex_pad_inputs_service.h"

#include <ctype.h>

#include "ErrorNo.h"
#include "MicroBit.h"

// #define LOG(...) uBit.serial.printf(__VA_ARGS__)
#define LOG(...) (void(0))

#if CONFIG_ENABLED(DEVICE_BLE)
#include "MicroBitBLEService.h"
#include "ble.h"
#include "ble_advdata.h"
#include "nrf_sdh_ble.h"
#include "peer_manager.h"

namespace {
constexpr uint16_t kInputsServiceUuid = 0xFF10;
constexpr uint16_t kInputsCharacteristicUuid = 0xFF11;

uint8_t HexCharToInt(const char c) {
  if (c >= '0' && c <= '9') {
    return c - '0';
  } else if (c >= 'a' && c <= 'f') {
    return c - 'a' + 10;
  } else if (c >= 'A' && c <= 'F') {
    return c - 'A' + 10;
  } else {
    return 0;
  }
}

}  // namespace

CodexPadInputsService& CodexPadInputsService::GetInstance() {
  static CodexPadInputsService* s_instance = nullptr;
  if (s_instance == nullptr) {
    s_instance = new CodexPadInputsService();
  }
  return *s_instance;
}

CodexPadInputsService::CodexPadInputsService() : inputs_queue_(4) {
  LOG("CodexPadInputsService\n");
  bs_uuid_type = BLE_UUID_TYPE_BLE;  // Set the UUID type to 0x01, which should
                                     // be Bluetooth SIG ID
  uBit.bleManager.stopAdvertising();

  CreateService(kInputsServiceUuid);
  CreateCharacteristic(
      0, kInputsCharacteristicUuid, inputs_buffer_, sizeof(inputs_buffer_), sizeof(inputs_buffer_), microbit_propWRITE | microbit_propWRITE_WITHOUT);
}

void CodexPadInputsService::Start(const char* central_mac_address, const uint8_t central_mac_address_length) {
  LOG("Start: %s\n", ManagedString(central_mac_address, central_mac_address_length).toCharArray());
  // "F4:4E:FC:EC:D7:F5"
  if (central_mac_address == nullptr || central_mac_address_length != 17) {
    microbit_panic(DEVICE_INVALID_PARAMETER);
  }

  central_mac_address_.addr[5] = (HexCharToInt(central_mac_address[0]) << 4) | HexCharToInt(central_mac_address[1]);
  central_mac_address_.addr[4] = (HexCharToInt(central_mac_address[3]) << 4) | HexCharToInt(central_mac_address[4]);
  central_mac_address_.addr[3] = (HexCharToInt(central_mac_address[6]) << 4) | HexCharToInt(central_mac_address[7]);
  central_mac_address_.addr[2] = (HexCharToInt(central_mac_address[9]) << 4) | HexCharToInt(central_mac_address[10]);
  central_mac_address_.addr[1] = (HexCharToInt(central_mac_address[12]) << 4) | HexCharToInt(central_mac_address[13]);
  central_mac_address_.addr[0] = (HexCharToInt(central_mac_address[15]) << 4) | HexCharToInt(central_mac_address[16]);

  if ((central_mac_address_.addr[0] & 0xC0) == 0xC0) {
    central_mac_address_.addr_type = BLE_GAP_ADDR_TYPE_RANDOM_STATIC;
  } else {
    central_mac_address_.addr_type = BLE_GAP_ADDR_TYPE_PUBLIC;
  }

  StartAdvertising();
}

Buffer CodexPadInputsService::FetchInputs() {
  bool empty = false;
  CRITICAL_REGION_ENTER();
  empty = inputs_queue_.empty();
  CRITICAL_REGION_EXIT();

  if (empty) {
    return mkBuffer(nullptr, 0);
  }

  auto buffer = mkBuffer(nullptr, sizeof(Inputs));
  registerGCObj(buffer);
  CRITICAL_REGION_ENTER();
  inputs_queue_.Pop(reinterpret_cast<Inputs*>(buffer->data));
  CRITICAL_REGION_EXIT();
  unregisterGCObj(buffer);
  return buffer;
}

void CodexPadInputsService::onDataWritten(const microbit_ble_evt_write_t* params) {
  if (params == nullptr) {
    return;
  }
  switch (params->uuid.uuid) {
    case kInputsCharacteristicUuid: {
      if (params->len == sizeof(Inputs)) {
        inputs_queue_.Push(reinterpret_cast<const Inputs*>(params->data), true);
      }
      break;
    }
    default: {
      break;
    }
  }
}

void CodexPadInputsService::StartAdvertising() {
  uBit.bleManager.stopAdvertising();

  ble_gap_adv_params_t gap_adv_params;
  memset(&gap_adv_params, 0, sizeof(gap_adv_params));

  gap_adv_params.p_peer_addr = &central_mac_address_;

  gap_adv_params.properties.type = BLE_GAP_ADV_TYPE_CONNECTABLE_NONSCANNABLE_DIRECTED;
  gap_adv_params.interval = (1000 * MICROBIT_BLE_ADVERTISING_INTERVAL /* interval_ms */) / 625;  // 625 us units

  if (gap_adv_params.interval < BLE_GAP_ADV_INTERVAL_MIN) {
    gap_adv_params.interval = BLE_GAP_ADV_INTERVAL_MIN;
  }

  if (gap_adv_params.interval > BLE_GAP_ADV_INTERVAL_MAX) {
    gap_adv_params.interval = BLE_GAP_ADV_INTERVAL_MAX;
  }

  gap_adv_params.duration = 0;
  gap_adv_params.filter_policy = BLE_GAP_ADV_FP_ANY;
  gap_adv_params.primary_phy = BLE_GAP_PHY_1MBPS;

  uint8_t adv_handle = 0;
  MICROBIT_BLE_ECHK(sd_ble_gap_adv_set_configure(&adv_handle, nullptr, &gap_adv_params));

  uBit.bleManager.advertise();
}
#endif