# CodexPad Extension for micro:bit MakeCode

[中文](READMD.zh-CN.md)

## Overview

This extension is the MakeCode extension designed for **CodexPad** series controllers. It supports **micro:bit** in connecting to and reading the input status of all buttons and joysticks on a CodexPad controller via Bluetooth. For detailed information about CodexPad products, please refer to the product documentation below.

| CodexPad Model | Details |
| :--- | :--- |
| CodexPad-C10 | [Product Details](../../../codex_pad_c10/blob/main/README.md#codexpad-c10) |
| CodexPad-S10 | [Product Details](../../../codex_pad_s10/blob/main/README.md#codexpad-s10) |

## Features

- **Direct Connection via Bluetooth Device Address**: Quickly establish a stable connection with a specific controller using a known Bluetooth Device Address.

- **Real-time Button Event Detection**: Reads the input status of all buttons in real time, distinguishing between **Pressed**, **Released**, and **Holding** events.

- **High-Precision Joystick Data**: Retrieves analog values for the X and Y axes of the left and right joysticks, ranging from 0 to 255, providing precise control input.

## Usage Instructions

### Preparations

Before starting to program, complete the following preparations to ensure a smooth development process.

#### Familiarize Yourself with the Product Documentation

Read the CodexPad product manual in detail to fully understand the hardware features, familiarize yourself with the controller's button/joystick layout, function definitions, indicator light statuses, and power on/off operations.

#### Obtain and Record the Controller's Bluetooth Device Address (BD_ADDR)

> ⚠️ Important Note: The direct connection example in this library connects using the Bluetooth Device Address (BD_ADDR). When programming, you must explicitly specify your controller's Bluetooth Device Address (BD_ADDR) in the code.

Please refer to the method provided in the product manual to obtain your controller's **Bluetooth Device Address (BD_ADDR)**. It is typically in the format "`E4:66:E5:A2:24:5D`"(consisting of characters 0-9, A-F, with colons as half-width symbols). Record this information properly, as you will need to input your controller's actual **Bluetooth Device Address (BD_ADDR)** in the code later.

#### Power On the Controller and Enter Pairing Mode

Power on the controller. After powering on, the controller will automatically enter the **pairing mode** where it is discoverable via Bluetooth. At this time, the controller's indicator light should be in a **slow blinking state (approximately once per second)**.

### Installing the extension

Add the CodexPad extension in MakeCode:

1. Open [MakeCode for micro:bit](https://makecode.microbit.org/)

2. Create a new project or open an existing project

3. Click on Extensions (in the gear menu)

4. In the search box, enter: `https://github.com/CodexPad/codex_pad_makecode_extension`

5. Click on the CodexPad extension icon in the search results to add it.

> **⚠️ Note**: When adding the CodexPad extension for the first time, the system may prompt that this extension is incompatible with the **radio** module.
> Please make sure to select **"OK"** or **"Confirm removal"** in the pop-up dialog to remove the radio module, otherwise the extension will not load properly.

## Example Descriptions

### Basic Polling Example

- **Example link**: <https://makecode.microbit.org/S92002-05924-33203-41301>
- **Steps**: In the code blocks or code, find the address `E4:66:E5:A2:24:5D` and **replace it with your own gamepad's Bluetooth Device Address**.
- **Results**:

  - The micro:bit first displays a smiley face icon (`IconNames.Happy`) and starts the Bluetooth receiving service to wait for a connection.
  - Upon successful connection, the micro:bit **outputs "connected" via the serial port**, while the **LED matrix displays a checkmark icon** (`IconNames.Yes`), and the gamepad's Bluetooth connection indicator stays solid on.
  - Upon disconnection, the **serial port outputs "disconnected"**, while the **LED matrix displays a cross icon** (`IconNames.No`).
  - After a successful connection:
    - When a gamepad button is pressed, the micro:bit's LED screen displays the following characters:

        | Button | Displayed Character |
        | --- | --- |
        | Up | ↑ |
        | Down | ↓ |
        | Left | ← |
        | Right | → |
        | Square(X) | X |
        | Triangle(Y) | Y |
        | Circle(B) | B |
        | Cross(A) | A |
        | L1 | 1 |
        | L2 | 2 |
        | L3 | 3 |
        | R1 | 4 |
        | R2 | 5 |
        | R3 | 6 |
        | Select | 7 |
        | Start | 8 |
        | Home | 9 |

    - When operating the gamepad buttons, the micro:bit outputs information about all button actions (pressed, released, holding) via the serial port.
    - When operating the left or right joystick, the micro:bit's LED screen displays a character corresponding to the joystick's direction:

        | Joystick Direction | Displayed Character |
        | --- | --- |
        | Left | ← |
        | Upper Left | ↖ |
        | Lower Left | ↙ |
        | Up | ↑ |
        | Upper Right | ↗ |
        | Right | → |
        | Lower Right | ↘ |
        | Down | ↓ |

    - When operating the left or right joystick, the micro:bit outputs the joystick's X and Y axis coordinate values (0 ~ 255) via the serial port.

### Event-Driven Example

- **Example link**: <https://makecode.microbit.org/S87495-48874-28272-18977>
- **Steps**: In the code blocks or code, find the address `E4:66:E5:A2:24:5D` and **replace it with your own gamepad's Bluetooth Device Address**.
- **Results**:

  - The micro:bit first displays a smiley face icon (`IconNames.Happy`) and starts the Bluetooth receiving service to wait for a connection.
  - Upon successful connection, the micro:bit **outputs "connected" via the serial port**, while the **LED matrix displays a checkmark icon** (`IconNames.Yes`), and the gamepad's Bluetooth connection indicator stays solid on.
  - Upon disconnection, the **serial port outputs "disconnected"**, while the **LED matrix displays a cross icon** (`IconNames.No`).
  - After a successful connection:
    - When a gamepad button is pressed, the micro:bit's LED screen displays the following characters:

        | Button | Displayed Character |
        | --- | --- |
        | Up | ↑ |
        | Down | ↓ |
        | Left | ← |
        | Right | → |
        | Square(X) | X |
        | Triangle(Y) | Y |
        | Circle(B) | B |
        | Cross(A) | A |
        | L1 | 1 |
        | L2 | 2 |
        | L3 | 3 |
        | R1 | 4 |
        | R2 | 5 |
        | R3 | 6 |
        | Select | 7 |
        | Start | 8 |
        | Home | 9 |

    - When operating the gamepad buttons, the micro:bit outputs information about all button actions (pressed, released, holding) via the serial port.
    - When operating the left or right joystick, the micro:bit's LED screen displays a character corresponding to the joystick's direction:

        | Joystick Direction | Displayed Character |
        | --- | --- |
        | Left | ← |
        | Upper Left | ↖ |
        | Lower Left | ↙ |
        | Up | ↑ |
        | Upper Right | ↗ |
        | Right | → |
        | Lower Right | ↘ |
        | Down | ↓ |

    - When operating the left or right joystick, the micro:bit outputs the joystick's X and Y axis coordinate values (0 ~ 255) via the serial port.

## Supported targets

- for PXT/microbit

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
