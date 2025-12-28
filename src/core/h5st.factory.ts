/**
 * File: h5st.factory.ts
 * Description: h5st 算法工厂
 * Author: zhx47
 */

import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { BaseH5st } from './h5st';
import { ClsService } from 'nestjs-cls';
import { Cache, CACHE_MANAGER } from 'nestjs-cache-manager-v6';
import { TokenFactory } from './token.factory';
import { CustomAlgorithm } from './algorithm';
import { H5stAlgoConfigCollection } from './h5st/config';

@Injectable()
export class H5stFactory {
  private instances = new Map<string, BaseH5st>();

  constructor(
    private readonly clsService: ClsService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly tokenFactory: TokenFactory,
    private readonly customAlgorithm: CustomAlgorithm,
    private readonly httpService: HttpService,
  ) {
    for (const [version, config] of Object.entries(H5stAlgoConfigCollection)) {
      this.instances.set(version, new BaseH5st(clsService, cacheManager, customAlgorithm, version, config, tokenFactory.getInstance(config.tokenVersion), httpService));
    }
  }

  getInstance(key: string): BaseH5st | undefined {
    return this.instances.get(key);
  }
}
