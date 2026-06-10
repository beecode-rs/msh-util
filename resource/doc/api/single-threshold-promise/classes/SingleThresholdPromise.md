[**@beecode/msh-util**](../../README.md)

***

[@beecode/msh-util](../../README.md) / [single-threshold-promise](../README.md) / SingleThresholdPromise

# Class: SingleThresholdPromise\<T\>

Defined in: [packages/util/src/single-threshold-promise.ts:20](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/single-threshold-promise.ts#L20)

SingleThresholdPromise returns a single promise, and subsequent calls made before the promise resolves will return the same promise.

## Example

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

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new SingleThresholdPromise**\<`T`\>(`factoryFn`): `SingleThresholdPromise`\<`T`\>

Defined in: [packages/util/src/single-threshold-promise.ts:28](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/single-threshold-promise.ts#L28)

#### Parameters

##### factoryFn

[`AnyFunctionPromiseNoParams`](../type-aliases/AnyFunctionPromiseNoParams.md)\<`T`\>

#### Returns

`SingleThresholdPromise`\<`T`\>

## Properties

### \_cache

> `protected` **\_cache**: `object` = `{}`

Defined in: [packages/util/src/single-threshold-promise.ts:21](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/single-threshold-promise.ts#L21)

#### promises?

> `optional` **promises?**: `object`[]

***

### \_factoryFn

> `protected` **\_factoryFn**: [`AnyFunctionPromiseNoParams`](../type-aliases/AnyFunctionPromiseNoParams.md)\<`T`\>

Defined in: [packages/util/src/single-threshold-promise.ts:26](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/single-threshold-promise.ts#L26)

## Methods

### \_rejectPromises()

> `protected` **\_rejectPromises**(): `void`

Defined in: [packages/util/src/single-threshold-promise.ts:32](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/single-threshold-promise.ts#L32)

#### Returns

`void`

***

### promise()

> **promise**(): `Promise`\<`T`\>

Defined in: [packages/util/src/single-threshold-promise.ts:41](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/single-threshold-promise.ts#L41)

#### Returns

`Promise`\<`T`\>
