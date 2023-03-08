"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeUtil = exports.DurationUnit = void 0;
const date_fns_1 = require("date-fns");
var DurationUnit;
(function (DurationUnit) {
    DurationUnit["SECOND"] = "second";
    DurationUnit["MINUTE"] = "minute";
    DurationUnit["HOUR"] = "hour";
    DurationUnit["DAY"] = "day";
    DurationUnit["WEEK"] = "week";
    DurationUnit["MONTH"] = "month";
    DurationUnit["YEAR"] = "year";
})(DurationUnit = exports.DurationUnit || (exports.DurationUnit = {}));
class TimeUtil {
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
        return +(0, date_fns_1.format)(date, 'T');
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
        return +(0, date_fns_1.format)(date, 't');
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
        return (0, date_fns_1.parse)(unix.toString(), 'T', this.now());
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
        return (0, date_fns_1.parse)(unix.toString(), 't', this.now());
    }
    /**
     * Change the value of date by unit/value pare.
     * @param {{units: DurationUnitType, value: number, date: Date}} params
     * @return {Date}
     * @example
     * // timeUtil.now().toISOString() === 2023-03-08T19:45:01.991Z
     * const timeUtil = new TimeUtil()
     * console.log(timeUtil.addToDate({date: timeUtil.now(), unit: 'day', value: 1 }).toISOString()) // 2023-03-09T19:45:01.991Z
     * console.log(timeUtil.addToDate({date: timeUtil.now(), unit: DurationUnit.MONTH, value: -1 }).toISOString()) //2023-02-08T19:45:01.991Z
     */
    addToDate(params) {
        const { date, unit, value } = params;
        return (0, date_fns_1.add)(date, { [`${unit}s`]: value });
    }
}
exports.TimeUtil = TimeUtil;
//# sourceMappingURL=time-util.js.map