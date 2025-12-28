/**
 * File: config.ts
 * Description: h5st 加签算法参数配置
 * Author: zhx47
 */

import { H5stAlgoConfigType, SignAlgorithmType, VisitKeyType } from './type';
import { LocalTokenVersion, TokenBaseInfoType } from '../token';

// 默认的 h5st 配置，不打印调试参数
export class H5stInitConfig {
  debug?: boolean = false;
  appId: string;
}

// 各个版本的 fp 参数
class H5st31VisitKey implements VisitKeyType {
  seed = '0123456789';
  selectLength = 3;
  randomLength = 12;
  convertLength = 0;
}

class H5st41VisitKey implements VisitKeyType {
  seed = 'uct6d0jhqw';
  selectLength = 6;
  randomLength = 9;
  convertLength = 14;
}

class H5st42VisitKey implements VisitKeyType {
  seed = '6d0jhqw3pa';
  selectLength = 4;
  randomLength = 11;
  convertLength = 14;
}

class H5st43VisitKey implements VisitKeyType {
  seed = 'kl9i1uct6d';
  selectLength = 3;
  randomLength = 12;
  convertLength = 10;
}

class H5st44VisitKey implements VisitKeyType {
  seed = '1uct6d0jhq';
  selectLength = 4;
  randomLength = 11;
  convertLength = 8;
}

class H5st47VisitKey implements VisitKeyType {
  seed = '1uct6d0jhq';
  selectLength = 5;
  randomLength = 10;
  convertLength = 15;
}

class H5st48VisitKey implements VisitKeyType {
  seed = '2mn87xbyof';
  selectLength = 6;
  randomLength = 9;
  convertLength = 14;
}

class H5st49VisitKey implements VisitKeyType {
  seed = 'z4rekl9i1u';
  selectLength = 4;
  randomLength = 11;
  convertLength = 8;
}

class H5st50VisitKey implements VisitKeyType {
  seed = 'qw3pa2mn87';
  selectLength = 5;
  randomLength = 10;
  convertLength = 14;
}

class H5st51VisitKey implements VisitKeyType {
  seed = '0jhqw3pa2m';
  selectLength = 3;
  randomLength = 12;
  convertLength = 9;
}

class H5st52VisitKey implements VisitKeyType {
  seed = 't6d0jhqw3p';
  selectLength = 4;
  randomLength = 11;
  convertLength = 9;
}

const h5st31VisitKey = new H5st31VisitKey();
const h5st41VisitKey = new H5st41VisitKey();
const h5st42VisitKey = new H5st42VisitKey();
const h5st43VisitKey = new H5st43VisitKey();
const h5st44VisitKey = new H5st44VisitKey();
const h5st47VisitKey = new H5st47VisitKey();
const h5st48VisitKey = new H5st48VisitKey();
const h5st49VisitKey = new H5st49VisitKey();
const h5st50VisitKey = new H5st50VisitKey();
const h5st51VisitKey = new H5st51VisitKey();
const h5st52VisitKey = new H5st52VisitKey();

// 各个版本 token 参数
class BaseTokenBaseInfo implements TokenBaseInfoType {
  magic = 'tk';
  version = '';
  platform = '';
  expires = '41';
  producer = 'l';
  expr = '';
  cipher = '';
  adler32 = '';
}

class Normal02TokenBaseInfo extends BaseTokenBaseInfo {
  version = '02';
  platform = 'w';
}

class Normal03TokenBaseInfo extends BaseTokenBaseInfo {
  version = '03';
  platform = 'w';
}

class Normal04TokenBaseInfo extends BaseTokenBaseInfo {
  version = '04';
  platform = 'w';
}

class Normal05TokenBaseInfo extends BaseTokenBaseInfo {
  version = '05';
  platform = 'w';
}

class Xcx02TokenBaseInfo extends BaseTokenBaseInfo {
  version = '02';
  platform = 'a';
}

class Xcx03TokenBaseInfo extends BaseTokenBaseInfo {
  version = '03';
  platform = 'a';
}

class Xcx04TokenBaseInfo extends BaseTokenBaseInfo {
  version = '04';
  platform = 'a';
}

const normal02TokenBaseInfo = new Normal02TokenBaseInfo();
const normal03TokenBaseInfo = new Normal03TokenBaseInfo();
const normal04TokenBaseInfo = new Normal04TokenBaseInfo();
const normal05TokenBaseInfo = new Normal05TokenBaseInfo();
const xcx02TokenBaseInfo = new Xcx02TokenBaseInfo();
const xcx03TokenBaseInfo = new Xcx03TokenBaseInfo();
const xcx04TokenBaseInfo = new Xcx04TokenBaseInfo();

// 各个版本 h5st 参数
class H5st310AlgoConfig implements H5stAlgoConfigType {
  version = '3.1';
  tokenVersion = LocalTokenVersion['03'];
  signAlgorithmType = SignAlgorithmType.HMAC_SHA256_WRAP;
  env = {
    secret: 'wm0!@w_s#ll1flo(',
    randomLength: 10,
  };
  visitKey = h5st31VisitKey;
  defaultKey = {
    extend: '',
  };
  makeSign = {
    extendDateStr: '',
  };
  genLocalTK = {
    baseInfo: normal02TokenBaseInfo,
    cipher: {
      prefix: 'xx',
      secret2: 'dp0!@w_s#ll0flo(',
    },
  };
}

class H5st410AlgoConfig implements H5stAlgoConfigType {
  version = '4.1';
  tokenVersion = LocalTokenVersion['03'];
  signAlgorithmType = SignAlgorithmType.MD5_WRAP;
  env = {
    secret: 'HL4|FW#Chc3#q?0)',
    fv: 'v0.1.6',
    randomLength: 10,
  };
  visitKey = h5st41VisitKey;
  defaultKey = {
    extend: '2475%+',
  };
  makeSign = {
    extendDateStr: '04',
  };
  genLocalTK = {
    baseInfo: normal02TokenBaseInfo,
    cipher: {
      secret1: '3+1&G!q2t7n5',
      prefix: '55',
      secret2: '8)[CJ?.rW0Bs2(89',
    },
  };
}

class H5st420AlgoConfig implements H5stAlgoConfigType {
  version = '4.2';
  tokenVersion = LocalTokenVersion['03'];
  signAlgorithmType = SignAlgorithmType.SHA256_WRAP;
  env = {
    secret: 'DNiHi703B0&17hh1',
    bu1: '0.1.9',
    fv: 'h5_file_v4.2.0',
    randomLength: 10,
  };
  visitKey = h5st42VisitKey;
  defaultKey = {
    extend: '9>5*t5',
  };
  makeSign = {
    extendDateStr: '74',
  };
  genLocalTK = {
    baseInfo: normal02TokenBaseInfo,
    cipher: {
      secret1: 'qem7+)g%Dhw5',
      prefix: 'z7',
      secret2: 'x6e@RoHi$Fgy7!5k',
    },
  };
}

