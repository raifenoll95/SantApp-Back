import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateVoteDto {
  
  @IsNotEmpty()
  correo: string;

  @IsNotEmpty()
  equipo: string;
}
