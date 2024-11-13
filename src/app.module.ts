import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GraphqlModule } from './graphql/graphql.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsersModule, GraphqlModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
