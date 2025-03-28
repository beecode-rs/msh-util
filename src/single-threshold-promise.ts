export type AnyFunctionPromiseNoParams<T> = () => Promise<T>

/**
 * SingleThresholdPromise returns a single promise, and subsequent calls made before the promise resolves will return the same promise.
 * @example
 * export const refreshTokenSingleThreshold = new SingleThresholdPromise(async () => {
 *   const oldRefreshToken = await refreshTokenService.get()
 *   const { accessToken, refreshToken } = await authService.refreshToken({
 *     refreshToken: oldRefreshToken,
 *   })
 *   return { accessToken, refreshToken }
 * })
 *
 * export const authService = {
 *   refreshToken: async (): Promise<{ accessToken: string; refreshToken:string }> => {
 *     return refreshTokenSingleThreshold.promise()
 *   }
 * }
 */
export class SingleThresholdPromise<T> {
	protected _cache: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		promises?: { resolve: (value: T | PromiseLike<T>) => void; reject: (reason?: any) => void }[]
	} = {}

	protected _factoryFn: AnyFunctionPromiseNoParams<T>

	constructor(factoryFn: AnyFunctionPromiseNoParams<T>) {
		this._factoryFn = factoryFn
	}

	protected _rejectPromises(): void {
		if (this._cache.promises) {
			this._cache.promises.forEach((promise) => {
				promise.reject(new Error('Cache was cleaned'))
			})
		}
		delete this._cache.promises
	}

	async promise(): Promise<T> {
		if ('promises' in this._cache) {
			return new Promise<T>((resolve, reject) => {
				this._cache.promises!.push({ reject, resolve })
			})
		}

		this._cache.promises = []
		const result = await this._factoryFn().catch((err: unknown) => {
			this._rejectPromises()
			throw err
		})

		this._cache.promises.forEach((promise) => {
			promise.resolve(result)
		})
		delete this._cache.promises

		return result
	}
}
