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

  public cleanCache(): void {
    delete this._cache.resolvers
    delete this._cache.singleton
  }

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
}

export const singletonAsyncFactory = (...params: ConstructorParameters<typeof SingletonAsync>): SingletonAsync =>
  new SingletonAsync(...params)
