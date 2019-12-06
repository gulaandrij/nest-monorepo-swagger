import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import * as multer from 'multer';

@Module({
  imports: [
    MulterModule.register({
      storage: multer.diskStorage({
        destination: 'uploads',
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
