import { IsNotEmpty, Matches, MinLength, IsEmail } from "class-validator";
export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(3)
    readonly first_name: string;
    @IsNotEmpty()
    @MinLength(3)
    readonly last_name: string;
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;
    @IsNotEmpty()
    @Matches(/\d{3}-\d{3}-\d{4}/gi, {
        message: "Phone numbers should be formatted as xxx-xxx-xxxx",
    })
    readonly phone: string;
}
