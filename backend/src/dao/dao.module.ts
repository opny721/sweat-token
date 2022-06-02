import { Module } from '@nestjs/common'
import { DaoService } from './dao.service'
import { DaoController } from './controller/dao.controller'
import { Dao, DaoSchema } from './dao.schema'
import { MongooseModule } from '@nestjs/mongoose'
import { MemberModule } from 'src/member/member.module'
import { DaoMemberController } from './controller/member.controller'
import { ProjectEventListenerService } from './dao.project.listener.service'
import { TaskModule } from 'src/task/task.module'
import { ProjectModule } from 'src/project/project.module'
import { DaoTaskController } from './controller/task.controller'
import { DaoProjectController } from './controller/project.controller'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Dao.name, schema: DaoSchema }]),
    MemberModule,
    TaskModule,
    ProjectModule,
  ],
  providers: [DaoService, ProjectEventListenerService],
  controllers: [DaoController, DaoMemberController, DaoTaskController, DaoProjectController],
  exports: [DaoService],
})
export class DaoModule {}
