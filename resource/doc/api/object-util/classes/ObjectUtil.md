[**@beecode/msh-util**](../../README.md)

***

[@beecode/msh-util](../../README.md) / [object-util](../README.md) / ObjectUtil

# Class: ObjectUtil

Defined in: [packages/util/src/object-util.ts:8](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/object-util.ts#L8)

## Constructors

### Constructor

> **new ObjectUtil**(): `ObjectUtil`

#### Returns

`ObjectUtil`

## Methods

### \_deepStringifyCompact()

> `protected` **\_deepStringifyCompact**(`params`): `number` \| `boolean`

Defined in: [packages/util/src/object-util.ts:91](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/object-util.ts#L91)

#### Parameters

##### params

###### isPrettyPrinted

`boolean`

###### prettyPrintCompactLevel

`number`

#### Returns

`number` \| `boolean`

***

### deepClone()

> **deepClone**\<`T`\>(`objectToClone`): `T`

Defined in: [packages/util/src/object-util.ts:15](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/object-util.ts#L15)

Deep clone object. Returned object will have no references to the object passed through params

#### Type Parameters

##### T

`T` *extends* [`ObjectType`](../type-aliases/ObjectType.md)

#### Parameters

##### objectToClone

`T`

#### Returns

`T`

***

### deepEqual()

> **deepEqual**(`a`, `b`): `boolean`

Defined in: [packages/util/src/object-util.ts:111](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/object-util.ts#L111)

We are converting objects to string (or null or undefined) and comparing if the result is equal

#### Parameters

##### a

`any`

##### b

`any`

#### Returns

`boolean`

***

### deepNullToUndefined()

> **deepNullToUndefined**\<`T`\>(`objectWithNulls`): `T`

Defined in: [packages/util/src/object-util.ts:123](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/object-util.ts#L123)

This function is going to convert any null to undefined in the object that is passed to it.

#### Type Parameters

##### T

`T` *extends* [`ObjectType`](../type-aliases/ObjectType.md)

#### Parameters

##### objectWithNulls

`T`

#### Returns

`T`

#### Example

```ts
console.log(new ObjectUtil().deepNullToUndefined({ a: null, b: { c: null } })) // { a: undefined, b: { c: undefined } }
```

***

### deepStringify()

> **deepStringify**(`entity`, `options?`): `string`

Defined in: [packages/util/src/object-util.ts:72](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/object-util.ts#L72)

This function will do stringify deeper that JSON.stringify.

#### Parameters

##### entity

`any`

entity thant needs to be stringify

##### options?

available options

###### isPrettyPrinted?

`boolean`

if object and array properties should be printed in a new row

###### isSorted?

`boolean`

###### prettyPrintCompactLevel?

`number`

if pretty print is on define the level of deepest children that are not
going to be pretty. It doesn't matter if the siblings doesn't have the same depth.

#### Returns

`string`

- strung result

#### Example

```ts
console.log(new ObjectUtil().deepStringify(null)) // 'null'
console.log(new ObjectUtil().deepStringify(undefined)) // 'undefined'
console.log(new ObjectUtil().deepStringify({ a: 1 })) // '{\n\ta: 1\n}'
// `{
//   a:1
// }`
console.log(new ObjectUtil().deepStringify({ b: 1, a: 2 }, {isSorted:true, compact: true})) // { a: 2, b: 1 }
```

***

### pickByList()

> **pickByList**\<`T`, `L`\>(`obj`, `keyList`): `Pick`\<`T`, `L`\>

Defined in: [packages/util/src/object-util.ts:27](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/object-util.ts#L27)

Pick only properties from the property list. It is only allowed to pick properties from the first level

#### Type Parameters

##### T

`T` *extends* `object`

##### L

`L` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### obj

`T`

##### keyList

(`string` \| `L`)[]

#### Returns

`Pick`\<`T`, `L`\>

***

### pickByObjectKeys()

> **pickByObjectKeys**\<`T`, `L`\>(`obj`, `objWithPickKeys`): `Pick`\<`T`, `L`\>

Defined in: [packages/util/src/object-util.ts:48](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/object-util.ts#L48)

Pick objects properties using keys from the second object.

#### Type Parameters

##### T

`T` *extends* `object`

##### L

`L` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### obj

`T`

##### objWithPickKeys

[`ObjectType`](../type-aliases/ObjectType.md) \| `Partial`\<`T`\>

#### Returns

`Pick`\<`T`, `L`\>
