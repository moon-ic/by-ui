# Button 按钮

## 简介

Button 是一个基础的按钮组件，支持多种样式和交互功能。

## 功能

- 支持多种按钮类型（默认、主要、成功、警告、危险等）
- 支持禁用状态
- 支持图标按钮
- 支持加载状态

## API

### 属性

| 属性名   | 类型    | 默认值    | 说明                                                             |
| -------- | ------- | --------- | ---------------------------------------------------------------- |
| type     | string  | `default` | 按钮类型（`default`, `primary`, `success`, `warning`, `danger`） |
| disabled | boolean | `false`   | 是否禁用按钮                                                     |
| loading  | boolean | `false`   | 是否显示加载状态                                                 |

### 事件

| 事件名 | 说明           |
| ------ | -------------- |
| click  | 点击按钮时触发 |

### 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 按钮内容 |
| icon    | 按钮图标 |

## 示例

不同颜色主题的按钮
<demo
        description="提供default，primary，waring，danger 4种样式的按钮"
        vue="./demos/button/demo1.vue"
        stackblitz="true"
        codesandbox="true"/>

禁用按钮
<demo
        description="参数含有disabled时，按钮禁用"
        vue="./demos/button/demo2.vue"
        stackblitz="true"
        codesandbox="true"/>

不同尺寸按钮
<demo
        description="含有 large｜medium｜small 三种尺寸"
        vue="./demos/button/demo3.vue"
        stackblitz="true"
        codesandbox="true"/>
