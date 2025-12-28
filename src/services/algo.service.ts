/**
 * File: algo.service.ts
 * Description: h5st 算法业务层，用于具体算法初始化和生成
 * Author: zhx47
 */

import { ClsService } from 'nestjs-cls';
import { Injectable } from '@nestjs/common';
import { H5stReqBody, SignReqBody } from '../controller/dto/req.dto';
import { H5stRes, SignRes } from '../controller/dto/res.dto';
import { generateEp, generateSign, H5stFactory } from '../core';
import { getRandomIDPro } from '../utils/baseUtils';
import { H5stInitConfig } from '../core/h5st/config';

@Injectable()
export class AlgoService {
  constructor(
    private readonly cls: ClsService,
    private readonly h5stFactory: H5stFactory,
  ) {}

  async getH5st(reqBody: H5stReqBody): Promise<H5stRes> {
    this.cls.set('h5stContext.userAgent', reqBody.ua);
    this.cls.set('h5stContext.pt_pin', reqBody.pin);
    this.cls.set('h5stContext.stk', reqBody.stk);

    const instance = this.h5stFactory.getInstance(reqBody.version);

    const h5st = reqBody.h5st;
    let config: H5stInitConfig,
      envSignStr = '';
    if (h5st) {
      const h5stVar = h5st.split(';');

      config = {
        appId: h5stVar[2],
        debug: reqBody.debug,
      };
      envSignStr = h5stVar[7];
    } else {
      config = {
        appId: reqBody.appId,
        debug: reqBody.debug,
      };
    }

    const signResult = await instance.sign(reqBody.body, config, envSignStr, reqBody.debugParams, reqBody.envStr);
    return new H5stRes(signResult, Object.assign(reqBody.body, { h5st: signResult.h5st }));
  }

  getSign(reqBody: SignReqBody): SignRes {
    const client = reqBody.client,
      clientVersion = reqBody.clientVersion,
      uuid = reqBody.uuid || getRandomIDPro({ size: 16, customDict: '0123456789abcdef' });

    const signResult = generateSign(reqBody.functionId, reqBody.body, uuid, client, clientVersion);
    return new SignRes({
      client: client,
      clientVersion: clientVersion,
      functionId: reqBody.functionId,
      body: reqBody.body,
      ef: '1',
      ep: generateEp(uuid),
      uuid: uuid,
      st: signResult.st,
      sv: signResult.sv,
      sign: signResult.sign,
    });
  }
}
