[@beecode/msh-util](../README.md) / singleton/pattern

# Module: singleton/pattern

## Table of contents

### Functions

- [singletonPattern](singleton_pattern.md#singletonpattern)

## Functions

### singletonPattern

▸ **singletonPattern**<`R`\>(`factoryFn`): [`AnyFunctionNoParams`](types_any_function_no_params.md#anyfunctionnoparams)<`R`\>

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
| `factoryFn` | [`AnyFunctionNoParams`](types_any_function_no_params.md#anyfunctionnoparams)<`R`\> | Factory function that is used to generate value that is going to be cached and return by singleton. |

#### Returns

[`AnyFunctionNoParams`](types_any_function_no_params.md#anyfunctionnoparams)<`R`\>

Function result that returns cached value.

#### Defined in

[packages/util/src/singleton/pattern.ts:34](https://github.com/beecode-rs/msh-util/blob/1217d8d/src/singleton/pattern.ts#L34)
