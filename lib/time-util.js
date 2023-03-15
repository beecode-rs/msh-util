"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeUtil = exports.DurationUnit = void 0;
const add_1 = __importDefault(require("date-fns/add"));
const addMilliseconds_1 = __importDefault(require("date-fns/addMilliseconds"));
const format_1 = __importDefault(require("date-fns/format"));
const parse_1 = __importDefault(require("date-fns/parse"));
var DurationUnit;
(function (DurationUnit) {
    DurationUnit["MILLISECOND"] = "MILLISECOND";
    DurationUnit["SECOND"] = "SECOND";
    DurationUnit["MINUTE"] = "MINUTE";
    DurationUnit["HOUR"] = "HOUR";
    DurationUnit["DAY"] = "DAY";
    DurationUnit["WEEK"] = "WEEK";
    DurationUnit["MONTH"] = "MONTH";
    DurationUnit["YEAR"] = "YEAR";
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
        return +(0, format_1.default)(date, 'T');
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
        return +(0, format_1.default)(date, 't');
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
        return (0, parse_1.default)(unix.toString(), 'T', this.now());
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
        return (0, parse_1.default)(unix.toString(), 't', this.now());
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
            return (0, addMilliseconds_1.default)(date, value);
        }
        return (0, add_1.default)(date, { [`${unit.toLowerCase()}s`]: value });
    }
}
exports.TimeUtil = TimeUtil;
//# sourceMappingURL=time-util.js.map