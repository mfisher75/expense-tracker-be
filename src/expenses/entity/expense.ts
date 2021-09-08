import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';


@Schema()
export class Expense extends Document{
    @Prop() 
    name: string;

    @Prop() 
    amount: number;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);