export type ClassType<T = object> = new (...args: T extends new (...args: infer P) => any ? P : never[]) => T;
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
export declare const classFactoryPattern: <C extends ClassType>(classType: C) => ((...args: ConstructorParameters<C>) => InstanceType<C>);
//# sourceMappingURL=class-factory-pattern.d.ts.map