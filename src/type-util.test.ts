import { typeUtil } from '#/type-util.js'

describe('typeUtil', () => {
	describe('exhaustiveMessage', () => {
		it('should return string', () => {
			const testMessage = 'testMessage'
			// @ts-expect-error
			expect(typeUtil.exhaustiveMessage(testMessage, '')).toEqual(testMessage)
		})
	})
	describe('exhaustiveError', () => {
		it('should return string', () => {
			const testMessage = 'testMessage'
			// @ts-expect-error
			const error = typeUtil.exhaustiveError(testMessage, '')
			expect(error).toBeInstanceOf(Error)
			expect(error.message).toEqual(testMessage)
		})
	})
})
