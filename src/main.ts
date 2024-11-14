import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const prismaService = app.get(PrismaService);
    await prismaService.onModuleInit();

    const corsOptions: CorsOptions = {
      origin: ['https://lhg-analytics.vercel.app/'],
      methods: ['POST', 'OPTIONS'],
      credentials: true,
    };

    app.enableCors(corsOptions);

    const port = process.env.PORT || 3000;

    await app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (error) {
    console.error('Error during application bootstrap:', error);
  }
}
bootstrap();
