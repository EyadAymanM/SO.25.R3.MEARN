import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schema/user.schema";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: User.name,
      schema: UserSchema
    }
  ])],
  controllers: [UserController],
  providers: [UserService,JwtService],
})
export class UserModule {}