class H5st431AlgoConfig implements H5stAlgoConfigType {
  version = '4.3';
  tokenVersion = LocalTokenVersion['03'];
  signAlgorithmType = SignAlgorithmType.HMAC_SHA256_WRAP;
  env = {
    secret: '&d74&yWoV.EYbWbZ',
    bu1: '0.1.7',
    fv: 'h5_file_v4.3.1',
    randomLength: 10,
  };
  visitKey = h5st43VisitKey;
  defaultKey = {
    extend: 'Z=<J_2',
  };
  makeSign = {
    extendDateStr: '22',
  };
  genLocalTK = {
    baseInfo: normal02TokenBaseInfo,
    cipher: {
      secret1: '+WzD<U36rlTf',
      prefix: '0J',
      secret2: 'ML0Qq&DS81pP/an@',
    },
  };
}

class H5st433AlgoConfig implements H5stAlgoConfigType {
  version = '4.3';
  tokenVersion = LocalTokenVersion['03'];
  signAlgorithmType = SignAlgorithmType.HMAC_SHA256_WRAP;
  env = {
    secret: '&d74&yWoV.EYbWbZ',
    bu1: '0.1.7',
    fv: 'h5_file_v4.3.3',
    randomLength: 10,
  };
  visitKey = h5st43VisitKey;
  defaultKey = {
    extend: 'Z=<J_2',
  };
  makeSign = {
    extendDateStr: '22',
  };
  genLocalTK = {
    baseInfo: normal02TokenBaseInfo,
    cipher: {
      secret1: '+WzD<U36rlTf',
      prefix: '0J',
      secret2: 'ML0Qq&DS81pP/an@',
    },
  };
}

class H5st440AlgoConfig implements H5stAlgoConfigType {
  version = '4.4';
  tokenVersion = LocalTokenVersion['03'];
  signAlgorithmType = SignAlgorithmType.MD5_WRAP;
  env = {
    secret: 'r1T.6Vinpb.k+/a)',
    fv: 'v_lite_f_4.4.0',
    randomLength: 12,
  };
  visitKey = h5st44VisitKey;
  defaultKey = {
    extend: 'qV!+A!',
  };
  makeSign = {
    extendDateStr: '88',
  };
  genLocalTK = {
    baseInfo: normal02TokenBaseInfo,
    cipher: {
      secret1: 'HiO81-Ei89DH',
      prefix: '(>',
      secret2: 'eHL4|FW#Chc3#q?0',
    },
  };
}

class H5st471AlgoConfig implements H5stAlgoConfigType {
  version = '4.7';
  tokenVersion = LocalTokenVersion['03'];
  signAlgorithmType = SignAlgorithmType.SHA256_WRAP;
  env = {
    secret: '_M6Y?dvfN40VMF[X',
    bu1: '0.1.5',
    fv: 'h5_file_v4.7.1',
    randomLength: 12,
  };
  visitKey = h5st47VisitKey;
  defaultKey = {
    extend: 'hh1BNE',
  };
  makeSign = {
    extendDateStr: '97',
  };
  genLocalTK = {
    baseInfo: normal03TokenBaseInfo,
    cipher: {
      secret1: '8[8I[]d?960w',
      prefix: 'cw',
      secret2: 'XsiRvI<7|NC-1g5X',
    },
  };
  customAlgorithm = {
    salt: '23k@X!',
    map: 'WVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYX',
    keyReverse: true,
    convertIndex: {
      hmac: 16,
    },
  };
}

class H5st472AlgoConfig implements H5stAlgoConfigType {
  version = '4.7';
  tokenVersion = LocalTokenVersion['03'];
  signAlgorithmType = SignAlgorithmType.HMAC_SHA256_WRAP;
  env = {
    secret: '_M6Y?dvfN40VMF[X',
    bu1: '0.1.5',
    fv: 'h5_file_v4.7.2',
    randomLength: 12,
  };
  visitKey = h5st47VisitKey;
  defaultKey = {
    extend: '87n8!-',
  };
  makeSign = {
    extendDateStr: '07',
  };
  genLocalTK = {
    baseInfo: normal03TokenBaseInfo,
    cipher: {
      secret1: 'K3rOqML0Qq&D',
      prefix: 'C2',
      secret2: '=F)?n7@]OFX62bT5',
    },
  };
  customAlgorithm = {
    salt: 'JdM3|5',
    map: 'WVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYX',
    keyReverse: true,
    convertIndex: {
      hmac: 7,
    },
  };
}

class H5st473AlgoConfig implements H5stAlgoConfigType {
  version = '4.7';
  tokenVersion = LocalTokenVersion['03'];
  signAlgorithmType = SignAlgorithmType.HMAC_SHA256_WRAP;
  env = {
    secret: '_M6Y?dvfN40VMF[X',
    bu1: '0.1.5',
    fv: 'h5_file_v4.7.3',
    randomLength: 12,
  };
  visitKey = h5st47VisitKey;
  defaultKey = {
    extend: 'kEjxS-',
  };
  makeSign = {
    extendDateStr: '78',
  };
  genLocalTK = {
    baseInfo: normal03TokenBaseInfo,
    cipher: {
      secret1: 'A._/XV*bOm%!',
      prefix: 'dl',
      secret2: 'qV!+A!tmuU#Z7/2_',
    },
  };
  customAlgorithm = {
    salt: '=LN6GO',
    map: 'WVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYX',
    keyReverse: true,
    convertIndex: {
      hmac: 3,
    },
  };
}

class H5st474AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['03'];
  signAlgorithmType = SignAlgorithmType.MD5_WRAP;
  version = '4.7';
  env = {
    secret: '_M6Y?dvfN40VMF[X',
    bu1: '0.1.5',
    fv: 'h5_file_v4.7.4',
    randomLength: 11,
  };
  visitKey = h5st47VisitKey;
  defaultKey = {
    extend: 'Mp(2C1',
  };
  makeSign = {
    extendDateStr: '47',
  };
  genLocalTK = {
    baseInfo: normal03TokenBaseInfo,
    cipher: {
      secret1: '4*iK&33Z|+6)',
      prefix: 'FX',
      secret2: 'zR>U5mz40W99&8sg',
    },
  };
  customAlgorithm = {
    salt: '7n5<G*',
    map: 'WVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYX',
    keyReverse: true,
    convertIndex: {
      hmac: 5,
    },
  };
}

