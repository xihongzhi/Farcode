export interface RequestBase {
    /**
     * 时间戳
     */
    TimesTamp?: any;
    /**
     * Mac
     */
    Mac?: string;
    /**
     * IP地址
     */
    Ip?: string;
    /**
     * 加密串
     */
    Sign?: string;
    /**
     * 版本号
     */
    Version?: string;
    /**
     * token值
     */
    // Token?: string;
    /**
     * 数据验证是否成功
     */
    IsValid?: boolean;

    MerchantId?:string;
}
/**
 * 数据加密实体
 */
export interface RequestEncryptionModel {
    /**
     * 商户code
     */
    MerchantId: string;
    /**
     * AES加密后的json数据
     */
    Data: string;
    /**
     * AESkey(证书加密后的)
     */
    EncryptKey: string;
}