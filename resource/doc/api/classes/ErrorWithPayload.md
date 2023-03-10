[@beecode/msh-util](../README.md) / [Exports](../modules.md) / ErrorWithPayload

# Class: ErrorWithPayload<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- `Error`

  ↳ **`ErrorWithPayload`**

## Table of contents

### Constructors

- [constructor](ErrorWithPayload.md#constructor)

### Properties

- [payload](ErrorWithPayload.md#payload)

## Constructors

### constructor

• **new ErrorWithPayload**<`T`\>(`message`, `payload`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `payload` | `T` |

#### Overrides

Error.constructor

#### Defined in

[joi-util.ts:14](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/joi-util.ts#L14)

## Properties

### payload

• **payload**: `T`

#### Defined in

[joi-util.ts:13](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/joi-util.ts#L13)
