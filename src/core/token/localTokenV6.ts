/**
 * File: localTokenV5.ts
 * Description: localToken v6 算法
 * Author: zhx47
 */

import { ClsService } from 'nestjs-cls';
import { Injectable, Logger } from '@nestjs/common';
import { CustomAlgorithm } from '../algorithm';
import { LocalTokenV4 } from './localTokenV4';
import { getRandomIDPro } from '../../utils/baseUtils';

@Injectable()
export class LocalTokenV6 extends LocalTokenV4 {
  protected readonly logger = new Logger(LocalTokenV6.name);

  constructor(
    protected readonly clsService: ClsService,
    protected readonly algos: CustomAlgorithm,
  ) {
    super(clsService, algos);
  }

  extend() {
    const { dict, index, magic } = this.clsService.get('h5stContext.genLocalTK.cipher.extend');
    const secret1 = getRandomIDPro({
      size: 12,
      customDict: dict,
      index,
      magic,
    });
    this.clsService.set('h5stContext.genLocalTK.cipher.secret1', secret1);
  }
}
