import { AnyFunctionPromiseNoParams } from 'src/types/any-function/promise-no-params'

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
    promises?: { resolve: (value: T | PromiseLike<T>) => void; reject: (reason?: any) => void }[]
  } = {}

  protected _factory: AnyFunctionPromiseNoParams<T>

  constructor(factory: AnyFunctionPromiseNoParams<T>) {
    this._factory = factory
  }

  protected _rejectPromises(): void {
    if (this._cache.promises) this._cache.promises.forEach((promise) => promise.reject(new Error('Cache was cleaned')))
    delete this._cache.promises
  }

  async promise(): Promise<T> {
    if ('promises' in this._cache) {
      return new Promise<T>((resolve, reject) => {
        this._cache.promises!.push({ resolve, reject })
      })
    }

    this._cache.promises = []
    const result = await this._factory().catch((err) => {
      this._rejectPromises()
      throw err
    })

    this._cache.promises.forEach((promise) => promise.resolve(result))
    delete this._cache.promises

    return result
  }
}
