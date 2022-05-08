import { IsString } from 'class-validator';
export class CreateUserDto {
  @IsString()
  readonly user_name: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly user_type: string;
}
