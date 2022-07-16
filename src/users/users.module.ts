import { Module } from '@nestjs/common';
import { User, UserSchema } from './entities/user.entity';
import { Expense, ExpenseSchema } from 'src/expenses/entity/expense';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Expense.name,
        schema: ExpenseSchema,
      }
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}




