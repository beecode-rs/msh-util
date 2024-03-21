import cloneDeep from 'lodash.clonedeep'
import util from 'util'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ObjectType = Record<string, any>

export class ObjectUtil {
	/**
	 * Deep clone object. Returned object will have no references to the object passed through params
	 * @template T
	 * @param {T} objectToClone
	 * @return {T}
	 */
	deepClone<T extends ObjectType>(objectToClone: T): T {
		return cloneDeep(objectToClone)
	}

	/**
	 * Pick only properties from the property list. It is only allowed to pick properties from the first level
	 * @template T
	 * @template L
	 * @param {T} obj
	 * @param {L[]} keyList
	 * @return {Pick<T, L>}
	 */
	pickByList<T extends object, L extends keyof T>(obj: T, keyList: (L | string)[]): Pick<T, L> {
		return keyList.reduce(
			(pickedObj, key) => {
				if (Object.prototype.hasOwnProperty.call(obj, key)) {
					pickedObj[key as L] = obj[key as L]
				}

				return pickedObj
			},
			{} as Pick<T, L>
		) // eslint-disable-line @typescript-eslint/prefer-reduce-type-parameter
	}

	/**
	 * Pick objects properties using keys from the second object.
	 * @template T
	 * @template L
	 * @param {T} obj
	 * @param {Partial<T>} objWithPickKeys
	 * @return {Pick<T, L>}
	 */
	pickByObjectKeys<T extends object, L extends keyof T>(obj: T, objWithPickKeys: Partial<T> | ObjectType): Pick<T, L> {
		const keys = Object.keys(objWithPickKeys) as L[]

		return this.pickByList<T, L>(obj, keys)
	}

	/**
	 * This function will do stringify deeper that JSON.stringify.
	 * @param {any} entity - entity thant needs to be stringify
	 * @param {object} [options] - available options
	 * @param {boolean} [options.isSortable=false] - if object property should be sorted
	 * @param {boolean} [options.isPrettyPrinted=false] - if object and array properties should be printed in a new row
	 * @param {number} [options.prettyPrintCompactLevel=0] - if pretty print is on define the level of deepest children that are not
	 * going to be pretty. It doesn't matter if the siblings doesn't have the same depth.
	 * @return {string} - strung result
	 * @example
	 * console.log(new ObjectUtil().deepStringify(null)) // 'null'
	 * console.log(new ObjectUtil().deepStringify(undefined)) // 'undefined'
	 * console.log(new ObjectUtil().deepStringify({ a: 1 })) // '{\n\ta: 1\n}'
	 * // `{
	 * //   a:1
	 * // }`
	 * console.log(new ObjectUtil().deepStringify({ b: 1, a: 2 }, {isSorted:true, compact: true})) // { a: 2, b: 1 }
	 */
	deepStringify(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		entity: any,
		options?: { isSorted?: boolean; isPrettyPrinted?: boolean; prettyPrintCompactLevel?: number }
	): string {
		const { isSorted = false, isPrettyPrinted = false, prettyPrintCompactLevel = 0 } = options ?? {}

		const compact = this._deepStringifyCompact({ isPrettyPrinted, prettyPrintCompactLevel })

		return util.inspect(entity, {
			breakLength: Infinity,
			compact,
			depth: Infinity,
			maxArrayLength: Infinity,
			maxStringLength: Infinity,
			sorted: isSorted,
		})
	}

	protected _deepStringifyCompact(params: { isPrettyPrinted: boolean; prettyPrintCompactLevel: number }): number | boolean {
		const { isPrettyPrinted, prettyPrintCompactLevel } = params

		if (!isPrettyPrinted) {
			return true
		}

		return prettyPrintCompactLevel
	}

	/**
	 * We are converting objects to string (or null or undefined) and comparing if the result is equal
	 * @param a
	 * @param b
	 * @return {boolean}
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	deepEqual(a: any, b: any): boolean {
		return this.deepStringify(a, { isSorted: true }) === this.deepStringify(b, { isSorted: true })
	}

	/**
	 * This function is going to convert any null to undefined in the object that is passed to it.
	 * @template T
	 * @param {T} objectWithNulls
	 * @return {T}
	 * @example
	 * console.log(new ObjectUtil().deepNullToUndefined({ a: null, b: { c: null } })) // { a: undefined, b: { c: undefined } }
	 */
	deepNullToUndefined<T extends ObjectType>(objectWithNulls: T): T {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return Object.entries(objectWithNulls).reduce<any>((acc, cur) => {
			const [key, value] = cur
			if (value === null) {
				acc[key] = undefined
			} else if (typeof value === 'object' && !(value instanceof Date)) {
				acc[key] = this.deepNullToUndefined(value)
			} else {
				acc[key] = value
			}

			return acc
		}, {})
	}
}
