type AnyFunctionNoParamsPromise<R = any> = () => Promise<R>

export class SingletonAsync<R = any> {
  protected _cache: {
    singleton?: R
    promises?: { resolve: (value: R | PromiseLike<R>) => void; reject: (reason?: any) => void }[]
  } = {}

  protected _factory: AnyFunctionNoParamsPromise<R>

  public constructor(factory: AnyFunctionNoParamsPromise<R>) {
    this._factory = factory
  }

  /**
   * Empty cached value.
   */
  public cleanCache(): void {
    delete this._cache.singleton
    this._rejectPromises()
  }

  protected _rejectPromises(): void {
    if (this._cache.promises) this._cache.promises.forEach((promise) => promise.reject(new Error('Cache was cleaned')))
    delete this._cache.promises
  }

  /**
   * Return singleton value in a promise. If there is no cached value then try to get it from factory.
   * @returns {Promise<R>}
   */
  public async promise(): Promise<R> {
    if ('singleton' in this._cache) return this._cache.singleton!
    if ('promises' in this._cache) {
      return new Promise<R>((resolve, reject) => {
        this._cache.promises!.push({ resolve, reject })
      })
    }

    this._cache.promises = []
    const result = await this._factory().catch((err) => {
      this._rejectPromises()
      throw err
    })
    this._cache.singleton = result

    this._cache.promises.forEach((promise) => promise.resolve(result))
    delete this._cache.promises

    return result
  }

  /**
   * Return cached value, if there is no value cached return undefined.
   * @returns {R | undefined}
   */
  public cached(): R | undefined {
    if ('singleton' in this._cache) return this._cache.singleton!
    return undefined
  }
}

export const singletonAsyncFactory = (...params: ConstructorParameters<typeof SingletonAsync>): SingletonAsync =>
  new SingletonAsync(...params)
