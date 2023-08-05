import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsObject,
  ValidateNested,
  ArrayMaxSize,
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
  @IsString({ each: true }) // Validates each element of the array to be a string
  @ArrayMaxSize(100) // Limit the array to a maximum of 100 elements
  to: string[]

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
