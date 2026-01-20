//% block="CodexPad" color="#F57F17" icon="\uf11b" weight=90
namespace codex_pad {
    /**
     * Button enumeration
     */
    export enum Button {
        //% block="Up"
        UP = 1 << 0,
        //% block="Down"
        DOWN = 1 << 1,
        //% block="Left"
        LEFT = 1 << 2,
        //% block="Right"
        RIGHT = 1 << 3,
        //% block="Square(X)"
        SQUARE_X = 1 << 4,
        //% block="Triangle(Y)"
        TRIANGLE_Y = 1 << 5,
        //% block="Cross(A)"
        CROSS_A = 1 << 6,
        //% block="Circle(B)"
        CIRCLE_B = 1 << 7,
        //% block="L1"
        L1 = 1 << 8,
        //% block="L2"
        L2 = 1 << 9,
        //% block="L3"
        L3 = 1 << 10,
        //% block="R1"
        R1 = 1 << 11,
        //% block="R2"
        R2 = 1 << 12,
        //% block="R3"
        R3 = 1 << 13,
        //% block="Select"
        SELECT = 1 << 14,
        //% block="Start"
        START = 1 << 15,
        //% block="Home"
        HOME = 1 << 16
    }

    /**
     * Joystick axis enumeration
     */
    export enum Axis {
        //% block="Left Stick X"
        LEFT_STICK_X = 0,
        //% block="Left Stick Y"
        LEFT_STICK_Y = 1,
        //% block="Right Stick X"
        RIGHT_STICK_X = 2,
        //% block="Right Stick Y"
        RIGHT_STICK_Y = 3
    }

    /**
     * Input state class
     */
    export class Inputs {
        button_states: number = 0;
        axis_values: number[] = [0x80, 0x80, 0x80, 0x80];

        constructor() { }

        /**
         * Create a copy of the current object
         */
        clone(): Inputs {
            let inputs: Inputs = new Inputs();
            inputs.button_states = this.button_states;
            inputs.axis_values = this.axis_values;
            return inputs;
        }

        /**
         * Copy data from another Inputs object
         */
        copyFrom(other: Inputs): void {
            this.button_states = other.button_states;
            for (let i = 0; i < 4; i++) {
                this.axis_values[i] = other.axis_values[i];
            }
        }

        /**
         * Parse input data from byte buffer
         */
        copyFromBytes(bytes: Buffer): void {
            let numbers: number[] = bytes.unpack("<IBBBB");
            this.button_states = numbers[0];
            for (let i = 0; i < 4; i++) {
                this.axis_values[i] = numbers[i + 1];
            }
        }
    };

    let g_prev_inputs: Inputs = new Inputs();
    let g_current_inputs: Inputs = new Inputs();
    let g_on_connected: Action = null;
    let g_on_disconnected: Action = null;
    let g_connected: boolean = false;
    let g_on_axis_changed: (() => void)[] = [null, null, null, null];
    let g_on_axis_changed_threshold: number[] = [0, 0, 0, 0];

    // Store callbacks for each button state separately
    let g_on_button_pressed: { [key: number]: Action } = {};
    let g_on_button_released: { [key: number]: Action } = {};
    let g_on_button_holding: { [key: number]: Action } = {};

    /**
     * Start receiver service and wait for CodexPad with specified MAC address
     * @param mac Bluetooth MAC address
     */
    //% block="start receiver service wait for CodexPad $mac" 
    //% group="Connection" weight=100 blockGap=8
    //% mac.defl="00:00:00:00:00:00"
    //% shim=codex_pad::startReceiverService
    export function startReceiverService(mac: string): void {
        return;
    }

    /**
     * Check if CodexPad is connected
     * @returns Connection status
     */
    //% block="is connected"
    //% group="Connection" weight=95 blockGap=8
    //% shim=codex_pad::isConnected
    export function isConnected(): boolean {
        return false;
    }

    /**
     * Get raw input data
     * @returns Input data buffer
     */
    //% shim=codex_pad::fetchInputs
    export function fetchInputs(): Buffer {
        return null;
    }

