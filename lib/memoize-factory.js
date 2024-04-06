"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.memoizeFactory = void 0;
// eslint-disable-next-line @typescript-eslint/no-explicit-any

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
var memoizeFactory = exports.memoizeFactory = function memoizeFactory(factoryFn) {
  var cache = {};
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    return cache[key] = factoryFn.apply(void 0, args);
  };
};