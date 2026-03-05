/**
 * File: customAlgorithm.ts
 * Description: 京东加强算法
 * Author: zhx47
 */

import * as CryptoJS from 'crypto-js';
import { Injectable } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';
import { isNullOrUndefined } from '../../utils/baseUtils';
import { TransformMessageOptions } from './type';

interface Format {
  stringify(cipherParams: CryptoJS.lib.CipherParams): string;

  parse(str: string): CryptoJS.lib.CipherParams;
}

interface CipherOption {
  iv?: CryptoJS.lib.WordArray | undefined;
  format?: Format | undefined;

  [key: string]: any;
}

@Injectable()
export class CustomAlgorithm {
  constructor(protected readonly clsService: ClsService) {}

  AES = {
    encrypt: (message: CryptoJS.lib.WordArray | string, key: CryptoJS.lib.WordArray | string, cfg?: CipherOption): CryptoJS.lib.CipherParams => {
      if (typeof key === 'string') {
        if (this.clsService.get('h5stContext.customAlgorithm')?.keyReverse) {
          key = key.split('').reverse().join('');
        }
        key = this.enc.Utf8.parse(key);
      }
      return CryptoJS.AES.encrypt(this.addSalt(message), key, cfg);
    },
    decrypt: (ciphertext: CryptoJS.lib.CipherParams | string, key: CryptoJS.lib.WordArray | string, cfg?: CipherOption): CryptoJS.lib.WordArray => {
      if (typeof key === 'string') {
        if (this.clsService.get('h5stContext.customAlgorithm')?.keyReverse) {
          key = key.split('').reverse().join('');
        }
        key = this.enc.Utf8.parse(key);
      }
      return CryptoJS.AES.decrypt(ciphertext, key, cfg);
    },
  };

