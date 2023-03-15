import { AnyFunctionPromiseNoParams } from './types/any-function/promise-no-params';
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
export declare class SingleThresholdPromise<T> {
    protected _cache: {
        promises?: {
            resolve: (value: T | PromiseLike<T>) => void;
            reject: (reason?: any) => void;
        }[];
    };
    protected _factoryFn: AnyFunctionPromiseNoParams<T>;
    constructor(factoryFn: AnyFunctionPromiseNoParams<T>);
    protected _rejectPromises(): void;
    promise(): Promise<T>;
}
//# sourceMappingURL=single-threshold-promise.d.ts.map