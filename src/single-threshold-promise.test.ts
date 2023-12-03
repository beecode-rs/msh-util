import { jest } from '@jest/globals'

import { SingleThresholdPromise } from '#/single-threshold-promise'
import { timeout } from '#/timeout'

describe('SingleThresholdPromise', () => {
	describe('promise', () => {
		let callCounter = 0
		const fake_asyncFactoryFn = jest.fn<() => Promise<unknown>>()
		const fake_asyncRejectFactoryFn = jest.fn<() => Promise<unknown>>()

		beforeEach(() => {
			callCounter = 0
			jest.useFakeTimers()
			fake_asyncFactoryFn.mockImplementation(async (): Promise<{ callCount: number }> => {
				await timeout(1000)

				return { callCount: ++callCounter }
			})
			fake_asyncRejectFactoryFn.mockImplementation(async (): Promise<{ callCount: number }> => {
				await timeout(1000)
				throw new Error()
			})
		})

		afterEach(() => {
			jest.clearAllTimers()
			jest.useRealTimers()
			jest.resetAllMocks()
		})

		it('should return result of the factory function when promise called', async () => {
			const singleThresholdPromiseImplementation = new SingleThresholdPromise(fake_asyncFactoryFn)
			expect(fake_asyncFactoryFn).not.toHaveBeenCalled()

			const promise = singleThresholdPromiseImplementation.promise()
			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(1)
			jest.runAllTimers()
			expect(await promise).toEqual({ callCount: 1 })
			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(1)
		})

		it('should return the same promise result to multiple calls before the first promise is resolved ', async () => {
			const expected = { callCount: 1 }

			const singleThresholdPromiseImplementation = new SingleThresholdPromise(fake_asyncFactoryFn)
			const promise1 = singleThresholdPromiseImplementation.promise()
			const promise2 = singleThresholdPromiseImplementation.promise()
			const promise3 = singleThresholdPromiseImplementation.promise()

			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(1)
			jest.runAllTimers()
			expect(await promise1).toEqual(expected)
			expect(await promise2).toEqual(expected)
			expect(await promise3).toEqual(expected)
			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(1)
		})

		it('should return different promise result to multiple calls if they are called after the promise is resolved', async () => {
			const singleThresholdPromiseImplementation = new SingleThresholdPromise(fake_asyncFactoryFn)

			expect(fake_asyncFactoryFn).not.toHaveBeenCalled()

			const promise1 = singleThresholdPromiseImplementation.promise()
			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(1)
			jest.runAllTimers()
			expect(await promise1).toEqual({ callCount: 1 })

			const promise2 = singleThresholdPromiseImplementation.promise()
			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(2)
			jest.runAllTimers()
			expect(await promise2).toEqual({ callCount: 2 })

			const promise3 = singleThresholdPromiseImplementation.promise()
			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(3)
			jest.runAllTimers()
			expect(await promise3).toEqual({ callCount: 3 })
		})

		it('should reject all if promise is rejected', async () => {
			const singleThresholdPromiseImplementation = new SingleThresholdPromise(fake_asyncRejectFactoryFn)
			const promise1 = singleThresholdPromiseImplementation.promise()
			const promise2 = singleThresholdPromiseImplementation.promise()
			const promise3 = singleThresholdPromiseImplementation.promise()
			expect(fake_asyncRejectFactoryFn).toHaveBeenCalledTimes(1)
			jest.runAllTimers()
			await promise1.then(() => expect.fail('test failed')).catch(() => undefined)
			await promise2.then(() => expect.fail('test failed')).catch(() => undefined)
			await promise3.then(() => expect.fail('test failed')).catch(() => undefined)
			expect(fake_asyncRejectFactoryFn).toHaveBeenCalledTimes(1)
		})
	})
})
