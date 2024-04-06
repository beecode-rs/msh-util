[@beecode/msh-util](../README.md) / memoize-factory

# Module: memoize-factory

## Table of contents

### Type Aliases

- [AnyFunction](memoize_factory.md#anyfunction)

### Functions

- [memoizeFactory](memoize_factory.md#memoizefactory)

## Type Aliases

### AnyFunction

Ƭ **AnyFunction**\<`T`\>: (...`args`: `any`[]) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`...args`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`T`

#### Defined in

[packages/util/src/memoize-factory.ts:2](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/memoize-factory.ts#L2)

## Functions

### memoizeFactory

▸ **memoizeFactory**\<`F`, `R`\>(`factoryFn`): `F`

This is a simple implementation of memoize function that caches result against the parameter passed that are passed to the
function so it never runs the same calculation twice.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`AnyFunction`](memoize_factory.md#anyfunction)\<`R`\> |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryFn` | `F` |

#### Returns

`F`

**`Example`**

```ts
export const sumTwoNumbersMemoize = memoizeFactory((a:number, b:number): number => a + b)

// using
sumTwoNumbersMemoize(5 + 10) // 15
```

#### Defined in

[packages/util/src/memoize-factory.ts:17](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/memoize-factory.ts#L17)
