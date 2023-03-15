"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classFactoryPattern = void 0;
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
const classFactoryPattern = (classType) => {
    return (...args) => {
        return new classType(...args);
    };
};
exports.classFactoryPattern = classFactoryPattern;
//# sourceMappingURL=class-factory-pattern.js.map