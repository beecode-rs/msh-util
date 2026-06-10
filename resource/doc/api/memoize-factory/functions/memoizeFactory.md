[**@beecode/msh-util**](../../README.md)

***

[@beecode/msh-util](../../README.md) / [memoize-factory](../README.md) / memoizeFactory

# Function: memoizeFactory()

> **memoizeFactory**\<`F`, `R`\>(`factoryFn`): `F`

Defined in: [packages/util/src/memoize-factory.ts:17](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/memoize-factory.ts#L17)

This is a simple implementation of memoize function that caches result against the parameter passed that are passed to the
function so it never runs the same calculation twice.

## Type Parameters

### F

`F` *extends* [`AnyFunction`](../type-aliases/AnyFunction.md)\<`R`\>

### R

`R`

## Parameters

### factoryFn

`F`

## Returns

`F`

## Example

```ts
export const sumTwoNumbersMemoize = memoizeFactory((a:number, b:number): number => a + b)

// using
sumTwoNumbersMemoize(5 + 10) // 15
```
