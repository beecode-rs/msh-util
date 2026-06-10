[**@beecode/msh-util**](../../README.md)

***

[@beecode/msh-util](../../README.md) / [time-util](../README.md) / TimeUtil

# Class: TimeUtil

Defined in: [packages/util/src/time-util.ts:19](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/time-util.ts#L19)

## Constructors

### Constructor

> **new TimeUtil**(): `TimeUtil`

#### Returns

`TimeUtil`

## Methods

### addToDate()

> **addToDate**(`params`): `Date`

Defined in: [packages/util/src/time-util.ts:90](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/time-util.ts#L90)

Change the value of date by unit/value pare.

#### Parameters

##### params

###### date

`Date`

###### unit

`"MILLISECOND"` \| `"SECOND"` \| `"MINUTE"` \| `"HOUR"` \| `"DAY"` \| `"WEEK"` \| `"MONTH"` \| `"YEAR"` \| [`DurationUnit`](../enumerations/DurationUnit.md)

###### value

`number`

#### Returns

`Date`

#### Example

```ts
// timeUtil.now().toISOString() === 2023-03-08T19:45:01.991Z
const timeUtil = new TimeUtil()
console.log(timeUtil.addToDate({date: timeUtil.now(), unit: 'DAY', value: 1 }).toISOString()) // 2023-03-09T19:45:01.991Z
console.log(timeUtil.addToDate({date: timeUtil.now(), unit: DurationUnit.MONTH, value: -1 }).toISOString()) //2023-02-08T19:45:01.991Z
```

***

### dateToUnix()

> **dateToUnix**(`date`): `number`

Defined in: [packages/util/src/time-util.ts:39](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/time-util.ts#L39)

Convert date object to unix timestamp (milliseconds)

#### Parameters

##### date

`Date`

#### Returns

`number`

#### Example

```ts
// timeUtil.now().toISOString() === 2023-03-08T19:45:01.991Z
const timeUtil = new TimeUtil()
console.log(timeUtil.dateToUnix(timeUtil.now())) // 1678304701991
```

***

### dateToUnixSec()

> **dateToUnixSec**(`date`): `number`

Defined in: [packages/util/src/time-util.ts:52](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/time-util.ts#L52)

Convert date object to unix timestamp (seconds)

#### Parameters

##### date

`Date`

#### Returns

`number`

#### Example

```ts
// timeUtil.now().toISOString() === 2023-03-08T19:45:01.991Z
const timeUtil = new TimeUtil()
console.log(timeUtil.dateToUnix(timeUtil.now())) // 1678304701
```

***

### now()

> **now**(): `Date`

Defined in: [packages/util/src/time-util.ts:26](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/time-util.ts#L26)

return date object with the current time

#### Returns

`Date`

#### Example

```ts
console.log(new TimeUtil().now().toISOString()) // 2023-03-08T19:45:01.991Z
```

***

### unixSecToDate()

> **unixSecToDate**(`unix`): `Date`

Defined in: [packages/util/src/time-util.ts:76](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/time-util.ts#L76)

Convert unix timestamp (seconds) to date object

#### Parameters

##### unix

`number`

#### Returns

`Date`

#### Example

```ts
const timeUtil = new TimeUtil()
console.log(timeUtil.unixToDate(1678304701).toISOString()) // 2023-03-08T19:45:01.000Z
```

***

### unixToDate()

> **unixToDate**(`unix`): `Date`

Defined in: [packages/util/src/time-util.ts:64](https://github.com/beecode-rs/msh-util/blob/3d1289075fdb8a9c6b280636e64359609b73e6ce/src/time-util.ts#L64)

Convert unix timestamp (milliseconds) to date object

#### Parameters

##### unix

`number`

#### Returns

`Date`

#### Example

```ts
const timeUtil = new TimeUtil()
console.log(timeUtil.unixToDate(1678304701991).toISOString()) // 2023-03-08T19:45:01.991Z
```
