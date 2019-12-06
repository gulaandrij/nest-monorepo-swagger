import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { TestDto } from '@app/test/test.dto';
import { ApiResponse } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiImplicitFile } from '@nestjs/swagger/dist/decorators/api-implicit-file.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @ApiResponse({status: 200})
  getHello(@Body()test: TestDto): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @ApiImplicitFile({
    name: 'file',
    description: '',
  })
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile('file') file) {
    console.log(file);
  }
}