class H5st481AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['04'];
  signAlgorithmType = SignAlgorithmType.SHA256_WRAP;
  version = '4.8';
  env = {
    fv: 'h5_file_v4.8.1',
    randomLength: 11,
  };
  visitKey = h5st48VisitKey;
  defaultKey = {
    extend: 'JdM3|5',
  };
  makeSign = {
    extendDateStr: '36',
  };
  genLocalTK = {
    baseInfo: normal04TokenBaseInfo,
    cipher: {
      secret1: 'DbIAgz71j04v',
      prefix: 'mT',
    },
  };
  customAlgorithm = {
    salt: '7hh1BN',
    map: 'WVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYX',
    convertIndex: {
      hex: 6,
      hmac: 5,
    },
  };
}

class H5st482AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['04'];
  signAlgorithmType = SignAlgorithmType.MD5_WRAP;
  version = '4.8';
  env = {
    fv: 'h5_file_v4.8.2',
    randomLength: 11,
  };
  visitKey = h5st48VisitKey;
  defaultKey = {
    extend: '0?6i#p',
  };
  makeSign = {
    extendDateStr: '84',
  };
  genLocalTK = {
    baseInfo: normal04TokenBaseInfo,
    cipher: {
      secret1: '=9CM=q#Qr6-8',
      prefix: 'Dv',
    },
  };
  customAlgorithm = {
    salt: 'Cp.jbF',
    map: 'WVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYX',
    convertIndex: {
      hex: 4,
      hmac: 14,
    },
  };
}

class H5st491AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['04'];
  signAlgorithmType = SignAlgorithmType.MD5_WRAP;
  version = '4.9';
  env = {
    fv: 'h5_file_v4.9.1',
    randomLength: 12,
  };
  visitKey = h5st49VisitKey;
  defaultKey = {
    extend: 'SDV&6(',
  };
  makeSign = {
    extendDateStr: '07',
  };
  genLocalTK = {
    baseInfo: normal04TokenBaseInfo,
    cipher: {
      secret1: 'qodOHbSV1ik2',
      prefix: 'ba',
    },
  };
  customAlgorithm = {
    salt: 'x38rG0',
    map: 'rqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvuts',
    convertIndex: {
      hex: 6,
      hmac: 9,
    },
  };
}

class H5st492AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['04'];
  signAlgorithmType = SignAlgorithmType.MD5_WRAP;
  version = '4.9';
  env = {
    fv: 'h5_file_v4.9.2',
    randomLength: 12,
  };
  visitKey = h5st49VisitKey;
  defaultKey = {
    extend: '/Xi]Ti',
  };
  makeSign = {
    extendDateStr: '89',
  };
  genLocalTK = {
    baseInfo: normal04TokenBaseInfo,
    cipher: {
      secret1: 'Tr0tY-F*crDf',
      prefix: 'id',
    },
  };
  customAlgorithm = {
    salt: '8I8)[C',
    map: 'rqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvuts',
    convertIndex: {
      hex: 5,
      hmac: 14,
    },
  };
}

class H5st493AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['04'];
  signAlgorithmType = SignAlgorithmType.SHA256_WRAP;
  version = '4.9';
  env = {
    fv: 'h5_file_v4.9.3',
    randomLength: 12,
  };
  visitKey = h5st49VisitKey;
  defaultKey = {
    extend: 'pTQEqV',
  };
  makeSign = {
    extendDateStr: '77',
  };
  genLocalTK = {
    baseInfo: normal04TokenBaseInfo,
    cipher: {
      secret1: 'UnHWNe%n]ro/',
      prefix: 'R,',
    },
  };
  customAlgorithm = {
    salt: '83qem7',
    map: 'rqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvuts',
    convertIndex: {
      hex: 3,
      hmac: 14,
    },
  };
}

class H5st494AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['04'];
  signAlgorithmType = SignAlgorithmType.HMAC_SHA256_WRAP;
  version = '4.9';
  env = {
    fv: 'h5_file_v4.9.4',
    randomLength: 12,
  };
  visitKey = h5st49VisitKey;
  defaultKey = {
    extend: 'A!2|cP',
  };
  makeSign = {
    extendDateStr: '28',
  };
  genLocalTK = {
    baseInfo: normal04TokenBaseInfo,
    cipher: {
      secret1: 'cVH1SHb$xuK+',
      prefix: 'c%',
    },
  };
  customAlgorithm = {
    salt: 'Z7/2_7',
    map: 'rqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvuts',
    convertIndex: {
      hex: 1,
      hmac: 13,
    },
  };
}

class H5st495AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['04'];
  signAlgorithmType = SignAlgorithmType.SHA256_WRAP;
  version = '4.9';
  env = {
    fv: 'h5_file_v4.9.5',
    randomLength: 12,
  };
  visitKey = h5st49VisitKey;
  defaultKey = {
    extend: 'b7mP0d',
  };
  makeSign = {
    extendDateStr: '69',
  };
  genLocalTK = {
    baseInfo: normal04TokenBaseInfo,
    cipher: {
      secret1: '74.jqb8960t7',
      prefix: '&]',
    },
  };
  customAlgorithm = {
    salt: 'BTR(2K',
    map: 'rqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvuts',
    convertIndex: {
      hex: 9,
      hmac: 1,
    },
  };
}

class H5st496AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['04'];
  signAlgorithmType = SignAlgorithmType.SHA256_WRAP;
  version = '4.9';
  env = {
    fv: 'h5_file_v4.9.6',
    randomLength: 12,
  };
  visitKey = h5st49VisitKey;
  defaultKey = {
    extend: 'q00?6i',
  };
  makeSign = {
    extendDateStr: '08',
  };
  genLocalTK = {
    baseInfo: normal04TokenBaseInfo,
    cipher: {
      secret1: '3L%G6Oz1LeTY',
      prefix: '2F',
    },
  };
  customAlgorithm = {
    salt: 'd74&yW',
    map: 'rqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvuts',
    convertIndex: {
      hex: 0,
      hmac: 9,
    },
  };
}

class H5st497AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['04'];
  signAlgorithmType = SignAlgorithmType.MD5_WRAP;
  version = '4.9';
  env = {
    fv: 'h5_file_v4.9.7',
    randomLength: 12,
  };
  visitKey = h5st49VisitKey;
  defaultKey = {
    extend: ']d?960',
  };
  makeSign = {
    extendDateStr: '88',
  };
  genLocalTK = {
    baseInfo: normal04TokenBaseInfo,
    cipher: {
      secret1: 'RvI<7|NC-1g5',
      prefix: '89',
    },
  };
  customAlgorithm = {
    salt: 'IQz9WS',
    map: 'rqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvuts',
    convertIndex: {
      hex: 3,
      hmac: 1,
    },
  };
}

