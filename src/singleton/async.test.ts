import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { SingletonAsync } from '#src/singleton/async'
import { timeout } from '#src/timeout'

describe('SingletonAsync', () => {
	const fakeResult = { sucessful: true }
	const fake_asyncFactoryFn = vi.fn()
	const fake_asyncRejectFactoryFn = vi.fn()
	beforeEach(() => {
		vi.useFakeTimers()
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
		vi.clearAllTimers()
		vi.useRealTimers()
	})
	describe('promise', () => {
		it('should return promised value', async () => {
			const singletonImplementation = new SingletonAsync(fake_asyncFactoryFn)
			expect(fake_asyncFactoryFn).not.toHaveBeenCalled()
			const promise = singletonImplementation.promise()
			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(1)
			vi.runAllTimers()
			expect(await promise).toBe(fakeResult)
		})

		it('should subscribe multiple calls to the same promise if promise still not resolved', async () => {
			const singletonImplementation = new SingletonAsync(fake_asyncFactoryFn)
			expect(fake_asyncFactoryFn).not.toHaveBeenCalled()
			const promise1 = singletonImplementation.promise()
			const promise2 = singletonImplementation.promise()
			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(1)

			vi.runAllTimers()
			expect(await promise1).toBe(fakeResult)
			expect(await promise2).toBe(fakeResult)
		})

		it('should second call after promise is resolved should return cache value', async () => {
			const singletonImplementation = new SingletonAsync(fake_asyncFactoryFn)
			expect(fake_asyncFactoryFn).not.toHaveBeenCalled()
			const promise1 = singletonImplementation.promise()
			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(1)

			vi.runAllTimers()
			expect(await promise1).toBe(fakeResult)

			const promise2 = singletonImplementation.promise()
			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(1)
			vi.runAllTimers()
			expect(await promise2).toBe(fakeResult)
		})

		it('should reject all subscribers to promise if it is rejected', async () => {
			const singletonImplementation = new SingletonAsync(fake_asyncRejectFactoryFn)
			expect(fake_asyncRejectFactoryFn).not.toHaveBeenCalled()
			const promise1 = singletonImplementation.promise()
			const promise2 = singletonImplementation.promise()
			expect(fake_asyncRejectFactoryFn).toHaveBeenCalledTimes(1)

			vi.runAllTimers()
			await promise1
				.then(() => {
					throw new Error('test failed')
				})
				.catch(() => undefined)
			await promise2
				.then(() => {
					throw new Error('test failed')
				})
				.catch(() => undefined)
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
			vi.runAllTimers()
			expect(await promise).toBe(fakeResult)
			expect(singletonImplementation.cached()).toBe(fakeResult)
		})
	})
	describe('cleanCache', () => {
		it('should reject all subscribers to the promise if cleanCache is called before promise is resolved', async () => {
			const singletonImplementation = new SingletonAsync(fake_asyncFactoryFn)
			expect(fake_asyncFactoryFn).not.toHaveBeenCalled()
			const promise1 = singletonImplementation.promise()
			const promise2 = singletonImplementation.promise()
			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(1)
			singletonImplementation.cleanCache()
			vi.runAllTimers()
			await promise1
				.then(() => {
					throw new Error('test failed')
				})
				.catch(() => undefined)
			await promise2
				.then(() => {
					throw new Error('test failed')
				})
				.catch(() => undefined)
		})

		it('should clean cache and after the clean cache factory should be called again on promise', async () => {
			const singletonImplementation = new SingletonAsync(fake_asyncFactoryFn)
			expect(fake_asyncFactoryFn).not.toHaveBeenCalled()
			const promise1 = singletonImplementation.promise()
			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(1)
			vi.runAllTimers()
			expect(await promise1).toBe(fakeResult)
			expect(singletonImplementation.cached()).toBe(fakeResult)
			singletonImplementation.cleanCache()
			expect(singletonImplementation.cached()).toBeUndefined()

			const promise2 = singletonImplementation.promise()
			expect(fake_asyncFactoryFn).toHaveBeenCalledTimes(2)
			vi.runAllTimers()
			expect(await promise2).toBe(fakeResult)
		})
	})
})
