"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayUtil = void 0;
var arrayUtil = exports.arrayUtil = {
  /**
   * Check if array element is not empty
   * @template T
   * @param {T | null | undefined} value
   * @return {value is T}
   * @example
   * const notEmptyArray = [0, 1, 2, null, undefined, ''].filter(arrayUtil.notEmpty)
   * console.log(notEmptyArray)// [0, 1, 2, '']
   */
  notEmpty: function notEmpty(value) {
    return value !== null && value !== undefined;
  },
  /**
   * Check if array element is not falsy
   * @template T
   * @param {T | null | undefined} value
   * @return {value is T}
   * @example
   * const notFalsyArray = [0, 1, 2, null, undefined, ''].filter(arrayUtil.notFalsy)
   * console.log(notFalsyArray)// [1, 2]
   */
  notFalsy: function notFalsy(value) {
    return !!value;
  }
};