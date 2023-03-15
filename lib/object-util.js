"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUtil = void 0;
const lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
const util_1 = __importDefault(require("util"));
class ObjectUtil {
    /**
     * Deep clone object. Returned object will have no references to the object passed through params
     * @template T
     * @param {T} objectToClone
     * @return {T}
     */
    deepClone(objectToClone) {
        return (0, lodash_clonedeep_1.default)(objectToClone);
    }
    /**
     * Pick only properties from the property list. It is only allowed to pick properties from the first level
     * @template T
     * @template L
     * @param {T} obj
     * @param {L[]} keyList
     * @return {Pick<T, L>}
     */
    pickByList(obj, keyList) {
        return keyList.reduce((pickedObj, key) => {
            // eslint-disable-next-line
            if (obj && obj.hasOwnProperty(key)) {
                // eslint-disable-next-line
                // @ts-ignore
                pickedObj[key] = obj[key];
            }
            return pickedObj;
        }, {});
    }
    /**
     * Pick objects properties using keys from the second object.
     * @template T
     * @template L
     * @param {T} obj
     * @param {Partial<T>} objWithPickKeys
     * @return {Pick<T, L>}
     */
    pickByObjectKeys(obj, objWithPickKeys) {
        const keys = Object.keys(objWithPickKeys);
        return this.pickByList(obj, keys);
    }
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
    stringifySortOrNullOrUndefined(obj) {
        if (obj == null)
            return obj;
        return util_1.default.inspect(obj, {
            depth: Infinity,
            sorted: true,
            maxArrayLength: Infinity,
            maxStringLength: Infinity,
            compact: 0,
            breakLength: Infinity,
        });
    }
    /**
     * We are converting objects to string (or null or undefined) and comparing if the result is equal
     * @param a
     * @param b
     * @return {boolean}
     */
    deepEqual(a, b) {
        return this.stringifySortOrNullOrUndefined(a) === this.stringifySortOrNullOrUndefined(b);
    }
    /**
     * This function is going to convert any null to undefined in the object that is passed to it.
     * @template T
     * @param {T} objectWithNulls
     * @return {T}
     * @example
     * console.log(new ObjectUtil().deepNullToUndefined({ a: null, b: { c: null } })) // { a: undefined, b: { c: undefined } }
     */
    deepNullToUndefined(objectWithNulls) {
        return Object.entries(objectWithNulls).reduce((acc, cur) => {
            const [key, value] = cur;
            if (value === null) {
                acc[key] = undefined;
            }
            else if (typeof value === 'object' && !(value instanceof Date)) {
                acc[key] = this.deepNullToUndefined(value);
            }
            else {
                acc[key] = value;
            }
            return acc;
        }, {});
    }
}
exports.ObjectUtil = ObjectUtil;
//# sourceMappingURL=object-util.js.map