import add from 'date-fns/add/index.js';
import addMilliseconds from 'date-fns/addMilliseconds/index.js';
import format from 'date-fns/format/index.js';
import parse from 'date-fns/parse/index.js';
export var DurationUnit;
(function (DurationUnit) {
    DurationUnit["MILLISECOND"] = "MILLISECOND";
    DurationUnit["SECOND"] = "SECOND";
    DurationUnit["MINUTE"] = "MINUTE";
    DurationUnit["HOUR"] = "HOUR";
    DurationUnit["DAY"] = "DAY";
    DurationUnit["WEEK"] = "WEEK";
    DurationUnit["MONTH"] = "MONTH";
    DurationUnit["YEAR"] = "YEAR";
})(DurationUnit || (DurationUnit = {}));
export class TimeUtil {
    /**
     * return date object with the current time
     * @return {Date}
     * @example
     * console.log(new TimeUtil().now().toISOString()) // 2023-03-08T19:45:01.991Z
     */
    now() {
        return new Date();
    }
    /**
     * Convert date object to unix timestamp (milliseconds)
     * @param {Date} date
     * @return {number}
     * @example
     * // timeUtil.now().toISOString() === 2023-03-08T19:45:01.991Z
     * const timeUtil = new TimeUtil()
     * console.log(timeUtil.dateToUnix(timeUtil.now())) // 1678304701991
     */
    dateToUnix(date) {
        return +format(date, 'T');
    }
    /**
     * Convert date object to unix timestamp (seconds)
     * @param {Date} date
     * @return {number}
     * @example
     * // timeUtil.now().toISOString() === 2023-03-08T19:45:01.991Z
     * const timeUtil = new TimeUtil()
     * console.log(timeUtil.dateToUnix(timeUtil.now())) // 1678304701
     */
    dateToUnixSec(date) {
        return +format(date, 't');
    }
    /**
     * Convert unix timestamp (milliseconds) to date object
     * @param {number} unix
     * @return {Date}
     * @example
     * const timeUtil = new TimeUtil()
     * console.log(timeUtil.unixToDate(1678304701991).toISOString()) // 2023-03-08T19:45:01.991Z
     */
    unixToDate(unix) {
        return parse(unix.toString(), 'T', this.now());
    }
    /**
     * Convert unix timestamp (seconds) to date object
     * @param {number} unix
     * @return {Date}
     * @example
     * const timeUtil = new TimeUtil()
     * console.log(timeUtil.unixToDate(1678304701).toISOString()) // 2023-03-08T19:45:01.000Z
     */
    unixSecToDate(unix) {
        return parse(unix.toString(), 't', this.now());
    }
    /**
     * Change the value of date by unit/value pare.
     * @param {{units: DurationUnitType, value: number, date: Date}} params
     * @return {Date}
     * @example
     * // timeUtil.now().toISOString() === 2023-03-08T19:45:01.991Z
     * const timeUtil = new TimeUtil()
     * console.log(timeUtil.addToDate({date: timeUtil.now(), unit: 'DAY', value: 1 }).toISOString()) // 2023-03-09T19:45:01.991Z
     * console.log(timeUtil.addToDate({date: timeUtil.now(), unit: DurationUnit.MONTH, value: -1 }).toISOString()) //2023-02-08T19:45:01.991Z
     */
    addToDate(params) {
        const { date, unit, value } = params;
        if (`${unit}` === 'MILLISECOND') {
            return addMilliseconds(date, value);
        }
        return add(date, { [`${unit.toLowerCase()}s`]: value });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3RpbWUtdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEdBQUcsTUFBTSx1QkFBdUIsQ0FBQTtBQUN2QyxPQUFPLGVBQWUsTUFBTSxtQ0FBbUMsQ0FBQTtBQUMvRCxPQUFPLE1BQU0sTUFBTSwwQkFBMEIsQ0FBQTtBQUM3QyxPQUFPLEtBQUssTUFBTSx5QkFBeUIsQ0FBQTtBQUUzQyxNQUFNLENBQU4sSUFBWSxZQVNYO0FBVEQsV0FBWSxZQUFZO0lBQ3ZCLDJDQUEyQixDQUFBO0lBQzNCLGlDQUFpQixDQUFBO0lBQ2pCLGlDQUFpQixDQUFBO0lBQ2pCLDZCQUFhLENBQUE7SUFDYiwyQkFBVyxDQUFBO0lBQ1gsNkJBQWEsQ0FBQTtJQUNiLCtCQUFlLENBQUE7SUFDZiw2QkFBYSxDQUFBO0FBQ2QsQ0FBQyxFQVRXLFlBQVksS0FBWixZQUFZLFFBU3ZCO0FBSUQsTUFBTSxPQUFPLFFBQVE7SUFDcEI7Ozs7O09BS0c7SUFDSCxHQUFHO1FBQ0YsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFBO0lBQ2xCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILFVBQVUsQ0FBQyxJQUFVO1FBQ3BCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILGFBQWEsQ0FBQyxJQUFVO1FBQ3ZCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsVUFBVSxDQUFDLElBQVk7UUFDdEIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILGFBQWEsQ0FBQyxJQUFZO1FBQ3pCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILFNBQVMsQ0FBQyxNQUE0RTtRQUNyRixNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUE7UUFDcEMsSUFBSSxHQUFHLElBQUksRUFBRSxLQUFLLGFBQWEsRUFBRSxDQUFDO1lBQ2pDLE9BQU8sZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNwQyxDQUFDO1FBRUQsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRkIGZyb20gJ2RhdGUtZm5zL2FkZC9pbmRleC5qcydcbmltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSAnZGF0ZS1mbnMvYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzJ1xuaW1wb3J0IGZvcm1hdCBmcm9tICdkYXRlLWZucy9mb3JtYXQvaW5kZXguanMnXG5pbXBvcnQgcGFyc2UgZnJvbSAnZGF0ZS1mbnMvcGFyc2UvaW5kZXguanMnXG5cbmV4cG9ydCBlbnVtIER1cmF0aW9uVW5pdCB7XG5cdE1JTExJU0VDT05EID0gJ01JTExJU0VDT05EJyxcblx0U0VDT05EID0gJ1NFQ09ORCcsXG5cdE1JTlVURSA9ICdNSU5VVEUnLFxuXHRIT1VSID0gJ0hPVVInLFxuXHREQVkgPSAnREFZJyxcblx0V0VFSyA9ICdXRUVLJyxcblx0TU9OVEggPSAnTU9OVEgnLFxuXHRZRUFSID0gJ1lFQVInLFxufVxuXG5leHBvcnQgdHlwZSBEdXJhdGlvblVuaXRUeXBlID0gYCR7RHVyYXRpb25Vbml0fWBcblxuZXhwb3J0IGNsYXNzIFRpbWVVdGlsIHtcblx0LyoqXG5cdCAqIHJldHVybiBkYXRlIG9iamVjdCB3aXRoIHRoZSBjdXJyZW50IHRpbWVcblx0ICogQHJldHVybiB7RGF0ZX1cblx0ICogQGV4YW1wbGVcblx0ICogY29uc29sZS5sb2cobmV3IFRpbWVVdGlsKCkubm93KCkudG9JU09TdHJpbmcoKSkgLy8gMjAyMy0wMy0wOFQxOTo0NTowMS45OTFaXG5cdCAqL1xuXHRub3coKTogRGF0ZSB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlKClcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0IGRhdGUgb2JqZWN0IHRvIHVuaXggdGltZXN0YW1wIChtaWxsaXNlY29uZHMpXG5cdCAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuXHQgKiBAcmV0dXJuIHtudW1iZXJ9XG5cdCAqIEBleGFtcGxlXG5cdCAqIC8vIHRpbWVVdGlsLm5vdygpLnRvSVNPU3RyaW5nKCkgPT09IDIwMjMtMDMtMDhUMTk6NDU6MDEuOTkxWlxuXHQgKiBjb25zdCB0aW1lVXRpbCA9IG5ldyBUaW1lVXRpbCgpXG5cdCAqIGNvbnNvbGUubG9nKHRpbWVVdGlsLmRhdGVUb1VuaXgodGltZVV0aWwubm93KCkpKSAvLyAxNjc4MzA0NzAxOTkxXG5cdCAqL1xuXHRkYXRlVG9Vbml4KGRhdGU6IERhdGUpOiBudW1iZXIge1xuXHRcdHJldHVybiArZm9ybWF0KGRhdGUsICdUJylcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0IGRhdGUgb2JqZWN0IHRvIHVuaXggdGltZXN0YW1wIChzZWNvbmRzKVxuXHQgKiBAcGFyYW0ge0RhdGV9IGRhdGVcblx0ICogQHJldHVybiB7bnVtYmVyfVxuXHQgKiBAZXhhbXBsZVxuXHQgKiAvLyB0aW1lVXRpbC5ub3coKS50b0lTT1N0cmluZygpID09PSAyMDIzLTAzLTA4VDE5OjQ1OjAxLjk5MVpcblx0ICogY29uc3QgdGltZVV0aWwgPSBuZXcgVGltZVV0aWwoKVxuXHQgKiBjb25zb2xlLmxvZyh0aW1lVXRpbC5kYXRlVG9Vbml4KHRpbWVVdGlsLm5vdygpKSkgLy8gMTY3ODMwNDcwMVxuXHQgKi9cblx0ZGF0ZVRvVW5peFNlYyhkYXRlOiBEYXRlKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gK2Zvcm1hdChkYXRlLCAndCcpXG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydCB1bml4IHRpbWVzdGFtcCAobWlsbGlzZWNvbmRzKSB0byBkYXRlIG9iamVjdFxuXHQgKiBAcGFyYW0ge251bWJlcn0gdW5peFxuXHQgKiBAcmV0dXJuIHtEYXRlfVxuXHQgKiBAZXhhbXBsZVxuXHQgKiBjb25zdCB0aW1lVXRpbCA9IG5ldyBUaW1lVXRpbCgpXG5cdCAqIGNvbnNvbGUubG9nKHRpbWVVdGlsLnVuaXhUb0RhdGUoMTY3ODMwNDcwMTk5MSkudG9JU09TdHJpbmcoKSkgLy8gMjAyMy0wMy0wOFQxOTo0NTowMS45OTFaXG5cdCAqL1xuXHR1bml4VG9EYXRlKHVuaXg6IG51bWJlcik6IERhdGUge1xuXHRcdHJldHVybiBwYXJzZSh1bml4LnRvU3RyaW5nKCksICdUJywgdGhpcy5ub3coKSlcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0IHVuaXggdGltZXN0YW1wIChzZWNvbmRzKSB0byBkYXRlIG9iamVjdFxuXHQgKiBAcGFyYW0ge251bWJlcn0gdW5peFxuXHQgKiBAcmV0dXJuIHtEYXRlfVxuXHQgKiBAZXhhbXBsZVxuXHQgKiBjb25zdCB0aW1lVXRpbCA9IG5ldyBUaW1lVXRpbCgpXG5cdCAqIGNvbnNvbGUubG9nKHRpbWVVdGlsLnVuaXhUb0RhdGUoMTY3ODMwNDcwMSkudG9JU09TdHJpbmcoKSkgLy8gMjAyMy0wMy0wOFQxOTo0NTowMS4wMDBaXG5cdCAqL1xuXHR1bml4U2VjVG9EYXRlKHVuaXg6IG51bWJlcik6IERhdGUge1xuXHRcdHJldHVybiBwYXJzZSh1bml4LnRvU3RyaW5nKCksICd0JywgdGhpcy5ub3coKSlcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGFuZ2UgdGhlIHZhbHVlIG9mIGRhdGUgYnkgdW5pdC92YWx1ZSBwYXJlLlxuXHQgKiBAcGFyYW0ge3t1bml0czogRHVyYXRpb25Vbml0VHlwZSwgdmFsdWU6IG51bWJlciwgZGF0ZTogRGF0ZX19IHBhcmFtc1xuXHQgKiBAcmV0dXJuIHtEYXRlfVxuXHQgKiBAZXhhbXBsZVxuXHQgKiAvLyB0aW1lVXRpbC5ub3coKS50b0lTT1N0cmluZygpID09PSAyMDIzLTAzLTA4VDE5OjQ1OjAxLjk5MVpcblx0ICogY29uc3QgdGltZVV0aWwgPSBuZXcgVGltZVV0aWwoKVxuXHQgKiBjb25zb2xlLmxvZyh0aW1lVXRpbC5hZGRUb0RhdGUoe2RhdGU6IHRpbWVVdGlsLm5vdygpLCB1bml0OiAnREFZJywgdmFsdWU6IDEgfSkudG9JU09TdHJpbmcoKSkgLy8gMjAyMy0wMy0wOVQxOTo0NTowMS45OTFaXG5cdCAqIGNvbnNvbGUubG9nKHRpbWVVdGlsLmFkZFRvRGF0ZSh7ZGF0ZTogdGltZVV0aWwubm93KCksIHVuaXQ6IER1cmF0aW9uVW5pdC5NT05USCwgdmFsdWU6IC0xIH0pLnRvSVNPU3RyaW5nKCkpIC8vMjAyMy0wMi0wOFQxOTo0NTowMS45OTFaXG5cdCAqL1xuXHRhZGRUb0RhdGUocGFyYW1zOiB7IHVuaXQ6IER1cmF0aW9uVW5pdFR5cGUgfCBEdXJhdGlvblVuaXQ7IHZhbHVlOiBudW1iZXI7IGRhdGU6IERhdGUgfSk6IERhdGUge1xuXHRcdGNvbnN0IHsgZGF0ZSwgdW5pdCwgdmFsdWUgfSA9IHBhcmFtc1xuXHRcdGlmIChgJHt1bml0fWAgPT09ICdNSUxMSVNFQ09ORCcpIHtcblx0XHRcdHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGF0ZSwgdmFsdWUpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFkZChkYXRlLCB7IFtgJHt1bml0LnRvTG93ZXJDYXNlKCl9c2BdOiB2YWx1ZSB9KVxuXHR9XG59XG4iXX0=