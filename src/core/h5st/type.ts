/**
 * File: type.ts
 * Description: h5st 加签算法通用类型
 * Author: zhx47
 */

import { TransformMessageOptions } from '../algorithm';
import { LocalTokenVersion, TokenType } from '../token';

/**
 * h5st 加签结果枚举
 */
export enum ErrCodes {
  // 参数错误
  UNSIGNABLE_PARAMS = 1,
  // 缺少验签ID
  APPID_ABSENT = 2,
}

export interface H5stAlgoContextType {
  /* 以下是每个线程的私有定义 */
  _debug: boolean;
  _isNormal: boolean;
  __genKey: (token: string, fingerprint: string, dateStrExtend: string, appId: string, algo: any) => CryptoJS.lib.WordArray;
  _storageTokenKey: string;
  _storageAlgoKey: string;
  _storageFpKey: string;
  _version: string;
  _appId: string;
  _fingerprint: string;
  _token: string;
  _defaultToken: string;
  envExtend?: EnvCollectType;
  fullEnvExtend?: EnvCollectType;
  userAgent: string;
  pt_pin: string;
  stk: string[];

  genLocalTK: TokenType;
  customAlgorithm: CustomAlgorithmType;
}

export interface defaultAlgorithmType {
  local_key_1: typeof CryptoJS.MD5;
  local_key_2: typeof CryptoJS.SHA256;
  local_key_3: typeof CryptoJS.HmacSHA256;
}

export interface VisitKeyType {
  seed: string;
  selectLength: number;
  randomLength: number;
  convertLength: number;
}

export interface CustomAlgorithmType {
  salt?: string;
  map?: string;
  keyReverse?: boolean;
  convertIndex?: {
    hmac?: number;
    hex?: number;
  };
  transformMessageOptions?: TransformMessageOptions;
}

/**
 * h5st 算法参数类型
 */
export interface H5stAlgoConfigType {
  genSignDefault?: boolean;
  genSignDefaultStr?: string;
  genSignStk?: boolean;
  tokenVersion: LocalTokenVersion;
  signAlgorithmType: SignAlgorithmType;
  version: string;
  env: {
    secret?: string;
    bu1?: string;
    fv?: string;
    randomLength: number;
    extendRandomLength?: number;
  };
  visitKey: VisitKeyType;
  defaultKey: {
    extend: string;
  };
  makeSign: {
    extendDateStr: string;
    offset?: number;
  };
  genLocalTK: TokenType;
  customAlgorithm?: CustomAlgorithmType;
}

/**
 * h5st env 类型
 */
export interface EnvCollectType {
  pp?: EnvPpType;
  extend?: EnvExtendType;
  random: string;
  sua?: string;
  v?: string;
  fp?: string;
  wc?: string | number;
  wd?: string | number;
  l?: string | number;
  ls?: string | number;
  ml?: string | number;
  pl?: string | number;
  av?: string | number;
  ua?: string | number;
  w?: string | number;
  h?: string | number;
  ow?: string | number;
  oh?: string | number;
  url?: string | number;
  og?: string | number;
  pf?: string | number;
  bu1?: string | number;
  bu2?: string | number;
  bu3?: string | number;
  bu4?: string | number;
  canvas?: string;
  canvas1?: string;
  webglFp?: string;
  webglFp1?: string;
  ccn?: string | number;
  ai?: string | number;
  pr?: string | number;
  re?: string | number;
  referer?: string | number;
  pp1?: string | number;
  wk?: string | number;
}

export interface EnvPpType {
  p1?: string;
  p2?: string;
}

/**
 * h5st env extend 类型
 */
export interface EnvExtendType {
  bu1?: string | number;
  bu2?: string | number;
  bu3?: string | number;
  bu4?: string | number;
  bu5?: string | number;
  bu6?: string | number;
  bu7?: string | number;
  bu8?: string | number;
  bu9?: string | number;
  bu10?: string | number;
  bu11?: string | number;
  bu12?: string | number;
  bu13?: string | number;
  l?: string | number;
  ls?: string | number;
  wd?: string | number;
  wk?: string | number;
  pm?: string | number;
  random?: string;
}

export enum SignAlgorithmType {
  MD5_WRAP = 'MD5_WRAP', // MD5(`${key}${paramsStr}${key}`)
  SHA256_WRAP = 'SHA256_WRAP', // SHA256(`${key}${paramsStr}${key}`)
  HMAC_SHA256_WRAP = 'HMAC_SHA256_WRAP', // HmacSHA256(paramsStr, key)
}

/**
 * h5st 参与加签的业务参数
 */
export interface H5stSignParamsType {
  functionId?: string;
  appid?: string;
  client?: string;
  body?: string;
  clientVersion?: string;
  sign?: string;
  t?: string;
  jsonp?: string;
}

/**
 * 一个 K-V 的类型
 */
export interface KVType {
  key: string;
  value?: string;
}

export interface H5stSignResultType {
  _stk?: string;
  _ste?: number;
  h5st?: string;
}

export interface SignResultType {
  client: string;
  clientVersion: string;
  functionId: string;
  body: string;
  ef: string;
  ep: string;
  uuid: string;
  st: number;
  sv: string;
  sign: string;
}

export interface DebugParamsType {
  timestamp: number;
  fingerprint: string;
  token: string;
  env: EnvCollectType;
  fullEnv: EnvCollectType;
}

/**
 * request_algo 接口响应类型
 */
export interface AlgoResultType {
  tk: string;
  fp: string;
  algo: string;
}

export interface AlgoResponseDataType {
  version: string;
  result: AlgoResultType;
  rConfig: Record<string, unknown>;
  ts: number;
}

export interface AlgoResponseType {
  status: number;
  message: string;
  data: AlgoResponseDataType;
}
