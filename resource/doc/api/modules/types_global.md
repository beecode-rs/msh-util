[@beecode/msh-util](../README.md) / types/global

# Module: types/global

## Table of contents

### Functions

- [esmImportMocked](types_global.md#esmimportmocked)

## Functions

### esmImportMocked

▸ **esmImportMocked**(`metaUrl`, `modulePath`): `any`

Example usage: esmImportMocked(import.meta.url, '#src/some-service/some-esm-module')

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metaUrl` | `string` \| `URL` | first parameter needs to be `import.meta.url` |
| `modulePath` | `string` | module path absolute or relative |

#### Returns

`any`

#### Defined in

[packages/util/src/types/global.d.ts:8](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/types/global.d.ts#L8)
