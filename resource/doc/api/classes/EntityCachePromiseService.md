[@beecode/msh-util](../README.md) / EntityCachePromiseService

# Class: EntityCachePromiseService<ENTITY, ID\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `ENTITY` | `ENTITY` |
| `ID` | extends `string` \| `number` = `string` |

## Table of contents

### Constructors

- [constructor](EntityCachePromiseService.md#constructor)

### Properties

- [\_dao](EntityCachePromiseService.md#_dao)
- [\_timeoutOffsetMs](EntityCachePromiseService.md#_timeoutoffsetms)

### Methods

- [\_entityAsync](EntityCachePromiseService.md#_entityasync)
- [forceRefresh](EntityCachePromiseService.md#forcerefresh)
- [subscribeToEntityChangeById](EntityCachePromiseService.md#subscribetoentitychangebyid)

## Constructors

### constructor

• `Protected` **new EntityCachePromiseService**<`ENTITY`, `ID`\>(`dao?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ENTITY` | `ENTITY` |
| `ID` | extends `string` \| `number` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dao?` | [`EntityCacheMemory`](EntityCacheMemory.md)<`ENTITY`\> |

#### Defined in

[entity-cache/promise-service.ts:9](https://github.com/beecode-rs/msh-util/blob/2e4fee4/src/entity-cache/promise-service.ts#L9)

## Properties

### \_dao

• `Protected` `Readonly` **\_dao**: [`EntityCacheMemory`](EntityCacheMemory.md)<`ENTITY`\>

#### Defined in

[entity-cache/promise-service.ts:4](https://github.com/beecode-rs/msh-util/blob/2e4fee4/src/entity-cache/promise-service.ts#L4)

___

### \_timeoutOffsetMs

• `Protected` `Optional` `Readonly` `Abstract` **\_timeoutOffsetMs**: `number`

#### Defined in

[entity-cache/promise-service.ts:6](https://github.com/beecode-rs/msh-util/blob/2e4fee4/src/entity-cache/promise-service.ts#L6)

## Methods

### \_entityAsync

▸ `Protected` `Abstract` **_entityAsync**(`id`): `Promise`<`ENTITY`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `ID` |

#### Returns

`Promise`<`ENTITY`\>

#### Defined in

[entity-cache/promise-service.ts:7](https://github.com/beecode-rs/msh-util/blob/2e4fee4/src/entity-cache/promise-service.ts#L7)

___

### forceRefresh

▸ **forceRefresh**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `ID` |

#### Returns

`void`

#### Defined in

[entity-cache/promise-service.ts:29](https://github.com/beecode-rs/msh-util/blob/2e4fee4/src/entity-cache/promise-service.ts#L29)

___

### subscribeToEntityChangeById

▸ **subscribeToEntityChangeById**(`id`, `callback`): [`EntityCacheSubscription`](../README.md#entitycachesubscription)

Subscribe to entity cache change and retrieve cached value if not undefined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `ID` | entity unique identifier |
| `callback` | [`EntityCacheCallBack`](../README.md#entitycachecallback)<`ENTITY`\> |  |

#### Returns

[`EntityCacheSubscription`](../README.md#entitycachesubscription)

#### Defined in

[entity-cache/promise-service.ts:19](https://github.com/beecode-rs/msh-util/blob/2e4fee4/src/entity-cache/promise-service.ts#L19)
