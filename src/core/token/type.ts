/**
 * File: type.ts
 * Description: token 通用类型
 * Author: zhx47
 */

/**
 * h5st token 类型
 */
export interface TokenBaseInfoType {
  magic: string;
  version: string;
  platform: string;
  expires: string;
  producer: string;
  expr: string;
  cipher: string;
  adler32: string;
}

export interface TokenCipherType {
  secret1?: string;
  prefix: string;
  secret2?: string;
  // tk05 新增，主要是从字典里面随机获取12位并将指定index替换成1当作secret1
  extend?: {
    dict: string;
    index: number;
    magic: string;
  };
}

export interface TokenType {
  baseInfo: TokenBaseInfoType;
  cipher: TokenCipherType;
}

export enum LocalTokenVersion {
  '03' = '03',
  '04' = '04',
  '05' = '05',
  '06' = '06',
}

export interface LocalTokenType {
  genLocalTK: (fp: string) => string;
}
