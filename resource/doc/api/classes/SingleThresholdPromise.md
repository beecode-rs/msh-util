[@beecode/msh-util](../README.md) / SingleThresholdPromise

# Class: SingleThresholdPromise<T\>

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

- [constructor](SingleThresholdPromise.md#constructor)

### Properties

- [\_cache](SingleThresholdPromise.md#_cache)
- [\_factoryFn](SingleThresholdPromise.md#_factoryfn)

### Methods

- [\_rejectPromises](SingleThresholdPromise.md#_rejectpromises)
- [promise](SingleThresholdPromise.md#promise)

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
| `factoryFn` | `AnyFunctionPromiseNoParams`<`T`\> |

#### Defined in

[single-threshold-promise.ts:27](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/single-threshold-promise.ts#L27)

## Properties

### \_cache

• `Protected` **\_cache**: `Object` = `{}`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `promises?` | { `reject`: (`reason?`: `any`) => `void` ; `resolve`: (`value`: `T` \| `PromiseLike`<`T`\>) => `void`  }[] |

#### Defined in

[single-threshold-promise.ts:21](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/single-threshold-promise.ts#L21)

___

### \_factoryFn

• `Protected` **\_factoryFn**: `AnyFunctionPromiseNoParams`<`T`\>

#### Defined in

[single-threshold-promise.ts:25](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/single-threshold-promise.ts#L25)

## Methods

### \_rejectPromises

▸ `Protected` **_rejectPromises**(): `void`

#### Returns

`void`

#### Defined in

[single-threshold-promise.ts:31](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/single-threshold-promise.ts#L31)

___

### promise

▸ **promise**(): `Promise`<`T`\>

#### Returns

`Promise`<`T`\>

#### Defined in

[single-threshold-promise.ts:36](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/single-threshold-promise.ts#L36)
