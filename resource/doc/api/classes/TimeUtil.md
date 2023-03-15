[@beecode/msh-util](../README.md) / TimeUtil

# Class: TimeUtil

## Table of contents

### Constructors

- [constructor](TimeUtil.md#constructor)

### Methods

- [addToDate](TimeUtil.md#addtodate)
- [dateToUnix](TimeUtil.md#datetounix)
- [dateToUnixSec](TimeUtil.md#datetounixsec)
- [now](TimeUtil.md#now)
- [unixSecToDate](TimeUtil.md#unixsectodate)
- [unixToDate](TimeUtil.md#unixtodate)

## Constructors

### constructor

• **new TimeUtil**()

## Methods

### addToDate

▸ **addToDate**(`params`): `Date`

Change the value of date by unit/value pare.

**`Example`**

```ts
// timeUtil.now().toISOString() === 2023-03-08T19:45:01.991Z
const timeUtil = new TimeUtil()
console.log(timeUtil.addToDate({date: timeUtil.now(), unit: 'DAY', value: 1 }).toISOString()) // 2023-03-09T19:45:01.991Z
console.log(timeUtil.addToDate({date: timeUtil.now(), unit: DurationUnit.MONTH, value: -1 }).toISOString()) //2023-02-08T19:45:01.991Z
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Object` |
| `params.date` | `Date` |
| `params.unit` | [`DurationUnit`](../enums/DurationUnit.md) \| ``"MILLISECOND"`` \| ``"SECOND"`` \| ``"MINUTE"`` \| ``"HOUR"`` \| ``"DAY"`` \| ``"WEEK"`` \| ``"MONTH"`` \| ``"YEAR"`` |
| `params.value` | `number` |

#### Returns

`Date`

#### Defined in

[time-util.ts:90](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/time-util.ts#L90)

___

### dateToUnix

▸ **dateToUnix**(`date`): `number`

Convert date object to unix timestamp (milliseconds)

**`Example`**

```ts
// timeUtil.now().toISOString() === 2023-03-08T19:45:01.991Z
const timeUtil = new TimeUtil()
console.log(timeUtil.dateToUnix(timeUtil.now())) // 1678304701991
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`number`

#### Defined in

[time-util.ts:39](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/time-util.ts#L39)

___

### dateToUnixSec

▸ **dateToUnixSec**(`date`): `number`

Convert date object to unix timestamp (seconds)

**`Example`**

```ts
// timeUtil.now().toISOString() === 2023-03-08T19:45:01.991Z
const timeUtil = new TimeUtil()
console.log(timeUtil.dateToUnix(timeUtil.now())) // 1678304701
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`number`

#### Defined in

[time-util.ts:52](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/time-util.ts#L52)

___

### now

▸ **now**(): `Date`

return date object with the current time

**`Example`**

```ts
console.log(new TimeUtil().now().toISOString()) // 2023-03-08T19:45:01.991Z
```

#### Returns

`Date`

#### Defined in

[time-util.ts:26](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/time-util.ts#L26)

___

### unixSecToDate

▸ **unixSecToDate**(`unix`): `Date`

Convert unix timestamp (seconds) to date object

**`Example`**

```ts
const timeUtil = new TimeUtil()
console.log(timeUtil.unixToDate(1678304701).toISOString()) // 2023-03-08T19:45:01.000Z
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `unix` | `number` |

#### Returns

`Date`

#### Defined in

[time-util.ts:76](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/time-util.ts#L76)

___

### unixToDate

▸ **unixToDate**(`unix`): `Date`

Convert unix timestamp (milliseconds) to date object

**`Example`**

```ts
const timeUtil = new TimeUtil()
console.log(timeUtil.unixToDate(1678304701991).toISOString()) // 2023-03-08T19:45:01.991Z
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `unix` | `number` |

#### Returns

`Date`

#### Defined in

[time-util.ts:64](https://github.com/beecode-rs/msh-util/blob/d220fbb/src/time-util.ts#L64)
