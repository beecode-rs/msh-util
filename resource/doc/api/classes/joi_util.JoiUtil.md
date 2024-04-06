[@beecode/msh-util](../README.md) / [joi-util](../modules/joi_util.md) / JoiUtil

# Class: JoiUtil

[joi-util](../modules/joi_util.md).JoiUtil

This is a simple wrapper around Joi validation with two functions exposed validate and sanitize. If object is not valid function throws an error.

**`Example`**

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

## Table of contents

### Constructors

- [constructor](joi_util.JoiUtil.md#constructor)

### Methods

- [\_validate](joi_util.JoiUtil.md#_validate)
- [sanitize](joi_util.JoiUtil.md#sanitize)
- [validate](joi_util.JoiUtil.md#validate)

## Constructors

### constructor

• **new JoiUtil**(): [`JoiUtil`](joi_util.JoiUtil.md)

#### Returns

[`JoiUtil`](joi_util.JoiUtil.md)

## Methods

### \_validate

▸ **_validate**\<`T`\>(`objectToValidate`, `schema`, `validationOptions?`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectToValidate` | `any` |
| `schema` | `Schema` \| `ObjectSchema`\<`T`\> |
| `validationOptions?` | `ValidationOptions` |

#### Returns

`T`

#### Defined in

[packages/util/src/joi-util.ts:60](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/joi-util.ts#L60)

___

### sanitize

▸ **sanitize**\<`T`\>(`objectToValidate`, `schema`, `validationOptions?`): `T`

Validate and clean object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectToValidate` | `any` |
| `schema` | `Schema` \| `ObjectSchema`\<`T`\> |
| `validationOptions?` | `ValidationOptions` |

#### Returns

`T`

expected object after validation

#### Defined in

[packages/util/src/joi-util.ts:41](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/joi-util.ts#L41)

___

### validate

▸ **validate**\<`T`\>(`objectToValidate`, `schema`, `validationOptions?`): `T`

Only validate properties specified in validation schema

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectToValidate` | `any` |
| `schema` | `Schema` \| `ObjectSchema`\<`T`\> |
| `validationOptions?` | `ValidationOptions` |

#### Returns

`T`

expected object after validation

#### Defined in

[packages/util/src/joi-util.ts:55](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/joi-util.ts#L55)
