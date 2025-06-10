# Button 组件

<demo vue="./demos/button/demo1.vue" stackblitz="true" codesandbox="true"></demo>

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

## 示例代码

```vue
<template>
  <Button type="primary" @click="handleClick">点击我</Button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log("按钮被点击");
    },
  },
};
</script>
```

## 使用说明

1. 引入组件：

```javascript
import { Button } from "by-ui";
```

2. 在模板中使用即可。

<preview path="../components/demos/button/demo1.vue"></preview>
