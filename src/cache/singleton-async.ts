type AnyFunctionNoParamsPromise<R = any> = () => Promise<R>

export class SingletonAsync<R = any> {
  protected _cache: {
    singleton?: R
    resolvers?: ((value: R | PromiseLike<R>) => void)[]
  } = {}

  protected _factory: AnyFunctionNoParamsPromise<R>

  public constructor(factory: AnyFunctionNoParamsPromise<R>) {
    this._factory = factory
  }

  /**
   * Empty cached value.
   */
  public cleanCache(): void {
    delete this._cache.resolvers
    delete this._cache.singleton
  }

  /**
   * Return singleton value in a promise. If there is no cached value then try to get it from factory.
   * @returns {Promise<R>}
   */
  public async promise(): Promise<R> {
    if ('singleton' in this._cache) return this._cache.singleton!
    if ('resolvers' in this._cache) {
      return new Promise<R>((resolve) => {
        this._cache.resolvers!.push(resolve)
      })
    }

    const result = (this._cache.singleton = await this._factory())

    ;(this._cache.resolvers ?? []).forEach((resolve) => resolve(result))
    delete this._cache.resolvers

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
