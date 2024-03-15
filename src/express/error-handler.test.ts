import { expressErrorHandler } from './error-handler'
import { afterEach, describe, expect, it, jest } from '@jest/globals'

describe('expressErrorHandler', () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const fake_fn = jest.fn<() => Promise<any>>()
	const fake_req = jest.fn()
	const fake_res = jest.fn()
	const fake_next = jest.fn()

	class FakeExpressController {
		// @ts-ignore TODO: EMS: check this error
		@expressErrorHandler
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		async login(_req: any, _res: any, _next: any): Promise<any> {
			return fake_fn()
		}
	}
	const fakeExpressControllerInstance = new FakeExpressController()

	afterEach(() => {
		jest.resetAllMocks()
	})

	it('should call next with error if async function throws error', async () => {
		const error = new Error()
		fake_fn.mockRejectedValue(error)

		await fakeExpressControllerInstance.login(fake_req, fake_res, fake_next)

		expect(fake_fn).toHaveBeenCalledTimes(1)
		expect(fake_req).not.toHaveBeenCalled()
		expect(fake_res).not.toHaveBeenCalled()
		expect(fake_next).toHaveBeenCalledTimes(1)
		expect(fake_next).toHaveBeenCalledWith(error)
	})

	it('should work as usual if async function resolves promise', async () => {
		const expected = { successful: true }
		fake_fn.mockResolvedValue(expected)

		const result = await fakeExpressControllerInstance.login(fake_req, fake_res, fake_next)

		expect(fake_fn).toHaveBeenCalledTimes(1)
		expect(fake_req).not.toHaveBeenCalled()
		expect(fake_res).not.toHaveBeenCalled()
		expect(fake_next).not.toHaveBeenCalled()
		expect(result).toBe(expected)
	})
})
