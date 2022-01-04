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
}
