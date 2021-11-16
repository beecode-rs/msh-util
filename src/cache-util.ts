export type AnyFunction<R = any> = (...args: any[]) => R
export type AnyFunctionNoParams<R = any> = () => R

export const cacheUtil = {
  memoize: <T extends AnyFunction<R>, R = any>(fun: T): T => {
    const cache: { [k: string]: R } = {}
    return ((...args: Parameters<T>): R => {
      const key = JSON.stringify(args)

      if (key in cache) return cache[key]

      const result = fun(...args)
      cache[key] = result
      return result
    }) as T
  },
  singleton: <R = any>(fun: AnyFunctionNoParams<R>): AnyFunctionNoParams<R> => {
    const cache: { [k: string]: R } = {}
    const key = 'singleton'

    return (): R => {
      if (key in cache) return cache[key]

      const result = fun()
      cache[key] = result
      return result
    }
  },
}
