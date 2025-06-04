<template>
    <div class="by-upload">
        <div class="upload-input">
            <Dragger v-if="drag" :onFile="uploadFile">
                <slot></slot>
            </Dragger>
            <div v-else @click="handleClick">
                qqq
                <slot></slot>
            </div>
            <input
                class="file-input"
                :style="{ display: 'none' }"
                ref="fileInput"
                @change="handleFileChange"
                type="file"
                :accept="accept"
                :multiple="multiple"
            />
        </div>

        <div class="upload-list" :onRemove="handleRemove">
            <li v-for="item in fileList" :class="['upload-list-item', `upload-list-${item.status}`]" :key="item.uid">
                <span :class="['file-name', `file-name-${item.status}`]">
                    <IconInfo size="18" />
                    {{ item.name }}
                </span>
                <span className="file-status">
                    <IconError size="24" v-if="item.status === 'error'" />
                    <IconLoading size="24" v-if="item.status === 'uploading'" />
                    <IconSuccess size="24" v-if="item.status === 'success'" />
                </span>
                <span className="file-actions">
                    <IconClose size="16" @click="() => handleRemove(item)" />
                </span>
            </li>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { UploadFile } from "./src/props";
import { UploadProps } from "./src/props";

import IconClose from "@/components/base/assets/svg/close.vue";
import IconInfo from "@/components/base/assets/svg/info.vue";
import IconSuccess from "@/components/base/assets/svg/success.vue";
import IconError from "@/components/base/assets/svg/error.vue";
import IconLoading from "@/components/base/assets/svg/loading.vue";
import Dragger from "./src/dragger.vue";
import progress from "./src/progress.vue";

import axios from "axios";

const props = withDefaults(defineProps<UploadProps>(), {
    accept: "*",
    name: "file",
    multiple: false,
    drag: false,
    withCredentials: false
});

const fileInput = ref<HTMLInputElement | null>(null);
const fileList = ref<UploadFile[]>(props.defaultFileList || []);

const handleClick = () => {
    if (fileInput.value) {
        fileInput.value.click();
    }
};
const handleFileChange = (e: Event) => {
    const files = (e.target as HTMLInputElement).files;
    if (!files) return;
    uploadFile(files);
    if (fileInput.value) {
        fileInput.value.value = "";
    }
};
const handleRemove = (file: UploadFile) => {
    fileList.value = fileList.value.filter((item) => item.uid !== file.uid);
    props.onRemove?.(file);
};
const updateFilelist = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    fileList.value = fileList.value.map((file) =>
        file.uid === updateFile.uid ? Object.assign(file, updateObj) : file
    );
};
const uploadFile = (files: FileList) => {
    const postFiles = Array.from(files);
    postFiles.forEach((file) => {
        if (!props.beforeUpload) {
            post(file);
        } else {
            const res = props.beforeUpload(file);
            if (res instanceof Promise) {
                res.then((processFiles) => {
                    post(processFiles);
                });
            } else if (res) {
                post(file);
            }
        }
    });
};
const post = (file: File) => {
    const __file: UploadFile = {
        uid: Date.now().toString() + "upload-file",
        status: "ready",
        name: file.name,
        size: file.size,
        percent: 0,
        raw: file
    };

    fileList.value = [__file, ...fileList.value];

    const formData = new FormData();
    formData.append(__file.name, file);
    if (props.data) {
        Object.keys(props.data).forEach((key) => {
            if (props.data) formData.append(key, props.data[key]);
        });
    }

    axios
        .post(props.action, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            withCredentials: props.withCredentials,
            onUploadProgress: (e) => {
                const precentage = Math.round((e.loaded * 100) / (e.total || 1));
                updateFilelist(__file, {
                    status: "uploading",
                    percent: precentage
                });
                if (precentage < 100 && props.onProgress) {
                    props.onProgress(precentage, __file);
                }
            }
        })
        .then((resp) => {
            updateFilelist(__file, {
                status: "success",
                percent: 100,
                response: resp
            });
            props.onSuccess?.(resp.data, __file);
            props.onChange?.(__file);
        })
        .catch((err) => {
            console.log(err);
            updateFilelist(__file, {
                status: "error",
                error: err
            });
            props.onError?.(err, __file);
            props.onChange?.(__file);
        });
};
defineExpose({
    fileInput,
    fileList,
    handleClick,
    handleFileChange,
    handleRemove
});
</script>

<style scoped lang="scss">
@import "../base/styles/index.scss";
.by-upload {
    width: 100%;
    min-width: 350px;
}
.upload-list {
    padding: 0;
    margin: 0;
    list-style-type: none;
}

.uploader-dragger {
    width: 360px;
    height: 180px;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    background: $light-color;
    border: 1px dashed $third-color;
    border-radius: 4px;

    &:hover {
        border: 1px dashed $primary-color;
    }

    &.is-dragover {
        background: rgba($primary-color, 0.2);
        border: 2px dashed $primary-color;
    }
}

.upload-list-item {
    box-sizing: border-box;
    min-width: 200px;
    margin-top: 5px;
    font-size: 14px;
    line-height: 1.8rem;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
    border-bottom: 1px solid $third-color;

    &:first-child {
        margin-top: 10px;
    }

    .file-name {
        margin-right: 40px;
        margin-left: 5px;
        display: flex;
        align-items: center;

        svg {
            margin-right: 5px;
            width: 18px;
            height: 18px;
            color: $secondary-color;
        }
    }

    .file-name-error {
        color: $danger-color;

        svg {
            color: $danger-color;
        }
    }

    .file-status {
        display: block;
        width: 24px;
        height: 24px;
    }

    .file-actions {
        display: none;
        cursor: pointer;
        width: 24px;
        height: 24px;
    }

    &:hover {
        background-color: darken($light-color, 5%);

        .file-status {
            display: none;
        }

        .file-actions {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}

.upload-list-uploading {
    .file-status {
        color: $primary-color;
    }
}
.upload-list-success {
    .file-status {
        color: $success-color;
    }
}
.upload-list-error {
    .file-status {
        color: $danger-color;
    }
}
.is-dragover {
    opacity: 0.7;
}
</style>
