import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Roles } from 'src/decorators/roles/roles.decorator';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private reflector:Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const role = req.user.role;
    const roles = this.reflector.get('roles',context.getHandler())
    console.log("role",role);
    console.log("roles[]",roles);
    
    if(!roles.includes(role))
      throw new ForbiddenException('Not allowed')
    return true;
  }
}
