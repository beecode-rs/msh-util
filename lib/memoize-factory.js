"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoizeFactory = void 0;
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
const memoizeFactory = (factoryFn) => {
    const cache = {};
    return ((...args) => {
        const key = JSON.stringify(args);
        if (key in cache)
            return cache[key];
        return (cache[key] = factoryFn(...args));
    });
};
exports.memoizeFactory = memoizeFactory;
//# sourceMappingURL=memoize-factory.js.map