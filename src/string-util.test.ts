import { regexUtil } from './regex-util'
import { stringUtil } from './string-util'

describe('stringUtil', () => {
  it.each([
    [stringUtil.generateUUID()],
    [stringUtil.generateUUID()],
    [stringUtil.generateUUID()],
    [stringUtil.generateUUID()],
    [stringUtil.generateUUID()],
    [stringUtil.generateUUID()],
    [stringUtil.generateUUID()],
    [stringUtil.generateUUID()],
    [stringUtil.generateUUID()],
  ])('should generate valid uuid %s', (uuid) => {
    expect(new RegExp(regexUtil.uuid()).test(uuid)).toBeTruthy()
  })
})
