[**@beecode/msh-util**](../../README.md)

***

[@beecode/msh-util](../../README.md) / [class-factory-pattern](../README.md) / classFactoryPattern

# Function: classFactoryPattern()

> **classFactoryPattern**\<`C`\>(`classType`): (...`args`) => `InstanceType`\<`C`\>

Defined in: [packages/util/src/class-factory-pattern.ts:24](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/class-factory-pattern.ts#L24)

This is a wrapper that easily converts class constructor call (`new className(..constructorParams)`) into function call (`classNameFactory(..constructorParams)`)

## Type Parameters

### C

`C` *extends* [`ClassType`](../type-aliases/ClassType.md)\<`object`\>

## Parameters

### classType

`C`

## Returns

(...`args`) => `InstanceType`\<`C`\>

## Example

```ts
export class SomeClass {
  protected _a: string

  constructor(params: { a: string }) {
    const { a } = params
    this._a = a
  }
}

export const someClassFactory = classFactoryPattern(SomeClass)

// using
const someClassInstance = someClassFactory({ a: 'test' })
```
