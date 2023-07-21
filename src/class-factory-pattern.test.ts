import { jest } from '@jest/globals'

import { classFactoryPattern } from '#/class-factory-pattern.js'

describe('factoryPattern', () => {
	const fakeClassMock = jest.fn<(a: string) => { a: string }>()

	beforeEach(() => {
		fakeClassMock.mockImplementation((a: string) => {
			return { a }
		})
	})

	afterEach(() => jest.resetAllMocks())

	it('should return result from factory function', () => {
		const expectedAValue = 'test'
		const factoryPatternImplementation = classFactoryPattern(fakeClassMock)
		expect(fakeClassMock).not.toHaveBeenCalled()
		const result = factoryPatternImplementation(expectedAValue)
		expect(fakeClassMock).toHaveBeenCalledTimes(1)
		expect(result.a).toEqual(expectedAValue)
	})

	it('should call factory function every time the factory implementation is called', () => {
		const expectedAValue = 'test'
		const factoryPatternImplementation = classFactoryPattern(fakeClassMock)
		expect(fakeClassMock).not.toHaveBeenCalled()
		const result1 = factoryPatternImplementation(expectedAValue)
		expect(fakeClassMock).toHaveBeenCalledTimes(1)
		expect(result1.a).toEqual(expectedAValue)

		const result2 = factoryPatternImplementation(expectedAValue)
		expect(fakeClassMock).toHaveBeenCalledTimes(2)
		expect(result2.a).toEqual(expectedAValue)

		const result3 = factoryPatternImplementation(expectedAValue)
		expect(fakeClassMock).toHaveBeenCalledTimes(3)
		expect(result3.a).toEqual(expectedAValue)
	})
})
