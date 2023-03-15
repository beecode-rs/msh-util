import { AnyFunction } from 'src/types/any-function'

/**
 * This is a simple implementation of memoize function that caches result against the parameter passed that are passed to the
 * function so it never runs the same calculation twice.
 * @template F
 * @template R
 * @param {F} factoryFn
 * @return {F: AnyFunction<R>}
 * @example
 * export const sumTwoNumbersMemoize = memoizeFactory((a:number, b:number): number => a + b)
 *
 * // using
 * sumTwoNumbersMemoize(5 + 10) // 15
 */
export const memoizeFactory = <F extends AnyFunction<R>, R>(factoryFn: F): F => {
  const cache: { [k: string]: R } = {}

  return ((...args: Parameters<F>): R => {
    const key = JSON.stringify(args)
    if (key in cache) {
      return cache[key]
    }

    return (cache[key] = factoryFn(...args))
  }) as F
}
