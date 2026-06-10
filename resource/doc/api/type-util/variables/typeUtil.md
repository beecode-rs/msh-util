[**@beecode/msh-util**](../../README.md)

***

[@beecode/msh-util](../../README.md) / [type-util](../README.md) / typeUtil

# Variable: typeUtil

> `const` **typeUtil**: `object`

Defined in: [packages/util/src/type-util.ts:1](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/type-util.ts#L1)

## Type Declaration

### exhaustiveError

> **exhaustiveError**: (`message`, `_`) => `Error`

This is the similar to exhaustiveMessage, but instead of message we are returning error so we can throw it

#### Parameters

##### message

`string`

##### \_

`never`

#### Returns

`Error`

#### Example

```ts
export type Animal = 'cat' | 'dog' | 'bird';

export const makeSound = (animal: Animal): string => {
  switch (animal) {
    case 'cat':
      return 'Meow'
    case 'dog':
      return 'Woof'
    case 'bird':
      return 'Tweet'
    default:
      throw typeUtil.exhaustiveError('Unknown animal [animal]', animal)
  }
}
```

### exhaustiveMessage

> **exhaustiveMessage**: (`message`, `_`) => `string`

In TypeScript, exhaustiveMessage is a technique that can be used with switch statements to ensure that all possible cases are handled.

When using switch statements, it is common to have a default case that handles any unanticipated cases. However, sometimes it is important to ensure that all cases are explicitly handled to avoid potential errors or bugs in the code.

#### Parameters

##### message

`string`

##### \_

`never`

#### Returns

`string`

#### Example

```ts
export type Animal = 'cat' | 'dog' | 'bird';

export const makeSound = (animal: Animal): string => {
  switch (animal) {
    case 'cat':
      return 'Meow'
    case 'dog':
      return 'Woof'
    case 'bird':
      return 'Tweet'
    default:
      console.error(new TypeUtil().exhaustiveMessage('Unknown animal [animal]', animal))
      return 'unknown sound'
  }
}
```
