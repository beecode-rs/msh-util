export const arrayUtil = {
    /**
     * Check if array element is not empty
     * @template T
     * @param {T | null | undefined} value
     * @return {value is T}
     * @example
     * const notEmptyArray = [0, 1, 2, null, undefined, ''].filter(arrayUtil.notEmpty)
     * console.log(notEmptyArray)// [0, 1, 2, '']
     */
    notEmpty: (value) => {
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
    notFalsy: (value) => {
        return !!value;
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktdXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hcnJheS11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRztJQUN4Qjs7Ozs7Ozs7T0FRRztJQUNILFFBQVEsRUFBRSxDQUFJLEtBQTJCLEVBQWMsRUFBRTtRQUN4RCxPQUFPLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsQ0FBQTtJQUM3QyxDQUFDO0lBQ0Q7Ozs7Ozs7O09BUUc7SUFDSCxRQUFRLEVBQUUsQ0FBSSxLQUEyQixFQUFjLEVBQUU7UUFDeEQsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFBO0lBQ2YsQ0FBQztDQUNELENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgYXJyYXlVdGlsID0ge1xuXHQvKipcblx0ICogQ2hlY2sgaWYgYXJyYXkgZWxlbWVudCBpcyBub3QgZW1wdHlcblx0ICogQHRlbXBsYXRlIFRcblx0ICogQHBhcmFtIHtUIHwgbnVsbCB8IHVuZGVmaW5lZH0gdmFsdWVcblx0ICogQHJldHVybiB7dmFsdWUgaXMgVH1cblx0ICogQGV4YW1wbGVcblx0ICogY29uc3Qgbm90RW1wdHlBcnJheSA9IFswLCAxLCAyLCBudWxsLCB1bmRlZmluZWQsICcnXS5maWx0ZXIoYXJyYXlVdGlsLm5vdEVtcHR5KVxuXHQgKiBjb25zb2xlLmxvZyhub3RFbXB0eUFycmF5KS8vIFswLCAxLCAyLCAnJ11cblx0ICovXG5cdG5vdEVtcHR5OiA8VD4odmFsdWU6IFQgfCBudWxsIHwgdW5kZWZpbmVkKTogdmFsdWUgaXMgVCA9PiB7XG5cdFx0cmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWRcblx0fSxcblx0LyoqXG5cdCAqIENoZWNrIGlmIGFycmF5IGVsZW1lbnQgaXMgbm90IGZhbHN5XG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqIEBwYXJhbSB7VCB8IG51bGwgfCB1bmRlZmluZWR9IHZhbHVlXG5cdCAqIEByZXR1cm4ge3ZhbHVlIGlzIFR9XG5cdCAqIEBleGFtcGxlXG5cdCAqIGNvbnN0IG5vdEZhbHN5QXJyYXkgPSBbMCwgMSwgMiwgbnVsbCwgdW5kZWZpbmVkLCAnJ10uZmlsdGVyKGFycmF5VXRpbC5ub3RGYWxzeSlcblx0ICogY29uc29sZS5sb2cobm90RmFsc3lBcnJheSkvLyBbMSwgMl1cblx0ICovXG5cdG5vdEZhbHN5OiA8VD4odmFsdWU6IFQgfCBudWxsIHwgdW5kZWZpbmVkKTogdmFsdWUgaXMgVCA9PiB7XG5cdFx0cmV0dXJuICEhdmFsdWVcblx0fSxcbn1cbiJdfQ==