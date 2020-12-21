import { IsNumber, IsString } from 'class-validator';

export class SetCacheDto {
  @IsString()
  date: string;

  @IsNumber()
  cash: number;
}
