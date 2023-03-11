[@beecode/msh-util](../README.md) / ObjectUtil

# Class: ObjectUtil

## Table of contents

### Constructors

- [constructor](ObjectUtil.md#constructor)

### Methods

- [deepClone](ObjectUtil.md#deepclone)
- [deepEqual](ObjectUtil.md#deepequal)
- [deepNullToUndefined](ObjectUtil.md#deepnulltoundefined)
- [pickByList](ObjectUtil.md#pickbylist)
- [pickByObjectKeys](ObjectUtil.md#pickbyobjectkeys)
- [stringifySortOrNullOrUndefined](ObjectUtil.md#stringifysortornullorundefined)

## Constructors

### constructor

• **new ObjectUtil**()

## Methods

### deepClone

▸ **deepClone**<`T`\>(`objectToClone`): `T`

Deep clone object. Returned object will have no references to the object passed through params

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectType`](../README.md#objecttype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectToClone` | `T` |

#### Returns

`T`

#### Defined in

[object-util.ts:13](https://github.com/beecode-rs/msh-util/blob/2e4fee4/src/object-util.ts#L13)

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

[object-util.ts:82](https://github.com/beecode-rs/msh-util/blob/2e4fee4/src/object-util.ts#L82)

___

### deepNullToUndefined

▸ **deepNullToUndefined**<`T`\>(`objectWithNulls`): `T`

This function is going to convert any null to undefined in the object that is passed to it.

**`Example`**

```ts
console.log(new ObjectUtil().deepNullToUndefined({ a: null, b: { c: null } })) // { a: undefined, b: { c: undefined } }
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ObjectType`](../README.md#objecttype) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectWithNulls` | `T` |

#### Returns

`T`

#### Defined in

[object-util.ts:94](https://github.com/beecode-rs/msh-util/blob/2e4fee4/src/object-util.ts#L94)

___

### pickByList

▸ **pickByList**<`T`, `L`\>(`obj`, `keyList`): `Pick`<`T`, `L`\>

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

`Pick`<`T`, `L`\>

#### Defined in

[object-util.ts:25](https://github.com/beecode-rs/msh-util/blob/2e4fee4/src/object-util.ts#L25)

___

### pickByObjectKeys

▸ **pickByObjectKeys**<`T`, `L`\>(`obj`, `objWithPickKeys`): `Pick`<`T`, `L`\>

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
| `objWithPickKeys` | [`ObjectType`](../README.md#objecttype) \| `Partial`<`T`\> |

#### Returns

`Pick`<`T`, `L`\>

#### Defined in

[object-util.ts:46](https://github.com/beecode-rs/msh-util/blob/2e4fee4/src/object-util.ts#L46)

___

### stringifySortOrNullOrUndefined

▸ **stringifySortOrNullOrUndefined**(`obj?`): `undefined` \| ``null`` \| `string`

This function will do stringify deeper that JSON.stringify. If the object that you pass is null or undefined it will return that value (null or undefined) otherwise it will return string

**`Example`**

console.log(new ObjectUtil().stringifySortOrNullOrUndefined(null)) // null
console.log(new ObjectUtil().stringifySortOrNullOrUndefined(undefined)) // undefined
console.log(new ObjectUtil().stringifySortOrNullOrUndefined({ a: 1 })) // '{\n\ta: 1\n}'
// `{
//   a:1
// }`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj?` | ``null`` \| [`ObjectType`](../README.md#objecttype) |

#### Returns

`undefined` \| ``null`` \| `string`

#### Defined in

[object-util.ts:63](https://github.com/beecode-rs/msh-util/blob/2e4fee4/src/object-util.ts#L63)
