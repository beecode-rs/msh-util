import cloneDeep from 'lodash.clonedeep';
import util from 'util';
export class ObjectUtil {
    /**
     * Deep clone object. Returned object will have no references to the object passed through params
     * @template T
     * @param {T} objectToClone
     * @return {T}
     */
    deepClone(objectToClone) {
        return cloneDeep(objectToClone);
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
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                pickedObj[key] = obj[key];
            }
            return pickedObj;
        }, {}); // eslint-disable-line @typescript-eslint/prefer-reduce-type-parameter
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
    entity, options) {
        const { isSorted = false, isPrettyPrinted = false, prettyPrintCompactLevel = 0 } = options ?? {};
        const compact = this._deepStringifyCompact({ isPrettyPrinted, prettyPrintCompactLevel });
        return util.inspect(entity, {
            breakLength: Infinity,
            compact,
            depth: Infinity,
            maxArrayLength: Infinity,
            maxStringLength: Infinity,
            sorted: isSorted,
        });
    }
    _deepStringifyCompact(params) {
        const { isPrettyPrinted, prettyPrintCompactLevel } = params;
        if (!isPrettyPrinted) {
            return true;
        }
        return prettyPrintCompactLevel;
    }
    /**
     * We are converting objects to string (or null or undefined) and comparing if the result is equal
     * @param a
     * @param b
     * @return {boolean}
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deepEqual(a, b) {
        return this.deepStringify(a, { isSorted: true }) === this.deepStringify(b, { isSorted: true });
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LXV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvb2JqZWN0LXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxTQUFTLE1BQU0sa0JBQWtCLENBQUE7QUFDeEMsT0FBTyxJQUFJLE1BQU0sTUFBTSxDQUFBO0FBS3ZCLE1BQU0sT0FBTyxVQUFVO0lBQ3RCOzs7OztPQUtHO0lBQ0gsU0FBUyxDQUF1QixhQUFnQjtRQUMvQyxPQUFPLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILFVBQVUsQ0FBc0MsR0FBTSxFQUFFLE9BQXVCO1FBQzlFLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FDcEIsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDbEIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3BELFNBQVMsQ0FBQyxHQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBUSxDQUFDLENBQUE7WUFDcEMsQ0FBQztZQUVELE9BQU8sU0FBUyxDQUFBO1FBQ2pCLENBQUMsRUFDRCxFQUFnQixDQUNoQixDQUFBLENBQUMsc0VBQXNFO0lBQ3pFLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsZ0JBQWdCLENBQXNDLEdBQU0sRUFBRSxlQUF3QztRQUNyRyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBUSxDQUFBO1FBRWhELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBTyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7OztPQWlCRztJQUNILGFBQWE7SUFDWiw4REFBOEQ7SUFDOUQsTUFBVyxFQUNYLE9BQTZGO1FBRTdGLE1BQU0sRUFBRSxRQUFRLEdBQUcsS0FBSyxFQUFFLGVBQWUsR0FBRyxLQUFLLEVBQUUsdUJBQXVCLEdBQUcsQ0FBQyxFQUFFLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQTtRQUVoRyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxlQUFlLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQyxDQUFBO1FBRXhGLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDM0IsV0FBVyxFQUFFLFFBQVE7WUFDckIsT0FBTztZQUNQLEtBQUssRUFBRSxRQUFRO1lBQ2YsY0FBYyxFQUFFLFFBQVE7WUFDeEIsZUFBZSxFQUFFLFFBQVE7WUFDekIsTUFBTSxFQUFFLFFBQVE7U0FDaEIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVTLHFCQUFxQixDQUFDLE1BQXFFO1FBQ3BHLE1BQU0sRUFBRSxlQUFlLEVBQUUsdUJBQXVCLEVBQUUsR0FBRyxNQUFNLENBQUE7UUFFM0QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxDQUFBO1FBQ1osQ0FBQztRQUVELE9BQU8sdUJBQXVCLENBQUE7SUFDL0IsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsOERBQThEO0lBQzlELFNBQVMsQ0FBQyxDQUFNLEVBQUUsQ0FBTTtRQUN2QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUMvRixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILG1CQUFtQixDQUF1QixlQUFrQjtRQUMzRCw4REFBOEQ7UUFDOUQsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sQ0FBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUMvRCxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQTtZQUN4QixJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUUsQ0FBQztnQkFDcEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQTtZQUNyQixDQUFDO2lCQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDbEUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUMzQyxDQUFDO2lCQUFNLENBQUM7Z0JBQ1AsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQTtZQUNqQixDQUFDO1lBRUQsT0FBTyxHQUFHLENBQUE7UUFDWCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDUCxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC5jbG9uZWRlZXAnXG5pbXBvcnQgdXRpbCBmcm9tICd1dGlsJ1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuZXhwb3J0IHR5cGUgT2JqZWN0VHlwZSA9IFJlY29yZDxzdHJpbmcsIGFueT5cblxuZXhwb3J0IGNsYXNzIE9iamVjdFV0aWwge1xuXHQvKipcblx0ICogRGVlcCBjbG9uZSBvYmplY3QuIFJldHVybmVkIG9iamVjdCB3aWxsIGhhdmUgbm8gcmVmZXJlbmNlcyB0byB0aGUgb2JqZWN0IHBhc3NlZCB0aHJvdWdoIHBhcmFtc1xuXHQgKiBAdGVtcGxhdGUgVFxuXHQgKiBAcGFyYW0ge1R9IG9iamVjdFRvQ2xvbmVcblx0ICogQHJldHVybiB7VH1cblx0ICovXG5cdGRlZXBDbG9uZTxUIGV4dGVuZHMgT2JqZWN0VHlwZT4ob2JqZWN0VG9DbG9uZTogVCk6IFQge1xuXHRcdHJldHVybiBjbG9uZURlZXAob2JqZWN0VG9DbG9uZSlcblx0fVxuXG5cdC8qKlxuXHQgKiBQaWNrIG9ubHkgcHJvcGVydGllcyBmcm9tIHRoZSBwcm9wZXJ0eSBsaXN0LiBJdCBpcyBvbmx5IGFsbG93ZWQgdG8gcGljayBwcm9wZXJ0aWVzIGZyb20gdGhlIGZpcnN0IGxldmVsXG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqIEB0ZW1wbGF0ZSBMXG5cdCAqIEBwYXJhbSB7VH0gb2JqXG5cdCAqIEBwYXJhbSB7TFtdfSBrZXlMaXN0XG5cdCAqIEByZXR1cm4ge1BpY2s8VCwgTD59XG5cdCAqL1xuXHRwaWNrQnlMaXN0PFQgZXh0ZW5kcyBvYmplY3QsIEwgZXh0ZW5kcyBrZXlvZiBUPihvYmo6IFQsIGtleUxpc3Q6IChMIHwgc3RyaW5nKVtdKTogUGljazxULCBMPiB7XG5cdFx0cmV0dXJuIGtleUxpc3QucmVkdWNlKFxuXHRcdFx0KHBpY2tlZE9iaiwga2V5KSA9PiB7XG5cdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG5cdFx0XHRcdFx0cGlja2VkT2JqW2tleSBhcyBMXSA9IG9ialtrZXkgYXMgTF1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBwaWNrZWRPYmpcblx0XHRcdH0sXG5cdFx0XHR7fSBhcyBQaWNrPFQsIEw+XG5cdFx0KSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9wcmVmZXItcmVkdWNlLXR5cGUtcGFyYW1ldGVyXG5cdH1cblxuXHQvKipcblx0ICogUGljayBvYmplY3RzIHByb3BlcnRpZXMgdXNpbmcga2V5cyBmcm9tIHRoZSBzZWNvbmQgb2JqZWN0LlxuXHQgKiBAdGVtcGxhdGUgVFxuXHQgKiBAdGVtcGxhdGUgTFxuXHQgKiBAcGFyYW0ge1R9IG9ialxuXHQgKiBAcGFyYW0ge1BhcnRpYWw8VD59IG9ialdpdGhQaWNrS2V5c1xuXHQgKiBAcmV0dXJuIHtQaWNrPFQsIEw+fVxuXHQgKi9cblx0cGlja0J5T2JqZWN0S2V5czxUIGV4dGVuZHMgb2JqZWN0LCBMIGV4dGVuZHMga2V5b2YgVD4ob2JqOiBULCBvYmpXaXRoUGlja0tleXM6IFBhcnRpYWw8VD4gfCBPYmplY3RUeXBlKTogUGljazxULCBMPiB7XG5cdFx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9ialdpdGhQaWNrS2V5cykgYXMgTFtdXG5cblx0XHRyZXR1cm4gdGhpcy5waWNrQnlMaXN0PFQsIEw+KG9iaiwga2V5cylcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgZG8gc3RyaW5naWZ5IGRlZXBlciB0aGF0IEpTT04uc3RyaW5naWZ5LlxuXHQgKiBAcGFyYW0ge2FueX0gZW50aXR5IC0gZW50aXR5IHRoYW50IG5lZWRzIHRvIGJlIHN0cmluZ2lmeVxuXHQgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gYXZhaWxhYmxlIG9wdGlvbnNcblx0ICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5pc1NvcnRhYmxlPWZhbHNlXSAtIGlmIG9iamVjdCBwcm9wZXJ0eSBzaG91bGQgYmUgc29ydGVkXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuaXNQcmV0dHlQcmludGVkPWZhbHNlXSAtIGlmIG9iamVjdCBhbmQgYXJyYXkgcHJvcGVydGllcyBzaG91bGQgYmUgcHJpbnRlZCBpbiBhIG5ldyByb3dcblx0ICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnByZXR0eVByaW50Q29tcGFjdExldmVsPTBdIC0gaWYgcHJldHR5IHByaW50IGlzIG9uIGRlZmluZSB0aGUgbGV2ZWwgb2YgZGVlcGVzdCBjaGlsZHJlbiB0aGF0IGFyZSBub3Rcblx0ICogZ29pbmcgdG8gYmUgcHJldHR5LiBJdCBkb2Vzbid0IG1hdHRlciBpZiB0aGUgc2libGluZ3MgZG9lc24ndCBoYXZlIHRoZSBzYW1lIGRlcHRoLlxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9IC0gc3RydW5nIHJlc3VsdFxuXHQgKiBAZXhhbXBsZVxuXHQgKiBjb25zb2xlLmxvZyhuZXcgT2JqZWN0VXRpbCgpLmRlZXBTdHJpbmdpZnkobnVsbCkpIC8vICdudWxsJ1xuXHQgKiBjb25zb2xlLmxvZyhuZXcgT2JqZWN0VXRpbCgpLmRlZXBTdHJpbmdpZnkodW5kZWZpbmVkKSkgLy8gJ3VuZGVmaW5lZCdcblx0ICogY29uc29sZS5sb2cobmV3IE9iamVjdFV0aWwoKS5kZWVwU3RyaW5naWZ5KHsgYTogMSB9KSkgLy8gJ3tcXG5cXHRhOiAxXFxufSdcblx0ICogLy8gYHtcblx0ICogLy8gICBhOjFcblx0ICogLy8gfWBcblx0ICogY29uc29sZS5sb2cobmV3IE9iamVjdFV0aWwoKS5kZWVwU3RyaW5naWZ5KHsgYjogMSwgYTogMiB9LCB7aXNTb3J0ZWQ6dHJ1ZSwgY29tcGFjdDogdHJ1ZX0pKSAvLyB7IGE6IDIsIGI6IDEgfVxuXHQgKi9cblx0ZGVlcFN0cmluZ2lmeShcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdGVudGl0eTogYW55LFxuXHRcdG9wdGlvbnM/OiB7IGlzU29ydGVkPzogYm9vbGVhbjsgaXNQcmV0dHlQcmludGVkPzogYm9vbGVhbjsgcHJldHR5UHJpbnRDb21wYWN0TGV2ZWw/OiBudW1iZXIgfVxuXHQpOiBzdHJpbmcge1xuXHRcdGNvbnN0IHsgaXNTb3J0ZWQgPSBmYWxzZSwgaXNQcmV0dHlQcmludGVkID0gZmFsc2UsIHByZXR0eVByaW50Q29tcGFjdExldmVsID0gMCB9ID0gb3B0aW9ucyA/PyB7fVxuXG5cdFx0Y29uc3QgY29tcGFjdCA9IHRoaXMuX2RlZXBTdHJpbmdpZnlDb21wYWN0KHsgaXNQcmV0dHlQcmludGVkLCBwcmV0dHlQcmludENvbXBhY3RMZXZlbCB9KVxuXG5cdFx0cmV0dXJuIHV0aWwuaW5zcGVjdChlbnRpdHksIHtcblx0XHRcdGJyZWFrTGVuZ3RoOiBJbmZpbml0eSxcblx0XHRcdGNvbXBhY3QsXG5cdFx0XHRkZXB0aDogSW5maW5pdHksXG5cdFx0XHRtYXhBcnJheUxlbmd0aDogSW5maW5pdHksXG5cdFx0XHRtYXhTdHJpbmdMZW5ndGg6IEluZmluaXR5LFxuXHRcdFx0c29ydGVkOiBpc1NvcnRlZCxcblx0XHR9KVxuXHR9XG5cblx0cHJvdGVjdGVkIF9kZWVwU3RyaW5naWZ5Q29tcGFjdChwYXJhbXM6IHsgaXNQcmV0dHlQcmludGVkOiBib29sZWFuOyBwcmV0dHlQcmludENvbXBhY3RMZXZlbDogbnVtYmVyIH0pOiBudW1iZXIgfCBib29sZWFuIHtcblx0XHRjb25zdCB7IGlzUHJldHR5UHJpbnRlZCwgcHJldHR5UHJpbnRDb21wYWN0TGV2ZWwgfSA9IHBhcmFtc1xuXG5cdFx0aWYgKCFpc1ByZXR0eVByaW50ZWQpIHtcblx0XHRcdHJldHVybiB0cnVlXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByZXR0eVByaW50Q29tcGFjdExldmVsXG5cdH1cblxuXHQvKipcblx0ICogV2UgYXJlIGNvbnZlcnRpbmcgb2JqZWN0cyB0byBzdHJpbmcgKG9yIG51bGwgb3IgdW5kZWZpbmVkKSBhbmQgY29tcGFyaW5nIGlmIHRoZSByZXN1bHQgaXMgZXF1YWxcblx0ICogQHBhcmFtIGFcblx0ICogQHBhcmFtIGJcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdGRlZXBFcXVhbChhOiBhbnksIGI6IGFueSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmRlZXBTdHJpbmdpZnkoYSwgeyBpc1NvcnRlZDogdHJ1ZSB9KSA9PT0gdGhpcy5kZWVwU3RyaW5naWZ5KGIsIHsgaXNTb3J0ZWQ6IHRydWUgfSlcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGlzIGZ1bmN0aW9uIGlzIGdvaW5nIHRvIGNvbnZlcnQgYW55IG51bGwgdG8gdW5kZWZpbmVkIGluIHRoZSBvYmplY3QgdGhhdCBpcyBwYXNzZWQgdG8gaXQuXG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqIEBwYXJhbSB7VH0gb2JqZWN0V2l0aE51bGxzXG5cdCAqIEByZXR1cm4ge1R9XG5cdCAqIEBleGFtcGxlXG5cdCAqIGNvbnNvbGUubG9nKG5ldyBPYmplY3RVdGlsKCkuZGVlcE51bGxUb1VuZGVmaW5lZCh7IGE6IG51bGwsIGI6IHsgYzogbnVsbCB9IH0pKSAvLyB7IGE6IHVuZGVmaW5lZCwgYjogeyBjOiB1bmRlZmluZWQgfSB9XG5cdCAqL1xuXHRkZWVwTnVsbFRvVW5kZWZpbmVkPFQgZXh0ZW5kcyBPYmplY3RUeXBlPihvYmplY3RXaXRoTnVsbHM6IFQpOiBUIHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRcdHJldHVybiBPYmplY3QuZW50cmllcyhvYmplY3RXaXRoTnVsbHMpLnJlZHVjZTxhbnk+KChhY2MsIGN1cikgPT4ge1xuXHRcdFx0Y29uc3QgW2tleSwgdmFsdWVdID0gY3VyXG5cdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0YWNjW2tleV0gPSB1bmRlZmluZWRcblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkpIHtcblx0XHRcdFx0YWNjW2tleV0gPSB0aGlzLmRlZXBOdWxsVG9VbmRlZmluZWQodmFsdWUpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhY2Nba2V5XSA9IHZhbHVlXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBhY2Ncblx0XHR9LCB7fSlcblx0fVxufVxuIl19