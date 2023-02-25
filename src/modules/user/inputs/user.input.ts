import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GenerateTokenInput {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => String, { nullable: false })
  password: string;
}
