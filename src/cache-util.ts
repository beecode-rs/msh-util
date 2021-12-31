export type AnyFunction<R = any> = (...args: any[]) => R
export type AnyFunctionNoParams<R = any> = () => R

export const cacheUtil = {
  memoize: <T extends AnyFunction<R>, R = any>(fun: T): T => {
    const cache: { [k: string]: R } = {}
    return ((...args: Parameters<T>): R => {
      const key = JSON.stringify(args)

      if (key in cache) return cache[key]
      return (cache[key] = fun(...args))
    }) as T
  },
  singleton: <R = any>(fun: AnyFunctionNoParams<R>): AnyFunctionNoParams<R> => {
    const cache: { singleton?: R } = {}

    return (): R => {
      if ('singleton' in cache) return cache.singleton!
      return (cache.singleton = fun())
    }
  },
}
