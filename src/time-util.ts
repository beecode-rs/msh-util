import { add, format, parse } from 'date-fns'

export type DurationUnit = 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'
export type AddByOptions = {
  unit: DurationUnit
  value: number
}

export const timeUtil = {
  dateToUnix: (date = new Date()): number => +format(date, 'T'),
  dateToUnixSec: (date = new Date()): number => +format(date, 't'),
  addToDate: (addBy: AddByOptions, date = new Date()): Date => add(date, { [addBy.unit]: addBy.value }),
  unixToDate: (unix: number): Date => parse(unix.toString(), 'T', new Date()),
  unixSecToDate: (unix: number): Date => parse(unix.toString(), 't', new Date()),
}
