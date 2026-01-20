codex_pad.onButtonPressed(codex_pad.Button.UP, () => {
    serial.writeLine("Button Up: pressed")
    basic.showArrow(ArrowNames.North, 0)
})

codex_pad.onButtonPressed(codex_pad.Button.DOWN, () => {
    serial.writeLine("Button Down: pressed")
    basic.showArrow(ArrowNames.South, 0)
})

codex_pad.onButtonPressed(codex_pad.Button.LEFT, () => {
    serial.writeLine("Button Left: pressed")
    basic.showArrow(ArrowNames.West, 0)
})

codex_pad.onButtonPressed(codex_pad.Button.RIGHT, () => {
    serial.writeLine("Button Right: pressed")
    basic.showArrow(ArrowNames.East, 0)
})

codex_pad.onButtonPressed(codex_pad.Button.SQUARE_X, () => {
    serial.writeLine("Button Square(X): pressed")
    basic.showString("X", 0)
})

codex_pad.onButtonPressed(codex_pad.Button.TRIANGLE_Y, () => {
    serial.writeLine("Button Triangle(Y): pressed")
    basic.showString("Y", 0)
})

codex_pad.onButtonPressed(codex_pad.Button.CROSS_A, () => {
    serial.writeLine("Button Cross(A): pressed")
    basic.showString("A", 0)
})

codex_pad.onButtonPressed(codex_pad.Button.CIRCLE_B, () => {
    serial.writeLine("Button Circle(B): pressed")
    basic.showString("B", 0)
})

codex_pad.onButtonPressed(codex_pad.Button.L1, () => {
    serial.writeLine("Button L1: pressed")
    basic.showString("1", 0)
})

codex_pad.onButtonPressed(codex_pad.Button.L2, () => {
    serial.writeLine("Button L2: pressed")
    basic.showString("2", 0)
})

codex_pad.onButtonPressed(codex_pad.Button.L3, () => {
    serial.writeLine("Button L3: pressed")
    basic.showString("3", 0)
})

codex_pad.onButtonPressed(codex_pad.Button.R1, () => {
    serial.writeLine("Button R1: pressed")
    basic.showString("4", 0)
})

codex_pad.onButtonPressed(codex_pad.Button.R2, () => {
    serial.writeLine("Button R2: pressed")
    basic.showString("5", 0)
})

codex_pad.onButtonPressed(codex_pad.Button.R3, () => {
    serial.writeLine("Button R3: pressed")
    basic.showString("6", 0)
})

codex_pad.onButtonPressed(codex_pad.Button.SELECT, () => {
    serial.writeLine("Button Select: pressed")
    basic.showString("7", 0)
})

codex_pad.onButtonPressed(codex_pad.Button.START, () => {
    serial.writeLine("Button Start: pressed")
    basic.showString("8", 0)
})

codex_pad.onButtonPressed(codex_pad.Button.HOME, () => {
    serial.writeLine("Button Home: pressed")
    basic.showString("9", 0)
})

codex_pad.onButtonReleased(codex_pad.Button.UP, () => {
    serial.writeLine("Button Up: released")
})

codex_pad.onButtonReleased(codex_pad.Button.DOWN, () => {
    serial.writeLine("Button Down: released")
})

codex_pad.onButtonReleased(codex_pad.Button.LEFT, () => {
    serial.writeLine("Button Left: released")
})

codex_pad.onButtonReleased(codex_pad.Button.RIGHT, () => {
    serial.writeLine("Button Right: released")
})

codex_pad.onButtonReleased(codex_pad.Button.SQUARE_X, () => {
    serial.writeLine("Button Square(X): released")
})

codex_pad.onButtonReleased(codex_pad.Button.TRIANGLE_Y, () => {
    serial.writeLine("Button Triangle(Y): released")
})

codex_pad.onButtonReleased(codex_pad.Button.CROSS_A, () => {
    serial.writeLine("Button Cross(A): released")
})

codex_pad.onButtonReleased(codex_pad.Button.CIRCLE_B, () => {
    serial.writeLine("Button Circle(B): released")
})

codex_pad.onButtonReleased(codex_pad.Button.L1, () => {
    serial.writeLine("Button L1: released")
})

codex_pad.onButtonReleased(codex_pad.Button.L2, () => {
    serial.writeLine("Button L2: released")
})

codex_pad.onButtonReleased(codex_pad.Button.L3, () => {
    serial.writeLine("Button L3: released")
})

codex_pad.onButtonReleased(codex_pad.Button.R1, () => {
    serial.writeLine("Button R1: released")
})

codex_pad.onButtonReleased(codex_pad.Button.R2, () => {
    serial.writeLine("Button R2: released")
})

