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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MtZmFjdG9yeS1wYXR0ZXJuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsYXNzLWZhY3RvcnktcGF0dGVybi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRztBQUNILE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHLENBQ2xDLFNBQVksRUFDK0MsRUFBRTtJQUM3RCxPQUFPLENBQUMsR0FBRyxJQUE4QixFQUFtQixFQUFFO1FBQzdELE9BQU8sSUFBSSxTQUFTLENBQUMsR0FBRyxJQUFJLENBQW9CLENBQUE7SUFDakQsQ0FBQyxDQUFBO0FBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmV4cG9ydCB0eXBlIENsYXNzVHlwZTxUID0gb2JqZWN0PiA9IG5ldyAoLi4uYXJnczogVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgUCkgPT4gYW55ID8gUCA6IG5ldmVyW10pID0+IFRcblxuLyoqXG4gKiBUaGlzIGlzIGEgd3JhcHBlciB0aGF0IGVhc2lseSBjb252ZXJ0cyBjbGFzcyBjb25zdHJ1Y3RvciBjYWxsIChgbmV3IGNsYXNzTmFtZSguLmNvbnN0cnVjdG9yUGFyYW1zKWApIGludG8gZnVuY3Rpb24gY2FsbCAoYGNsYXNzTmFtZUZhY3RvcnkoLi5jb25zdHJ1Y3RvclBhcmFtcylgKVxuICogQHBhcmFtIHtDfSBjbGFzc1R5cGVcbiAqIEB0ZW1wbGF0ZSBDXG4gKiBAcmV0dXJuIHsoLi4uYXJnczogQ29uc3RydWN0b3JQYXJhbWV0ZXJzPEM+KSA9PiBJbnN0YW5jZVR5cGU8Qz59XG4gKiBAZXhhbXBsZVxuICogZXhwb3J0IGNsYXNzIFNvbWVDbGFzcyB7XG4gKiAgIHByb3RlY3RlZCBfYTogc3RyaW5nXG4gKlxuICogICBjb25zdHJ1Y3RvcihwYXJhbXM6IHsgYTogc3RyaW5nIH0pIHtcbiAqICAgICBjb25zdCB7IGEgfSA9IHBhcmFtc1xuICogICAgIHRoaXMuX2EgPSBhXG4gKiAgIH1cbiAqIH1cbiAqXG4gKiBleHBvcnQgY29uc3Qgc29tZUNsYXNzRmFjdG9yeSA9IGNsYXNzRmFjdG9yeVBhdHRlcm4oU29tZUNsYXNzKVxuICpcbiAqIC8vIHVzaW5nXG4gKiBjb25zdCBzb21lQ2xhc3NJbnN0YW5jZSA9IHNvbWVDbGFzc0ZhY3RvcnkoeyBhOiAndGVzdCcgfSlcbiAqL1xuZXhwb3J0IGNvbnN0IGNsYXNzRmFjdG9yeVBhdHRlcm4gPSA8QyBleHRlbmRzIENsYXNzVHlwZT4oXG5cdGNsYXNzVHlwZTogQ1xuKTogKCguLi5hcmdzOiBDb25zdHJ1Y3RvclBhcmFtZXRlcnM8Qz4pID0+IEluc3RhbmNlVHlwZTxDPikgPT4ge1xuXHRyZXR1cm4gKC4uLmFyZ3M6IENvbnN0cnVjdG9yUGFyYW1ldGVyczxDPik6IEluc3RhbmNlVHlwZTxDPiA9PiB7XG5cdFx0cmV0dXJuIG5ldyBjbGFzc1R5cGUoLi4uYXJncykgYXMgSW5zdGFuY2VUeXBlPEM+XG5cdH1cbn1cbiJdfQ==