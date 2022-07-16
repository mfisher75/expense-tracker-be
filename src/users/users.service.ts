import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, QueryOptions } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private readonly usersModel: Model<User>,
    ) { }
    async getAllUsers(): Promise<User[]> {
        return await this.usersModel.find();
    }
    async getUserByID(id: string): Promise<User> {
        const user = this.usersModel.findById(id);
        if (!user) throw new NotFoundException(`User not found id:'${id}'`);
        return user;
    }
    async createUser(dto: CreateUserDto): Promise<User> {
        return await this.usersModel.create(dto);
    }
    async updateUser(id: string, dto: UpdateUserDto): Promise<User> {
        const options: QueryOptions = { new: true, upsert: true };
        return await this.usersModel.findByIdAndUpdate(id, dto, options);
    }
    async removeUser(id: string): Promise<User> {
        const user = await this.usersModel.findByIdAndRemove(id);
        if (!user) throw new NotFoundException(`User not found id:'${id}'`);
        return user;
    }
}
