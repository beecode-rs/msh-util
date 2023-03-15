import { AnyFunctionPromiseNoParams } from 'src/types/any-function/promise-no-params'

/**
 * This is a singleton wrapper that is used to wrap around async function. We have additional functionality to clear the cache
 * and reject any subscriptions to initial promise. And we can also check if there is anything i cache
 * @example
 * export const configSingleton = new SingletonAsync(async () => {
 *   await timeout(3000)
 *   return {
 *     env: process.env.NODE_ENV
 *   } as const
 * })
 *
 * // using
 * // cache value before we call promise
 * console.log(configSingleton().cache()) // undefined
 * console.log('NODE_ENV: ', await configSingleton().promise().env) // NODE_ENV: prod
 * // cache value after we call promise
 * console.log(configSingleton().cache()) // { env: 'prod' }
 */
export class SingletonAsync<T> {
  protected _cache: {
    singleton?: T
    promises?: { resolve: (value: T | PromiseLike<T>) => void; reject: (reason?: any) => void }[]
  } = {}

  protected _factory: AnyFunctionPromiseNoParams<T>

  constructor(factory: AnyFunctionPromiseNoParams<T>) {
    this._factory = factory
  }

  /**
   * Empty cached value and reject any subscribed promise that is waiting for the initial promise to be resolved.
   */
  cleanCache(): void {
    delete this._cache.singleton
    this._rejectPromises({ error: new Error('Cache was cleaned') })
  }

  protected _rejectPromises(params: { error: Error }): void {
    const { error } = params

    if (this._cache.promises) {
      this._cache.promises.forEach((promise) => promise.reject(error))
    }
    delete this._cache.promises
  }

  /**
   * Return singleton value in a promise. If there is no cached value then try to get it from factory.
   * @template T
   * @returns {Promise<T>}
   */
  async promise(): Promise<T> {
    if ('singleton' in this._cache) {
      return this._cache.singleton!
    }
    if ('promises' in this._cache) {
      return new Promise<T>((resolve, reject) => {
        this._cache.promises!.push({ resolve, reject })
      })
    }

    this._cache.promises = []
    const result = await this._factory().catch((error) => {
      this._rejectPromises({ error })
      throw error
    })
    this._cache.singleton = result

    this._cache.promises.forEach((promise) => promise.resolve(result))
    delete this._cache.promises

    return result
  }

  /**
   * Return cached value, if there is no value cached return undefined.
   * @template T
   * @returns {T | undefined}
   */
  cached(): T | undefined {
    if ('singleton' in this._cache) {
      return this._cache.singleton!
    }

    return undefined
  }
}
