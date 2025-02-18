import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [UsersModule],
  providers: [PrismaService],
  exports: [PrismaService], // Make PrismaService available to other modules
})
export class AppModule {}
