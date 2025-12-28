/**
 * File: app.module.ts
 * Description: nestjs 注入
 * Author: zhx47
 */

import { v4 } from 'uuid';
import { Request } from 'express';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WinstonModule } from 'nest-winston';
import { ClsModule, ClsService } from 'nestjs-cls';
import { CacheModule } from 'nestjs-cache-manager-v6';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { cacheConfig, CacheConfigService, WinstonConfigService } from './config';
import { AppController } from './controller/app.controller';
import { AlgoController } from './controller/algo.controller';
import { CommandController } from './controller/command.controller';
import { AlgoService } from './services/algo.service';
import { CommandService } from './services/command.service';
import { CustomAlgorithm } from './core/algorithm';
import { LocalTokenV3, LocalTokenV4, LocalTokenV5 } from './core/token';
import { TokenFactory, H5stFactory } from './core';

@Module({
  imports: [
    // 在 中间件 初始化上下文对象
    ClsModule.forRoot({
      global: true,
      middleware: {
        mount: true,
        generateId: true,
        idGenerator: (req: Request) => req.header('cf-ray') ?? v4(),
      },
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
      load: [cacheConfig],
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      useClass: CacheConfigService,
      inject: [ConfigService],
    }),
    WinstonModule.forRootAsync({
      useClass: WinstonConfigService,
      inject: [ClsService],
    }),
    HttpModule,
  ],
  controllers: [AppController, AlgoController, CommandController],
  providers: [CustomAlgorithm, LocalTokenV3, LocalTokenV4, LocalTokenV5, TokenFactory, H5stFactory, AlgoService, CommandService],
})
export class AppModule {}
