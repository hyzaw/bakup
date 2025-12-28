/**
 * File: req.dto.ts
 * Description: 请求的自定义格式
 * Author: zhx47
 */

import 'reflect-metadata';
import { Transform, Type } from 'class-transformer';
import { IsIn, IsJSON, IsNotEmpty, ValidateIf, ValidateNested } from 'class-validator';
import { ContainsChar } from '../../utils/baseUtils';
import { DebugParamsType, H5stSignParamsType } from '../../core';
import { DEFAULT_H5ST_VERION, SUPPORT_H5ST_VERION, SUPPORT_H5ST_VERION_STR } from '../../core/h5st/config';

/**
 * h5st 的业务信息，真正发送给京东的信息，这里只定义三个最常用的字段含义
 */
export class H5stBusinessBody implements H5stSignParamsType {
  @Type(() => String)
  functionId: string;

  @Type(() => String)
  appid: string;

  @ValidateIf((o: H5stBusinessBody) => o.body != null)
  @Transform(({ value }): string => (value && typeof value !== 'string' ? JSON.stringify(value) : decodeURIComponent(value as string)))
  @IsJSON({ message: 'body需为JSON字符串' })
  body: string;
}

/**
 * h5st 加签接口的报文
 */
export class H5stReqBody {
  @Type(() => String)
  @IsNotEmpty({ message: '版本不能为空' })
  @IsIn(SUPPORT_H5ST_VERION, { message: `无效的版本: ${SUPPORT_H5ST_VERION_STR}` })
  version = DEFAULT_H5ST_VERION;

  @Type(() => String)
  @ValidateIf((o: H5stReqBody) => o.version && !o.version.startsWith('xcx'))
  @IsNotEmpty({ message: '账号pin不能为空' })
  pin: string;

  @Type(() => String)
  @ValidateIf((o: H5stReqBody) => o.version && !o.version.startsWith('xcx'))
  @IsNotEmpty({ message: '用户ua不能为空' })
  ua: string;

  @ValidateNested()
  @Type(() => H5stBusinessBody)
  @IsNotEmpty({ message: '请确定body传递正确' })
  body: H5stBusinessBody;

  @Type(() => String)
  @Transform(({ value }): string => decodeURIComponent(value as string))
  @ValidateIf((o: H5stReqBody) => !!o.h5st)
  @ContainsChar(';', [7, 8, 9], { message: 'h5st非法' })
  h5st: string;

  @Type(() => String)
  @ValidateIf((o: H5stReqBody) => !o.h5st)
  @IsNotEmpty({ message: 'h5st 和 appId 不能同时为空' })
  appId: string;

  @Type(() => String)
  envStr: string;

  debug: boolean;

  debugParams: DebugParamsType;

  stk: string[] = ['functionId', 'appid', 'client', 'body', 'clientVersion', 'sign', 'r', 't', 'jsonp', 'seg_enc', 'verifytoken', 's_token', 'country_code', 'checkcode'];
}

export class SignReqBody {
  @Type(() => String)
  @IsNotEmpty({ message: 'functionId不能为空' })
  functionId: string;

  @Transform(({ value }): string => (value && typeof value !== 'string' ? JSON.stringify(value) : decodeURIComponent(value as string)))
  @IsNotEmpty({ message: 'body不能为空' })
  @IsJSON({ message: 'body需为JSON字符串' })
  body: string;

  @Type(() => String)
  client = 'android';

  @Type(() => String)
  clientVersion = '13.6.3';

  @Type(() => String)
  uuid: string;
}
