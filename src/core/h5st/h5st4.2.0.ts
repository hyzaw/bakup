/**
 * File: h5st4.2.0.ts
 * Description: h5st4.2.0 算法
 * Author: zhx47
 */

import { ClsService } from 'nestjs-cls';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cache, CACHE_MANAGER } from 'nestjs-cache-manager-v6';
import { BaseH5st } from './baseH5st';
import { H5stVersion, KVType } from './type';
import { H5stAlgoConfigCollection, H5stInitConfig } from './config';
import { CustomAlgorithm } from '../algorithm';
import { LocalTokenVersion } from '../token';
import { TokenFactory } from '../token.factory';

@Injectable()
export class H5st420 extends BaseH5st {
  protected readonly logger = new Logger(H5st420.name);

  constructor(
    protected readonly clsService: ClsService,
    @Inject(CACHE_MANAGER) protected readonly cacheManager: Cache,
    protected readonly tokenFactory: TokenFactory,
    protected readonly customAlgorithm: CustomAlgorithm,
  ) {
    super(clsService, cacheManager, tokenFactory.getInstance(LocalTokenVersion['03']), customAlgorithm);
  }

  init(h5stInitConfig: H5stInitConfig) {
    super.init(h5stInitConfig, H5stAlgoConfigCollection[H5stVersion['4.2.0']]);
  }

  __genSign(key: string, body: KVType[]): string {
    const paramsStr = super.__genSign(key, body);
    const signedStr = this.algos.SHA256(`${key}${paramsStr}${key}`).toString(this.algos.enc.Hex);
    this._log(`__genSign, paramsStr:${paramsStr}, signedStr:${signedStr}`);
    return signedStr;
  }
}
