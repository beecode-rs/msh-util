import cloneDeep from 'lodash.clonedeep'
import util from 'util'

export type ObjectType = { [k: string]: any }

export const objectUtil = {
  stringifySortOrNullOrUndefined: (obj?: ObjectType | null): string | null | undefined => {
    if (obj == null) return obj
    return util.inspect(obj, {
      depth: Infinity,
      sorted: true,
      maxArrayLength: Infinity,
      maxStringLength: Infinity,
      compact: 0,
      breakLength: Infinity,
    })
  },
  deepClone: <T extends ObjectType>(objectToClone: T): T => {
    return cloneDeep(objectToClone)
  },
  deepNullToUndefined: <T extends ObjectType>(objectWithNulls: T): T => {
    return Object.entries(objectWithNulls).reduce((acc, cur) => {
      const [key, value] = cur
      if (value === null) acc[key] = undefined
      else if (typeof value === 'object' && !(value instanceof Date)) acc[key] = objectUtil.deepNullToUndefined(value)
      else acc[key] = value
      return acc
    }, {} as any)
  },
  deepEqual: (a: any, b: any): boolean => {
    return JSON.stringify(a) === JSON.stringify(b)
  },
  // eslint-disable-next-line @typescript-eslint/ban-types
  pick: <P extends T, T extends object>(entity: T, model: P): P => {
    const keys = Object.keys(model)
    return objectUtil.pickByList<P, T>(entity, keys)
  },
  // eslint-disable-next-line @typescript-eslint/ban-types
  pickByList: <P extends T, T extends object>(entity: T, propertyList: string[]): P => {
    return propertyList.reduce((obj, key) => {
      // eslint-disable-next-line
      if (entity && entity.hasOwnProperty(key)) {
        // eslint-disable-next-line
        // @ts-ignore
        obj[key] = entity[key]
      }
      return obj
    }, {} as P)
  },
}
