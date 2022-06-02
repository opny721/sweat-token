import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Auth } from 'src/auth/auth.decorator'
import { User } from 'src/auth/user.decorator'
import { TaskDto, TaskQueryDto } from './task.dto'
import { TaskService } from './task.service'

@ApiBearerAuth()
@ApiTags('task')
@Controller('/task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post('find')
  @HttpCode(200)
  @Auth()
  find(@User('userId') userId: string, @Body() query: TaskQueryDto): Promise<TaskDto[]> {
    query.contributorId = userId
    return this.taskService.find(query)
  }
}
