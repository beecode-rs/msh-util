import { regexUtil } from 'src/regex-util'
import { stringUtil } from 'src/string-util'

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
  ])('%#. should generate valid uuid %s', (uuid) => {
    expect(new RegExp(regexUtil.uuid()).test(uuid)).toBeTruthy()
  })
})
