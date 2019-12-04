import { ApiProperty } from '@nestjs/swagger';

export enum Enum {
  foo
}

export class TestDto {
  @ApiProperty({ type: 'enum', enum: Enum, default: 0 })
  test: Enum;
}