class H5st500AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['04'];
  signAlgorithmType = SignAlgorithmType.HMAC_SHA256_WRAP;
  version = '5.0';
  env = {
    fv: 'h5_file_v5.0.0',
    randomLength: 12,
  };
  visitKey = h5st50VisitKey;
  defaultKey = {
    extend: 'tO(X0Y',
  };
  makeSign = {
    extendDateStr: '76',
  };
  genLocalTK = {
    baseInfo: normal04TokenBaseInfo,
    cipher: {
      secret1: '/#RfL268b74U',
      prefix: 'Z*',
    },
  };
  customAlgorithm = {
    salt: 'zI6fJ>',
    map: 'ZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcba',
    convertIndex: {
      hex: 2,
      hmac: 3,
    },
    transformMessageOptions: {
      map: 'kjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponml',
      segments: 13,
      multiplier: 29,
    },
  };
}

class H5st501AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['04'];
  signAlgorithmType = SignAlgorithmType.HMAC_SHA256_WRAP;
  version = '5.0';
  env = {
    fv: 'h5_file_v5.0.1',
    randomLength: 13,
  };
  visitKey = h5st50VisitKey;
  defaultKey = {
    extend: '7wcba&',
  };
  makeSign = {
    extendDateStr: '36',
  };
  genLocalTK = {
    baseInfo: normal04TokenBaseInfo,
    cipher: {
      secret1: '=9pStUH7B64/',
      prefix: 'm2',
    },
  };
  customAlgorithm = {
    salt: 'rxn&50',
    map: 'ZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcba',
    convertIndex: {
      hex: 4,
      hmac: 4,
    },
    transformMessageOptions: {
      map: 'baZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedc',
      segments: 4,
      multiplier: 18,
    },
  };
}

class H5st502AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['04'];
  signAlgorithmType = SignAlgorithmType.HMAC_SHA256_WRAP;
  version = '5.0';
  env = {
    fv: 'h5_file_v5.0.2',
    randomLength: 10,
  };
  visitKey = h5st50VisitKey;
  defaultKey = {
    extend: '21pyb9',
  };
  makeSign = {
    extendDateStr: '46',
  };
  genLocalTK = {
    baseInfo: normal04TokenBaseInfo,
    cipher: {
      secret1: 'c(8?@!FJDNiH',
      prefix: '=6',
    },
  };
  customAlgorithm = {
    salt: '$SM04X',
    map: 'ZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcba',
    convertIndex: {
      hex: 0,
      hmac: 12,
    },
    transformMessageOptions: {
      map: 'RQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYXWVUTS',
      segments: 5,
      multiplier: 24,
    },
  };
}

class H5st503AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['04'];
  signAlgorithmType = SignAlgorithmType.MD5_WRAP;
  version = '5.0';
  env = {
    fv: 'h5_file_v5.0.3',
    randomLength: 10,
  };
  visitKey = h5st50VisitKey;
  defaultKey = {
    extend: 'q%@S95',
  };
  makeSign = {
    extendDateStr: '72',
  };
  genLocalTK = {
    baseInfo: normal04TokenBaseInfo,
    cipher: {
      secret1: 'R(2Kiv@u.M2U',
      prefix: 'Un',
    },
  };
  customAlgorithm = {
    salt: 'fJ>pil',
    map: 'ZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcba',
    convertIndex: {
      hex: 6,
      hmac: 4,
    },
    transformMessageOptions: {
      map: 'jihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlk',
      segments: 4,
      multiplier: 6,
    },
  };
}

class H5st504AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['04'];
  signAlgorithmType = SignAlgorithmType.MD5_WRAP;
  version = '5.0';
  env = {
    fv: 'h5_file_v5.0.4',
    randomLength: 11,
  };
  visitKey = h5st50VisitKey;
  defaultKey = {
    extend: '#Qr6-8',
  };
  makeSign = {
    extendDateStr: '69',
  };
  genLocalTK = {
    baseInfo: normal04TokenBaseInfo,
    cipher: {
      secret1: '%Io1mj_wq%@S',
      prefix: 'U=',
    },
  };
  customAlgorithm = {
    salt: 'D8<NCk',
    map: 'ZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcba',
    convertIndex: {
      hex: 7,
      hmac: 6,
    },
    transformMessageOptions: {
      map: 'dcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfe',
      segments: 6,
      multiplier: 25,
    },
  };
}

class H5st505AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['04'];
  signAlgorithmType = SignAlgorithmType.SHA256_WRAP;
  version = '5.0';
  env = {
    fv: 'h5_file_v5.0.5',
    randomLength: 9,
  };
  visitKey = h5st50VisitKey;
  defaultKey = {
    extend: 'dU0jS0',
  };
  makeSign = {
    extendDateStr: '60',
  };
  genLocalTK = {
    baseInfo: normal04TokenBaseInfo,
    cipher: {
      secret1: '&|@K3rOqML0Q',
      prefix: 'LE',
    },
  };
  customAlgorithm = {
    salt: '5Wk3$6',
    map: 'ZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcba',
    convertIndex: {
      hex: 0,
      hmac: 5,
    },
    transformMessageOptions: {
      map: 'cbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfed',
      segments: 7,
      multiplier: 6,
    },
  };
}

class H5st506AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['04'];
  signAlgorithmType = SignAlgorithmType.SHA256_WRAP;
  version = '5.0';
  env = {
    fv: 'h5_file_v5.0.6',
    randomLength: 12,
  };
  visitKey = h5st50VisitKey;
  defaultKey = {
    extend: 'crDf.u',
  };
  makeSign = {
    extendDateStr: '22',
  };
  genLocalTK = {
    baseInfo: normal04TokenBaseInfo,
    cipher: {
      secret1: 'DbIAgz71j04v',
      prefix: 'nJ',
    },
  };
  customAlgorithm = {
    salt: 'R]dev/',
    map: 'ZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcba',
    convertIndex: {
      hex: 5,
      hmac: 7,
    },
    transformMessageOptions: {
      map: 'ZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcba',
      segments: 7,
      multiplier: 6,
    },
  };
}

class H5st507AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['04'];
  signAlgorithmType = SignAlgorithmType.SHA256_WRAP;
  version = '5.0';
  env = {
    fv: 'h5_file_v5.0.7',
    randomLength: 9,
  };
  visitKey = h5st50VisitKey;
  defaultKey = {
    extend: '[8I[]d',
  };
  makeSign = {
    extendDateStr: '36',
  };
  genLocalTK = {
    baseInfo: normal04TokenBaseInfo,
    cipher: {
      secret1: 'yb9jU671lO85',
      prefix: '4K',
    },
  };
  customAlgorithm = {
    salt: '0Y1/Mv',
    map: 'ZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcba',
    convertIndex: {
      hex: 1,
      hmac: 15,
    },
    transformMessageOptions: {
      map: 'XWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZY',
      segments: 6,
      multiplier: 5,
    },
  };
}

