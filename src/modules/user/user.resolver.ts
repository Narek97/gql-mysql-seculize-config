import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserSchema } from './schema/user.schema';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserSchema], { name: 'users' })
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
