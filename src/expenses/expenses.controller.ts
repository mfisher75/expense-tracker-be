import { MongoIdPipe } from 'src/common/pipes/mongo-id.pipe';
import { ExpensesService } from './expenses.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes} from '@nestjs/common';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { CreateExpenseDto } from './dto/create-expense.dto';

@Controller('expenses')
export class ExpensesController {
    constructor (private readonly expensesService: ExpensesService) {}

    @Get()
    async getAllExpenses() {
        return await this.expensesService.getAllExpenses();
    }

    @Get(':id')
    @UsePipes(MongoIdPipe)
    async getExpenseByID(@Param('id') id:string) {
        return await this.expensesService.getExpenseByID(id);
    }
    

    @Post()
    async createExpense(@Body() createExpenseDto: CreateExpenseDto) {
        return await this.expensesService.createExpense(createExpenseDto);
    }

    @Put(':id')
    async updateExpense(@Param('id', MongoIdPipe) id: string, @Body() updateExpenseDto: UpdateExpenseDto) {
        return this.expensesService.updateExpense(id, updateExpenseDto);
    }

    @Delete(':id')
    @UsePipes(MongoIdPipe)
    async removeExpense(@Param('id') id: string) {
        return this.expensesService.removeExpense(id);
    }
}
