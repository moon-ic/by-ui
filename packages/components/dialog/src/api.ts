import { createApp, h, ref } from "vue";
import Dialog from "./index.vue";

export const openDialog = (content: string, props?: any) => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    const app = createApp(
        {
            setup() {
                const visible = ref(props.visible);
                return () =>
                    h(
                        Dialog,
                        {
                            visible: visible.value,
                            "onUpdate:visible": (val) => {
                                visible.value = val;
                                if (!val) {
                                    app.unmount();
                                    document.body.removeChild(container);
                                }
                            },
                            ...props
                        },
                        () => content
                    );
            }
        },
        props
    );

    app.mount(container);
};
