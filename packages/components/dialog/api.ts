import { createApp, h, ref } from 'vue'
import Dialog from './index.vue'

export const openDialog = (content: string) => {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const app = createApp({
    setup() {
      const visible = ref(true);
      return () => h(
        Dialog,
        {
            modelValue: visible.value,
            'onUpdate:modelValue': (val: boolean) => {
                if (!val) {
                    app.unmount();
                    container.remove();
                }
            }
        },
        () => content);
    }
  })

  app.mount(container)
}
