import { RuntimeModule } from '@app/runtime'
import { Test, TestingModule } from '@nestjs/testing'
import { DaoMemberController } from './member.controller'
import { MemberModule } from '../../member/member.module'

describe('DaoMemberController', () => {
  let controller: DaoMemberController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [RuntimeModule, MemberModule],
    }).compile()

    controller = module.get<DaoMemberController>(DaoMemberController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
