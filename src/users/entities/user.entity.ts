import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Role } from '../../../dist/prisma/generated/client';

registerEnumType(Role, { name: 'Role' });

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

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

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
