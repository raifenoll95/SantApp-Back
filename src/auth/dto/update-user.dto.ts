import { IsBoolean, IsEmail, IsString, MinLength } from 'class-validator';
export class UpdateUserDto {
    @IsBoolean()
    haVotado: boolean;
}