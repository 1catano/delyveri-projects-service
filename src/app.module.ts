import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsService } from './projects/projects.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [ProjectsService],
  controllers: [ProjectsController],
})
export class AppModule {}
