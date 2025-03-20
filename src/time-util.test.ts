import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'

import { DurationUnit, TimeUtil } from '#src/time-util'

describe('TimeUtil', () => {
	const constantNowDate = new Date('2022-01-01T00:00:00.000Z')
	const constantNowUnix = 1640995200000 // 2022-01-01T00:00:00 UTC
	const timeUtil = new TimeUtil()

	const summerTimeUnix = 1698537600000 // 2023-10-29T00:00:00 UTC
	const winterTimeUnix = 1698541200000 // 2023-10-29T01:00:00 UTC
	const summerTimeUtcDate = new Date('2023-10-29T00:00:00.000Z')
	const winterTimeUtcDate = new Date('2023-10-29T01:00:00.000Z')

	const eachTestParams = [
		[constantNowDate, constantNowUnix],
		[summerTimeUtcDate, summerTimeUnix],
		[winterTimeUtcDate, winterTimeUnix],
	] as [Date, number][]

	beforeAll(() => {
		vi.useFakeTimers({ now: constantNowDate.getTime() })
	})

	afterAll(() => {
		vi.useRealTimers()
	})

	describe('now', () => {
		it('should return mocked date', () => {
			expect(timeUtil.now().toISOString()).toEqual(constantNowDate.toISOString())
		})
	})

	describe('dateToUnix', () => {
		it.each(eachTestParams)('%#. should convert date %s to unix %s', (date, unix) => {
			expect(timeUtil.dateToUnix(date)).toEqual(unix)
		})
	})

	describe('dateToUnixSec', () => {
		it.each(eachTestParams)('%#. should convert date %s to unixSec %s', (date, unix) => {
			expect(timeUtil.dateToUnixSec(date)).toEqual(unix / 1000)
		})
	})

	describe('unixToDate', () => {
		it.each(eachTestParams)('%#. should return %s from converting unix %s', (date, unix) => {
			expect(timeUtil.unixToDate(unix)).toEqual(date)
		})
	})

	describe('unixSecToDate', () => {
		it.each(eachTestParams)('%#. should return %s from converting unix sec %s', (date, unix) => {
			expect(timeUtil.unixSecToDate(unix / 1000)).toEqual(date)
		})
	})

	describe('addToDate', () => {
		it.each([
			[DurationUnit.MILLISECOND, 1, new Date('2022-01-01T00:00:00.001Z')],
			[DurationUnit.SECOND, 1, new Date('2022-01-01T00:00:01.000Z')],
			[DurationUnit.MINUTE, 1, new Date('2022-01-01T00:01:00.000Z')],
			[DurationUnit.HOUR, 1, new Date('2022-01-01T01:00:00.000Z')],
			[DurationUnit.DAY, 1, new Date('2022-01-02T00:00:00.000Z')],
			[DurationUnit.WEEK, 1, new Date('2022-01-08T00:00:00.000Z')],
			[DurationUnit.MONTH, 1, new Date('2022-02-01T00:00:00.000Z')],
			[DurationUnit.YEAR, 1, new Date('2023-01-01T00:00:00.000Z')],
			[DurationUnit.MILLISECOND, -1, new Date('2021-12-31T23:59:59.999Z')],
			[DurationUnit.SECOND, -1, new Date('2021-12-31T23:59:59.000Z')],
			[DurationUnit.MINUTE, -1, new Date('2021-12-31T23:59:00.000Z')],
			[DurationUnit.HOUR, -1, new Date('2021-12-31T23:00:00.000Z')],
			[DurationUnit.DAY, -1, new Date('2021-12-31T00:00:00.000Z')],
			[DurationUnit.WEEK, -1, new Date('2021-12-25T00:00:00.000Z')],
			[DurationUnit.MONTH, -1, new Date('2021-12-01T00:00:00.000Z')],
			[DurationUnit.YEAR, -1, new Date('2021-01-01T00:00:00.000Z')],
			['MILLISECOND', 1, new Date('2022-01-01T00:00:00.001Z')],
			['SECOND', 1, new Date('2022-01-01T00:00:01.000Z')],
			['MINUTE', 1, new Date('2022-01-01T00:01:00.000Z')],
			['HOUR', 1, new Date('2022-01-01T01:00:00.000Z')],
			['DAY', 1, new Date('2022-01-02T00:00:00.000Z')],
			['WEEK', 1, new Date('2022-01-08T00:00:00.000Z')],
			['MONTH', 1, new Date('2022-02-01T00:00:00.000Z')],
			['YEAR', 1, new Date('2023-01-01T00:00:00.000Z')],
			['MILLISECOND', -1, new Date('2021-12-31T23:59:59.999Z')],
			['SECOND', -1, new Date('2021-12-31T23:59:59.000Z')],
			['MINUTE', -1, new Date('2021-12-31T23:59:00.000Z')],
			['HOUR', -1, new Date('2021-12-31T23:00:00.000Z')],
			['DAY', -1, new Date('2021-12-31T00:00:00.000Z')],
			['WEEK', -1, new Date('2021-12-25T00:00:00.000Z')],
			['MONTH', -1, new Date('2021-12-01T00:00:00.000Z')],
			['YEAR', -1, new Date('2021-01-01T00:00:00.000Z')],
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		] as [any, number, Date][])('%#. should increase date by unit %s and value %s and get date $s', (unit, value, expected) => {
			expect(timeUtil.addToDate({ date: timeUtil.now(), unit, value })).toEqual(expected)
		})
	})
})
