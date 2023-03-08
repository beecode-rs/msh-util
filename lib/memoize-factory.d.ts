import { AnyFunction } from './types/any-function';
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
export declare const memoizeFactory: <F extends AnyFunction<R>, R>(factoryFn: F) => F;
//# sourceMappingURL=memoize-factory.d.ts.map