codex_pad.onButtonReleased(codex_pad.Button.R3, () => {
    serial.writeLine("Button R3: released")
})

codex_pad.onButtonReleased(codex_pad.Button.SELECT, () => {
    serial.writeLine("Button Select: released")
})

codex_pad.onButtonReleased(codex_pad.Button.START, () => {
    serial.writeLine("Button Start: released")
})

codex_pad.onButtonReleased(codex_pad.Button.HOME, () => {
    serial.writeLine("Button Home: released")
})


codex_pad.onButtonHolding(codex_pad.Button.UP, () => {
    serial.writeLine("Button Up: holding")
})

codex_pad.onButtonHolding(codex_pad.Button.DOWN, () => {
    serial.writeLine("Button Down: holding")
})

codex_pad.onButtonHolding(codex_pad.Button.LEFT, () => {
    serial.writeLine("Button Left: holding")
})

codex_pad.onButtonHolding(codex_pad.Button.RIGHT, () => {
    serial.writeLine("Button Right: holding")
})

codex_pad.onButtonHolding(codex_pad.Button.SQUARE_X, () => {
    serial.writeLine("Button Square(X): holding")
})

codex_pad.onButtonHolding(codex_pad.Button.TRIANGLE_Y, () => {
    serial.writeLine("Button Triangle(Y): holding")
})

codex_pad.onButtonHolding(codex_pad.Button.CROSS_A, () => {
    serial.writeLine("Button Cross(A): holding")
})

codex_pad.onButtonHolding(codex_pad.Button.CIRCLE_B, () => {
    serial.writeLine("Button Circle(B): holding")
})

codex_pad.onButtonHolding(codex_pad.Button.L1, () => {
    serial.writeLine("Button L1: holding")
})

codex_pad.onButtonHolding(codex_pad.Button.L2, () => {
    serial.writeLine("Button L2: holding")
})

codex_pad.onButtonHolding(codex_pad.Button.L3, () => {
    serial.writeLine("Button L3: holding")
})

codex_pad.onButtonHolding(codex_pad.Button.R1, () => {
    serial.writeLine("Button R1: holding")
})

codex_pad.onButtonHolding(codex_pad.Button.R2, () => {
    serial.writeLine("Button R2: holding")
})

codex_pad.onButtonHolding(codex_pad.Button.R3, () => {
    serial.writeLine("Button R3: holding")
})

codex_pad.onButtonHolding(codex_pad.Button.SELECT, () => {
    serial.writeLine("Button Select: holding")
})

codex_pad.onButtonHolding(codex_pad.Button.START, () => {
    serial.writeLine("Button Start: holding")
})

codex_pad.onButtonHolding(codex_pad.Button.HOME, () => {
    serial.writeLine("Button Home: holding")
})

codex_pad.onAxisValueChanged(codex_pad.Axis.LEFT_STICK_X, 2, () => {
    serial.writeLine("L(" + codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_X) + ", " + codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_Y) + ")")
    if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_X) <= 16) {
        if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_Y) <= 16) {
            basic.showArrow(ArrowNames.SouthWest, 0)
        } else if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_Y) >= 240) {
            basic.showArrow(ArrowNames.NorthWest, 0)
        } else {
            basic.showArrow(ArrowNames.West, 0)
        }
    } else if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_X) >= 240) {
        if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_Y) <= 16) {
            basic.showArrow(ArrowNames.SouthEast, 0)
        } else if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_Y) >= 240) {
            basic.showArrow(ArrowNames.NorthEast, 0)
        } else {
            basic.showArrow(ArrowNames.East, 0)
        }
    } else if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_Y) <= 16) {
        if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_X) <= 16) {
            basic.showArrow(ArrowNames.SouthWest, 0)
        } else if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_X) >= 240) {
            basic.showArrow(ArrowNames.SouthEast, 0)
        } else {
            basic.showArrow(ArrowNames.South, 0)
        }
    } else if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_Y) >= 240) {
        if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_X) <= 16) {
            basic.showArrow(ArrowNames.NorthWest, 0)
        } else if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_X) >= 240) {
            basic.showArrow(ArrowNames.NorthEast, 0)
        } else {
            basic.showArrow(ArrowNames.North, 0)
        }
    }
})

