import { createApp, h, ref } from 'vue'
import Dialog from './index.vue'

export const openDialog = (content: string, props?: any) => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const visible = ref(props?.visible || false)

  const app = createApp({
    setup() {
      return () =>
        h(
          Dialog,
          {
            'v-model:visible': visible.value,
            ...props
          },
          () => content
        );
    },
  }, props);

  app.mount(container);
  return visible;
};
