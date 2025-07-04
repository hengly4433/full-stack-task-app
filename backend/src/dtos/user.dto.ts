import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class RegisterUserDto {
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @MinLength(6)
    password: string;
}

export class LoginUserDto {
    @IsEmail()
    email: string;

    @MinLength(6)
    password: string;
}