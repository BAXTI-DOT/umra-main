import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class Auth {
    @IsString()
    @IsNotEmpty()
    username!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;
}

export class UpdateAuth {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    username?: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    password?: string;
}