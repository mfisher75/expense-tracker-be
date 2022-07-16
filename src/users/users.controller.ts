import { Body, Controller,  Delete,  Get,  Param,  Post,  Put,  UsePipes } from "@nestjs/common";
import { MongoIdPipe } from "src/common/pipes/mongo-id.pipe";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";
@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    @Get()
    async getAllUsers(): Promise<User[]> {
        return await this.usersService.getAllUsers();
    }
    @Get(":id")
    @UsePipes(MongoIdPipe)
    async getUserByID(@Param("id") id: string): Promise<User> {
        return await this.usersService.getUserByID(id);
    }
    @Post()
    async createUser(@Body() dto: CreateUserDto): Promise<User> {
        return await this.usersService.createUser(dto);
    }
    @Put(":id")
    async updateUser(
        @Param("id", MongoIdPipe) id: string,
        @Body() dto: UpdateUserDto
    ): Promise<User> {
        return await this.usersService.updateUser(id, dto);
    }
    @Delete(":id")
    @UsePipes(MongoIdPipe)
    async removeUser(@Param("id") id: string): Promise<User> {
        return await this.usersService.removeUser(id);
    }
}
