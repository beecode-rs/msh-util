import { add, format, parse } from 'date-fns'

export enum DurationUnit {
  SECOND = 'second',
  MINUTE = 'minute',
  HOUR = 'hour',
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
}

export type DurationUnitType = `${DurationUnit}`

export class TimeUtil {
  /**
   * return date object with the current time
   * @return {Date}
   * @example
   * console.log(new TimeUtil().now().toISOString()) // 2023-03-08T19:45:01.991Z
   */
  now(): Date {
    return new Date()
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
  dateToUnix(date: Date): number {
    return +format(date, 'T')
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
  dateToUnixSec(date: Date): number {
    return +format(date, 't')
  }

  /**
   * Convert unix timestamp (milliseconds) to date object
   * @param {number} unix
   * @return {Date}
   * @example
   * const timeUtil = new TimeUtil()
   * console.log(timeUtil.unixToDate(1678304701991).toISOString()) // 2023-03-08T19:45:01.991Z
   */
  unixToDate(unix: number): Date {
    return parse(unix.toString(), 'T', this.now())
  }

  /**
   * Convert unix timestamp (seconds) to date object
   * @param {number} unix
   * @return {Date}
   * @example
   * const timeUtil = new TimeUtil()
   * console.log(timeUtil.unixToDate(1678304701).toISOString()) // 2023-03-08T19:45:01.000Z
   */
  unixSecToDate(unix: number): Date {
    return parse(unix.toString(), 't', this.now())
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
  addToDate(params: { unit: DurationUnitType; value: number; date: Date }): Date {
    const { date, unit, value } = params

    return add(date, { [`${unit}s`]: value })
  }
}
