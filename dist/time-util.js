import { add } from 'date-fns/add';
import { addMilliseconds } from 'date-fns/addMilliseconds';
import { format } from 'date-fns/format';
import { parse } from 'date-fns/parse';
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
        if (unit === 'MILLISECOND') {
            return addMilliseconds(date, value);
        }
        return add(date, { [`${unit.toLowerCase()}s`]: value });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3RpbWUtdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sY0FBYyxDQUFBO0FBQ2xDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQTtBQUMxRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDeEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBRXRDLE1BQU0sQ0FBTixJQUFZLFlBU1g7QUFURCxXQUFZLFlBQVk7SUFDdkIsMkNBQTJCLENBQUE7SUFDM0IsaUNBQWlCLENBQUE7SUFDakIsaUNBQWlCLENBQUE7SUFDakIsNkJBQWEsQ0FBQTtJQUNiLDJCQUFXLENBQUE7SUFDWCw2QkFBYSxDQUFBO0lBQ2IsK0JBQWUsQ0FBQTtJQUNmLDZCQUFhLENBQUE7QUFDZCxDQUFDLEVBVFcsWUFBWSxLQUFaLFlBQVksUUFTdkI7QUFJRCxNQUFNLE9BQU8sUUFBUTtJQUNwQjs7Ozs7T0FLRztJQUNILEdBQUc7UUFDRixPQUFPLElBQUksSUFBSSxFQUFFLENBQUE7SUFDbEIsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsVUFBVSxDQUFDLElBQVU7UUFDcEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDMUIsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsYUFBYSxDQUFDLElBQVU7UUFDdkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDMUIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxVQUFVLENBQUMsSUFBWTtRQUN0QixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsYUFBYSxDQUFDLElBQVk7UUFDekIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0gsU0FBUyxDQUFDLE1BQTRFO1FBQ3JGLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLE1BQU0sQ0FBQTtRQUNwQyxJQUFJLElBQUksS0FBSyxhQUFhLEVBQUUsQ0FBQztZQUM1QixPQUFPLGVBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDcEMsQ0FBQztRQUVELE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7SUFDeEQsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWRkIH0gZnJvbSAnZGF0ZS1mbnMvYWRkJ1xuaW1wb3J0IHsgYWRkTWlsbGlzZWNvbmRzIH0gZnJvbSAnZGF0ZS1mbnMvYWRkTWlsbGlzZWNvbmRzJ1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMvZm9ybWF0J1xuaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdkYXRlLWZucy9wYXJzZSdcblxuZXhwb3J0IGVudW0gRHVyYXRpb25Vbml0IHtcblx0TUlMTElTRUNPTkQgPSAnTUlMTElTRUNPTkQnLFxuXHRTRUNPTkQgPSAnU0VDT05EJyxcblx0TUlOVVRFID0gJ01JTlVURScsXG5cdEhPVVIgPSAnSE9VUicsXG5cdERBWSA9ICdEQVknLFxuXHRXRUVLID0gJ1dFRUsnLFxuXHRNT05USCA9ICdNT05USCcsXG5cdFlFQVIgPSAnWUVBUicsXG59XG5cbmV4cG9ydCB0eXBlIER1cmF0aW9uVW5pdFR5cGUgPSBgJHtEdXJhdGlvblVuaXR9YFxuXG5leHBvcnQgY2xhc3MgVGltZVV0aWwge1xuXHQvKipcblx0ICogcmV0dXJuIGRhdGUgb2JqZWN0IHdpdGggdGhlIGN1cnJlbnQgdGltZVxuXHQgKiBAcmV0dXJuIHtEYXRlfVxuXHQgKiBAZXhhbXBsZVxuXHQgKiBjb25zb2xlLmxvZyhuZXcgVGltZVV0aWwoKS5ub3coKS50b0lTT1N0cmluZygpKSAvLyAyMDIzLTAzLTA4VDE5OjQ1OjAxLjk5MVpcblx0ICovXG5cdG5vdygpOiBEYXRlIHtcblx0XHRyZXR1cm4gbmV3IERhdGUoKVxuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnQgZGF0ZSBvYmplY3QgdG8gdW5peCB0aW1lc3RhbXAgKG1pbGxpc2Vjb25kcylcblx0ICogQHBhcmFtIHtEYXRlfSBkYXRlXG5cdCAqIEByZXR1cm4ge251bWJlcn1cblx0ICogQGV4YW1wbGVcblx0ICogLy8gdGltZVV0aWwubm93KCkudG9JU09TdHJpbmcoKSA9PT0gMjAyMy0wMy0wOFQxOTo0NTowMS45OTFaXG5cdCAqIGNvbnN0IHRpbWVVdGlsID0gbmV3IFRpbWVVdGlsKClcblx0ICogY29uc29sZS5sb2codGltZVV0aWwuZGF0ZVRvVW5peCh0aW1lVXRpbC5ub3coKSkpIC8vIDE2NzgzMDQ3MDE5OTFcblx0ICovXG5cdGRhdGVUb1VuaXgoZGF0ZTogRGF0ZSk6IG51bWJlciB7XG5cdFx0cmV0dXJuICtmb3JtYXQoZGF0ZSwgJ1QnKVxuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnQgZGF0ZSBvYmplY3QgdG8gdW5peCB0aW1lc3RhbXAgKHNlY29uZHMpXG5cdCAqIEBwYXJhbSB7RGF0ZX0gZGF0ZVxuXHQgKiBAcmV0dXJuIHtudW1iZXJ9XG5cdCAqIEBleGFtcGxlXG5cdCAqIC8vIHRpbWVVdGlsLm5vdygpLnRvSVNPU3RyaW5nKCkgPT09IDIwMjMtMDMtMDhUMTk6NDU6MDEuOTkxWlxuXHQgKiBjb25zdCB0aW1lVXRpbCA9IG5ldyBUaW1lVXRpbCgpXG5cdCAqIGNvbnNvbGUubG9nKHRpbWVVdGlsLmRhdGVUb1VuaXgodGltZVV0aWwubm93KCkpKSAvLyAxNjc4MzA0NzAxXG5cdCAqL1xuXHRkYXRlVG9Vbml4U2VjKGRhdGU6IERhdGUpOiBudW1iZXIge1xuXHRcdHJldHVybiArZm9ybWF0KGRhdGUsICd0Jylcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0IHVuaXggdGltZXN0YW1wIChtaWxsaXNlY29uZHMpIHRvIGRhdGUgb2JqZWN0XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB1bml4XG5cdCAqIEByZXR1cm4ge0RhdGV9XG5cdCAqIEBleGFtcGxlXG5cdCAqIGNvbnN0IHRpbWVVdGlsID0gbmV3IFRpbWVVdGlsKClcblx0ICogY29uc29sZS5sb2codGltZVV0aWwudW5peFRvRGF0ZSgxNjc4MzA0NzAxOTkxKS50b0lTT1N0cmluZygpKSAvLyAyMDIzLTAzLTA4VDE5OjQ1OjAxLjk5MVpcblx0ICovXG5cdHVuaXhUb0RhdGUodW5peDogbnVtYmVyKTogRGF0ZSB7XG5cdFx0cmV0dXJuIHBhcnNlKHVuaXgudG9TdHJpbmcoKSwgJ1QnLCB0aGlzLm5vdygpKVxuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnQgdW5peCB0aW1lc3RhbXAgKHNlY29uZHMpIHRvIGRhdGUgb2JqZWN0XG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB1bml4XG5cdCAqIEByZXR1cm4ge0RhdGV9XG5cdCAqIEBleGFtcGxlXG5cdCAqIGNvbnN0IHRpbWVVdGlsID0gbmV3IFRpbWVVdGlsKClcblx0ICogY29uc29sZS5sb2codGltZVV0aWwudW5peFRvRGF0ZSgxNjc4MzA0NzAxKS50b0lTT1N0cmluZygpKSAvLyAyMDIzLTAzLTA4VDE5OjQ1OjAxLjAwMFpcblx0ICovXG5cdHVuaXhTZWNUb0RhdGUodW5peDogbnVtYmVyKTogRGF0ZSB7XG5cdFx0cmV0dXJuIHBhcnNlKHVuaXgudG9TdHJpbmcoKSwgJ3QnLCB0aGlzLm5vdygpKVxuXHR9XG5cblx0LyoqXG5cdCAqIENoYW5nZSB0aGUgdmFsdWUgb2YgZGF0ZSBieSB1bml0L3ZhbHVlIHBhcmUuXG5cdCAqIEBwYXJhbSB7e3VuaXRzOiBEdXJhdGlvblVuaXRUeXBlLCB2YWx1ZTogbnVtYmVyLCBkYXRlOiBEYXRlfX0gcGFyYW1zXG5cdCAqIEByZXR1cm4ge0RhdGV9XG5cdCAqIEBleGFtcGxlXG5cdCAqIC8vIHRpbWVVdGlsLm5vdygpLnRvSVNPU3RyaW5nKCkgPT09IDIwMjMtMDMtMDhUMTk6NDU6MDEuOTkxWlxuXHQgKiBjb25zdCB0aW1lVXRpbCA9IG5ldyBUaW1lVXRpbCgpXG5cdCAqIGNvbnNvbGUubG9nKHRpbWVVdGlsLmFkZFRvRGF0ZSh7ZGF0ZTogdGltZVV0aWwubm93KCksIHVuaXQ6ICdEQVknLCB2YWx1ZTogMSB9KS50b0lTT1N0cmluZygpKSAvLyAyMDIzLTAzLTA5VDE5OjQ1OjAxLjk5MVpcblx0ICogY29uc29sZS5sb2codGltZVV0aWwuYWRkVG9EYXRlKHtkYXRlOiB0aW1lVXRpbC5ub3coKSwgdW5pdDogRHVyYXRpb25Vbml0Lk1PTlRILCB2YWx1ZTogLTEgfSkudG9JU09TdHJpbmcoKSkgLy8yMDIzLTAyLTA4VDE5OjQ1OjAxLjk5MVpcblx0ICovXG5cdGFkZFRvRGF0ZShwYXJhbXM6IHsgdW5pdDogRHVyYXRpb25Vbml0VHlwZSB8IER1cmF0aW9uVW5pdDsgdmFsdWU6IG51bWJlcjsgZGF0ZTogRGF0ZSB9KTogRGF0ZSB7XG5cdFx0Y29uc3QgeyBkYXRlLCB1bml0LCB2YWx1ZSB9ID0gcGFyYW1zXG5cdFx0aWYgKHVuaXQgPT09ICdNSUxMSVNFQ09ORCcpIHtcblx0XHRcdHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGF0ZSwgdmFsdWUpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFkZChkYXRlLCB7IFtgJHt1bml0LnRvTG93ZXJDYXNlKCl9c2BdOiB2YWx1ZSB9KVxuXHR9XG59XG4iXX0=