class H5st508AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['04'];
  signAlgorithmType = SignAlgorithmType.SHA256_WRAP;
  version = '5.0';
  env = {
    fv: 'h5_file_v5.0.8',
    randomLength: 11,
  };
  visitKey = h5st50VisitKey;
  defaultKey = {
    extend: '+6)]v$',
  };
  makeSign = {
    extendDateStr: '61',
  };
  genLocalTK = {
    baseInfo: normal04TokenBaseInfo,
    cipher: {
      secret1: 'Ue<d1?SPKw5H',
      prefix: 'SV',
    },
  };
  customAlgorithm = {
    salt: 'A5fAU=',
    map: 'ZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcba',
    convertIndex: {
      hex: 1,
      hmac: 3,
    },
    transformMessageOptions: {
      map: 'jihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlk',
      segments: 4,
      multiplier: 22,
    },
  };
}

class H5st509AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['04'];
  signAlgorithmType = SignAlgorithmType.SHA256_WRAP;
  version = '5.0';
  env = {
    fv: 'h5_file_v5.0.9',
    randomLength: 9,
  };
  visitKey = h5st50VisitKey;
  defaultKey = {
    extend: '7/*24R',
  };
  makeSign = {
    extendDateStr: '49',
  };
  genLocalTK = {
    baseInfo: normal04TokenBaseInfo,
    cipher: {
      secret1: 'EqV!+A!tmuU#',
      prefix: '(8',
    },
  };
  customAlgorithm = {
    salt: '>|<62z',
    map: 'ZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcba',
    convertIndex: {
      hex: 1,
      hmac: 15,
    },
    transformMessageOptions: {
      map: 'nmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqpo',
      segments: 6,
      multiplier: 16,
    },
  };
}

class H5st510AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['05'];
  signAlgorithmType = SignAlgorithmType.SHA256_WRAP;
  version = '5.1';
  env = {
    fv: 'h5_file_v5.1.0',
    randomLength: 13,
  };
  visitKey = h5st51VisitKey;
  defaultKey = {
    extend: '-d|3J2',
  };
  makeSign = {
    extendDateStr: '03',
  };
  genLocalTK = {
    baseInfo: normal05TokenBaseInfo,
    cipher: {
      prefix: '49',
      extend: {
        dict: '0123456789abcdefghijklmnopqrstuvwxyzABCDOPQRSTUVWXYZ_-',
        index: 5,
        magic: '1',
      },
    },
  };
  customAlgorithm = {
    salt: '4C*|24',
    map: 'utsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwv',
    convertIndex: {
      hex: 8,
      hmac: 11,
    },
    transformMessageOptions: {
      map: 'tsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvu',
      segments: 5,
      multiplier: 7,
    },
  };
}

class H5st511AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['05'];
  signAlgorithmType = SignAlgorithmType.SHA256_WRAP;
  version = '5.1';
  env = {
    fv: 'h5_file_v5.1.1',
    randomLength: 11,
  };
  visitKey = h5st51VisitKey;
  defaultKey = {
    extend: 'II[dl<',
  };
  makeSign = {
    extendDateStr: '60',
  };
  genLocalTK = {
    baseInfo: normal05TokenBaseInfo,
    cipher: {
      prefix: '2b',
      extend: {
        dict: '0123456789abcdefghijklmnopqrstuvwxyJKLMNOPQRSTUVWXYZ_-',
        index: 3,
        magic: '1',
      },
    },
  };
  customAlgorithm = {
    salt: '-d|3J2',
    map: 'utsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwv',
    convertIndex: {
      hex: 0,
      hmac: 8,
    },
    transformMessageOptions: {
      map: 'ihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkj',
      segments: 12,
      multiplier: 30,
    },
  };
}

class H5st512AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['05'];
  signAlgorithmType = SignAlgorithmType.MD5_WRAP;
  version = '5.1';
  env = {
    fv: 'h5_file_v5.1.2',
    randomLength: 11,
  };
  visitKey = h5st51VisitKey;
  defaultKey = {
    extend: 'dBD?37',
  };
  makeSign = {
    extendDateStr: '08',
  };
  genLocalTK = {
    baseInfo: normal05TokenBaseInfo,
    cipher: {
      prefix: '74',
      extend: {
        dict: '0123456789abcdefghijklmnopqBCDEFGHIJKLMNOPQRSTUVWXYZ_-',
        index: 5,
        magic: '1',
      },
    },
  };
  customAlgorithm = {
    salt: 'I,+$,3',
    map: 'utsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwv',
    convertIndex: {
      hex: 3,
      hmac: 5,
    },
    transformMessageOptions: {
      map: 'VUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYXW',
      segments: 11,
      multiplier: 8,
    },
  };
}

class H5st513AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  genSignStk = true;
  tokenVersion = LocalTokenVersion['05'];
  signAlgorithmType = SignAlgorithmType.HMAC_SHA256_WRAP;
  version = '5.1';
  env = {
    fv: 'h5_file_v5.1.3',
    randomLength: 10,
  };
  visitKey = h5st51VisitKey;
  defaultKey = {
    extend: 'Tf5<9M',
  };
  makeSign = {
    extendDateStr: '45',
  };
  genLocalTK = {
    baseInfo: normal05TokenBaseInfo,
    cipher: {
      prefix: '9e',
      extend: {
        dict: '0123456789abcdefqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-',
        index: 2,
        magic: '3',
      },
    },
  };
  customAlgorithm = {
    salt: 'tmuU#Z',
    map: 'utsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwv',
    convertIndex: {
      hex: 2,
      hmac: 3,
    },
    transformMessageOptions: {
      map: 'UTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYXWV',
      segments: 13,
      multiplier: 2,
    },
  };
}

class H5st514AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  genSignStk = true;
  tokenVersion = LocalTokenVersion['05'];
  signAlgorithmType = SignAlgorithmType.SHA256_WRAP;
  version = '5.1';
  env = {
    fv: 'h5_file_v5.1.4',
    randomLength: 13,
  };
  visitKey = h5st51VisitKey;
  defaultKey = {
    extend: 'D$SM04',
  };
  makeSign = {
    extendDateStr: '98',
  };
  genLocalTK = {
    baseInfo: normal05TokenBaseInfo,
    cipher: {
      prefix: '1e',
      extend: {
        dict: '0123456789abcdefghijklmnopqBCDEFGHIJKLMNOPQRSTUVWXYZ_-',
        index: 4,
        magic: '2',
      },
    },
  };
  customAlgorithm = {
    salt: ')]v$y9',
    map: 'utsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwv',
    convertIndex: {
      hex: 5,
      hmac: 13,
    },
    transformMessageOptions: {
      map: 'TSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYXWVU',
      segments: 7,
      multiplier: 26,
    },
  };
}

