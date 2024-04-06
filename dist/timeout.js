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
export const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZW91dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90aW1lb3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBRyxDQUFDLEVBQVUsRUFBaUIsRUFBRTtJQUNwRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFDekQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG1zIFRoZSB0aW1lLCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0aGUgdGltZXIgc2hvdWxkIHdhaXQgYmVmb3JlIHRoZSBzcGVjaWZpZWQgZnVuY3Rpb24gb3IgY29kZSBpcyBleGVjdXRlZC4gSWYgdGhpcyBwYXJhbWV0ZXIgaXMgb21pdHRlZCwgYSB2YWx1ZSBvZiAwIGlzIHVzZWQsIG1lYW5pbmcgZXhlY3V0ZSBcImltbWVkaWF0ZWx5XCIsIG9yIG1vcmUgYWNjdXJhdGVseSwgdGhlIG5leHQgZXZlbnQgY3ljbGUuXG4gKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGxpZ2h0QmxpbmsgPSAoKTogdm9pZCA9PiB7XG4gKiAgIHR1cm5MaWdodE9uKClcbiAqICAgdGltZW91dCgzMDAwKSAvLyB3YWl0IGZvciAzIHNlY29uZHNcbiAqICAgdHVybkxpZ2h0T2ZmKClcbiAqICAgdGltZW91dCgzMDAwKSAvLyB3YWl0IGZvciAzIHNlY29uZHNcbiAqICAgdHVybkxpZ2h0T24oKVxuICogfVxuICovXG5leHBvcnQgY29uc3QgdGltZW91dCA9IChtczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG59XG4iXX0=