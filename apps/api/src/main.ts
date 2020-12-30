/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ErrnoExeptionFilter } from './app/common/exeptions/nodejs.exception';
import { AppModule } from './app/app.module';
import { logger } from './app/common/logger/logger.middleware';
const { mkdir, access } = require('fs').promises;
import { stat } from 'fs-extra';
import { environment } from './environments/environment.prod';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalFilters(new ErrnoExeptionFilter());
  const options = new DocumentBuilder()
    .setTitle('Finder API')
    .setDescription('This is the finder api Default path: /Users/mpetersen/finder/dist/apps/api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  const port = process.env.PORT || 3333;
  app.use(logger);
  await checkWorkspace();
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}
async function checkWorkspace() {
  try {
    let username = require('os').userInfo().username;
    await access(getWorkspace());
  } catch (error) {
    mkdir(getWorkspace()).catch((error) => console.log(error));
  }
}
function getWorkspace() {
  return (
    environment.workspace.substring(0, 7) + require('os').userInfo().username + environment.workspace.substring(12)
  );
}

bootstrap();
