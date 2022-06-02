import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Role } from 'src/user/user.dto'
import { CreateTaskDto, TaskDto, TaskQueryDto, UpdateTaskDto } from '../../task/task.dto'
import { TaskService } from '../../task/task.service'
import { DaoAuth } from '../dao.auth.decorator'

@ApiBearerAuth()
@ApiTags('task')
@Controller('/dao/:daoId/task')
export class DaoTaskController {
  constructor(private taskService: TaskService) {}

  @Post('find')
  @HttpCode(200)
  @DaoAuth()
  find(@Param('daoId') daoId: string, @Body() query: TaskQueryDto): Promise<TaskDto[]> {
    return this.taskService.find(query)
  }

  @Post()
  @HttpCode(200)
  @DaoAuth(Role.founder, Role.projectManager)
  create(@Param('daoId') daoId: string, @Body() task: CreateTaskDto): Promise<TaskDto> {
    return this.taskService.create(task)
  }

  @Get(':taskId')
  @HttpCode(200)
  read(@Param('daoId') daoId: string, @Param('taskId') taskId: string): Promise<TaskDto> {
    return this.taskService.read(taskId)
  }

  @Put(':taskId')
  @HttpCode(200)
  @DaoAuth(Role.founder, Role.projectManager)
  update(
    @Param('daoId') daoId: string,
    @Param('taskId') taskId: string,
    @Body() taskDto: UpdateTaskDto,
  ): Promise<TaskDto> {
    taskDto.taskId = taskId
    return this.taskService.update(taskDto)
  }

  @Delete(':taskId')
  @HttpCode(200)
  @DaoAuth(Role.founder, Role.projectManager)
  delete(@Param('daoId') daoId: string, @Param('taskId') taskId: string): Promise<void> {
    return this.taskService.delete(taskId)
  }
}
