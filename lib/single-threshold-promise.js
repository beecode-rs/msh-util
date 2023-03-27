"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleThresholdPromise = void 0;
/**
 * SingleThresholdPromise returns a single promise, and subsequent calls made before the promise resolves will return the same promise.
 * @example
 * export const refreshTokenSingleThreshold = new SingleThresholdPromise(async () => {
 *   const oldRefreshToken = await refreshTokenService.get()
 *   const { accessToken, refreshToken } = await authService.refreshToken({
 *     refreshToken: oldRefreshToken,
 *   })
 *   return { accessToken, refreshToken }
 * })
 *
 * export const authService = {
 *   refreshToken: async (): Promise<{ accessToken: string; refreshToken:string }> => {
 *     return refreshTokenSingleThreshold.promise()
 *   }
 * }
 */
class SingleThresholdPromise {
    constructor(factoryFn) {
        this._cache = {};
        this._factoryFn = factoryFn;
    }
    _rejectPromises() {
        if (this._cache.promises) {
            this._cache.promises.forEach((promise) => promise.reject(new Error('Cache was cleaned')));
        }
        delete this._cache.promises;
    }
    async promise() {
        if ('promises' in this._cache) {
            return new Promise((resolve, reject) => {
                this._cache.promises.push({ reject, resolve });
            });
        }
        this._cache.promises = [];
        const result = await this._factoryFn().catch((err) => {
            this._rejectPromises();
            throw err;
        });
        this._cache.promises.forEach((promise) => promise.resolve(result));
        delete this._cache.promises;
        return result;
    }
}
exports.SingleThresholdPromise = SingleThresholdPromise;
//# sourceMappingURL=single-threshold-promise.js.map