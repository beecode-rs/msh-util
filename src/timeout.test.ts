import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { timeout } from '#src/timeout'

describe('timeout', () => {
	const fn_one = vi.fn()
	const fn_two = vi.fn()
	const fn_three = vi.fn()
	const fn_onResolve = vi.fn()

	const timeoutImplementation = async (): Promise<void> => {
		fn_one()
		await timeout(1000)
		fn_two()
		await timeout(1000)
		fn_three()
	}

	beforeEach(() => {
		vi.useFakeTimers()
	})

	afterEach(() => {
		vi.clearAllTimers()
		vi.useRealTimers()
	})

	it('should function one by one with pause of 1000ms', async () => {
		expect(fn_one).toHaveBeenCalledTimes(0)
		expect(fn_two).toHaveBeenCalledTimes(0)
		expect(fn_three).toHaveBeenCalledTimes(0)
		expect(fn_onResolve).toHaveBeenCalledTimes(0)

		const promise1 = timeoutImplementation().then(() => {
			return fn_onResolve()
		})

		expect(fn_one).toHaveBeenCalledTimes(1)
		expect(fn_two).toHaveBeenCalledTimes(0)
		expect(fn_three).toHaveBeenCalledTimes(0)
		expect(fn_onResolve).toHaveBeenCalledTimes(0)

		vi.advanceTimersByTime(1000)
		await Promise.resolve()

		expect(fn_one).toHaveBeenCalledTimes(1)
		expect(fn_two).toHaveBeenCalledTimes(1)
		expect(fn_three).toHaveBeenCalledTimes(0)
		expect(fn_onResolve).toHaveBeenCalledTimes(0)

		vi.advanceTimersByTime(1000)
		await Promise.resolve()

		expect(fn_one).toHaveBeenCalledTimes(1)
		expect(fn_two).toHaveBeenCalledTimes(1)
		expect(fn_three).toHaveBeenCalledTimes(1)
		expect(fn_onResolve).toHaveBeenCalledTimes(0)

		await promise1

		expect(fn_one).toHaveBeenCalledTimes(1)
		expect(fn_two).toHaveBeenCalledTimes(1)
		expect(fn_three).toHaveBeenCalledTimes(1)
		expect(fn_onResolve).toHaveBeenCalledTimes(1)
	})
})
