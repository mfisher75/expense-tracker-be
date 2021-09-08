import { Expense, ExpenseSchema } from './entity/expense';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ExpensesController } from './expenses.controller';
import { ExpensesService } from './expenses.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name:Expense.name,
        schema: ExpenseSchema
      }
    ])
  ],
  controllers: [ExpensesController],
  providers: [ExpensesService]
})
export class ExpensesModule {}
