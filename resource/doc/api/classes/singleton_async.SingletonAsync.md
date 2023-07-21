[@beecode/msh-util](../README.md) / [singleton/async](../modules/singleton_async.md) / SingletonAsync

# Class: SingletonAsync<T\>

[singleton/async](../modules/singleton_async.md).SingletonAsync

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

- [constructor](singleton_async.SingletonAsync.md#constructor)

### Properties

- [\_cache](singleton_async.SingletonAsync.md#_cache)
- [\_factory](singleton_async.SingletonAsync.md#_factory)

### Methods

- [\_rejectPromises](singleton_async.SingletonAsync.md#_rejectpromises)
- [cached](singleton_async.SingletonAsync.md#cached)
- [cleanCache](singleton_async.SingletonAsync.md#cleancache)
- [promise](singleton_async.SingletonAsync.md#promise)

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
| `factory` | [`AnyFunctionPromiseNoParams`](../modules/types_any_function_promise_no_params.md#anyfunctionpromisenoparams)<`T`\> |

#### Defined in

[packages/util/src/singleton/async.ts:30](https://github.com/beecode-rs/msh-util/blob/1217d8d/src/singleton/async.ts#L30)

## Properties

### \_cache

• `Protected` **\_cache**: `Object` = `{}`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `promises?` | { `reject`: (`reason?`: `any`) => `void` ; `resolve`: (`value`: `T` \| `PromiseLike`<`T`\>) => `void`  }[] |
| `singleton?` | `T` |

#### Defined in

[packages/util/src/singleton/async.ts:22](https://github.com/beecode-rs/msh-util/blob/1217d8d/src/singleton/async.ts#L22)

___

### \_factory

• `Protected` **\_factory**: [`AnyFunctionPromiseNoParams`](../modules/types_any_function_promise_no_params.md#anyfunctionpromisenoparams)<`T`\>

#### Defined in

[packages/util/src/singleton/async.ts:28](https://github.com/beecode-rs/msh-util/blob/1217d8d/src/singleton/async.ts#L28)

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

[packages/util/src/singleton/async.ts:42](https://github.com/beecode-rs/msh-util/blob/1217d8d/src/singleton/async.ts#L42)

___

### cached

▸ **cached**(): `undefined` \| `T`

Return cached value, if there is no value cached return undefined.

#### Returns

`undefined` \| `T`

#### Defined in

[packages/util/src/singleton/async.ts:84](https://github.com/beecode-rs/msh-util/blob/1217d8d/src/singleton/async.ts#L84)

___

### cleanCache

▸ **cleanCache**(): `void`

Empty cached value and reject any subscribed promise that is waiting for the initial promise to be resolved.

#### Returns

`void`

#### Defined in

[packages/util/src/singleton/async.ts:37](https://github.com/beecode-rs/msh-util/blob/1217d8d/src/singleton/async.ts#L37)

___

### promise

▸ **promise**(): `Promise`<`T`\>

Return singleton value in a promise. If there is no cached value then try to get it from factory.

#### Returns

`Promise`<`T`\>

#### Defined in

[packages/util/src/singleton/async.ts:56](https://github.com/beecode-rs/msh-util/blob/1217d8d/src/singleton/async.ts#L56)