class H5st515AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  genSignStk = true;
  tokenVersion = LocalTokenVersion['05'];
  signAlgorithmType = SignAlgorithmType.SHA256_WRAP;
  version = '5.1';
  env = {
    fv: 'h5_file_v5.1.5',
    randomLength: 9,
  };
  visitKey = h5st51VisitKey;
  defaultKey = {
    extend: '36rlTf',
  };
  makeSign = {
    extendDateStr: '40',
  };
  genLocalTK = {
    baseInfo: normal05TokenBaseInfo,
    cipher: {
      prefix: '64',
      extend: {
        dict: '0123456789abcdefghijklmnopqrsDEFGHIJKLMNOPQRSTUVWXYZ_-',
        index: 3,
        magic: '2',
      },
    },
  };
  customAlgorithm = {
    salt: '0JdM3|',
    map: 'utsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwv',
    convertIndex: {
      hex: 4,
      hmac: 10,
    },
    transformMessageOptions: {
      map: 'utsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwv',
      segments: 9,
      multiplier: 31,
    },
  };
}

class H5st516AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  genSignStk = true;
  tokenVersion = LocalTokenVersion['05'];
  signAlgorithmType = SignAlgorithmType.HMAC_SHA256_WRAP;
  version = '5.1';
  env = {
    fv: 'h5_file_v5.1.6',
    randomLength: 13,
  };
  visitKey = h5st51VisitKey;
  defaultKey = {
    extend: '$Yr%39',
  };
  makeSign = {
    extendDateStr: '72',
  };
  genLocalTK = {
    baseInfo: normal05TokenBaseInfo,
    cipher: {
      prefix: '7e',
      extend: {
        dict: '0123456789abcdefghijklmnopqrstuvwxyzALMNOPQRSTUVWXYZ_-',
        index: 4,
        magic: '2',
      },
    },
  };
  customAlgorithm = {
    salt: 'L<x?LV',
    map: 'utsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwv',
    convertIndex: {
      hex: 6,
      hmac: 7,
    },
    transformMessageOptions: {
      map: 'WVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYX',
      segments: 9,
      multiplier: 3,
    },
  };
}

class H5st517AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  genSignStk = true;
  tokenVersion = LocalTokenVersion['05'];
  signAlgorithmType = SignAlgorithmType.MD5_WRAP;
  version = '5.1';
  env = {
    fv: 'h5_file_v5.1.7',
    randomLength: 13,
  };
  visitKey = h5st51VisitKey;
  defaultKey = {
    extend: 'm-Lvc(',
  };
  makeSign = {
    extendDateStr: '65',
  };
  genLocalTK = {
    baseInfo: normal05TokenBaseInfo,
    cipher: {
      prefix: 'de',
      extend: {
        dict: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFQRSTUVWXYZ_-',
        index: 1,
        magic: '2',
      },
    },
  };
  customAlgorithm = {
    salt: '3|5056',
    map: 'utsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwv',
    convertIndex: {
      hex: 2,
      hmac: 14,
    },
    transformMessageOptions: {
      map: 'RQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYXWVUTS',
      segments: 7,
      multiplier: 12,
    },
  };
}

class H5st518AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  genSignStk = true;
  tokenVersion = LocalTokenVersion['05'];
  signAlgorithmType = SignAlgorithmType.MD5_WRAP;
  version = '5.1';
  env = {
    fv: 'h5_file_v5.1.8',
    randomLength: 9,
  };
  visitKey = h5st51VisitKey;
  defaultKey = {
    extend: 'oaE231',
  };
  makeSign = {
    extendDateStr: '20',
    offset: 6000,
  };
  genLocalTK = {
    baseInfo: normal05TokenBaseInfo,
    cipher: {
      prefix: '6b',
      extend: {
        dict: '0123456789abcdefghijklmnopABCDEFGHIJKLMNOPQRSTUVWXYZ_-',
        index: 6,
        magic: '2',
      },
    },
  };
  customAlgorithm = {
    salt: 'j-ux)r',
    map: 'utsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwv',
    convertIndex: {
      hex: 9,
      hmac: 4,
    },
    transformMessageOptions: {
      map: 'onmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqp',
      segments: 11,
      multiplier: 28,
    },
  };
}

class H5st520AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  genSignDefaultStr = 'appId:appid&functionId:functionId';
  genSignStk = true;
  tokenVersion = LocalTokenVersion['05'];
  signAlgorithmType = SignAlgorithmType.MD5_WRAP;
  version = '5.2';
  env = {
    fv: 'h5_file_v5.2.0',
    randomLength: 9,
    extendRandomLength: 13,
  };
  visitKey = h5st52VisitKey;
  defaultKey = {
    extend: '8ZkMp(',
  };
  makeSign = {
    extendDateStr: '86',
    offset: 2000,
  };
  genLocalTK = {
    baseInfo: normal05TokenBaseInfo,
    cipher: {
      prefix: 'e3',
      extend: {
        dict: '0123456789abcdefghijklmnopqrstuvwxIJKLMNOPQRSTUVWXYZ_-',
        index: 5,
        magic: '2',
      },
    },
  };
  customAlgorithm = {
    salt: 'T8LH>v',
    map: 'hgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkji',
    convertIndex: {
      hex: 1,
      hmac: 13,
    },
    transformMessageOptions: {
      map: 'PONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQ',
      segments: 13,
      multiplier: 15,
    },
  };
}

class H5st521AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  genSignDefaultStr = 'appid:appId&functionId:functionId';
  genSignStk = true;
  tokenVersion = LocalTokenVersion['05'];
  signAlgorithmType = SignAlgorithmType.SHA256_WRAP;
  version = '5.2';
  env = {
    fv: 'h5_file_v5.2.1',
    randomLength: 11,
    extendRandomLength: 12,
  };
  visitKey = h5st52VisitKey;
  defaultKey = {
    extend: 'inpb.k',
  };
  makeSign = {
    extendDateStr: '82',
    offset: 4000,
  };
  genLocalTK = {
    baseInfo: normal05TokenBaseInfo,
    cipher: {
      prefix: 'af',
      extend: {
        dict: '0123456789klmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-',
        index: 4,
        magic: '2',
      },
    },
  };
  customAlgorithm = {
    salt: 'xS-d|3',
    map: 'hgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkji',
    convertIndex: {
      hex: 6,
      hmac: 9,
    },
    transformMessageOptions: {
      map: 'srqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvut',
      segments: 4,
      multiplier: 2,
    },
  };
}

