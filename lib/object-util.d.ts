export type ObjectType = {
    [k: string]: any;
};
export declare class ObjectUtil {
    /**
     * Deep clone object. Returned object will have no references to the object passed through params
     * @template T
     * @param {T} objectToClone
     * @return {T}
     */
    deepClone<T extends ObjectType>(objectToClone: T): T;
    /**
     * Pick only properties from the property list. It is only allowed to pick properties from the first level
     * @template T
     * @template L
     * @param {T} obj
     * @param {L[]} keyList
     * @return {Pick<T, L>}
     */
    pickByList<T extends object, L extends keyof T>(obj: T, keyList: (L | string)[]): Pick<T, L>;
    /**
     * Pick objects properties using keys from the second object.
     * @template T
     * @template L
     * @param {T} obj
     * @param {Partial<T>} objWithPickKeys
     * @return {Pick<T, L>}
     */
    pickByObjectKeys<T extends object, L extends keyof T>(obj: T, objWithPickKeys: Partial<T> | ObjectType): Pick<T, L>;
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
    deepStringify(entity: any, options?: {
        isSorted?: boolean;
        isPrettyPrinted?: boolean;
        prettyPrintCompactLevel?: number;
    }): string;
    /**
     * We are converting objects to string (or null or undefined) and comparing if the result is equal
     * @param a
     * @param b
     * @return {boolean}
     */
    deepEqual(a: any, b: any): boolean;
    /**
     * This function is going to convert any null to undefined in the object that is passed to it.
     * @template T
     * @param {T} objectWithNulls
     * @return {T}
     * @example
     * console.log(new ObjectUtil().deepNullToUndefined({ a: null, b: { c: null } })) // { a: undefined, b: { c: undefined } }
     */
    deepNullToUndefined<T extends ObjectType>(objectWithNulls: T): T;
}
//# sourceMappingURL=object-util.d.ts.map