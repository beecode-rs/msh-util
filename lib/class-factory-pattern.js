"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classFactoryPattern = void 0;
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
// eslint-disable-next-line @typescript-eslint/no-explicit-any

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
var classFactoryPattern = exports.classFactoryPattern = function classFactoryPattern(classType) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _construct(classType, args);
  };
};