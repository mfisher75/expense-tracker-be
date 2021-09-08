import { CreateExpenseDto } from './dto/create-expense.dto';
import { Expense } from './entity/expense';
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, QueryOptions } from 'mongoose';
 
@Injectable()
export class ExpensesService {
    constructor(@InjectModel(Expense.name) private readonly expenseModel: Model<Expense>) {}

    async getAllExpenses(): Promise<Expense[]> {
        return await this.expenseModel.find();
    }

    async getExpenseByID(id: string): Promise<Expense> {
        const expense = this.expenseModel
          .findById(id)
          .select('-_id name amount');
        // _id is opt-out, all other fields are opt-in
        if (!expense) throw new NotFoundException(`Expense not found id:'${id}'`);
        return expense;
      }

      async createExpense(createExpenseDto: CreateExpenseDto): Promise<Expense> {
        return await this.expenseModel.create(createExpenseDto);
      }

      async updateExpense(id: string, updateExpenseDto: UpdateExpenseDto): Promise<Expense> {
      const options: QueryOptions = { new: true, upsert: true };
      const expense = await this.expenseModel
      .findByIdAndUpdate(id, updateExpenseDto, options)
      .select('-__v');
      return expense;
    }

    async removeExpense(id: string): Promise<Expense> {
      return await this.expenseModel.findByIdAndRemove(id);
    }
}
