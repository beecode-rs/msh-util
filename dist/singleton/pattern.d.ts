export type AnyFunctionNoParams<T> = () => T;
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
export declare const singletonPattern: <R>(factoryFn: AnyFunctionNoParams<R>) => AnyFunctionNoParams<R>;
//# sourceMappingURL=pattern.d.ts.map