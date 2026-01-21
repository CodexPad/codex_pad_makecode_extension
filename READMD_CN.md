# 🎮 CodexPad MakeCode 扩展

[English](README.md)

## 概述

本扩展是专为**CodexPad**系列手柄提供的MakeCode扩展，支持**micro:bit**通过蓝牙连接并读取CodexPad手柄的所有按键与摇杆输入状态。关于 CodexPad 产品的详细硬件信息，请查阅以下产品文档。

| CodexPad型号 | 链接 |
| :--- | :--- |
| CodexPad-C10 | <https://github.com/CodexPad/codex_pad_c10> |
| CodexPad-S10 | |

## 特性

- **蓝牙MAC地址连接**：通过已知的CodexPad手柄蓝牙MAC地址，快速建立与指定CodexPad手柄的稳定连接。
- **实时按键事件检测**：可实时读取所有按键的输入状态，并区分**按下**、**释放**和**长按**三种事件。
- **高精度摇杆数据**：获取左右摇杆X轴和Y轴的模拟量数值，范围从0至255，提供精准的控制输入。

## 使用说明

### 准备工作

在开始编程前，请完成以下准备工作，以确保开发过程顺利进行。

#### 1. 熟悉产品文档

- 详细阅读 CodexPad 产品手册，全面了解硬件特性、熟悉手柄按键摇杆布局、功能定义、指示灯状态以及开关机操作等基本信息。

#### 2. 获取并记录手柄 MAC 地址

> **⚠️ 重要提示**：本库通过蓝牙 MAC 地址进行连接。**编程时，必须在代码或图形化编程块中明确指定您手柄的 MAC 地址。**

请参考产品手册中提供的方法，获取您手柄的 MAC 地址。其格式通常为 `"E4:66:E5:A2:24:5D"`（由0-9、A-F的字符组成，冒号为半角）。请妥善记录此地址，后续需要在代码或图形化编程块中替换为您自己手柄的实际地址。

#### 3. 开启手柄并进入待连接状态

- 将手柄开机，手柄开机后会自动处于蓝牙可被发现的**待连接状态**，此时手柄指示灯应呈现**慢闪状态（约每秒闪烁一次）**。

### 安装扩展

在MakeCode中添加CodexPad扩展：

1. 打开 [MakeCode for micro:bit](https://makecode.microbit.org/)

2. 创建一个新项目或打开现有项目

3. 点击扩展（在齿轮菜单中）

4. 在搜索框中输入：`https://github.com/CodexPad/codex_pad_makecode_extension`

5. 在搜索结果中点击 CodexPad 扩展的图标以添加它。

> **⚠️ 注意**：首次添加 CodexPad 扩展时，系统可能会提示此扩展与 **无线（radio）** 模块不兼容。
> 请务必在弹出的对话框中选择 **“确定”** 或 **“确认删除”** 以移除无线模块，否则扩展将无法正常加载。

## 示例说明

## 基础轮询示例

- **示例链接**：<https://makecode.microbit.org/S92002-05924-33203-41301>
- **使用步骤**：在代码块或者代码中找到 `E4:66:E5:A2:24:5D` 这个MAC地址，将内容**替换为您自己手柄的实际 MAC 地址**。
- **运行结果**：
  - Micro:bit首先显示笑脸图标（`IconNames.Happy`），并启动蓝牙接收服务等待连接。
  - 连接成功后，Micro:bit**串口输出"connected"**，同时**LED点阵屏显示对勾图标**（`IconNames.Yes`），手柄的蓝牙连接指示灯常亮。
  - 断开连接时，**串口输出"disconnected"**，同时**LED点阵屏显示叉图标**（`IconNames.No`）。
  - 连接成功后：
    - 按下手柄按键时， Micro:bit的LED屏会显示如下字符：

        | 按键 | 显示字符 |
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

    - 操作手柄按键时， Micro:bit会通过串口输出所有按键操作（pressed、 released、 holding）的信息

    - 操作左右摇杆时，Micro:bit的LED屏会显示摇杆的偏移对应方向的字符

        | 摇杆方向 | 显示字符 |
        | --- | --- |
        | 左 | ← |
        | 左上 | ↖ |
        | 左下 | ↙ |
        | 上 | ↑ |
        | 右上 | ↗ |
        | 右 | → |
        | 右下 | ↘ |
        | 下 | ↓ |

    - 操作左右摇杆时， Micro:bit会通过串口输出摇杆XY轴的坐标值（0 ~ 255）

## 事件驱动示例

- **示例链接**：<https://makecode.microbit.org/S87495-48874-28272-18977>
- **使用步骤**：在代码块或者代码中找到 `E4:66:E5:A2:24:5D` 这个MAC地址，将内容**替换为您自己手柄的实际 MAC 地址**。
- **运行结果**：
  - Micro:bit首先显示笑脸图标（`IconNames.Happy`），并启动蓝牙接收服务等待连接。
  - 连接成功后，Micro:bit**串口输出"connected"**，同时**LED点阵屏显示对勾图标**（`IconNames.Yes`），手柄的蓝牙连接指示灯常亮。
  - 断开连接时，**串口输出"disconnected"**，同时**LED点阵屏显示叉图标**（`IconNames.No`）。
  - 连接成功后：
    - 按下手柄按键时， Micro:bit的LED屏会显示如下字符：

        | 按键 | 显示字符 |
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

    - 操作手柄按键时， Micro:bit会通过串口输出所有按键操作（pressed、 released、 holding）的信息

    - 操作左右摇杆时，Micro:bit的LED屏会显示摇杆的偏移对应方向的字符

        | 摇杆方向 | 显示字符 |
        | --- | --- |
        | 左 | ← |
        | 左上 | ↖ |
        | 左下 | ↙ |
        | 上 | ↑ |
        | 右上 | ↗ |
        | 右 | → |
        | 右下 | ↘ |
        | 下 | ↓ |

    - 操作左右摇杆时， Micro:bit会通过串口输出摇杆XY轴的坐标值（0 ~ 255）

## Supported targets

- for PXT/microbit

## License

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

---
*CodexPad - 让嵌入式开发更简单*
