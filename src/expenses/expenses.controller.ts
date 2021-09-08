import { ExpensesService } from './expenses.service';
import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
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
    async getExpenseByID(@Param('id') id:string) {
        this._validateID(id);
        return await this.expensesService.getExpenseByID(id);
    }
    

    @Post()
    async createExpense(@Body() createExpenseDto: CreateExpenseDto) {
        return await this.expensesService.createExpense(createExpenseDto);
    }

    @Put(':id')
    async updateExpense(@Param('id') id: string, @Body() updateExpenseDto: UpdateExpenseDto) {
        this._validateID(id);
        return this.expensesService.updateExpense(id, updateExpenseDto);
    }

    @Delete(':id')
    async removeExpense(@Param('id') id: string) {
        this._validateID(id);
        return this.expensesService.removeExpense(id);
    }


    private _validateID(id: string):void {
        //valid MongoDB id RegExp
        if (/^[0-9a-fA-F]{24}$/.test(id) === false) {
            throw new BadRequestException('id parameter is malformed');
        }
    }
}
