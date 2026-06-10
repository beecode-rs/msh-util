[**@beecode/msh-util**](../../README.md)

***

[@beecode/msh-util](../../README.md) / [array-util](../README.md) / arrayUtil

# Variable: arrayUtil

> `const` **arrayUtil**: `object`

Defined in: [packages/util/src/array-util.ts:1](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/array-util.ts#L1)

## Type Declaration

### notEmpty

> **notEmpty**: \<`T`\>(`value`) => `value is T`

Check if array element is not empty

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T` \| `null` \| `undefined`

#### Returns

`value is T`

#### Example

```ts
const notEmptyArray = [0, 1, 2, null, undefined, ''].filter(arrayUtil.notEmpty)
console.log(notEmptyArray)// [0, 1, 2, '']
```

### notFalsy

> **notFalsy**: \<`T`\>(`value`) => `value is T`

Check if array element is not falsy

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T` \| `null` \| `undefined`

#### Returns

`value is T`

#### Example

```ts
const notFalsyArray = [0, 1, 2, null, undefined, ''].filter(arrayUtil.notFalsy)
console.log(notFalsyArray)// [1, 2]
```
