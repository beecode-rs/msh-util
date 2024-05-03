import { describe, expect, it } from 'vitest'

import { arrayUtil } from '#src/array-util'

describe('arrayUtil', () => {
	describe('notEmpty', () => {
		it.each([
			[
				[1, 2, undefined, 4, null, 5],
				[1, 2, 4, 5],
			],
			[
				['', 0],
				['', 0],
			],
			[[undefined, null], []],
			[[undefined, 4, null], [4]],
			[
				[[1], [2], [undefined], [4], [null], [5]],
				[[1], [2], [undefined], [4], [null], [5]],
			],
			[
				[{ a: 1 }, { a: 2 }, { a: undefined }, { a: 4 }, { a: null }, { a: 5 }],
				[{ a: 1 }, { a: 2 }, { a: undefined }, { a: 4 }, { a: null }, { a: 5 }],
			],
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		])('%#. should filter not empty values from array %s to be %s', (arr: any, expected) => {
			expect(arr.filter(arrayUtil.notEmpty)).toEqual(expected)
		})
	})

	describe('notFalsy', () => {
		it.each([
			[
				[1, 2, undefined, 4, null, 5],
				[1, 2, 4, 5],
			],
			[['', 0], []],
			[[undefined, null], []],
			[[undefined, 4, null], [4]],
			[
				[[1], [2], [undefined], [4], [null], [5]],
				[[1], [2], [undefined], [4], [null], [5]],
			],
			[
				[{ a: 1 }, { a: 2 }, { a: undefined }, { a: 4 }, { a: null }, { a: 5 }],
				[{ a: 1 }, { a: 2 }, { a: undefined }, { a: 4 }, { a: null }, { a: 5 }],
			],
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		])('%#. should filter not empty values from array %s to be %s', (arr: any, expected) => {
			expect(arr.filter(arrayUtil.notFalsy)).toEqual(expected)
		})
	})
})
