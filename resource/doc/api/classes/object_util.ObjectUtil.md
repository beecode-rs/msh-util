[@beecode/msh-util](../README.md) / [object-util](../modules/object_util.md) / ObjectUtil

# Class: ObjectUtil

[object-util](../modules/object_util.md).ObjectUtil

## Table of contents

### Constructors

- [constructor](object_util.ObjectUtil.md#constructor)

### Methods

- [\_deepStringifyCompact](object_util.ObjectUtil.md#_deepstringifycompact)
- [deepClone](object_util.ObjectUtil.md#deepclone)
- [deepEqual](object_util.ObjectUtil.md#deepequal)
- [deepNullToUndefined](object_util.ObjectUtil.md#deepnulltoundefined)
- [deepStringify](object_util.ObjectUtil.md#deepstringify)
- [pickByList](object_util.ObjectUtil.md#pickbylist)
- [pickByObjectKeys](object_util.ObjectUtil.md#pickbyobjectkeys)

## Constructors

### constructor

• **new ObjectUtil**(): [`ObjectUtil`](object_util.ObjectUtil.md)

#### Returns

[`ObjectUtil`](object_util.ObjectUtil.md)

## Methods

### \_deepStringifyCompact

▸ **_deepStringifyCompact**(`params`): `number` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.isPrettyPrinted` | `boolean` |
| `params.prettyPrintCompactLevel` | `number` |

#### Returns

`number` \| `boolean`

#### Defined in

[packages/util/src/object-util.ts:90](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/object-util.ts#L90)

___

### deepClone

▸ **deepClone**\<`T`\>(`objectToClone`): `T`

Deep clone object. Returned object will have no references to the object passed through params

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectType`](../modules/object_util.md#objecttype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectToClone` | `T` |

#### Returns

`T`

#### Defined in

[packages/util/src/object-util.ts:14](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/object-util.ts#L14)

___

### deepEqual

▸ **deepEqual**(`a`, `b`): `boolean`

We are converting objects to string (or null or undefined) and comparing if the result is equal

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `any` |
| `b` | `any` |

#### Returns

`boolean`

#### Defined in

[packages/util/src/object-util.ts:107](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/object-util.ts#L107)

___

### deepNullToUndefined

▸ **deepNullToUndefined**\<`T`\>(`objectWithNulls`): `T`

This function is going to convert any null to undefined in the object that is passed to it.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectType`](../modules/object_util.md#objecttype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectWithNulls` | `T` |

#### Returns

`T`

**`Example`**

```ts
console.log(new ObjectUtil().deepNullToUndefined({ a: null, b: { c: null } })) // { a: undefined, b: { c: undefined } }
```

#### Defined in

[packages/util/src/object-util.ts:119](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/object-util.ts#L119)

___

### deepStringify

▸ **deepStringify**(`entity`, `options?`): `string`

This function will do stringify deeper that JSON.stringify.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entity` | `any` | entity thant needs to be stringify |
| `options?` | `Object` | available options |
| `options.isPrettyPrinted?` | `boolean` | if object and array properties should be printed in a new row |
| `options.isSorted?` | `boolean` | - |
| `options.prettyPrintCompactLevel?` | `number` | if pretty print is on define the level of deepest children that are not going to be pretty. It doesn't matter if the siblings doesn't have the same depth. |

#### Returns

`string`

- strung result

**`Example`**

```ts
console.log(new ObjectUtil().deepStringify(null)) // 'null'
console.log(new ObjectUtil().deepStringify(undefined)) // 'undefined'
console.log(new ObjectUtil().deepStringify({ a: 1 })) // '{\n\ta: 1\n}'
// `{
//   a:1
// }`
console.log(new ObjectUtil().deepStringify({ b: 1, a: 2 }, {isSorted:true, compact: true})) // { a: 2, b: 1 }
```

#### Defined in

[packages/util/src/object-util.ts:71](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/object-util.ts#L71)

___

### pickByList

▸ **pickByList**\<`T`, `L`\>(`obj`, `keyList`): `Pick`\<`T`, `L`\>

Pick only properties from the property list. It is only allowed to pick properties from the first level

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `L` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `keyList` | (`string` \| `L`)[] |

#### Returns

`Pick`\<`T`, `L`\>

#### Defined in

[packages/util/src/object-util.ts:26](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/object-util.ts#L26)

___

### pickByObjectKeys

▸ **pickByObjectKeys**\<`T`, `L`\>(`obj`, `objWithPickKeys`): `Pick`\<`T`, `L`\>

Pick objects properties using keys from the second object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `L` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `objWithPickKeys` | [`ObjectType`](../modules/object_util.md#objecttype) \| `Partial`\<`T`\> |

#### Returns

`Pick`\<`T`, `L`\>

#### Defined in

[packages/util/src/object-util.ts:47](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/object-util.ts#L47)
