import { InputType, Field } from '@nestjs/graphql';
import { Role } from '../../../dist/prisma/generated/client/index';

@InputType()
export class CreateUserInput {
  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  cpf: string;

  @Field()
  password: string;

  @Field(() => Role, { nullable: true })
  role?: Role;
}
