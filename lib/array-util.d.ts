export declare const arrayUtil: {
    /**
     * Check if array is empty
     * @template T
     * @param {T | null | undefined} value
     * @return {value is T}
     * @example
     * const arrayOfNumbers = [1, 2, undefined, 4, null, 6].filter(arrayUtil.notEmpty))
     * console.log(arrayOfNumbers)// [1, 2, 4, 6]
     */
    notEmpty: <T>(value: T | null | undefined) => value is T;
};
//# sourceMappingURL=array-util.d.ts.map