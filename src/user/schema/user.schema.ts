import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
@Schema({timestamps:true})
export class User extends Document{
  @Prop({})
  name:string;
  @Prop({ required: true, unique: true })
  email:string;
  @Prop({ required: true })
  password:string;
  @Prop({ enum:['user','admin'], default:'user'})
  role:string;
}
export const UserSchema = SchemaFactory.createForClass(User);