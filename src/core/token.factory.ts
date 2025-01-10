/**
 * File: token.factory.ts
 * Description: localToken 算法工厂
 * Author: zhx47
 */

import { Inject, Injectable } from '@nestjs/common';
import { LocalTokenVersion, BaseLocalToken, LocalTokenV3, LocalTokenV4 } from './token';

@Injectable()
export class TokenFactory {
  private instances = new Map<LocalTokenVersion, BaseLocalToken>();

  constructor(
    @Inject(LocalTokenV3) private readonly localTokenV3: LocalTokenV3,
    @Inject(LocalTokenV4) private readonly localTokenV4: LocalTokenV4,
  ) {
    this.instances.set(LocalTokenVersion['03'], this.localTokenV3);
    this.instances.set(LocalTokenVersion['04'], this.localTokenV4);
  }

  getInstance(key: LocalTokenVersion): BaseLocalToken | undefined {
    return this.instances.get(key);
  }
}