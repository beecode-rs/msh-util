/**
 * This is a wrapper that easily converts class constructor call (`new className(..constructorParams)`) into function call (`classNameFactory(..constructorParams)`)
 * @param {C} classType
 * @template C
 * @return {(...args: ConstructorParameters<C>) => InstanceType<C>}
 * @example
 * export class SomeClass {
 *   protected _a: string
 *
 *   constructor(params: { a: string }) {
 *     const { a } = params
 *     this._a = a
 *   }
 * }
 *
 * export const someClassFactory = classFactoryPattern(SomeClass)
 *
 * // using
 * const someClassInstance = someClassFactory({ a: 'test' })
 */
export const classFactoryPattern = (classType) => {
    return (...args) => {
        return new classType(...args);
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MtZmFjdG9yeS1wYXR0ZXJuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsYXNzLWZhY3RvcnktcGF0dGVybi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUNILE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLENBQ2xDLFNBQVksRUFDK0MsRUFBRTtJQUM3RCxPQUFPLENBQUMsR0FBRyxJQUE4QixFQUFtQixFQUFFO1FBQzdELE9BQU8sSUFBSSxTQUFTLENBQUMsR0FBRyxJQUFJLENBQW9CLENBQUE7SUFDakQsQ0FBQyxDQUFBO0FBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmV4cG9ydCB0eXBlIENsYXNzVHlwZTxUID0gb2JqZWN0PiA9IG5ldyAoLi4uYXJnczogVCBleHRlbmRzIHsgbmV3ICguLi5hcmdzOiBpbmZlciBQKTogYW55IH0gPyBQIDogbmV2ZXJbXSkgPT4gVFxuXG4vKipcbiAqIFRoaXMgaXMgYSB3cmFwcGVyIHRoYXQgZWFzaWx5IGNvbnZlcnRzIGNsYXNzIGNvbnN0cnVjdG9yIGNhbGwgKGBuZXcgY2xhc3NOYW1lKC4uY29uc3RydWN0b3JQYXJhbXMpYCkgaW50byBmdW5jdGlvbiBjYWxsIChgY2xhc3NOYW1lRmFjdG9yeSguLmNvbnN0cnVjdG9yUGFyYW1zKWApXG4gKiBAcGFyYW0ge0N9IGNsYXNzVHlwZVxuICogQHRlbXBsYXRlIENcbiAqIEByZXR1cm4geyguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8Qz4pID0+IEluc3RhbmNlVHlwZTxDPn1cbiAqIEBleGFtcGxlXG4gKiBleHBvcnQgY2xhc3MgU29tZUNsYXNzIHtcbiAqICAgcHJvdGVjdGVkIF9hOiBzdHJpbmdcbiAqXG4gKiAgIGNvbnN0cnVjdG9yKHBhcmFtczogeyBhOiBzdHJpbmcgfSkge1xuICogICAgIGNvbnN0IHsgYSB9ID0gcGFyYW1zXG4gKiAgICAgdGhpcy5fYSA9IGFcbiAqICAgfVxuICogfVxuICpcbiAqIGV4cG9ydCBjb25zdCBzb21lQ2xhc3NGYWN0b3J5ID0gY2xhc3NGYWN0b3J5UGF0dGVybihTb21lQ2xhc3MpXG4gKlxuICogLy8gdXNpbmdcbiAqIGNvbnN0IHNvbWVDbGFzc0luc3RhbmNlID0gc29tZUNsYXNzRmFjdG9yeSh7IGE6ICd0ZXN0JyB9KVxuICovXG5leHBvcnQgY29uc3QgY2xhc3NGYWN0b3J5UGF0dGVybiA9IDxDIGV4dGVuZHMgQ2xhc3NUeXBlPihcblx0Y2xhc3NUeXBlOiBDXG4pOiAoKC4uLmFyZ3M6IENvbnN0cnVjdG9yUGFyYW1ldGVyczxDPikgPT4gSW5zdGFuY2VUeXBlPEM+KSA9PiB7XG5cdHJldHVybiAoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPEM+KTogSW5zdGFuY2VUeXBlPEM+ID0+IHtcblx0XHRyZXR1cm4gbmV3IGNsYXNzVHlwZSguLi5hcmdzKSBhcyBJbnN0YW5jZVR5cGU8Qz5cblx0fVxufVxuIl19