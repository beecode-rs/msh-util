/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access */
import { describe, expect, it } from 'vitest'

import { classFactoryPattern } from '#src/class-factory-pattern'

class FakeClass {
	readonly a: string

	constructor(a: string) {
		this.a = a
	}
}

describe('factoryPattern', () => {
	it('should return result from factory function', () => {
		const expectedAValue = 'test'
		const factoryPatternImplementation = classFactoryPattern(FakeClass)
		const result = factoryPatternImplementation(expectedAValue)
		expect(result).toBeInstanceOf(FakeClass)
		expect(result.a).toEqual(expectedAValue)
	})

	it('should create new instance every time the factory implementation is called', () => {
		const expectedAValue = 'test'
		const factoryPatternImplementation = classFactoryPattern(FakeClass)
		const result1 = factoryPatternImplementation(expectedAValue)
		expect(result1).toBeInstanceOf(FakeClass)
		expect(result1.a).toEqual(expectedAValue)

		const result2 = factoryPatternImplementation(expectedAValue)
		expect(result2).toBeInstanceOf(FakeClass)
		expect(result2.a).toEqual(expectedAValue)
		expect(result2).not.toBe(result1)

		const result3 = factoryPatternImplementation(expectedAValue)
		expect(result3).toBeInstanceOf(FakeClass)
		expect(result3.a).toEqual(expectedAValue)
		expect(result3).not.toBe(result1)
		expect(result3).not.toBe(result2)
	})
})
