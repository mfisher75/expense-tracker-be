import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; //Types
@Schema({ timestamps: true })
export class User extends Document {
    @Prop({ required: true }) first_name: string;
    @Prop({ required: true }) last_name: string;
    @Prop({ required: true }) phone: string;
    @Prop({ required: true }) email: string;
    @Prop({ required: true }) password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);