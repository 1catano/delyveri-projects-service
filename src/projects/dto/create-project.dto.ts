import { IsUUID } from 'class-validator';
import { CreateProjectInput } from '../project.schema';

export class CreateProjectDto extends CreateProjectInput {
  @IsUUID('4')
  id: string;
}
