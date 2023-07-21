import { jest } from '@jest/globals'

import { memoizeFactory } from '#/memoize-factory.js'

describe('memoizeFactory', () => {
	const fake_factoryFn = jest.fn<(a: number, b: number) => number>()

	beforeEach(() => {
		fake_factoryFn.mockImplementation((a: number, b: number): number => {
			return a + b
		})
	})

	afterEach(() => {
		jest.resetAllMocks()
	})

	it('should only call factory function once if the same argument is passed', () => {
		const memoizedImplementation = memoizeFactory(fake_factoryFn)
		expect(fake_factoryFn).not.toHaveBeenCalled()

		expect(memoizedImplementation(1, 2)).toEqual(3)
		expect(fake_factoryFn).toHaveBeenCalledTimes(1)

		expect(memoizedImplementation(1, 2)).toEqual(3)
		expect(fake_factoryFn).toHaveBeenCalledTimes(1)
	})

	it('should call factory as many times as it is called if the arguments are different', () => {
		const memoizedImplementation = memoizeFactory(fake_factoryFn)
		expect(fake_factoryFn).not.toHaveBeenCalled()

		expect(memoizedImplementation(1, 2)).toEqual(3)
		expect(fake_factoryFn).toHaveBeenCalledTimes(1)

		expect(memoizedImplementation(1, 3)).toEqual(4)
		expect(fake_factoryFn).toHaveBeenCalledTimes(2)

		expect(memoizedImplementation(1, 4)).toEqual(5)
		expect(fake_factoryFn).toHaveBeenCalledTimes(3)
	})
})