class H5st522AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  genSignDefaultStr = 'appid:appid&fnuctionId:functionId';
  genSignStk = true;
  tokenVersion = LocalTokenVersion['05'];
  signAlgorithmType = SignAlgorithmType.MD5_WRAP;
  version = '5.2';
  env = {
    fv: 'h5_file_v5.2.2',
    randomLength: 13,
    extendRandomLength: 12,
  };
  visitKey = h5st52VisitKey;
  defaultKey = {
    extend: 'f6e%45',
  };
  makeSign = {
    extendDateStr: '27',
    offset: 1000,
  };
  genLocalTK = {
    baseInfo: normal05TokenBaseInfo,
    cipher: {
      prefix: 'd8',
      extend: {
        dict: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGRSTUVWXYZ_-',
        index: 2,
        magic: '2',
      },
    },
  };
  customAlgorithm = {
    salt: 'j|/3n8',
    map: 'hgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkji',
    convertIndex: {
      hex: 8,
      hmac: 16,
    },
    transformMessageOptions: {
      map: 'utsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwv',
      segments: 5,
      multiplier: 22,
    },
  };
}

class H5st523AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  genSignDefaultStr = 'appid:appid&functionid:functionId';
  genSignStk = true;
  tokenVersion = LocalTokenVersion['05'];
  signAlgorithmType = SignAlgorithmType.SHA256_WRAP;
  version = '5.2';
  env = {
    fv: 'h5_file_v5.2.3',
    randomLength: 9,
    extendRandomLength: 10,
  };
  visitKey = h5st52VisitKey;
  defaultKey = {
    extend: '6T+8<,',
  };
  makeSign = {
    extendDateStr: '53',
    offset: 4000,
  };
  genLocalTK = {
    baseInfo: normal05TokenBaseInfo,
    cipher: {
      prefix: '0a',
      extend: {
        dict: '0123456789abcdefghijuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-',
        index: 6,
        magic: '2',
      },
    },
  };
  customAlgorithm = {
    salt: 'E=v3L%',
    map: 'hgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkji',
    convertIndex: {
      hex: 6,
      hmac: 5,
    },
    transformMessageOptions: {
      map: 'ihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkj',
      segments: 4,
      multiplier: 16,
    },
  };
}

class H5st524AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  genSignDefaultStr = 'appid:appid&functionid:functionId';
  genSignStk = true;
  tokenVersion = LocalTokenVersion['05'];
  signAlgorithmType = SignAlgorithmType.HMAC_SHA256_WRAP;
  version = '5.2';
  env = {
    fv: 'h5_file_v5.2.4',
    randomLength: 12,
    extendRandomLength: 13,
  };
  visitKey = h5st52VisitKey;
  defaultKey = {
    extend: 'fu2dSD',
  };
  makeSign = {
    extendDateStr: '23',
    // offset: 4013,
    offset: 4000,
  };
  genLocalTK = {
    baseInfo: normal05TokenBaseInfo,
    cipher: {
      prefix: '1a',
      extend: {
        dict: '0123456789almnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-',
        index: 6,
        magic: '3',
      },
    },
  };
  customAlgorithm = {
    salt: '*hdj61',
    map: 'hgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkji',
    convertIndex: {
      hex: 5,
      hmac: 4,
    },
    transformMessageOptions: {
      map: 'YXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZ',
      segments: 11,
      multiplier: 7,
    },
  };
}

class H5st525AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  genSignDefaultStr = 'appid:appid&fnuctionId:functionId';
  genSignStk = true;
  tokenVersion = LocalTokenVersion['05'];
  signAlgorithmType = SignAlgorithmType.MD5_WRAP;
  version = '5.2';
  env = {
    fv: 'h5_file_v5.2.5',
    randomLength: 12,
    extendRandomLength: 12,
  };
  visitKey = h5st52VisitKey;
  defaultKey = {
    extend: '4C7?KD',
  };
  makeSign = {
    extendDateStr: '49',
    offset: 4000,
  };
  genLocalTK = {
    baseInfo: normal05TokenBaseInfo,
    cipher: {
      prefix: '2d',
      extend: {
        dict: '0123456789abcdefghijkvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-',
        index: 1,
        magic: '2',
      },
    },
  };
  customAlgorithm = {
    salt: 'IR]dev',
    map: 'hgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkji',
    convertIndex: {
      hex: 8,
      hmac: 7,
    },
    transformMessageOptions: {
      map: 'srqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvut',
      segments: 10,
      multiplier: 23,
    },
  };
}

class H5st526AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  genSignDefaultStr = 'appId:appid&functionId:functionId';
  genSignStk = true;
  tokenVersion = LocalTokenVersion['05'];
  signAlgorithmType = SignAlgorithmType.MD5_WRAP;
  version = '5.2';
  env = {
    fv: 'h5_file_v5.2.6',
    randomLength: 10,
    extendRandomLength: 9,
  };
  visitKey = h5st52VisitKey;
  defaultKey = {
    extend: 'v!g,MC',
  };
  makeSign = {
    extendDateStr: '33',
    offset: 5000,
  };
  genLocalTK = {
    baseInfo: normal05TokenBaseInfo,
    cipher: {
      prefix: '66',
      extend: {
        dict: '0123456789almnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-',
        index: 4,
        magic: '2',
      },
    },
  };
  customAlgorithm = {
    salt: '3s||sz',
    map: 'hgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkji',
    convertIndex: {
      hex: 7,
      hmac: 4,
    },
    transformMessageOptions: {
      map: 'rqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvuts',
      segments: 11,
      multiplier: 3,
    },
  };
}

class Xcx310AlgoConfig implements H5stAlgoConfigType {
  version = '3.1';
  tokenVersion = LocalTokenVersion['03'];
  signAlgorithmType = SignAlgorithmType.HMAC_SHA256_WRAP;
  env = {
    secret: 'wm0!@w_s#ll1flo(',
    randomLength: 0,
  };
  visitKey = h5st31VisitKey;
  defaultKey = {
    extend: '',
  };
  makeSign = {
    extendDateStr: '',
  };
  genLocalTK = {
    baseInfo: xcx02TokenBaseInfo,
    cipher: {
      prefix: 'xx',
      secret2: 'ap0!@f_t#ll0flo*',
    },
  };
}

