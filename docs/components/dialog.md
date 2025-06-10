# Dialog 弹窗

## 基本用法

Dialog 组件是一个模态对话框，支持多种类型和自定义内容。

1. 直接调用
   <demo
           description="引用Dialog组件"
           vue="./demos/dialog/demo1.vue"
           stackblitz="true"
           codesandbox="true"/>

2. api调用
   <demo
           description="调用openDialog api"
           vue="./demos/dialog/demo2.vue"
           stackblitz="true"
           codesandbox="true"/>

## API

### Props

| 参数        | 说明                                                        | 类型      | 默认值    |
| ----------- | ----------------------------------------------------------- | --------- | --------- |
| `type`      | 对话框类型，可选值为 `info`、`success`、`danger`、`warning` | `string`  | `default` |
| `visible`   | 是否显示对话框                                              | `boolean` | `true`    |
| `header`    | 对话框标题                                                  | `string`  | -         |
| `body`      | 对话框内容                                                  | `string`  | -         |
| `cancelBtn` | 是否显示取消按钮                                            | `boolean` | `true`    |

### Events

| 事件名    | 说明                         | 回调参数 |
| --------- | ---------------------------- | -------- |
| `confirm` | 点击确认按钮时触发           | -        |
| `close`   | 点击关闭按钮或取消按钮时触发 | -        |

### Slots

| 插槽名    | 说明       |
| --------- | ---------- |
| `default` | 对话框内容 |

## 示例

不同状态反馈对话框
<demo
        description="提供`info`、`success`、`danger`、`warning`4种样式的对话框"
        vue="./demos/dialog/demo3.vue"
        stackblitz="true"
        codesandbox="true"/>

内容自定义
<demo
        description="提供default，primary，waring，danger 4种样式的按钮"
        vue="./demos/dialog/demo4.vue"
        stackblitz="true"
        codesandbox="true"/>
