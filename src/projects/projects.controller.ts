import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './project.schema';
import { ProjectsService } from './projects.service';

@Controller()
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @MessagePattern({ cmd: 'get_all_projects' })
  async getProjects() {
    return this.projectsService.findAll();
  }

  @MessagePattern({ cmd: 'get_project_by_id' })
  async findOneById(id?: string): Promise<Project> {
    return this.projectsService.findById(id);
  }

  @MessagePattern({ cmd: 'create_project' })
  async create(args: CreateProjectDto): Promise<Project> {
    return await this.projectsService.create(args);
  }

  @MessagePattern({ cmd: 'update_project' })
  async update(data: { id: string; args: CreateProjectDto }): Promise<Project> {
    return await this.projectsService.update(data.id, data.args);
  }

  @MessagePattern({ cmd: 'delete_project' })
  async delete(id: string): Promise<Project> {
    return await this.projectsService.delete(id);
  }
}
