import { InputType, Field } from '@nestjs/graphql';
import { Role } from '../../../dist/generated/client';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  cpf?: string;

  @Field(() => Role, { nullable: true })
  role?: Role;
}
