"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayUtil = void 0;
exports.arrayUtil = {
    /**
     * Check if array is empty
     * @template T
     * @param {T | null | undefined} value
     * @return {value is T}
     * @example
     * const arrayOfNumbers = [1, 2, undefined, 4, null, 6].filter(arrayUtil.notEmpty))
     * console.log(arrayOfNumbers)// [1, 2, 4, 6]
     */
    notEmpty: (value) => {
        return value !== null && value !== undefined;
    },
};
//# sourceMappingURL=array-util.js.map