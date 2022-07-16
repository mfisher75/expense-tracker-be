import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { ExpensesModule } from './expenses/expenses.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

const MONGO_URI = 'mongodb://localhost:27017/expenses';
const mongooseOptions: MongooseModuleOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

@Module({
  imports: [ExpensesModule, MongooseModule.forRoot(MONGO_URI, mongooseOptions), AuthModule, UsersModule]
})
export class AppModule {}
