import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserSchema {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: number;

  @Field(() => String)
  password: number;
}
