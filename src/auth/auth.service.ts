import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/schema/user.schema';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './jwt.constans';
@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>, private jwtService: JwtService) { }
  async register(regiserUser: RegisterDto) {
    const exist = await this.userModel.findOne({ email: regiserUser.email });
    if (exist) throw new ConflictException('Email already registred')
    regiserUser.password = await bcrypt.hash(regiserUser.password, 10);
    const newUser = await this.userModel.create(regiserUser);
    return { messsage: 'user created', user: newUser }
  }
  async login(loginUser: LoginDto) {
    const user = await this.userModel.findOne({ email: loginUser.email });
    if (!user) throw new BadRequestException('email or password not correct')
    const valid = await bcrypt.compare(loginUser.password, user.password)
    if (!valid) throw new BadRequestException('email or password not correct')
    const token = this.jwtService.sign({
      email: user.email,
      role: user.role,
      id: user._id
    },{secret:jwtConstants.secret})
    return {access_token: token };
  }
}
