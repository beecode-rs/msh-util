[@beecode/msh-util](README.md) / Exports

# @beecode/msh-util

## Table of contents

### Enumerations

- [DurationUnit](enums/DurationUnit.md)

### Classes

- [EntityCacheMemory](classes/EntityCacheMemory.md)
- [EntityCachePromiseService](classes/EntityCachePromiseService.md)
- [ErrorWithPayload](classes/ErrorWithPayload.md)
- [JoiUtil](classes/JoiUtil.md)
- [ObjectUtil](classes/ObjectUtil.md)
- [SingleThresholdPromise](classes/SingleThresholdPromise.md)
- [SingletonAsync](classes/SingletonAsync.md)
- [TimeUtil](classes/TimeUtil.md)

### Interfaces

- [JoiLogger](interfaces/JoiLogger.md)

### Type Aliases

- [ClassType](modules.md#classtype)
- [DurationUnitType](modules.md#durationunittype)
- [EntityCache](modules.md#entitycache)
- [EntityCacheCallBack](modules.md#entitycachecallback)
- [EntityCacheSubscription](modules.md#entitycachesubscription)
- [ObjectType](modules.md#objecttype)
- [joiUtilOptions](modules.md#joiutiloptions)

### Variables

- [regexUtil](modules.md#regexutil)
- [stringUtil](modules.md#stringutil)
- [typeUtil](modules.md#typeutil)

### Functions

- [expressErrorHandler](modules.md#expresserrorhandler)
- [factoryPattern](modules.md#factorypattern)
- [memoizeFactory](modules.md#memoizefactory)
- [singletonPattern](modules.md#singletonpattern)
- [timeout](modules.md#timeout)

## Type Aliases

### ClassType

Ƭ **ClassType**<`T`\>: (...`args`: `T` extends (...`args`: `P`) => `any` ? `P` : `never`[]) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `object` |

#### Type declaration

• (`...args`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `T` extends (...`args`: `P`) => `any` ? `P` : `never`[] |

#### Defined in

[factory-pattern.ts:1](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/factory-pattern.ts#L1)

___

### DurationUnitType

Ƭ **DurationUnitType**: \`${DurationUnit}\`

#### Defined in

[time-util.ts:13](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/time-util.ts#L13)

___

### EntityCache

Ƭ **EntityCache**<`ENTITY`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `ENTITY` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `entity` | `ENTITY` |
| `id` | `string` |

#### Defined in

[entity-cache/memory.ts:5](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/entity-cache/memory.ts#L5)

___

### EntityCacheCallBack

Ƭ **EntityCacheCallBack**<`ENTITY`\>: (`cbParams`: [`EntityCache`](modules.md#entitycache)<`ENTITY`\>) => `void`

#### Type parameters

| Name |
| :------ |
| `ENTITY` |

#### Type declaration

▸ (`cbParams`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `cbParams` | [`EntityCache`](modules.md#entitycache)<`ENTITY`\> |

##### Returns

`void`

#### Defined in

[entity-cache/memory.ts:7](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/entity-cache/memory.ts#L7)

___

### EntityCacheSubscription

Ƭ **EntityCacheSubscription**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `unsubscribe` | () => `void` |

#### Defined in

[entity-cache/memory.ts:9](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/entity-cache/memory.ts#L9)

___

### ObjectType

Ƭ **ObjectType**: `Object`

#### Index signature

▪ [k: `string`]: `any`

#### Defined in

[object-util.ts:4](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/object-util.ts#L4)

___

### joiUtilOptions

Ƭ **joiUtilOptions**: `ValidationOptions` & { `logger?`: [`JoiLogger`](interfaces/JoiLogger.md)  }

#### Defined in

[joi-util.ts:8](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/joi-util.ts#L8)

## Variables

### regexUtil

• `Const` **regexUtil**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `uuid` | () => `string` |

#### Defined in

[regex-util.ts:1](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/regex-util.ts#L1)

___

### stringUtil

• `Const` **stringUtil**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `generateUUID` | () => `string` |

#### Defined in

[string-util.ts:1](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/string-util.ts#L1)

___

### typeUtil

• `Const` **typeUtil**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `exhaustiveError` | (`message`: `string`, `_`: `never`) => `Error` |
| `exhaustiveMessage` | (`message`: `string`, `_`: `never`) => `string` |

#### Defined in

[type-util.ts:1](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/type-util.ts#L1)

## Functions

### expressErrorHandler

▸ **expressErrorHandler**(`_target`, `_key`, `descriptor`): `any`

Wrap async express http request end return promise or call next on catch

**`Example`**

```ts
export class RootController {
 /@ErrorHandler
  async login(req: Request, res: Response): Promise<void> {
    const { username, password } = validationUtil().sanitize(req.body, postLoginBodySchema)
    const result = await authorizationUseCase.login({ username, password })
    res.json(result)
  }
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `_target` | `any` |
| `_key` | `string` |
| `descriptor` | `TypedPropertyDescriptor`<`any`\> |

#### Returns

`any`

#### Defined in

[express/error-handler.ts:16](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/express/error-handler.ts#L16)

___

### factoryPattern

▸ **factoryPattern**<`C`\>(`classType`): (...`args`: `ConstructorParameters`<`C`\>) => `InstanceType`<`C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ClassType`](modules.md#classtype)<`object`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `classType` | `C` |

#### Returns

`fn`

▸ (`...args`): `InstanceType`<`C`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ConstructorParameters`<`C`\> |

##### Returns

`InstanceType`<`C`\>

#### Defined in

[factory-pattern.ts:3](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/factory-pattern.ts#L3)

___

### memoizeFactory

▸ **memoizeFactory**<`F`, `R`\>(`factoryFn`): `F`

This is a simple implementation of memoize function that caches result against the parameter passed that are passed to the
function so it never runs the same calculation twice.

**`Example`**

```ts
export const sumTwoNumbersMemoize = memoizeFactory((a:number, b:number): number => a + b)

// using
sumTwoNumbersMemoize(5 + 10) // 15
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends `AnyFunction`<`R`\> |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factoryFn` | `F` |

#### Returns

`F`

#### Defined in

[memoize-factory.ts:16](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/memoize-factory.ts#L16)

___

### singletonPattern

▸ **singletonPattern**<`R`\>(`factoryFn`): `AnyFunctionNoParams`<`R`\>

Singleton patter wrapper function

**`Example`**

```ts
export class SomeClass {
  constructor(protected _param: string){ }
  get param(): string {
    return this._param
  }
}
export const someClassSingleton = singletonPattern((): SomeClass => {
  return new SomeClass('some param value')
})

// using
console.log('param: ', someClassSingleton().param) // param: some param value

///////////////////////////////////////////
// Or we can use it with simple function //
///////////////////////////////////////////
export const config = singletonPattern(() => {
  return {
    env: process.NODE_ENV,
  } as const
})

// using
console.log('NODE_ENV: ', config().env) // NODE_ENV: prod
```

#### Type parameters

| Name |
| :------ |
| `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factoryFn` | `AnyFunctionNoParams`<`R`\> | Factory function that is used to generate value that is going to be cached and return by singleton. |

#### Returns

`AnyFunctionNoParams`<`R`\>

Function result that returns cached value.

#### Defined in

[singleton/pattern.ts:34](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/singleton/pattern.ts#L34)

___

### timeout

▸ **timeout**(`ms`): `Promise`<`void`\>

**`Example`**

```ts
const lightBlink = (): void => {
  turnLightOn()
  timeout(3000) // wait for 3 seconds
  turnLightOff()
  timeout(3000) // wait for 3 seconds
  turnLightOn()
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ms` | `number` | The time, in milliseconds that the timer should wait before the specified function or code is executed. If this parameter is omitted, a value of 0 is used, meaning execute "immediately", or more accurately, the next event cycle. |

#### Returns

`Promise`<`void`\>

#### Defined in

[timeout.ts:14](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/timeout.ts#L14)
