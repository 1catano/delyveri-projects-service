import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './project.schema';
import { ProjectsService } from './projects.service';

@Controller()
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @MessagePattern('projects-get-all')
  async getProjects() {
    return this.projectsService.findAll();
  }

  @MessagePattern('projects-exec-create')
  async create(@Payload() message): Promise<Project> {
    const project: Project = message.value;
    return await this.projectsService.create(project);
  }

  @MessagePattern('projects-get-project')
  async findOneById(@Payload() message): Promise<Project> {
    const id: string = message.value;
    return this.projectsService.findById(id);
  }

  @MessagePattern('projects-exec-update')
  async update(@Payload() message): Promise<Project> {
    const {
      id,
      project,
    }: { id: string; project: CreateProjectDto } = message.value;
    return await this.projectsService.update(id, project);
  }

  @MessagePattern('projects-exec-delete')
  async delete(@Payload() message): Promise<Project> {
    const id: string = message.value;
    return await this.projectsService.delete(id);
  }
}
