[@beecode/msh-util](../README.md) / [Exports](../modules.md) / SingletonAsync

# Class: SingletonAsync<T\>

This is a singleton wrapper that is used to wrap around async function. We have additional functionality to clear the cache
and reject any subscriptions to initial promise. And we can also check if there is anything i cache

**`Example`**

```ts
export const configSingleton = new SingletonAsync(async () => {
  await timeout(3000)
  return {
    env: process.env.NODE_ENV
  } as const
})

// using
// cache value before we call promise
console.log(configSingleton().cache()) // undefined
console.log('NODE_ENV: ', await configSingleton().promise().env) // NODE_ENV: prod
// cache value after we call promise
console.log(configSingleton().cache()) // { env: 'prod' }
```

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](SingletonAsync.md#constructor)

### Properties

- [\_cache](SingletonAsync.md#_cache)
- [\_factory](SingletonAsync.md#_factory)

### Methods

- [\_rejectPromises](SingletonAsync.md#_rejectpromises)
- [cached](SingletonAsync.md#cached)
- [cleanCache](SingletonAsync.md#cleancache)
- [promise](SingletonAsync.md#promise)

## Constructors

### constructor

• **new SingletonAsync**<`T`\>(`factory`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | `AnyFunctionPromiseNoParams`<`T`\> |

#### Defined in

[singleton/async.ts:29](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/singleton/async.ts#L29)

## Properties

### \_cache

• `Protected` **\_cache**: `Object` = `{}`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `promises?` | { `reject`: (`reason?`: `any`) => `void` ; `resolve`: (`value`: `T` \| `PromiseLike`<`T`\>) => `void`  }[] |
| `singleton?` | `T` |

#### Defined in

[singleton/async.ts:22](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/singleton/async.ts#L22)

___

### \_factory

• `Protected` **\_factory**: `AnyFunctionPromiseNoParams`<`T`\>

#### Defined in

[singleton/async.ts:27](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/singleton/async.ts#L27)

## Methods

### \_rejectPromises

▸ `Protected` **_rejectPromises**(`params`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.error` | `Error` |

#### Returns

`void`

#### Defined in

[singleton/async.ts:41](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/singleton/async.ts#L41)

___

### cached

▸ **cached**(): `undefined` \| `T`

Return cached value, if there is no value cached return undefined.

#### Returns

`undefined` \| `T`

#### Defined in

[singleton/async.ts:79](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/singleton/async.ts#L79)

___

### cleanCache

▸ **cleanCache**(): `void`

Empty cached value and reject any subscribed promise that is waiting for the initial promise to be resolved.

#### Returns

`void`

#### Defined in

[singleton/async.ts:36](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/singleton/async.ts#L36)

___

### promise

▸ **promise**(): `Promise`<`T`\>

Return singleton value in a promise. If there is no cached value then try to get it from factory.

#### Returns

`Promise`<`T`\>

#### Defined in

[singleton/async.ts:53](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/singleton/async.ts#L53)
