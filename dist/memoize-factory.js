/**
 * This is a simple implementation of memoize function that caches result against the parameter passed that are passed to the
 * function so it never runs the same calculation twice.
 * @template F
 * @template R
 * @param {F} factoryFn
 * @return {F: AnyFunction<R>}
 * @example
 * export const sumTwoNumbersMemoize = memoizeFactory((a:number, b:number): number => a + b)
 *
 * // using
 * sumTwoNumbersMemoize(5 + 10) // 15
 */
export const memoizeFactory = (factoryFn) => {
    const cache = {};
    return ((...args) => {
        const key = JSON.stringify(args);
        if (key in cache) {
            return cache[key];
        }
        return (cache[key] = factoryFn(...args));
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb2l6ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21lbW9pemUtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsQ0FBOEIsU0FBWSxFQUFLLEVBQUU7SUFDOUUsTUFBTSxLQUFLLEdBQXNCLEVBQUUsQ0FBQTtJQUVuQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQW1CLEVBQUssRUFBRTtRQUNyQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2hDLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ2xCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBRSxDQUFBO1FBQ25CLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDekMsQ0FBQyxDQUFNLENBQUE7QUFDUixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuZXhwb3J0IHR5cGUgQW55RnVuY3Rpb248VD4gPSAoLi4uYXJnczogYW55W10pID0+IFRcblxuLyoqXG4gKiBUaGlzIGlzIGEgc2ltcGxlIGltcGxlbWVudGF0aW9uIG9mIG1lbW9pemUgZnVuY3Rpb24gdGhhdCBjYWNoZXMgcmVzdWx0IGFnYWluc3QgdGhlIHBhcmFtZXRlciBwYXNzZWQgdGhhdCBhcmUgcGFzc2VkIHRvIHRoZVxuICogZnVuY3Rpb24gc28gaXQgbmV2ZXIgcnVucyB0aGUgc2FtZSBjYWxjdWxhdGlvbiB0d2ljZS5cbiAqIEB0ZW1wbGF0ZSBGXG4gKiBAdGVtcGxhdGUgUlxuICogQHBhcmFtIHtGfSBmYWN0b3J5Rm5cbiAqIEByZXR1cm4ge0Y6IEFueUZ1bmN0aW9uPFI+fVxuICogQGV4YW1wbGVcbiAqIGV4cG9ydCBjb25zdCBzdW1Ud29OdW1iZXJzTWVtb2l6ZSA9IG1lbW9pemVGYWN0b3J5KChhOm51bWJlciwgYjpudW1iZXIpOiBudW1iZXIgPT4gYSArIGIpXG4gKlxuICogLy8gdXNpbmdcbiAqIHN1bVR3b051bWJlcnNNZW1vaXplKDUgKyAxMCkgLy8gMTVcbiAqL1xuZXhwb3J0IGNvbnN0IG1lbW9pemVGYWN0b3J5ID0gPEYgZXh0ZW5kcyBBbnlGdW5jdGlvbjxSPiwgUj4oZmFjdG9yeUZuOiBGKTogRiA9PiB7XG5cdGNvbnN0IGNhY2hlOiBSZWNvcmQ8c3RyaW5nLCBSPiA9IHt9XG5cblx0cmV0dXJuICgoLi4uYXJnczogUGFyYW1ldGVyczxGPik6IFIgPT4ge1xuXHRcdGNvbnN0IGtleSA9IEpTT04uc3RyaW5naWZ5KGFyZ3MpXG5cdFx0aWYgKGtleSBpbiBjYWNoZSkge1xuXHRcdFx0cmV0dXJuIGNhY2hlW2tleV0hXG5cdFx0fVxuXG5cdFx0cmV0dXJuIChjYWNoZVtrZXldID0gZmFjdG9yeUZuKC4uLmFyZ3MpKVxuXHR9KSBhcyBGXG59XG4iXX0=