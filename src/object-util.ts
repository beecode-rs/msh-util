import cloneDeep from 'lodash.clonedeep'

export type ObjectType = { [k: string]: any }

export const objectUtil = {
  stringifyOrNullUndefined: (obj: ObjectType): string | null | undefined => {
    if (obj == null) return obj
    return JSON.stringify(obj, Object.keys(obj).sort())
  },
  deepClone: <T extends ObjectType>(objectToClone: T): T => {
    return cloneDeep(objectToClone)
  },
}
