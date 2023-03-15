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
     * This function will do stringify deeper that JSON.stringify. If the object that you pass is null or undefined it will return that value (null or undefined) otherwise it will return string
     * @param {ObjectType | null} obj
     * @return {string | null | undefined}
     * @example
     * console.log(new ObjectUtil().stringifySortOrNullOrUndefined(null)) // null
     * console.log(new ObjectUtil().stringifySortOrNullOrUndefined(undefined)) // undefined
     * console.log(new ObjectUtil().stringifySortOrNullOrUndefined({ a: 1 })) // '{\n\ta: 1\n}'
     * // `{
     * //   a:1
     * // }`
     */
    stringifySortOrNullOrUndefined(obj?: ObjectType | null): string | null | undefined;
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