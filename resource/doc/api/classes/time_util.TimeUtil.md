[@beecode/msh-util](../README.md) / [time-util](../modules/time_util.md) / TimeUtil

# Class: TimeUtil

[time-util](../modules/time_util.md).TimeUtil

## Table of contents

### Constructors

- [constructor](time_util.TimeUtil.md#constructor)

### Methods

- [addToDate](time_util.TimeUtil.md#addtodate)
- [dateToUnix](time_util.TimeUtil.md#datetounix)
- [dateToUnixSec](time_util.TimeUtil.md#datetounixsec)
- [now](time_util.TimeUtil.md#now)
- [unixSecToDate](time_util.TimeUtil.md#unixsectodate)
- [unixToDate](time_util.TimeUtil.md#unixtodate)

## Constructors

### constructor

• **new TimeUtil**(): [`TimeUtil`](time_util.TimeUtil.md)

#### Returns

[`TimeUtil`](time_util.TimeUtil.md)

## Methods

### addToDate

▸ **addToDate**(`params`): `Date`

Change the value of date by unit/value pare.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.date` | `Date` |
| `params.unit` | ``"MILLISECOND"`` \| ``"SECOND"`` \| ``"MINUTE"`` \| ``"HOUR"`` \| ``"DAY"`` \| ``"WEEK"`` \| ``"MONTH"`` \| ``"YEAR"`` \| [`DurationUnit`](../enums/time_util.DurationUnit.md) |
| `params.value` | `number` |

#### Returns

`Date`

**`Example`**

```ts
// timeUtil.now().toISOString() === 2023-03-08T19:45:01.991Z
const timeUtil = new TimeUtil()
console.log(timeUtil.addToDate({date: timeUtil.now(), unit: 'DAY', value: 1 }).toISOString()) // 2023-03-09T19:45:01.991Z
console.log(timeUtil.addToDate({date: timeUtil.now(), unit: DurationUnit.MONTH, value: -1 }).toISOString()) //2023-02-08T19:45:01.991Z
```

#### Defined in

[packages/util/src/time-util.ts:90](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/time-util.ts#L90)

___

### dateToUnix

▸ **dateToUnix**(`date`): `number`

Convert date object to unix timestamp (milliseconds)

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`number`

**`Example`**

```ts
// timeUtil.now().toISOString() === 2023-03-08T19:45:01.991Z
const timeUtil = new TimeUtil()
console.log(timeUtil.dateToUnix(timeUtil.now())) // 1678304701991
```

#### Defined in

[packages/util/src/time-util.ts:39](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/time-util.ts#L39)

___

### dateToUnixSec

▸ **dateToUnixSec**(`date`): `number`

Convert date object to unix timestamp (seconds)

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`number`

**`Example`**

```ts
// timeUtil.now().toISOString() === 2023-03-08T19:45:01.991Z
const timeUtil = new TimeUtil()
console.log(timeUtil.dateToUnix(timeUtil.now())) // 1678304701
```

#### Defined in

[packages/util/src/time-util.ts:52](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/time-util.ts#L52)

___

### now

▸ **now**(): `Date`

return date object with the current time

#### Returns

`Date`

**`Example`**

```ts
console.log(new TimeUtil().now().toISOString()) // 2023-03-08T19:45:01.991Z
```

#### Defined in

[packages/util/src/time-util.ts:26](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/time-util.ts#L26)

___

### unixSecToDate

▸ **unixSecToDate**(`unix`): `Date`

Convert unix timestamp (seconds) to date object

#### Parameters

| Name | Type |
| :------ | :------ |
| `unix` | `number` |

#### Returns

`Date`

**`Example`**

```ts
const timeUtil = new TimeUtil()
console.log(timeUtil.unixToDate(1678304701).toISOString()) // 2023-03-08T19:45:01.000Z
```

#### Defined in

[packages/util/src/time-util.ts:76](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/time-util.ts#L76)

___

### unixToDate

▸ **unixToDate**(`unix`): `Date`

Convert unix timestamp (milliseconds) to date object

#### Parameters

| Name | Type |
| :------ | :------ |
| `unix` | `number` |

#### Returns

`Date`

**`Example`**

```ts
const timeUtil = new TimeUtil()
console.log(timeUtil.unixToDate(1678304701991).toISOString()) // 2023-03-08T19:45:01.991Z
```

#### Defined in

[packages/util/src/time-util.ts:64](https://github.com/beecode-rs/msh-util/blob/0a0f0d6/src/time-util.ts#L64)
