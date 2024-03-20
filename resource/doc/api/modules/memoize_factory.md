[@beecode/msh-util](../README.md) / memoize-factory

# Module: memoize-factory

## Table of contents

### Functions

- [memoizeFactory](memoize_factory.md#memoizefactory)

## Functions

### memoizeFactory

▸ **memoizeFactory**<`F`, `R`\>(`factoryFn`): `F`

This is a simple implementation of memoize function that caches result against the parameter passed that are passed to the
function so it never runs the same calculation twice.

**`Example`**

```ts
export const sumTwoNumbersMemoize = memoizeFactory((a:number, b:number): number => a + b)

// using
sumTwoNumbersMemoize(5 + 10) // 15
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`AnyFunction`](types_any_function.md#anyfunction)<`R`\> |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryFn` | `F` |

#### Returns

`F`

#### Defined in

[packages/util/src/memoize-factory.ts:16](https://github.com/beecode-rs/msh-util/blob/1217d8d/src/memoize-factory.ts#L16)
