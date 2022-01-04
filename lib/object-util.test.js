"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_util_1 = require("./object-util");
describe('objectUtil', () => {
    const everyType = {
        number: 1,
        decimal: 1.12345,
        string: 'string',
        undefined: undefined,
        notANumber: NaN,
        emptyObj: {},
        date: new Date('2020-01-01'),
        boolean: true,
        nestedObject: { obj: 'test' },
    };
    describe('deepClone', () => {
        it.each([
            [{ test: 'string' }],
            [{ deep: { test: 'string' } }],
            [{ deeper: { deep: { test: 'string' } } }],
            [everyType],
            [{ deep: everyType }],
            [{ deeper: { deep: everyType } }],
        ])('should clone %j', (obj) => {
            expect(object_util_1.objectUtil.deepClone(obj)).not.toBe(obj);
        });
    });
    describe('deepNullToUndefined', () => {
        it.each([
            [{ test: undefined }, { test: undefined }],
            [{ test: null }, { test: undefined }],
            [{ deep: { test: null } }, { deep: { test: undefined } }],
            [{ deeper: { deep: { test: null } } }, { deeper: { deep: { test: undefined } } }],
            [everyType, everyType],
            [{ deep: everyType }, { deep: everyType }],
            [{ deeper: { deep: everyType } }, { deeper: { deep: everyType } }],
        ])('should convert null to undefined for %j', (withNulls, withUndefined) => {
            expect(object_util_1.objectUtil.deepNullToUndefined(withNulls)).toEqual(withUndefined);
        });
    });
    describe('stringifySortOrNullOrUndefined', () => {
        it.each([
            [null, null],
            [undefined, undefined],
            [{}, '{}'],
            [
                everyType,
                `{
  boolean: true,
  date: 2020-01-01T00:00:00.000Z,
  decimal: 1.12345,
  emptyObj: {},
  nestedObject: {
    obj: 'test'
  },
  notANumber: NaN,
  number: 1,
  string: 'string',
  undefined: undefined
}`,
            ],
            [
                { deep: everyType },
                `{
  deep: {
    boolean: true,
    date: 2020-01-01T00:00:00.000Z,
    decimal: 1.12345,
    emptyObj: {},
    nestedObject: {
      obj: 'test'
    },
    notANumber: NaN,
    number: 1,
    string: 'string',
    undefined: undefined
  }
}`,
            ],
            [
                { deeper: { deep: everyType } },
                `{
  deeper: {
    deep: {
      boolean: true,
      date: 2020-01-01T00:00:00.000Z,
      decimal: 1.12345,
      emptyObj: {},
      nestedObject: {
        obj: 'test'
      },
      notANumber: NaN,
      number: 1,
      string: 'string',
      undefined: undefined
    }
  }
}`,
            ],
        ])('should compare %j with result %j', (value, result) => {
            expect(object_util_1.objectUtil.stringifySortOrNullOrUndefined(value)).toEqual(result);
        });
    });
});
//# sourceMappingURL=object-util.test.js.map