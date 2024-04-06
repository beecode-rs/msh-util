[@beecode/msh-util](../README.md) / [single-threshold-promise](../modules/single_threshold_promise.md) / SingleThresholdPromise

# Class: SingleThresholdPromise<T\>

[single-threshold-promise](../modules/single_threshold_promise.md).SingleThresholdPromise

SingleThresholdPromise returns a single promise, and subsequent calls made before the promise resolves will return the same promise.

**`Example`**

```ts
export const refreshTokenSingleThreshold = new SingleThresholdPromise(async () => {
  const oldRefreshToken = await refreshTokenService.get()
  const { accessToken, refreshToken } = await authService.refreshToken({
    refreshToken: oldRefreshToken,
  })
  return { accessToken, refreshToken }
})

export const authService = {
  refreshToken: async (): Promise<{ accessToken: string; refreshToken:string }> => {
    return refreshTokenSingleThreshold.promise()
  }
}
```

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](single_threshold_promise.SingleThresholdPromise.md#constructor)

### Properties

- [\_cache](single_threshold_promise.SingleThresholdPromise.md#_cache)
- [\_factoryFn](single_threshold_promise.SingleThresholdPromise.md#_factoryfn)

### Methods

- [\_rejectPromises](single_threshold_promise.SingleThresholdPromise.md#_rejectpromises)
- [promise](single_threshold_promise.SingleThresholdPromise.md#promise)

## Constructors

### constructor

• **new SingleThresholdPromise**<`T`\>(`factoryFn`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryFn` | [`AnyFunctionPromiseNoParams`](../modules/types_any_function_promise_no_params.md#anyfunctionpromisenoparams)<`T`\> |

#### Defined in

[packages/util/src/single-threshold-promise.ts:28](https://github.com/beecode-rs/msh-util/blob/1217d8d/src/single-threshold-promise.ts#L28)

## Properties

### \_cache

• `Protected` **\_cache**: `Object` = `{}`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `promises?` | { `reject`: (`reason?`: `any`) => `void` ; `resolve`: (`value`: `T` \| `PromiseLike`<`T`\>) => `void`  }[] |

#### Defined in

[packages/util/src/single-threshold-promise.ts:21](https://github.com/beecode-rs/msh-util/blob/1217d8d/src/single-threshold-promise.ts#L21)

___

### \_factoryFn

• `Protected` **\_factoryFn**: [`AnyFunctionPromiseNoParams`](../modules/types_any_function_promise_no_params.md#anyfunctionpromisenoparams)<`T`\>

#### Defined in

[packages/util/src/single-threshold-promise.ts:26](https://github.com/beecode-rs/msh-util/blob/1217d8d/src/single-threshold-promise.ts#L26)

## Methods

### \_rejectPromises

▸ `Protected` **_rejectPromises**(): `void`

#### Returns

`void`

#### Defined in

[packages/util/src/single-threshold-promise.ts:32](https://github.com/beecode-rs/msh-util/blob/1217d8d/src/single-threshold-promise.ts#L32)

___

### promise

▸ **promise**(): `Promise`<`T`\>

#### Returns

`Promise`<`T`\>

#### Defined in

[packages/util/src/single-threshold-promise.ts:39](https://github.com/beecode-rs/msh-util/blob/1217d8d/src/single-threshold-promise.ts#L39)