class Xcx420AlgoConfig implements H5stAlgoConfigType {
  version = '4.2';
  tokenVersion = LocalTokenVersion['03'];
  signAlgorithmType = SignAlgorithmType.SHA256_WRAP;
  env = {
    secret: 'DNiHi703B0&17hh1',
    fv: 'xcx_v4.2.0',
    randomLength: 10,
  };
  visitKey = h5st42VisitKey;
  defaultKey = {
    extend: '9>5*t5',
  };
  makeSign = {
    extendDateStr: '74',
  };
  genLocalTK = {
    baseInfo: xcx02TokenBaseInfo,
    cipher: {
      secret1: 'qem7+)g%Dhw5',
      prefix: 'z7',
      secret2: 'x6e@RoHi$Fgy7!5k',
    },
  };
}

class Xcx471AlgoConfig implements H5stAlgoConfigType {
  version = '4.7';
  tokenVersion = LocalTokenVersion['03'];
  signAlgorithmType = SignAlgorithmType.SHA256_WRAP;
  env = {
    secret: '_M6Y?dvfN40VMF[X',
    fv: 'xcx_v4.7.1',
    randomLength: 10,
  };
  visitKey = h5st47VisitKey;
  defaultKey = {
    extend: '?SPKw5',
  };
  makeSign = {
    extendDateStr: '22',
  };
  genLocalTK = {
    baseInfo: xcx03TokenBaseInfo,
    cipher: {
      secret1: 'TY5G5cIQz9WS',
      prefix: 'LS',
      secret2: '$Yr%39]TC2u_p<&9',
    },
  };
  customAlgorithm = {
    salt: 'j04vfp',
    map: 'WVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYX',
    keyReverse: true,
    convertIndex: {
      hmac: 4,
    },
  };
}

class Xcx491AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['04'];
  signAlgorithmType = SignAlgorithmType.MD5_WRAP;
  version = '4.9';
  env = {
    fv: 'xcx_v4.9.1',
    randomLength: 10,
  };
  visitKey = h5st49VisitKey;
  defaultKey = {
    extend: 'K.%@Ou',
  };
  makeSign = {
    extendDateStr: '98',
  };
  genLocalTK = {
    baseInfo: xcx04TokenBaseInfo,
    cipher: {
      secret1: 'Ox18GNmWXl00',
      prefix: 'kM',
    },
  };
  customAlgorithm = {
    salt: '$_+0zz',
    map: 'rqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvuts',
    convertIndex: {
      hex: 8,
      hmac: 2,
    },
  };
}

class Xcx492AlgoConfig implements H5stAlgoConfigType {
  genSignDefault = true;
  tokenVersion = LocalTokenVersion['04'];
  signAlgorithmType = SignAlgorithmType.MD5_WRAP;
  version = '4.9';
  env = {
    fv: 'xcx_v4.9.2',
    randomLength: 10,
  };
  visitKey = h5st49VisitKey;
  defaultKey = {
    extend: 'k4kEjx',
  };
  makeSign = {
    extendDateStr: '48',
  };
  genLocalTK = {
    baseInfo: xcx04TokenBaseInfo,
    cipher: {
      secret1: '056r$D8?UWI,',
      prefix: 'V1',
    },
  };
  customAlgorithm = {
    salt: '!7xie.',
    map: 'rqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvuts',
    convertIndex: {
      hex: 7,
      hmac: 6,
    },
  };
}

export const H5stAlgoConfigCollection: Record<string, H5stAlgoConfigType> = {
  '3.1.0': new H5st310AlgoConfig(),
  '4.1.0': new H5st410AlgoConfig(),
  '4.2.0': new H5st420AlgoConfig(),
  '4.3.1': new H5st431AlgoConfig(),
  '4.3.3': new H5st433AlgoConfig(),
  '4.4.0': new H5st440AlgoConfig(),
  '4.7.1': new H5st471AlgoConfig(),
  '4.7.2': new H5st472AlgoConfig(),
  '4.7.3': new H5st473AlgoConfig(),
  '4.7.4': new H5st474AlgoConfig(),
  '4.8.1': new H5st481AlgoConfig(),
  '4.8.2': new H5st482AlgoConfig(),
  '4.9.1': new H5st491AlgoConfig(),
  '4.9.2': new H5st492AlgoConfig(),
  '4.9.3': new H5st493AlgoConfig(),
  '4.9.4': new H5st494AlgoConfig(),
  '4.9.5': new H5st495AlgoConfig(),
  '4.9.6': new H5st496AlgoConfig(),
  '4.9.7': new H5st497AlgoConfig(),
  '5.0.0': new H5st500AlgoConfig(),
  '5.0.1': new H5st501AlgoConfig(),
  '5.0.2': new H5st502AlgoConfig(),
  '5.0.3': new H5st503AlgoConfig(),
  '5.0.4': new H5st504AlgoConfig(),
  '5.0.5': new H5st505AlgoConfig(),
  '5.0.6': new H5st506AlgoConfig(),
  '5.0.7': new H5st507AlgoConfig(),
  '5.0.8': new H5st508AlgoConfig(),
  '5.0.9': new H5st509AlgoConfig(),
  '5.1.0': new H5st510AlgoConfig(),
  '5.1.1': new H5st511AlgoConfig(),
  '5.1.2': new H5st512AlgoConfig(),
  '5.1.3': new H5st513AlgoConfig(),
  '5.1.4': new H5st514AlgoConfig(),
  '5.1.5': new H5st515AlgoConfig(),
  '5.1.6': new H5st516AlgoConfig(),
  '5.1.7': new H5st517AlgoConfig(),
  '5.1.8': new H5st518AlgoConfig(),
  '5.2.0': new H5st520AlgoConfig(),
  '5.2.1': new H5st521AlgoConfig(),
  '5.2.2': new H5st522AlgoConfig(),
  '5.2.3': new H5st523AlgoConfig(),
  '5.2.4': new H5st524AlgoConfig(),
  '5.2.5': new H5st525AlgoConfig(),
  '5.2.6': new H5st526AlgoConfig(),
  'xcx3.1.0': new Xcx310AlgoConfig(),
  'xcx4.2.0': new Xcx420AlgoConfig(),
  'xcx4.7.1': new Xcx471AlgoConfig(),
  'xcx4.9.1': new Xcx491AlgoConfig(),
  'xcx4.9.2': new Xcx492AlgoConfig(),
};

export const DEFAULT_H5ST_VERION = '5.2.6';
export const SUPPORT_H5ST_VERION = Object.keys(H5stAlgoConfigCollection);
export const SUPPORT_H5ST_VERION_STR = SUPPORT_H5ST_VERION.join('、') + '。默认版本：' + DEFAULT_H5ST_VERION;
