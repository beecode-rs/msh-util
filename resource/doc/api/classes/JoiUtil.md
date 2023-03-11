[@beecode/msh-util](../README.md) / [Exports](../modules.md) / JoiUtil

# Class: JoiUtil

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

- [constructor](JoiUtil.md#constructor)

### Methods

- [\_validate](JoiUtil.md#_validate)
- [sanitize](JoiUtil.md#sanitize)
- [validate](JoiUtil.md#validate)

## Constructors

### constructor

• **new JoiUtil**()

## Methods

### \_validate

▸ `Protected` **_validate**<`T`\>(`objectToValidate`, `schema`, `options?`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectToValidate` | `any` |
| `schema` | `Schema`<`any`\> \| `ObjectSchema`<`T`\> |
| `options?` | [`joiUtilOptions`](../modules.md#joiutiloptions) |

#### Returns

`T`

#### Defined in

[joi-util.ts:65](https://github.com/beecode-rs/msh-util/blob/241d250/src/joi-util.ts#L65)

___

### sanitize

▸ **sanitize**<`T`\>(`objectToValidate`, `schema`, `joiUtilOptions?`): `T`

Validate and clean object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectToValidate` | `any` |
| `schema` | `Schema`<`any`\> \| `ObjectSchema`<`T`\> |
| `joiUtilOptions?` | [`joiUtilOptions`](../modules.md#joiutiloptions) |

#### Returns

`T`

expected object after validation

#### Defined in

[joi-util.ts:48](https://github.com/beecode-rs/msh-util/blob/241d250/src/joi-util.ts#L48)

___

### validate

▸ **validate**<`T`\>(`objectToValidate`, `schema`, `joiUtilOptions?`): `T`

Only validate properties specified in validation schema

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectToValidate` | `any` |
| `schema` | `Schema`<`any`\> \| `ObjectSchema`<`T`\> |
| `joiUtilOptions?` | [`joiUtilOptions`](../modules.md#joiutiloptions) |

#### Returns

`T`

expected object after validation

#### Defined in

[joi-util.ts:61](https://github.com/beecode-rs/msh-util/blob/241d250/src/joi-util.ts#L61)
