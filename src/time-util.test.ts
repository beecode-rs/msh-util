import { jest } from '@jest/globals'

import { DurationUnit, DurationUnitType, TimeUtil } from '#/time-util.js'

describe('TimeUtil', () => {
	const constantNowDate = new Date('2022-01-01T00:00:00.000Z')
	const constantNowUnix = 1640995200000 // 2022-01-01T00:00:00 UTC
	const constantNowUnixSec = 1640995200 // 2022-01-01T00:00:00 UTC
	const timeUtil = new TimeUtil()

	beforeAll(() => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		jest.useFakeTimers('modern' as any)
		jest.setSystemTime(constantNowDate.getTime())
	})

	afterAll(() => {
		jest.useRealTimers()
	})

	describe('now', () => {
		it('should return mocked date', () => {
			expect(timeUtil.now().toISOString()).toEqual(constantNowDate.toISOString())
		})
	})

	describe('dateToUnix', () => {
		it('should convert constant date to constant unix', () => {
			expect(timeUtil.dateToUnix(timeUtil.now())).toEqual(constantNowUnix)
		})
	})

	describe('dateToUnixSec', () => {
		it('should convert constant date to constant unixSec', () => {
			expect(timeUtil.dateToUnixSec(timeUtil.now())).toEqual(constantNowUnixSec)
		})
	})

	describe('unixToDate', () => {
		it('should convert constant date to constant unix', () => {
			expect(timeUtil.unixToDate(constantNowUnix)).toEqual(timeUtil.now())
		})
	})

	describe('unixSecToDate', () => {
		it('should convert constant date to constant unixSec', () => {
			expect(timeUtil.unixSecToDate(constantNowUnixSec)).toEqual(timeUtil.now())
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
		] as [DurationUnitType | DurationUnit, number, Date][])(
			'%#. should increase date by unit %s and value %s and get date $s',
			(unit, value, expected) => {
				expect(timeUtil.addToDate({ date: timeUtil.now(), unit, value })).toEqual(expected)
			}
		)
	})
})
