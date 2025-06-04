export type UploadFileStatus = "ready" | "uploading" | "success" | "error";

export interface UploadFile {
    /** id  */
    uid: string;
    /** 大小 */
    size: number;
    /** 名字 */
    name: string;
    /** 文件状态 */
    status?: UploadFileStatus;
    /** 上传进度 */
    percent?: number;
    /** 原始文件 */
    raw?: File;
    /** 上传成功信息 */
    response?: any;
    /** 上传失败信息 */
    error?: any;
}

export interface UploadProps {
    /** 上传地址 */
    action: string;
    /** 上传文件列表 */
    defaultFileList?: UploadFile[];
    /** 生命周期函数 上传前 */
    beforeUpload?: (file: File) => boolean | Promise<File>;
    /** 生命周期函数 上传中 */
    onProgress?: (percentage: number, file: UploadFile) => void;
    /** 生命周期函数 发送状态改变 */
    onChange?: (file: UploadFile) => void;
    /** 生命周期函数 上传成功 */
    onSuccess?: (data: any, file: UploadFile) => void;
    /** 生命周期函数 上传失败 */
    onError?: (err: any, file: UploadFile) => void;
    /** 移除选中文件  */
    onRemove?: (file: UploadFile) => void;
    /** 上传请求头 */
    headers?: { [key: string]: any };
    /** 上传文件字段名 */
    name?: string;
    /** 上传额外参数 */
    data?: { [key: string]: any };
    /** 发送时是否携带cookie */
    withCredentials?: boolean;
    /** 接受文件类型 */
    accept?: string;
    /** 接受上传多个文件 */
    multiple?: boolean;
    /** 上传区域|组件 */
    children?: any;
    /** 是否支持拖拽上传 */
    drag?: boolean;
}
