[@beecode/msh-util](../README.md) / class-factory-pattern

# Module: class-factory-pattern

## Table of contents

### Type Aliases

- [ClassType](class_factory_pattern.md#classtype)

### Functions

- [classFactoryPattern](class_factory_pattern.md#classfactorypattern)

## Type Aliases

### ClassType

Ƭ **ClassType**\<`T`\>: (...`args`: `T` extends (...`args`: `P`) => `any` ? `P` : `never`[]) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

#### Type declaration

• (`...args`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `T` extends (...`args`: `P`) => `any` ? `P` : `never`[] |

##### Returns

`T`

#### Defined in

[packages/util/src/class-factory-pattern.ts:2](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/class-factory-pattern.ts#L2)

## Functions

### classFactoryPattern

▸ **classFactoryPattern**\<`C`\>(`classType`): (...`args`: `ConstructorParameters`\<`C`\>) => `InstanceType`\<`C`\>

This is a wrapper that easily converts class constructor call (`new className(..constructorParams)`) into function call (`classNameFactory(..constructorParams)`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ClassType`](class_factory_pattern.md#classtype)\<`object`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `classType` | `C` |

#### Returns

`fn`

▸ (`...args`): `InstanceType`\<`C`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ConstructorParameters`\<`C`\> |

##### Returns

`InstanceType`\<`C`\>

**`Example`**

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

#### Defined in

[packages/util/src/class-factory-pattern.ts:24](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/class-factory-pattern.ts#L24)
