import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsObject,
  ValidateNested,
} from 'class-validator'

class MediaDto {
  @IsNotEmpty()
  @IsString()
  url: string

  @IsNotEmpty()
  @IsString()
  caption: string
}

export class SendMessageDto {
  @IsNotEmpty()
  @IsString()
  to: string

  @IsNotEmpty()
  @IsString()
  from: string

  @IsNotEmpty()
  @IsString()
  sms: string

  @IsNotEmpty()
  @IsString()
  type: string

  @IsNotEmpty()
  @IsString()
  channel: string

  @IsOptional()
  @IsObject()
  @ValidateNested()
  media?: MediaDto
}
