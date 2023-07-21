import { jest } from '@jest/globals'

import { singletonPattern } from '#/singleton/pattern.js'

describe('singletonPattern', () => {
	it('should call factory function only once', () => {
		const factoryResult = { successful: true }
		const factoryFn = jest.fn().mockImplementation(() => {
			return factoryResult
		})
		const singletonImplementation = singletonPattern(factoryFn)
		expect(factoryFn).not.toHaveBeenCalled()
		expect(singletonImplementation()).toBe(factoryResult)
		expect(factoryFn).toHaveBeenCalledTimes(1)
		expect(singletonImplementation()).toBe(factoryResult)
		expect(factoryFn).toHaveBeenCalledTimes(1)
	})
})
