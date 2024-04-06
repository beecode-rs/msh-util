[@beecode/msh-util](../README.md) / express/error-handler

# Module: express/error-handler

## Table of contents

### Functions

- [expressErrorHandler](express_error_handler.md#expresserrorhandler)

## Functions

### expressErrorHandler

▸ **expressErrorHandler**(`_target`, `_key`, `descriptor`): `any`

Wrap async express http request end return promise or call next on catch

#### Parameters

| Name | Type |
| :------ | :------ |
| `_target` | `any` |
| `_key` | `string` |
| `descriptor` | `TypedPropertyDescriptor`\<`any`\> |

#### Returns

`any`

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

#### Defined in

[packages/util/src/express/error-handler.ts:17](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/express/error-handler.ts#L17)
