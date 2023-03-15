import { typeUtil } from 'src/type-util'

describe('typeUtil', () => {
  describe('exhaustiveMessage', () => {
    it('should return string', () => {
      const testMessage = 'testMessage'
      // @ts-ignore
      expect(typeUtil.exhaustiveMessage(testMessage, '')).toEqual(testMessage)
    })
  })
  describe('exhaustiveError', () => {
    it('should return string', () => {
      const testMessage = 'testMessage'
      // @ts-ignore
      const error = typeUtil.exhaustiveError(testMessage, '')
      expect(error).toBeInstanceOf(Error)
      expect(error.message).toEqual(testMessage)
    })
  })
})