codex_pad.onAxisValueChanged(codex_pad.Axis.LEFT_STICK_Y, 2, () => {
    serial.writeLine("L(" + codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_X) + ", " + codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_Y) + ")")
    if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_X) <= 16) {
        if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_Y) <= 16) {
            basic.showArrow(ArrowNames.SouthWest, 0)
        } else if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_Y) >= 240) {
            basic.showArrow(ArrowNames.NorthWest, 0)
        } else {
            basic.showArrow(ArrowNames.West, 0)
        }
    } else if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_X) >= 240) {
        if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_Y) <= 16) {
            basic.showArrow(ArrowNames.SouthEast, 0)
        } else if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_Y) >= 240) {
            basic.showArrow(ArrowNames.NorthEast, 0)
        } else {
            basic.showArrow(ArrowNames.East, 0)
        }
    } else if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_Y) <= 16) {
        if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_X) <= 16) {
            basic.showArrow(ArrowNames.SouthWest, 0)
        } else if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_X) >= 240) {
            basic.showArrow(ArrowNames.SouthEast, 0)
        } else {
            basic.showArrow(ArrowNames.South, 0)
        }
    } else if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_Y) >= 240) {
        if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_X) <= 16) {
            basic.showArrow(ArrowNames.NorthWest, 0)
        } else if (codex_pad.axisValue(codex_pad.Axis.LEFT_STICK_X) >= 240) {
            basic.showArrow(ArrowNames.NorthEast, 0)
        } else {
            basic.showArrow(ArrowNames.North, 0)
        }
    }
})

codex_pad.onAxisValueChanged(codex_pad.Axis.RIGHT_STICK_X, 2, () => {
    serial.writeLine("R(" + codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_X) + ", " + codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_Y) + ")")
    if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_X) <= 16) {
        if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_Y) <= 16) {
            basic.showArrow(ArrowNames.SouthWest, 0)
        } else if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_Y) >= 240) {
            basic.showArrow(ArrowNames.NorthWest, 0)
        } else {
            basic.showArrow(ArrowNames.West, 0)
        }
    } else if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_X) >= 240) {
        if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_Y) <= 16) {
            basic.showArrow(ArrowNames.SouthEast, 0)
        } else if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_Y) >= 240) {
            basic.showArrow(ArrowNames.NorthEast, 0)
        } else {
            basic.showArrow(ArrowNames.East, 0)
        }
    } else if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_Y) <= 16) {
        if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_X) <= 16) {
            basic.showArrow(ArrowNames.SouthWest, 0)
        } else if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_X) >= 240) {
            basic.showArrow(ArrowNames.SouthEast, 0)
        } else {
            basic.showArrow(ArrowNames.South, 0)
        }
    } else if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_Y) >= 240) {
        if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_X) <= 16) {
            basic.showArrow(ArrowNames.NorthWest, 0)
        } else if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_X) >= 240) {
            basic.showArrow(ArrowNames.NorthEast, 0)
        } else {
            basic.showArrow(ArrowNames.North, 0)
        }
    }
})

codex_pad.onAxisValueChanged(codex_pad.Axis.RIGHT_STICK_Y, 2, () => {
    serial.writeLine("R(" + codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_X) + ", " + codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_Y) + ")")
    if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_X) <= 16) {
        if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_Y) <= 16) {
            basic.showArrow(ArrowNames.SouthWest, 0)
        } else if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_Y) >= 240) {
            basic.showArrow(ArrowNames.NorthWest, 0)
        } else {
            basic.showArrow(ArrowNames.West, 0)
        }
    } else if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_X) >= 240) {
        if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_Y) <= 16) {
            basic.showArrow(ArrowNames.SouthEast, 0)
        } else if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_Y) >= 240) {
            basic.showArrow(ArrowNames.NorthEast, 0)
        } else {
            basic.showArrow(ArrowNames.East, 0)
        }
    } else if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_Y) <= 16) {
        if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_X) <= 16) {
            basic.showArrow(ArrowNames.SouthWest, 0)
        } else if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_X) >= 240) {
            basic.showArrow(ArrowNames.SouthEast, 0)
        } else {
            basic.showArrow(ArrowNames.South, 0)
        }
    } else if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_Y) >= 240) {
        if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_X) <= 16) {
            basic.showArrow(ArrowNames.NorthWest, 0)
        } else if (codex_pad.axisValue(codex_pad.Axis.RIGHT_STICK_X) >= 240) {
            basic.showArrow(ArrowNames.NorthEast, 0)
        } else {
            basic.showArrow(ArrowNames.North, 0)
        }
    }
})

codex_pad.onDisconnected(function () {
    serial.writeLine("disconnected")
    basic.showIcon(IconNames.No)
})
codex_pad.onConnected(function () {
    serial.writeLine("connected")
    basic.showIcon(IconNames.Yes)
})
basic.showIcon(IconNames.Happy)
codex_pad.startReceiverService("E4:66:E5:A2:24:5D")

basic.forever(function () {
    codex_pad.update()
})