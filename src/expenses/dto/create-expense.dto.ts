import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateExpenseDto {
    @IsString()
    @IsNotEmpty({message: 'Name of Expense is required'})
    readonly name: string;
    @IsNumber()
    @IsNotEmpty({message: 'Amount of Expense is required'})
    readonly amount: number;
}
