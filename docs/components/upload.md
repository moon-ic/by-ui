# Upload 组件文档

## 基本用法

Upload 组件是一个文件上传组件，支持拖拽上传、多文件上传和自定义样式。

### Props

| 参数              | 说明                 | 类型                                       | 默认值  |
| ----------------- | -------------------- | ------------------------------------------ | ------- |
| `action`          | 上传的地址           | `string`                                   | -       |
| `multiple`        | 是否支持多文件上传   | `boolean`                                  | `false` |
| `drag`            | 是否支持拖拽上传     | `boolean`                                  | `false` |
| `beforeUpload`    | 上传前的钩子函数     | `(file: File) => boolean \| Promise<File>` | -       |
| `data`            | 上传时附带的额外参数 | `Record<string, any>`                      | -       |
| `withCredentials` | 是否携带 cookie      | `boolean`                                  | `false` |

### Events

| 事件名     | 说明               | 回调参数                              |
| ---------- | ------------------ | ------------------------------------- |
| `success`  | 上传成功时触发     | `(response: any, file: UploadFile)`   |
| `error`    | 上传失败时触发     | `(error: Error, file: UploadFile)`    |
| `progress` | 上传进度变化时触发 | `(percent: number, file: UploadFile)` |
| `change`   | 文件状态变化时触发 | `(file: UploadFile)`                  |

### Slots

| 插槽名    | 说明         |
| --------- | ------------ |
| `default` | 上传区域内容 |

## 示例

<demo
           description="点击上传：upload 和 uploadlist"
           vue="./demos/upload/demo1.vue"
           stackblitz="true"
           codesandbox="true"/>

<demo
           description="拖拽上传：文件拖到区域内即可上传"
           vue="./demos/upload/demo2.vue"
           stackblitz="true"
           codesandbox="true"/>
