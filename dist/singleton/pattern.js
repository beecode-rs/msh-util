/**
 * Singleton patter wrapper function
 * @param {AnyFunctionNoParams<R>} factoryFn Factory function that is used to generate value that is going to be cached and return by
 * singleton.
 * @return {AnyFunctionNoParams<R>} Function result that returns cached value.
 * @example
 * export class SomeClass {
 *   constructor(protected _param: string){ }
 *   get param(): string {
 *     return this._param
 *   }
 * }
 * export const someClassSingleton = singletonPattern((): SomeClass => {
 *   return new SomeClass('some param value')
 * })
 *
 * // using
 * console.log('param: ', someClassSingleton().param) // param: some param value
 *
 * ///////////////////////////////////////////
 * // Or we can use it with simple function //
 * ///////////////////////////////////////////
 * export const config = singletonPattern(() => {
 *   return {
 *     env: process.NODE_ENV,
 *   } as const
 * })
 *
 * // using
 * console.log('NODE_ENV: ', config().env) // NODE_ENV: prod
 */
export const singletonPattern = (factoryFn) => {
    const cache = {};
    return () => {
        if ('singleton' in cache) {
            return cache.singleton;
        }
        return (cache.singleton = factoryFn());
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0dGVybi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaW5nbGV0b24vcGF0dGVybi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBSSxTQUFpQyxFQUEwQixFQUFFO0lBQ2hHLE1BQU0sS0FBSyxHQUFzQixFQUFFLENBQUE7SUFFbkMsT0FBTyxHQUFNLEVBQUU7UUFDZCxJQUFJLFdBQVcsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUMxQixPQUFPLEtBQUssQ0FBQyxTQUFVLENBQUE7UUFDeEIsQ0FBQztRQUVELE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsRUFBRSxDQUFDLENBQUE7SUFDdkMsQ0FBQyxDQUFBO0FBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgQW55RnVuY3Rpb25Ob1BhcmFtczxUPiA9ICgpID0+IFRcblxuLyoqXG4gKiBTaW5nbGV0b24gcGF0dGVyIHdyYXBwZXIgZnVuY3Rpb25cbiAqIEBwYXJhbSB7QW55RnVuY3Rpb25Ob1BhcmFtczxSPn0gZmFjdG9yeUZuIEZhY3RvcnkgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGdlbmVyYXRlIHZhbHVlIHRoYXQgaXMgZ29pbmcgdG8gYmUgY2FjaGVkIGFuZCByZXR1cm4gYnlcbiAqIHNpbmdsZXRvbi5cbiAqIEByZXR1cm4ge0FueUZ1bmN0aW9uTm9QYXJhbXM8Uj59IEZ1bmN0aW9uIHJlc3VsdCB0aGF0IHJldHVybnMgY2FjaGVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqIGV4cG9ydCBjbGFzcyBTb21lQ2xhc3Mge1xuICogICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX3BhcmFtOiBzdHJpbmcpeyB9XG4gKiAgIGdldCBwYXJhbSgpOiBzdHJpbmcge1xuICogICAgIHJldHVybiB0aGlzLl9wYXJhbVxuICogICB9XG4gKiB9XG4gKiBleHBvcnQgY29uc3Qgc29tZUNsYXNzU2luZ2xldG9uID0gc2luZ2xldG9uUGF0dGVybigoKTogU29tZUNsYXNzID0+IHtcbiAqICAgcmV0dXJuIG5ldyBTb21lQ2xhc3MoJ3NvbWUgcGFyYW0gdmFsdWUnKVxuICogfSlcbiAqXG4gKiAvLyB1c2luZ1xuICogY29uc29sZS5sb2coJ3BhcmFtOiAnLCBzb21lQ2xhc3NTaW5nbGV0b24oKS5wYXJhbSkgLy8gcGFyYW06IHNvbWUgcGFyYW0gdmFsdWVcbiAqXG4gKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gKiAvLyBPciB3ZSBjYW4gdXNlIGl0IHdpdGggc2ltcGxlIGZ1bmN0aW9uIC8vXG4gKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gKiBleHBvcnQgY29uc3QgY29uZmlnID0gc2luZ2xldG9uUGF0dGVybigoKSA9PiB7XG4gKiAgIHJldHVybiB7XG4gKiAgICAgZW52OiBwcm9jZXNzLk5PREVfRU5WLFxuICogICB9IGFzIGNvbnN0XG4gKiB9KVxuICpcbiAqIC8vIHVzaW5nXG4gKiBjb25zb2xlLmxvZygnTk9ERV9FTlY6ICcsIGNvbmZpZygpLmVudikgLy8gTk9ERV9FTlY6IHByb2RcbiAqL1xuZXhwb3J0IGNvbnN0IHNpbmdsZXRvblBhdHRlcm4gPSA8Uj4oZmFjdG9yeUZuOiBBbnlGdW5jdGlvbk5vUGFyYW1zPFI+KTogQW55RnVuY3Rpb25Ob1BhcmFtczxSPiA9PiB7XG5cdGNvbnN0IGNhY2hlOiB7IHNpbmdsZXRvbj86IFIgfSA9IHt9XG5cblx0cmV0dXJuICgpOiBSID0+IHtcblx0XHRpZiAoJ3NpbmdsZXRvbicgaW4gY2FjaGUpIHtcblx0XHRcdHJldHVybiBjYWNoZS5zaW5nbGV0b24hXG5cdFx0fVxuXG5cdFx0cmV0dXJuIChjYWNoZS5zaW5nbGV0b24gPSBmYWN0b3J5Rm4oKSlcblx0fVxufVxuIl19