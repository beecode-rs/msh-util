[@beecode/msh-util](../README.md) / [Exports](../modules.md) / EntityCacheMemory

# Class: EntityCacheMemory<ENTITY\>

## Type parameters

| Name |
| :------ |
| `ENTITY` |

## Table of contents

### Constructors

- [constructor](EntityCacheMemory.md#constructor)

### Properties

- [\_memory](EntityCacheMemory.md#_memory)
- [\_subject](EntityCacheMemory.md#_subject)

### Methods

- [\_calculateTimeout](EntityCacheMemory.md#_calculatetimeout)
- [\_timeoutExpired](EntityCacheMemory.md#_timeoutexpired)
- [getById](EntityCacheMemory.md#getbyid)
- [set](EntityCacheMemory.md#set)
- [subscribeById](EntityCacheMemory.md#subscribebyid)

## Constructors

### constructor

• **new EntityCacheMemory**<`ENTITY`\>()

#### Type parameters

| Name |
| :------ |
| `ENTITY` |

## Properties

### \_memory

• `Protected` **\_memory**: `Object` = `{}`

#### Index signature

▪ [k: `string`]: { `entity?`: `ENTITY` ; `timeoutMs?`: `number`  }

#### Defined in

[entity-cache/memory.ts:12](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/entity-cache/memory.ts#L12)

___

### \_subject

• `Protected` **\_subject**: `Subject`<[`EntityCache`](../modules.md#entitycache)<`ENTITY`\>\>

#### Defined in

[entity-cache/memory.ts:13](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/entity-cache/memory.ts#L13)

## Methods

### \_calculateTimeout

▸ `Protected` **_calculateTimeout**(`timeoutOffsetMs?`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeoutOffsetMs?` | `number` |

#### Returns

`undefined` \| `number`

#### Defined in

[entity-cache/memory.ts:40](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/entity-cache/memory.ts#L40)

___

### \_timeoutExpired

▸ `Protected` **_timeoutExpired**(`timeoutMs?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeoutMs?` | `number` |

#### Returns

`boolean`

#### Defined in

[entity-cache/memory.ts:47](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/entity-cache/memory.ts#L47)

___

### getById

▸ **getById**(`id`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `entity?` | `ENTITY` |
| `needToFetch?` | `boolean` |

#### Defined in

[entity-cache/memory.ts:15](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/entity-cache/memory.ts#L15)

___

### set

▸ **set**(`params`, `timeoutOffsetMs?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`EntityCache`](../modules.md#entitycache)<`ENTITY`\> |
| `timeoutOffsetMs?` | `number` |

#### Returns

`void`

#### Defined in

[entity-cache/memory.ts:29](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/entity-cache/memory.ts#L29)

___

### subscribeById

▸ **subscribeById**(`id`, `callback`): [`EntityCacheSubscription`](../modules.md#entitycachesubscription)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `callback` | (`par`: [`EntityCache`](../modules.md#entitycache)<`ENTITY`\>) => `void` |

#### Returns

[`EntityCacheSubscription`](../modules.md#entitycachesubscription)

#### Defined in

[entity-cache/memory.ts:36](https://github.com/beecode-rs/msh-util/blob/d5f403f/src/entity-cache/memory.ts#L36)
