import { ObjectUtil } from 'src/object-util'

describe('objectUtil', () => {
  const objectUtil = new ObjectUtil()

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
  }

  const everyTypeReversed = {
    nestedObject: { obj: 'test' },
    boolean: true,
    date: new Date('2020-01-01'),
    emptyObj: {},
    notANumber: NaN,
    undefined: undefined,
    string: 'string',
    decimal: 1.12345,
    number: 1,
  }

  describe('deepClone', () => {
    it.each([
      [{ test: 'string' }],
      [{ deep: { test: 'string' } }],
      [{ deeper: { deep: { test: 'string' } } }],
      [everyType],
      [{ deep: everyType }],
      [{ deeper: { deep: everyType } }],
    ])('%#. should clone %j', (obj) => {
      expect(objectUtil.deepClone(obj)).not.toBe(obj)
    })
  })

  describe('pickByList', () => {
    it.each([
      [['a', 'b'], { a: 1, b: '2', c: 3 }, { a: 1, b: '2' }],
      [['a', 'c'], { a: 1, b: '2', c: 3 }, { a: 1, c: 3 }],
    ])('%#. should pick only this properties [%s] from object %s and return object %s', (propList, obj, result) => {
      expect(objectUtil.pickByList(obj, propList)).toEqual(result)
    })
  })

  describe('pickByObjectKeys', () => {
    it.each([
      [
        { a: 1, b: '2', c: 3 },
        { a: '', b: '' },
        { a: 1, b: '2' },
      ],
      [
        { a: 1, b: '2', c: 3 },
        { a: '', c: '' },
        { a: 1, c: 3 },
      ],
    ])('%#. should pick form this %s using keys from %s and return %s', (obj, objWithPickKeys, result) => {
      expect(objectUtil.pickByObjectKeys(obj, objWithPickKeys)).toEqual(result)
    })
  })

  describe('deepStringify', () => {
    it.each([
      [{}, '{}'],
      [
        { b: 2, a: 1 },
        `{
  a: 1,
  b: 2
}`,
      ],
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
    ])('%#. should compare %j and sort with result %j', (value, result) => {
      expect(objectUtil.deepStringify(value, { isSorted: true })).toEqual(result)
    })

    it.each([
      [
        { b: 2, a: 1 },
        `{
  a: 1,
  b: 2
}`,
      ],
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
    ])('%#. should compare %j with result %j and not be equal because it is not sorted ', (value, result) => {
      expect(objectUtil.deepStringify(value)).not.toEqual(result)
    })

    it.each([
      [null, 'null'],
      [undefined, 'undefined'],
      [123, '123'],
      [[123], `[ 123 ]`],
      ['test', "'test'"],
      (() => {
        const date = new Date()

        return [date, date.toISOString()]
      })(),
    ])('%#. should compare %j with result %j with compact enabled', (value, result) => {
      expect(objectUtil.deepStringify(value, { compact: true })).toEqual(result)
    })
  })

  describe('deepEqual', () => {
    it.each([
      [null, null],
      [undefined, undefined],
      [{}, {}],
      [everyType, everyType],
      [{ deep: everyType }, { deep: everyType }],
      [{ deeper: { deep: everyType } }, { deeper: { deep: everyType } }],
    ])('%#. should be deep equal compare %j with result %j', (value, result) => {
      expect(objectUtil.deepEqual(value, result)).toBeTruthy()
    })

    it.each([
      [{}, { a: 1 }],
      [everyType, { ...everyType, a: 1 }],
      [{ deep: everyType }, { deep: everyType, a: 1 }],
      [{ deeper: { deep: everyType } }, { deeper: { deep: everyType }, a: 1 }],
    ])('%#. should not deep equal compare %j with result %j', (value, result) => {
      expect(objectUtil.deepEqual(value, result)).toBeFalsy()
    })

    it.each([
      [
        { a: 1, b: 2 },
        { b: 2, a: 1 },
      ],
      [
        { a: { a: 1, b: 2 }, b: everyType },
        { b: everyTypeReversed, a: { b: 2, a: 1 } },
      ],
    ])('%#. should be deep equal even if in different order compare %j with result %j', (value, result) => {
      expect(objectUtil.deepEqual(value, result)).toBeTruthy()
    })
  })

  describe('deepNullToUndefined', () => {
    it.each([
      [{ test: undefined }, { test: undefined }],
      [{ test: null }, { test: undefined }],
      [{ deep: { test: null } }, { deep: { test: undefined } }],
      [{ deeper: { deep: { test: null } } }, { deeper: { deep: { test: undefined } } }],
      [everyType, everyType],
      [{ deep: everyType }, { deep: everyType }],
      [{ deeper: { deep: everyType } }, { deeper: { deep: everyType } }],
    ])('%#. should convert null to undefined for %j', (withNulls, withUndefined) => {
      expect(objectUtil.deepNullToUndefined(withNulls)).toEqual(withUndefined)
    })
  })
})
