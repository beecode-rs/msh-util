import { timeout } from './timeout'

describe('timeout', () => {
  const fn_one = jest.fn()
  const fn_two = jest.fn()
  const fn_three = jest.fn()
  const fn_onResolve = jest.fn()

  const timeoutImplementation = async (): Promise<void> => {
    fn_one()
    await timeout(1000)
    fn_two()
    await timeout(1000)
    fn_three()
  }

  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.clearAllTimers()
    jest.useRealTimers()
    jest.resetAllMocks()
  })

  it('should function one by one with pause of 1000ms', async () => {
    expect(fn_one).toHaveBeenCalledTimes(0)
    expect(fn_two).toHaveBeenCalledTimes(0)
    expect(fn_three).toHaveBeenCalledTimes(0)
    expect(fn_onResolve).toHaveBeenCalledTimes(0)

    const promise1 = timeoutImplementation().then(() => {
      return fn_onResolve()
    })

    expect(fn_one).toHaveBeenCalledTimes(1)
    expect(fn_two).toHaveBeenCalledTimes(0)
    expect(fn_three).toHaveBeenCalledTimes(0)
    expect(fn_onResolve).toHaveBeenCalledTimes(0)

    jest.advanceTimersByTime(1000)
    await Promise.resolve()

    expect(fn_one).toHaveBeenCalledTimes(1)
    expect(fn_two).toHaveBeenCalledTimes(1)
    expect(fn_three).toHaveBeenCalledTimes(0)
    expect(fn_onResolve).toHaveBeenCalledTimes(0)

    jest.advanceTimersByTime(1000)
    await Promise.resolve()

    expect(fn_one).toHaveBeenCalledTimes(1)
    expect(fn_two).toHaveBeenCalledTimes(1)
    expect(fn_three).toHaveBeenCalledTimes(1)
    expect(fn_onResolve).toHaveBeenCalledTimes(0)

    await promise1

    expect(fn_one).toHaveBeenCalledTimes(1)
    expect(fn_two).toHaveBeenCalledTimes(1)
    expect(fn_three).toHaveBeenCalledTimes(1)
    expect(fn_onResolve).toHaveBeenCalledTimes(1)
  })
})