  enc = {
    ...CryptoJS.enc,
    Utils: {
      toWordArray: (array: Uint8Array | number[]): CryptoJS.lib.WordArray => {
        const words = [];
        for (let i = 0; i < array.length; i++) {
          words[i >>> 2] |= array[i] << (24 - (i % 4) * 8);
        }
        return CryptoJS.lib.WordArray.create(words, array.length);
      },
      fromWordArray: (wordArray: CryptoJS.lib.WordArray): Uint8Array => {
        const u8array = new Uint8Array(wordArray.sigBytes);
        for (let i = 0; i < wordArray.sigBytes; i++) {
          u8array[i] = (wordArray.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
        }
        return u8array;
      },
    },
    Hex: {
      ...CryptoJS.enc.Hex,
      stringify: (wordArray: CryptoJS.lib.WordArray): string => {
        const convertIndex = this.clsService.get('h5stContext.customAlgorithm')?.convertIndex?.hex;

        if (isNullOrUndefined(convertIndex)) {
          return CryptoJS.enc.Hex.stringify(wordArray);
        }

        const array = Array.from(this.enc.Utils.fromWordArray(wordArray));
        if (convertIndex > array.length) {
          wordArray = this.enc.Utils.toWordArray(array.reverse());
        } else {
          const reversedPart = array.slice(0, convertIndex).reverse();
          const remainingPart = array.slice(convertIndex);

          wordArray = this.enc.Utils.toWordArray(reversedPart.concat(remainingPart));
        }

        return CryptoJS.enc.Hex.stringify(wordArray);
      },
    },
    Base64: {
      ...CryptoJS.enc.Base64,
      stringify: (wordArray: CryptoJS.lib.WordArray): string => {
        if (this.clsService.get('h5stContext._version') < '5.3') {
          return CryptoJS.enc.Base64.stringify(wordArray);
        }

        const map = this.clsService.get('h5stContext.customAlgorithm')?.map ?? '';
        if (!map) {
          throw new Error('该版本算法未配置相关魔改参数');
        }

        const words = wordArray.words;
        const sigBytes = wordArray.sigBytes;
        wordArray.clamp();

        const base64Chars: string[] = [];
        for (let i = 0; i < sigBytes; i += 3) {
          const byte1 = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
          const byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
          const byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

          const triplet = (byte1 << 16) | (byte2 << 8) | byte3;
          for (let j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
            base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
          }
        }

        return base64Chars.join('');
      },
      parse: (base64Str: string): CryptoJS.lib.WordArray => {
        if (this.clsService.get('h5stContext._version') < '5.3') {
          return CryptoJS.enc.Base64.parse(base64Str);
        }

        const map = this.clsService.get('h5stContext.customAlgorithm')?.map ?? '';
        if (!map) {
          throw new Error('该版本算法未配置相关魔改参数');
        }

        const reverseMap: number[] = [];
        for (let j = 0; j < map.length; j++) {
          reverseMap[map.charCodeAt(j)] = j;
        }

        return this.parseLoop(base64Str, base64Str.length, reverseMap);
      },
      encode: (wordArray: CryptoJS.lib.WordArray): string => {
        const map = this.clsService.get('h5stContext.customAlgorithm')?.map ?? '';
        if (!map) {
          throw new Error('该版本算法未配置相关魔改参数');
        }
        const typedArray = this.enc.Utils.fromWordArray(wordArray);
        const normalArray = Array.from(typedArray);
        const number = normalArray.length % 3;
        for (let j = 0; j < 3 - number; j++) {
          normalArray.push(3 - number);
        }
        let sigBytes = normalArray.length;
        let words: number[] = [];
        for (let j = sigBytes; j > 0; j -= 3) {
          words.push(...normalArray.slice(Math.max(j - 3, 0), j));
        }
        wordArray = this.enc.Utils.toWordArray(words);
        words = wordArray.words;
        sigBytes = wordArray.sigBytes;
        wordArray.clamp();
        const base64Chars: string[] = [];
        for (let i = 0; i < sigBytes; i += 3) {
          const byte1 = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
          const byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
          const byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

          const triplet = (byte1 << 16) | (byte2 << 8) | byte3;

          for (let j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
            base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
          }
        }
        const result: string[] = [];
        // 每四个拆成一个小组，进行反序，然后拼接
        for (let i = 0; i < base64Chars.length; i += 4) {
          result.push(...base64Chars.slice(i, i + 4).reverse());
        }
        return result.join('');
      },
      decode: (base64Str: string): CryptoJS.lib.WordArray => {
        const map = this.clsService.get('h5stContext.customAlgorithm')?.map ?? '';
        if (!map) {
          throw new Error('该版本算法未配置相关魔改参数');
        }

        const base64Chars = base64Str.split('');
        const result = [];
        // 每四个拆成一个小组，进行反序，然后拼接
        for (let i = 0; i < base64Chars.length; i += 4) {
          result.push(...base64Chars.slice(i, i + 4).reverse());
        }
        base64Str = result.join('');

        let base64StrLength = base64Str.length;
        const reverseMap: number[] = [];
        for (let j = 0; j < map.length; j++) {
          reverseMap[map.charCodeAt(j)] = j;
        }

        const paddingChar = map.charAt(64);
        if (paddingChar) {
          const paddingIndex = base64Str.indexOf(paddingChar);
          if (paddingIndex !== -1) {
            base64StrLength = paddingIndex;
          }
        }
        const wordArray = this.parseLoop(base64Str, base64StrLength, reverseMap);

        const normalArray = Array.from(this.enc.Utils.fromWordArray(wordArray));
        const sigBytes = normalArray.length;
        const words: number[] = [];
        for (let j = sigBytes; j > 0; j -= 3) {
          words.push(...normalArray.slice(Math.max(j - 3, 0), j));
        }

        const lastElement = words[words.length - 1]; // 获取数组的最后一个元素, 这是我们预期要移除的元素数量
        // 检查数组末尾是否有count个相同的元素，并且这些元素的值都等于count
        let isValid = true;
        for (let i = 0; i < lastElement; i++) {
          if (words[words.length - 1 - i] !== lastElement) {
            isValid = false;
            break;
          }
        }
        // 如果末尾的元素满足条件，移除它们
        if (isValid) {
          words.splice(-lastElement, lastElement); // 移除数组末尾的count个元素
        }
        return this.enc.Utils.toWordArray(words);
      },
    },
  };

  lib = CryptoJS.lib;

  MD5(message: CryptoJS.lib.WordArray | string): CryptoJS.lib.WordArray {
    return CryptoJS.MD5(this.addSalt(message));
  }

  SHA256(message: CryptoJS.lib.WordArray | string): CryptoJS.lib.WordArray {
    return CryptoJS.SHA256(this.addSalt(message));
  }

  HmacSHA256(message: CryptoJS.lib.WordArray | string, key: CryptoJS.lib.WordArray | string): CryptoJS.lib.WordArray {
    return CryptoJS.HmacSHA256(this.addSalt(message, true), this.eKey(key));
  }

  addSalt(message: CryptoJS.lib.WordArray | string, isHmac?: boolean): CryptoJS.lib.WordArray | string {
    if (typeof message === 'string') {
      const transformMessageOptions = this.clsService.get('h5stContext.customAlgorithm')?.transformMessageOptions;
      if (transformMessageOptions) {
        message = this.transformMessage(message, transformMessageOptions);
        if (isHmac) {
          message = message.substring(0, message.length - 2);
          message = this.transformMessage(message, transformMessageOptions);
        }
      }
      const salt = this.clsService.get('h5stContext.customAlgorithm')?.salt ?? '';
      return message + salt;
    }
    return message;
  }

  eKey(key: CryptoJS.lib.WordArray | string): CryptoJS.lib.WordArray | string {
    if (typeof key === 'string') {
      const convertIndex = this.clsService.get('h5stContext.customAlgorithm')?.convertIndex?.hmac;

      if (isNullOrUndefined(convertIndex)) {
        return key;
      }

      const split = key.split('');
      const slice1 = split.slice(0, convertIndex);
      const slice2 = split.slice(convertIndex);
      const array = [];

      for (let i = Math.min(convertIndex, key.length); i > 0; i--) {
        const pop = slice1.pop();
        const number = pop.charCodeAt(0);
        if (this.clsService.get('h5stContext._version') < '5.3') {
          const s = String.fromCharCode(158 - number);
          array.push(s);
        } else {
          const s = String.fromCharCode((((number - 32) * 7 + 82) % 95) + 32);
          array.push(s);
        }
      }

      return array.concat(slice2).join('');
    }
    return key;
  }

  parseLoop(base64Str: string, base64StrLength: number, reverseMap: number[]) {
    const words = [];
    let nBytes = 0;
    for (let i = 0; i < base64StrLength; i++) {
      if (i % 4) {
        const bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
        const bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
        const bitsCombined = bits1 | bits2;
        words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
        nBytes++;
      }
    }
    return CryptoJS.lib.WordArray.create(words, nBytes);
  }

  transformMessage(plainText: string, options: TransformMessageOptions) {
    const { map, segments, multiplier } = options;

    const transformSegments = () => {
      const segmentLength = Math.floor(plainText.length / segments);

      return Array.from({ length: segments }, (_, i) => {
        const startIndex = i * segmentLength;
        const endIndex = i === segments - 1 ? plainText.length : startIndex + segmentLength;

        const segmentSum = plainText
          .slice(startIndex, endIndex)
          .split('')
          .reduce((sum, char) => sum + char.charCodeAt(0), 0);

        return map.charAt((segmentSum * multiplier) % 64);
      });
    };

    const transformedSegments = transformSegments();
    return plainText + transformedSegments.join('');
  }
}
