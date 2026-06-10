[**@beecode/msh-util**](../../../README.md)

***

[@beecode/msh-util](../../../README.md) / [singleton/async](../README.md) / SingletonAsync

# Class: SingletonAsync\<T\>

Defined in: [packages/util/src/singleton/async.ts:21](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/singleton/async.ts#L21)

This is a singleton wrapper that is used to wrap around async function. We have additional functionality to clear the cache
and reject any subscriptions to initial promise. And we can also check if there is anything i cache

## Example

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

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new SingletonAsync**\<`T`\>(`factory`): `SingletonAsync`\<`T`\>

Defined in: [packages/util/src/singleton/async.ts:30](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/singleton/async.ts#L30)

#### Parameters

##### factory

[`AnyFunctionPromiseNoParams`](../type-aliases/AnyFunctionPromiseNoParams.md)\<`T`\>

#### Returns

`SingletonAsync`\<`T`\>

## Properties

### \_cache

> `protected` **\_cache**: `object` = `{}`

Defined in: [packages/util/src/singleton/async.ts:22](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/singleton/async.ts#L22)

#### promises?

> `optional` **promises?**: `object`[]

#### singleton?

> `optional` **singleton?**: `T`

***

### \_factory

> `protected` **\_factory**: [`AnyFunctionPromiseNoParams`](../type-aliases/AnyFunctionPromiseNoParams.md)\<`T`\>

Defined in: [packages/util/src/singleton/async.ts:28](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/singleton/async.ts#L28)

## Methods

### \_rejectPromises()

> `protected` **\_rejectPromises**(`params`): `void`

Defined in: [packages/util/src/singleton/async.ts:42](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/singleton/async.ts#L42)

#### Parameters

##### params

###### error

`Error`

#### Returns

`void`

***

### cached()

> **cached**(): `T` \| `undefined`

Defined in: [packages/util/src/singleton/async.ts:90](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/singleton/async.ts#L90)

Return cached value, if there is no value cached return undefined.

#### Returns

`T` \| `undefined`

***

### cleanCache()

> **cleanCache**(): `void`

Defined in: [packages/util/src/singleton/async.ts:37](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/singleton/async.ts#L37)

Empty cached value and reject any subscribed promise that is waiting for the initial promise to be resolved.

#### Returns

`void`

***

### promise()

> **promise**(): `Promise`\<`T`\>

Defined in: [packages/util/src/singleton/async.ts:58](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/singleton/async.ts#L58)

Return singleton value in a promise. If there is no cached value then try to get it from factory.

#### Returns

`Promise`\<`T`\>
