import AliOssClient, { OssClientOptions, MultipartUploadResp } from 'ali-oss';


declare type OssClientOptionalOptions = Pick<OssClientOptions, Exclude<keyof OssClientOptions, keyof {
    accessKeyId: string;
    accessKeySecret: string;
}>>;
interface ALiYunOssFactory {
    /**
     * 初始化阿里云oss的代理工厂
     */
    factory: (ossClientOptions?: OssClientOptionalOptions) => Promise<AliOssClient>;
}

declare type GetConfigFunction = () => Promise<any>;
interface OakALiYunOssInitializerOptions extends OssClientOptionalOptions {
    getConfigUrl: GetConfigFunction | string;
    getStsTokenUrl?: GetConfigFunction | string;
}
declare const genUploadOssKey: (filename: string, extName?: string) => string;
/**
 * 解析上传结果
 * @param resp
 */
declare const resolveUploadResult: (resp: MultipartUploadResp) => string[];
declare class DefaultALiYunOssInitializer implements ALiYunOssFactory {
    private options;
    private aLiYunOssFactory;
    constructor(options: OakALiYunOssInitializerOptions);
    factory: (ossClientOptions?: Pick<OssClientOptions, "internal" | "timeout" | "stsToken" | "bucket" | "endpoint" | "region" | "secure" | "cname" | "isRequestPay" | "useFetch">) => Promise<AliOssClient<any>>;
    private initFactory;
}

export default DefaultALiYunOssInitializer;
export { OakALiYunOssInitializerOptions, genUploadOssKey, resolveUploadResult };
