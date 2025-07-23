import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/schema/user.schema';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { jwtConstants } from './jwt.constans';

@Module({
  imports: [
    // JwtModule.register({ secret: jwtConstants.secret, signOptions: { expiresIn: '1h' } }),
    // JwtModule.registerAsync({
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => {
    //     return {
    //       secret: configService.get('JWT_SECRET'),
    //       signOptions: { expiresIn: '1h' },
    //       global: true
    //     }
    //   }
    // }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [AuthController],
  providers: [AuthService,JwtService],
  // exports:[JwtService]
})
export class AuthModule { }
