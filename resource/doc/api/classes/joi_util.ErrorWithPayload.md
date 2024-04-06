[@beecode/msh-util](../README.md) / [joi-util](../modules/joi_util.md) / ErrorWithPayload

# Class: ErrorWithPayload\<T\>

[joi-util](../modules/joi_util.md).ErrorWithPayload

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Error`

  ↳ **`ErrorWithPayload`**

## Table of contents

### Constructors

- [constructor](joi_util.ErrorWithPayload.md#constructor)

### Properties

- [cause](joi_util.ErrorWithPayload.md#cause)
- [message](joi_util.ErrorWithPayload.md#message)
- [name](joi_util.ErrorWithPayload.md#name)
- [payload](joi_util.ErrorWithPayload.md#payload)
- [stack](joi_util.ErrorWithPayload.md#stack)
- [prepareStackTrace](joi_util.ErrorWithPayload.md#preparestacktrace)
- [stackTraceLimit](joi_util.ErrorWithPayload.md#stacktracelimit)

### Methods

- [captureStackTrace](joi_util.ErrorWithPayload.md#capturestacktrace)

## Constructors

### constructor

• **new ErrorWithPayload**\<`T`\>(`message`, `payload`): [`ErrorWithPayload`](joi_util.ErrorWithPayload.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `payload` | `T` |

#### Returns

[`ErrorWithPayload`](joi_util.ErrorWithPayload.md)\<`T`\>

#### Overrides

Error.constructor

#### Defined in

[packages/util/src/joi-util.ts:6](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/joi-util.ts#L6)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1077

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1076

___

### payload

• **payload**: `T`

#### Defined in

[packages/util/src/joi-util.ts:4](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/joi-util.ts#L4)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1078

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:21
