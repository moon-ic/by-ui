# by-ui

基于 vue3 的组件库

构建：

1. pnpm workspace + vite + vue3 搭建。
2. 使用 eslint + prettier + commitlint + husky 提供工程化配置。
3. 使用 vite 打包, vitest 单元测试。
4. 使用 vuepress 提供文档功能。

功能：

1. 支持单独引用, 全局注册, dialog 组件 api 引用。
2. 提供基础 css 库, 设置基础 css 变量, 添加 css 动画库。
3. 提供 svg 库。
4. 有演示 demo。

## 目前技术栈

- 包管理器：pnpm workspace
- 框架：vue3
- css 预处理语言：sass
- 测试：vitest
- 打包：vite
- 项目文档：vitepress
- 代码规范工具链：eslint + prittier + stylelint
- git 提交规范链：husky + commitlint + lint-staged

## 食用指南

```
## 安装组件库
git clone
pnpm i

## 启动组件库文档
pnpm docs:dev
```

## 待做 List

✅ 已完成 ⭐️ 完善中 ❌ 未开始

### 通用组件

- Button 按钮 ✅

- Tabs 选项卡 ❌

### 表单组件

- Input 输入框 ✅

- Upload 拖拽上传 ✅

- Progress 进度条 ⭐️

- Form 表单 ❌

### 数据展示

- Avatar 头像 ❌

- list 列表 ❌

### 布局组件

- layout ❌

### 全局组件

- Transition 动画过渡 ❌

- Dialog 弹框 ⭐️

- Toast 轻提示 ❌

- Tooltip 文字提示 ❌
