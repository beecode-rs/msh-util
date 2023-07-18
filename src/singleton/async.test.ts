import { jest } from '@jest/globals'

import { SingletonAsync } from '#singleton/async.js'
import { timeout } from '#timeout.js'

describe('SingletonAsync', () => {
	const fakeResult = { sucessful: true }
	const fake_asyncFactoryFn = jest.fn<() => Promise<unknown>>()
	const fake_asyncRejectFactoryFn = jest.fn<() => Promise<unknown>>()
	beforeEach(() => {
		jest.useFakeTimers()
		fake_asyncFactoryFn.mockImplementation(async (): Promise<{ sucessful: boolean }> => {
			await timeout(1000)

			return fakeResult
		})
		fake_asyncRejectFactoryFn.mockImplementation(async (): Promise<{ sucessful: boolean }> => {
			await timeout(1000)
			throw new Error()
		})
	})

	afterEach(() => {
		jest.clearAllTimers()
		jest.useRealTimers()
		jest.resetAllMocks()
	})
	describe('promise', () => {
		it('should return promised value', async () => {
			const singletonImplementation = new SingletonAsync(fake_asyncFactoryFn)
			expect(fake_asyncFactoryFn).not.toHaveBeenCalled()
			const promise = singletonImplementation.promise()
			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(1)
			jest.runAllTimers()
			expect(await promise).toBe(fakeResult)
		})

		it('should subscribe multiple calls to the same promise if promise still not resolved', async () => {
			const singletonImplementation = new SingletonAsync(fake_asyncFactoryFn)
			expect(fake_asyncFactoryFn).not.toHaveBeenCalled()
			const promise1 = singletonImplementation.promise()
			const promise2 = singletonImplementation.promise()
			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(1)

			jest.runAllTimers()
			expect(await promise1).toBe(fakeResult)
			expect(await promise2).toBe(fakeResult)
		})

		it('should second call after promise is resolved should return cache value', async () => {
			const singletonImplementation = new SingletonAsync(fake_asyncFactoryFn)
			expect(fake_asyncFactoryFn).not.toHaveBeenCalled()
			const promise1 = singletonImplementation.promise()
			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(1)

			jest.runAllTimers()
			expect(await promise1).toBe(fakeResult)

			const promise2 = singletonImplementation.promise()
			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(1)
			jest.runAllTimers()
			expect(await promise2).toBe(fakeResult)
		})

		it('should reject all subscribers to promise if it is rejected', async () => {
			const singletonImplementation = new SingletonAsync(fake_asyncRejectFactoryFn)
			expect(fake_asyncRejectFactoryFn).not.toHaveBeenCalled()
			const promise1 = singletonImplementation.promise()
			const promise2 = singletonImplementation.promise()
			expect(fake_asyncRejectFactoryFn).toHaveBeenCalledTimes(1)

			jest.runAllTimers()
			await promise1.then(() => expect.fail('test failed')).catch(() => undefined)
			await promise2.then(() => expect.fail('test failed')).catch(() => undefined)
		})
	})
	describe('cached', () => {
		it('should return undefined if promise is never called', () => {
			const singletonImplementation = new SingletonAsync(fake_asyncFactoryFn)
			expect(fake_asyncFactoryFn).not.toHaveBeenCalled()
			expect(singletonImplementation.cached()).toBeUndefined()
		})
		it('should cache result of the promise', async () => {
			const singletonImplementation = new SingletonAsync(fake_asyncFactoryFn)
			expect(fake_asyncFactoryFn).not.toHaveBeenCalled()

			const promise = singletonImplementation.promise()
			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(1)
			jest.runAllTimers()
			expect(await promise).toBe(fakeResult)
			expect(singletonImplementation.cached()).toBe(fakeResult)
		})
	})
	describe('cleanCache', () => {
		it('should reject all subscribers to the promise if cleanCache is called before promise is resolved', async () => {
			const singletonImplementation = new SingletonAsync(fake_asyncFactoryFn)
			expect(fake_asyncFactoryFn).not.toHaveBeenCalled()
			const promise1 = singletonImplementation.promise().catch(() => undefined)
			const promise2 = singletonImplementation.promise().catch(() => undefined)
			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(1)
			singletonImplementation.cleanCache()
			jest.runAllTimers()
			await promise1.then(() => expect.fail('test failed'))
			await promise2.then(() => expect.fail('test failed'))
		})

		it('should clean cache and after the clean cache factory should be called again on promise', async () => {
			const singletonImplementation = new SingletonAsync(fake_asyncFactoryFn)
			expect(fake_asyncFactoryFn).not.toHaveBeenCalled()
			const promise1 = singletonImplementation.promise()
			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(1)
			jest.runAllTimers()
			expect(await promise1).toBe(fakeResult)
			expect(singletonImplementation.cached()).toBe(fakeResult)
			singletonImplementation.cleanCache()
			expect(singletonImplementation.cached()).toBeUndefined()

			const promise2 = singletonImplementation.promise()
			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(2)
			jest.runAllTimers()
			expect(await promise2).toBe(fakeResult)
		})
	})
})
