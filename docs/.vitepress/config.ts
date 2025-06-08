export default {
    // 站点级选项
    title: "ByUI",
    description: "一个基于vue3的组件库",

    themeConfig: {
        // 主题级选项
        sidebar: [
            {
                text: "基础组件",
                items: [
                    { text: "Avatar - 头像", link: "/components/avatar.md" },
                    { text: "Button - 按钮", link: "/components/button.md" },
                    { text: "List - 列表", link: "/components/list.md" }
                ]
            },
            {
                text: "表单组件",
                items: [
                    { text: "Input - 输入框", link: "/components/input.md" },
                    { text: "Upload - 拖拽上传", link: "/components/upload.md" }
                ]
            },
            {
                text: "全局组件",
                items: [
                    { text: "Dialog - 弹窗", link: "/components/dialog.md" },
                    { text: "Tabs - 选项卡", link: "/components/tabs.md" },
                    { text: "Toast - 轻提示", link: "/components/toast.md" },
                    { text: "Tooltips - 文字提示", link: "/components/tooltips.md" }
                ]
            }
        ]
    }
};
