import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateTodoDto } from "./dto/update-user.dto";
import { ParseObjectIdPipe } from "@nestjs/mongoose";
import { AuthenticationGuard } from "src/guards/authentication/authentication.guard";
import { Roles } from "src/decorators/roles/roles.decorator";
import { AuthorizationGuard } from "src/guards/authorization/authorization.guard";
// import { ParseObjectIdPipe } from "src/pipes/parse-object-id/parse-object-id.pipe";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}
  @Post("")
  addUser(@Body() user: CreateUserDto) {
    return this.userService.addUser(user);
  }

  // @HttpCode(201)
  // @Post("many")
  // addManyUser(@Body() users: CreateUserDto[]) {
  //   return this.userService.addManyUsers(users);
  // }
  @Roles('admin','user')
  @UseGuards(AuthenticationGuard,AuthorizationGuard)
  @Get("")
  getAll() {
    return this.userService.getAll();
  }

  @Delete(":id")
  deleteById(@Param("id") id) {
    return this.userService.deleteById(id);
  }

  @Get(":id")
  getUserbyId(@Param("id", ParseObjectIdPipe) id) {
    return this.userService.getUserbyId(id);
  }
  @Patch(":id")
  updateUser(@Param("id") id, @Body() updateUserDto: UpdateTodoDto) {
    return this.userService.updateUser(id, updateUserDto);
  }
}
