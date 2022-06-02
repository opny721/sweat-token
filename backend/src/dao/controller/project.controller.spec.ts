import { RuntimeModule } from '@app/runtime'
import { Test, TestingModule } from '@nestjs/testing'
import { ProjectModule } from '../../project/project.module'
import { DaoProjectController } from './project.controller'

describe('DaoProjectController', () => {
  let controller: DaoProjectController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RuntimeModule, ProjectModule],
      controllers: [DaoProjectController],
    }).compile()

    controller = module.get(DaoProjectController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
