export type AnyFunctionNoParamsPromise<R = any> = () => Promise<R>

export class SingleRequestPromise<R = any> {
  protected _cache: {
    promises?: { resolve: (value: R | PromiseLike<R>) => void; reject: (reason?: any) => void }[]
  } = {}

  protected _factory: AnyFunctionNoParamsPromise<R>

  public constructor(factory: AnyFunctionNoParamsPromise<R>) {
    this._factory = factory
  }

  protected _rejectPromises(): void {
    if (this._cache.promises) this._cache.promises.forEach((promise) => promise.reject(new Error('Cache was cleaned')))
    delete this._cache.promises
  }

  public async promise(): Promise<R> {
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

    this._cache.promises.forEach((promise) => promise.resolve(result))
    delete this._cache.promises

    return result
  }
}

export const singleRequestPromiseFactory = (
  ...params: ConstructorParameters<typeof SingleRequestPromise>
): SingleRequestPromise => new SingleRequestPromise(...params)
