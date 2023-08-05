import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsObject,
  ValidateNested,
  IsEnum,
} from 'class-validator'

class MediaDto {
  @IsNotEmpty()
  @IsString()
  url: string

  @IsNotEmpty()
  @IsString()
  caption: string
}

enum ChannelType {
  DND = 'dnd',
  GENERIC = 'generic',
  WHATSAPP = 'whatsapp',
}

export class SendMessageDto {
  @IsNotEmpty()
  @IsString()
  apiKey: string

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
  @IsEnum(ChannelType)
  channel: ChannelType

  @IsOptional()
  @IsObject()
  @ValidateNested()
  media?: MediaDto
}
