import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { jwtConstants } from 'src/auth/jwt.constans';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    let request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;
    if (!token) throw new ForbiddenException("Must log in first");
    const payload = this.jwtService.verify(token, { secret: jwtConstants.secret });
    request.user = payload;
    return true;
  }
}