    /**
     * Update input states and trigger callbacks
     */
    //% block="update"
    //% group="Update" weight=50 blockGap=8
    //% help=codex_pad/update
    export function update(): void {
        let connected: boolean = isConnected();

        if (g_connected != connected) {
            g_connected = connected;
            if (g_connected && g_on_connected != null) {
                g_on_connected();
            } else if (!g_connected && g_on_disconnected != null) {
                g_on_disconnected();
            }
        }

        g_prev_inputs.copyFrom(g_current_inputs);
        let inputs: Buffer = fetchInputs();
        if (inputs != null && inputs.length == 8) {
            g_current_inputs.copyFromBytes(inputs);
        }

        for (let button of [
            Button.UP,
            Button.DOWN,
            Button.LEFT,
            Button.RIGHT,
            Button.SQUARE_X,
            Button.TRIANGLE_Y,
            Button.CROSS_A,
            Button.CIRCLE_B,
            Button.L1,
            Button.L2,
            Button.L3,
            Button.R1,
            Button.R2,
            Button.R3,
            Button.SELECT,
            Button.START,
            Button.HOME
        ]) {
            if (pressed(button) && g_on_button_pressed[button]) {
                g_on_button_pressed[button]();
            } else if (released(button) && g_on_button_released[button]) {
                g_on_button_released[button]();
            } else if (holding(button) && g_on_button_holding[button]) {
                g_on_button_holding[button]();
            }
        }

        for (let axis of [Axis.LEFT_STICK_X, Axis.LEFT_STICK_Y, Axis.RIGHT_STICK_X, Axis.RIGHT_STICK_Y]) {
            if (g_on_axis_changed[axis] != null && hasAxisValueChanged(axis, g_on_axis_changed_threshold[axis])) {
                g_on_axis_changed[axis]();
            }
        }
    }

    /**
     * Check if button was just pressed
     * @param button Button to check
     * @returns Whether button was pressed
     */
    //% block="button $button pressed"
    //% group="Buttons" weight=85 blockGap=8
    //% button.defl=codex_pad.Button.UP
    //% help=codex_pad/pressed
    export function pressed(button: Button): boolean {
        return (g_prev_inputs.button_states & button) == 0 && (g_current_inputs.button_states & button) != 0
    }

    /**
     * Check if button was just released
     * @param button Button to check
     * @returns Whether button was released
     */
    //% block="button $button released"
    //% group="Buttons" weight=80 blockGap=8
    //% button.defl=codex_pad.Button.UP
    //% help=codex_pad/released
    export function released(button: Button): boolean {
        return (g_prev_inputs.button_states & button) != 0 && (g_current_inputs.button_states & button) == 0
    }

    /**
     * Check if button is being held
     * @param button Button to check
     * @returns Whether button is being held
     */
    //% block="button $button holding"
    //% group="Buttons" weight=75 blockGap=8
    //% button.defl=codex_pad.Button.UP
    //% help=codex_pad/holding
    export function holding(button: Button): boolean {
        return (g_prev_inputs.button_states & button) != 0 && (g_current_inputs.button_states & button) != 0
    }

    /**
     * Get current button state
     * @param button Button to check
     * @returns Current button state
     */
    //% block="button $button state"
    //% group="Buttons" weight=74 blockGap=8 advanced=true
    //% button.defl=codex_pad.Button.UP
    //% help=codex_pad/buttonState
    export function buttonState(button: Button): boolean {
        return (g_current_inputs.button_states & button) != 0
    }

    /**
     * Get all button states
     * @returns All button states value
     */
    //% block="all button states"
    //% group="Advanced" weight=73 blockGap=8 advanced=true
    //% help=codex_pad/buttonStates
    export function buttonStates(): uint32 {
        return g_current_inputs.button_states;
    }

    /**
     * Get current axis value
     * @param axis Axis to get
     * @returns Axis value (0-255)
     */
    //% block="axis $axis value"
    //% group="Stick" weight=70 blockGap=8
    //% axis.defl=codex_pad.Axis.LEFT_STICK_X
    //% help=codex_pad/axisValue
    export function axisValue(axis: Axis): uint8 {
        return g_current_inputs.axis_values[axis];
    }

