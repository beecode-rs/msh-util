/**
 *
 * @param {number} ms The time, in milliseconds that the timer should wait before the specified function or code is executed. If this parameter is omitted, a value of 0 is used, meaning execute "immediately", or more accurately, the next event cycle.
 * @return {Promise<void>}
 * @example
 * const lightBlink = (): void => {
 *   turnLightOn()
 *   timeout(3000) // wait for 3 seconds
 *   turnLightOff()
 *   timeout(3000) // wait for 3 seconds
 *   turnLightOn()
 * }
 */
export const timeout = (ms: number): Promise<void> => {
	return new Promise((resolve) => setTimeout(resolve, ms))
}
