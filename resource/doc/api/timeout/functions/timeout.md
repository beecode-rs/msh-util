[**@beecode/msh-util**](../../README.md)

***

[@beecode/msh-util](../../README.md) / [timeout](../README.md) / timeout

# Function: timeout()

> **timeout**(`ms`): `Promise`\<`void`\>

Defined in: [packages/util/src/timeout.ts:14](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/timeout.ts#L14)

## Parameters

### ms

`number`

The time, in milliseconds that the timer should wait before the specified function or code is executed. If this parameter is omitted, a value of 0 is used, meaning execute "immediately", or more accurately, the next event cycle.

## Returns

`Promise`\<`void`\>

## Example

```ts
const lightBlink = (): void => {
  turnLightOn()
  timeout(3000) // wait for 3 seconds
  turnLightOff()
  timeout(3000) // wait for 3 seconds
  turnLightOn()
}
```
