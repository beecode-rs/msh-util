[@beecode/msh-util](../README.md) / timeout

# Module: timeout

## Table of contents

### Functions

- [timeout](timeout.md#timeout)

## Functions

### timeout

▸ **timeout**(`ms`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ms` | `number` | The time, in milliseconds that the timer should wait before the specified function or code is executed. If this parameter is omitted, a value of 0 is used, meaning execute "immediately", or more accurately, the next event cycle. |

#### Returns

`Promise`\<`void`\>

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

#### Defined in

[packages/util/src/timeout.ts:14](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/timeout.ts#L14)
