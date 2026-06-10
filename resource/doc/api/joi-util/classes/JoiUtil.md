[**@beecode/msh-util**](../../README.md)

***

[@beecode/msh-util](../../README.md) / [joi-util](../README.md) / JoiUtil

# Class: JoiUtil

Defined in: [packages/util/src/joi-util.ts:30](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/joi-util.ts#L30)

This is a simple wrapper around Joi validation with two functions exposed validate and sanitize. If object is not valid function throws an error.

## Example

```ts
type SomeType = {
  a: string
  b: number
}
const someSchema = Joi.object<SomeType>().keys({
  a: Joi.string().required(),
  b: Joi.number().required(),
}).required()

const joiUtil = new JoiUtil()

// using
const invalidObject = joiUtil.validate({}, someSchema) // validate throws an error
const validObject = joiUtil.validate({ a: 'a', b: 1 }, someSchema)
```

## Constructors

### Constructor

> **new JoiUtil**(): `JoiUtil`

#### Returns

`JoiUtil`

## Methods

### \_validate()

> `protected` **\_validate**\<`T`\>(`objectToValidate`, `schema`, `validationOptions?`): `T`

Defined in: [packages/util/src/joi-util.ts:60](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/joi-util.ts#L60)

#### Type Parameters

##### T

`T`

#### Parameters

##### objectToValidate

`any`

##### schema

`Schema` \| `ObjectSchema`\<`T`\>

##### validationOptions?

`ValidationOptions`

#### Returns

`T`

***

### sanitize()

> **sanitize**\<`T`\>(`objectToValidate`, `schema`, `validationOptions?`): `T`

Defined in: [packages/util/src/joi-util.ts:41](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/joi-util.ts#L41)

Validate and clean object

#### Type Parameters

##### T

`T`

#### Parameters

##### objectToValidate

`any`

##### schema

`Schema` \| `ObjectSchema`\<`T`\>

##### validationOptions?

`ValidationOptions`

#### Returns

`T`

expected object after validation

***

### validate()

> **validate**\<`T`\>(`objectToValidate`, `schema`, `validationOptions?`): `T`

Defined in: [packages/util/src/joi-util.ts:55](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/joi-util.ts#L55)

Only validate properties specified in validation schema

#### Type Parameters

##### T

`T`

#### Parameters

##### objectToValidate

`any`

##### schema

`Schema` \| `ObjectSchema`\<`T`\>

##### validationOptions?

`ValidationOptions`

#### Returns

`T`

expected object after validation
