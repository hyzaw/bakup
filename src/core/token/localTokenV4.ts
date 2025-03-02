/**
 * File: localTokenV4.ts
 * Description: localToken v4 算法
 * Author: zhx47
 */

import { ClsService } from 'nestjs-cls';
import { Injectable, Logger } from '@nestjs/common';
import { TokenBaseInfoType } from './type';
import { BaseLocalToken } from './baseLocalToken';
import { CustomAlgorithm } from '../algorithm';

@Injectable()
export class LocalTokenV4 extends BaseLocalToken {
  protected readonly logger = new Logger(LocalTokenV4.name);

  constructor(
    protected readonly clsService: ClsService,
    protected readonly algos: CustomAlgorithm,
  ) {
    super(clsService, algos);
  }

  tokenCipherEncrypt(tokenCipherPlain: string): string {
    return this.algos.enc.Base64.encode(this.algos.enc.Hex.parse(tokenCipherPlain));
  }

  generateTokenAdler32(tokenData: TokenBaseInfoType) {
    const checksum = tokenData.magic + tokenData.version + tokenData.platform + tokenData.expires + tokenData.producer + tokenData.expr + tokenData.cipher;
    return this.algos.MD5(checksum).toString(this.algos.enc.Hex).slice(0, 8);
  }

  generateChecksum(combinedBytes: Uint8Array): string {
    const wordArray = this.algos.enc.Utils.toWordArray(combinedBytes);
    return this.algos.MD5(wordArray).toString(this.algos.enc.Hex).slice(0, 8);
  }
}
