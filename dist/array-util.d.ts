export declare const arrayUtil: {
    /**
     * Check if array element is not empty
     * @template T
     * @param {T | null | undefined} value
     * @return {value is T}
     * @example
     * const notEmptyArray = [0, 1, 2, null, undefined, ''].filter(arrayUtil.notEmpty)
     * console.log(notEmptyArray)// [0, 1, 2, '']
     */
    notEmpty: <T>(value: T | null | undefined) => value is T;
    /**
     * Check if array element is not falsy
     * @template T
     * @param {T | null | undefined} value
     * @return {value is T}
     * @example
     * const notFalsyArray = [0, 1, 2, null, undefined, ''].filter(arrayUtil.notFalsy)
     * console.log(notFalsyArray)// [1, 2]
     */
    notFalsy: <T>(value: T | null | undefined) => value is T;
};
//# sourceMappingURL=array-util.d.ts.map