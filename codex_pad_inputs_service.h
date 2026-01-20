#ifndef _CODEX_PAD_INPUTS_SERVICE_H_
#define _CODEX_PAD_INPUTS_SERVICE_H_

#include "ManagedString.h"
#include "MicroBit.h"
#include "MicroBitConfig.h"
#include "fifo.h"
#include "pxt.h"

#if CONFIG_ENABLED(DEVICE_BLE)
#include "MicroBitBLEManager.h"
#include "MicroBitBLEService.h"
#include "ble_gap.h"

class CodexPadInputsService : public MicroBitBLEService {
 public:
  static constexpr size_t kAxisValueNum = 4;

#pragma pack(push, 1)
  struct Inputs {
    uint32_t button_states = 0;
    uint8_t axis_values[kAxisValueNum] = {0x80, 0x80, 0x80, 0x80};
  };
#pragma pack(pop)

  static CodexPadInputsService& GetInstance();
  void Start(const char* central_mac_address, const uint8_t central_mac_address_length);
  CodexPadInputsService();
  Buffer FetchInputs();

 private:
  void onDataWritten(const microbit_ble_evt_write_t* params) override;
  int characteristicCount() override {
    return 1;
  }
  MicroBitBLEChar* characteristicPtr(int idx) override {
    return &inputs_characteristic_;
  }
  void StartAdvertising();

  uint8_t inputs_buffer_[sizeof(Inputs)] = {0};
  ble_gap_addr_t central_mac_address_;
  MicroBitBLEChar inputs_characteristic_;
  Fifo<Inputs> inputs_queue_;
};

#endif
#endif