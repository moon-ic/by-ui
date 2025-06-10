# Input 输入框

## 基本用法

Input 组件是一个输入框，支持多种状态（`default`、`success`、`danger`、`warning`）和自定义内容。

### Props

| 参数           | 说明                                                  | 类型     | 默认值    |
| -------------- | ----------------------------------------------------- | -------- | --------- |
| `status`       | 输入框状态，可选值为 `default`、`disable`、`readonly` | `string` | `default` |
| `size`         | 输入框大小，可选值为 `small`、`large`                 | `string` | `small`   |
| `maxWidth`     | 输入框最大宽度                                        | `string` | `200px`   |
| `prepend`      | 输入框前缀内容                                        | `string` | -         |
| `append`       | 输入框后缀内容                                        | `string` | -         |
| `defaultValue` | 默认值                                                | `string` | -         |

### Events

| 事件名   | 说明                 | 回调参数          |
| -------- | -------------------- | ----------------- |
| `change` | 输入框内容变化时触发 | `(value: string)` |
| `focus`  | 输入框聚焦时触发     | -                 |
| `blur`   | 输入框失焦时触发     | -                 |

### Slots

| 插槽名    | 说明           |
| --------- | -------------- |
| `prepend` | 输入框前缀内容 |
| `append`  | 输入框后缀内容 |

## 样式

前后缀
<demo
           description="可以添加前后缀"
           vue="./demos/input/demo1.vue"
           stackblitz="true"
           codesandbox="true"/>

大小
<demo
           description="可以添加前后缀"
           vue="./demos/input/demo2.vue"
           stackblitz="true"
           codesandbox="true"/>

状态
<demo
description="状态‘default’ | ‘disabled’ | ‘readonly’’"
vue="./demos/input/demo3.vue"
stackblitz="true"
codesandbox="true"/>