    /**
     * Get all axis values
     * @returns All axis values array
     */
    //% block="all axis values"
    //% group="Advanced" weight=69 blockGap=8 advanced=true
    //% help=codex_pad/axisValues
    export function axisValues(): uint8[] {
        return g_current_inputs.axis_values.slice();
    }

    /**
     * Triggered when controller is connected
     * @param handler Callback handler
     */
    //% block="on connected"
    //% group="Connection" weight=65 blockGap=8
    //% draggableParameters
    //% help=codex_pad/onConnected
    export function onConnected(handler: () => void): void {
        g_on_connected = handler;
    }

    /**
     * Triggered when controller is disconnected
     * @param handler Callback handler
     */
    //% block="on disconnected"
    //% group="Connection" weight=64 blockGap=8
    //% draggableParameters
    //% help=codex_pad/onDisconnected
    export function onDisconnected(handler: () => void): void {
        g_on_disconnected = handler;
    }

    /**
     * Triggered when button is pressed
     * @param button Button to listen for
     * @param handler Callback handler
     */
    //% block="on button $button pressed"
    //% group="Buttons" weight=63 blockGap=8
    //% button.defl=codex_pad.Button.UP
    //% draggableParameters
    //% help=codex_pad/onButtonPressed
    export function onButtonPressed(button: Button, handler: () => void): void {
        g_on_button_pressed[button] = handler;
    }

    /**
     * Triggered when button is released
     * @param button Button to listen for
     * @param handler Callback handler
     */
    //% block="on button $button released"
    //% group="Buttons" weight=62 blockGap=8
    //% button.defl=codex_pad.Button.UP
    //% draggableParameters
    //% help=codex_pad/onButtonReleased
    export function onButtonReleased(button: Button, handler: () => void): void {
        g_on_button_released[button] = handler;
    }

    /**
     * Triggered when button is held
     * @param button Button to listen for
     * @param handler Callback handler
     */
    //% block="on button $button holding"
    //% group="Buttons" weight=61 blockGap=8
    //% button.defl=codex_pad.Button.UP
    //% draggableParameters
    //% help=codex_pad/onButtonHolding
    export function onButtonHolding(button: Button, handler: () => void): void {
        g_on_button_holding[button] = handler;
    }

    /**
     * Triggered when axis value changes beyond threshold
     * @param axis Axis to listen for
     * @param threshold Change threshold
     * @param handler Callback handler
     */
    //% block="on axis $axis value changed with threshold $threshold"
    //% group="Stick" weight=60 blockGap=8
    //% threshold.min=0 threshold.max=255 threshold.defl=2
    //% axis.defl=codex_pad.Axis.LEFT_STICK_X
    //% draggableParameters
    //% help=codex_pad/onAxisValueChanged
    export function onAxisValueChanged(axis: Axis, threshold: number, handler: () => void): void {
        g_on_axis_changed[axis] = handler;
        g_on_axis_changed_threshold[axis] = threshold;
    }

    /**
     * Check if axis value has changed
     * @param axis Axis to check
     * @param threshold Change threshold
     * @returns Whether axis value has changed
     */
    //% block="has axis $axis value changed (threshold $threshold)"
    //% group="Stick" weight=55 blockGap=8
    //% axis.defl=codex_pad.Axis.LEFT_STICK_X
    //% threshold.min=0 threshold.max=255 threshold.defl=2
    //% help=codex_pad/hasAxisValueChanged
    export function hasAxisValueChanged(axis: Axis, threshold: number): boolean {
        threshold = Math.max(0, Math.min(255, threshold));
        let prev_value = g_prev_inputs.axis_values[axis];
        let current_value = g_current_inputs.axis_values[axis];
        return prev_value != current_value && (current_value == 0 || current_value == 255 || Math.abs(current_value - prev_value) >= threshold);
    }
};