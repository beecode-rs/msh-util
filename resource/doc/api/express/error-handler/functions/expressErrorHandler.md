[**@beecode/msh-util**](../../../README.md)

***

[@beecode/msh-util](../../../README.md) / [express/error-handler](../README.md) / expressErrorHandler

# Function: expressErrorHandler()

> **expressErrorHandler**(`_target`, `_key`, `descriptor`): `any`

Defined in: [packages/util/src/express/error-handler.ts:17](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/express/error-handler.ts#L17)

Wrap async express http request end return promise or call next on catch

## Parameters

### \_target

`any`

### \_key

`string`

### descriptor

`TypedPropertyDescriptor`\<`any`\>

## Returns

`any`

## Example

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
