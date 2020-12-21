import { IsString } from 'class-validator';

export class GetCacheByDateDto {
  @IsString()
  date: string;
}
