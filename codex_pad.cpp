#include <cstdio>

#include "codex_pad_inputs_service.h"
#include "pxt.h"

using namespace pxt;

namespace codex_pad {

//%
void startReceiverService(String central_mac_address) {
  CodexPadInputsService::GetInstance().Start(central_mac_address->ascii.data, central_mac_address->ascii.length);
}

//%
bool isConnected() {
  return CodexPadInputsService::GetInstance().getConnected();
}

//%
Buffer fetchInputs() {
  return CodexPadInputsService::GetInstance().FetchInputs();
}

}  // namespace codex_pad