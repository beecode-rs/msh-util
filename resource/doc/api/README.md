@beecode/msh-util

# @beecode/msh-util

## Table of contents

### Enumerations

- [DurationUnit](enums/DurationUnit.md)

### Classes

- [ErrorWithPayload](classes/ErrorWithPayload.md)
- [JoiUtil](classes/JoiUtil.md)
- [ObjectUtil](classes/ObjectUtil.md)
- [SingleThresholdPromise](classes/SingleThresholdPromise.md)
- [SingletonAsync](classes/SingletonAsync.md)
- [TimeUtil](classes/TimeUtil.md)

### Interfaces

- [JoiLogger](interfaces/JoiLogger.md)

### Type Aliases

- [ClassType](README.md#classtype)
- [DurationUnitType](README.md#durationunittype)
- [ObjectType](README.md#objecttype)
- [joiUtilOptions](README.md#joiutiloptions)

### Variables

- [regexUtil](README.md#regexutil)
- [stringUtil](README.md#stringutil)
- [typeUtil](README.md#typeutil)

### Functions

- [classFactoryPattern](README.md#classfactorypattern)
- [expressErrorHandler](README.md#expresserrorhandler)
- [memoizeFactory](README.md#memoizefactory)
- [singletonPattern](README.md#singletonpattern)
- [timeout](README.md#timeout)

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

[class-factory-pattern.ts:1](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/class-factory-pattern.ts#L1)

___

### DurationUnitType

Ƭ **DurationUnitType**: \`${DurationUnit}\`

#### Defined in

[time-util.ts:17](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/time-util.ts#L17)

___

### ObjectType

Ƭ **ObjectType**: `Object`

#### Index signature

▪ [k: `string`]: `any`

#### Defined in

[object-util.ts:4](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/object-util.ts#L4)

___

### joiUtilOptions

Ƭ **joiUtilOptions**: `ValidationOptions` & { `logger?`: [`JoiLogger`](interfaces/JoiLogger.md)  }

#### Defined in

[joi-util.ts:8](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/joi-util.ts#L8)

## Variables

### regexUtil

• `Const` **regexUtil**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `uuid` | ``"\\b[0-9a-f]{8}\\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\\b[0-9a-f]{12}\\b"`` | This is a UUID regex expression. This is usually used in express router to constrict the values passed as a path parameter (if you are using UUID as your identifier). **`Example`** const { uuid } = regexUtil router.route(`/users/:userId(${uuid})`).get(getUsersById) //... |

#### Defined in

[regex-util.ts:1](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/regex-util.ts#L1)

___

### stringUtil

• `Const` **stringUtil**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `generateUUID` | () => `string` |

#### Defined in

[string-util.ts:1](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/string-util.ts#L1)

___

### typeUtil

• `Const` **typeUtil**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `exhaustiveError` | (`message`: `string`, `_`: `never`) => `Error` |
| `exhaustiveMessage` | (`message`: `string`, `_`: `never`) => `string` |

#### Defined in

[type-util.ts:1](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/type-util.ts#L1)

## Functions

### classFactoryPattern

▸ **classFactoryPattern**<`C`\>(`classType`): (...`args`: `ConstructorParameters`<`C`\>) => `InstanceType`<`C`\>

This is a wrapper that easily converts class constructor call (`new className(..constructorParams)`) into function call (`classNameFactory(..constructorParams)`)

**`Example`**

```ts
export class SomeClass {
  protected _a: string

  constructor(params: { a: string }) {
    const { a } = params
    this._a = a
  }
}

export const someClassFactory = classFactoryPattern(SomeClass)

// using
const someClassInstance = someClassFactory({ a: 'test' })
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ClassType`](README.md#classtype)<`object`\> |

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

[class-factory-pattern.ts:23](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/class-factory-pattern.ts#L23)

___

### expressErrorHandler

▸ **expressErrorHandler**(`_target`, `_key`, `descriptor`): `any`

Wrap async express http request end return promise or call next on catch

**`Example`**

```ts
export class RootController {
 /@expressErrorHandler
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

[express/error-handler.ts:16](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/express/error-handler.ts#L16)

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

[memoize-factory.ts:16](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/memoize-factory.ts#L16)

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

[singleton/pattern.ts:34](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/singleton/pattern.ts#L34)

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

[timeout.ts:14](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/timeout.ts#L14)
