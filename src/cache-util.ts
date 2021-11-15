export type AnyFunction = (...args: any[]) => any

export const cacheUtil = {
  memoize: <T extends AnyFunction>(fun: T): T => {
    const cache: any = {}
    return ((...args: any[]): ReturnType<T> => {
      const stringifiedArgs = JSON.stringify(args)

      if (stringifiedArgs in cache) return cache[stringifiedArgs] as ReturnType<T>

      const result = fun(...args)
      cache[stringifiedArgs] = result
      return result as ReturnType<T>
    }) as T
  },
}
