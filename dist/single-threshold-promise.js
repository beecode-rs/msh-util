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
export class SingleThresholdPromise {
    _cache = {};
    _factoryFn;
    constructor(factoryFn) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLXRocmVzaG9sZC1wcm9taXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NpbmdsZS10aHJlc2hvbGQtcHJvbWlzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRztBQUNILE1BQU0sT0FBTyxzQkFBc0I7SUFDeEIsTUFBTSxHQUdaLEVBQUUsQ0FBQTtJQUVJLFVBQVUsQ0FBK0I7SUFFbkQsWUFBWSxTQUF3QztRQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQTtJQUM1QixDQUFDO0lBRVMsZUFBZTtRQUN4QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzFGLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO0lBQzVCLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTztRQUNaLElBQUksVUFBVSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvQixPQUFPLElBQUksT0FBTyxDQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQTtZQUNoRCxDQUFDLENBQUMsQ0FBQTtRQUNILENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUE7UUFDekIsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDcEQsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1lBQ3RCLE1BQU0sR0FBRyxDQUFBO1FBQ1YsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUNsRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBRTNCLE9BQU8sTUFBTSxDQUFBO0lBQ2QsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgQW55RnVuY3Rpb25Qcm9taXNlTm9QYXJhbXM8VD4gPSAoKSA9PiBQcm9taXNlPFQ+XG5cbi8qKlxuICogU2luZ2xlVGhyZXNob2xkUHJvbWlzZSByZXR1cm5zIGEgc2luZ2xlIHByb21pc2UsIGFuZCBzdWJzZXF1ZW50IGNhbGxzIG1hZGUgYmVmb3JlIHRoZSBwcm9taXNlIHJlc29sdmVzIHdpbGwgcmV0dXJuIHRoZSBzYW1lIHByb21pc2UuXG4gKiBAZXhhbXBsZVxuICogZXhwb3J0IGNvbnN0IHJlZnJlc2hUb2tlblNpbmdsZVRocmVzaG9sZCA9IG5ldyBTaW5nbGVUaHJlc2hvbGRQcm9taXNlKGFzeW5jICgpID0+IHtcbiAqICAgY29uc3Qgb2xkUmVmcmVzaFRva2VuID0gYXdhaXQgcmVmcmVzaFRva2VuU2VydmljZS5nZXQoKVxuICogICBjb25zdCB7IGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4gfSA9IGF3YWl0IGF1dGhTZXJ2aWNlLnJlZnJlc2hUb2tlbih7XG4gKiAgICAgcmVmcmVzaFRva2VuOiBvbGRSZWZyZXNoVG9rZW4sXG4gKiAgIH0pXG4gKiAgIHJldHVybiB7IGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4gfVxuICogfSlcbiAqXG4gKiBleHBvcnQgY29uc3QgYXV0aFNlcnZpY2UgPSB7XG4gKiAgIHJlZnJlc2hUb2tlbjogYXN5bmMgKCk6IFByb21pc2U8eyBhY2Nlc3NUb2tlbjogc3RyaW5nOyByZWZyZXNoVG9rZW46c3RyaW5nIH0+ID0+IHtcbiAqICAgICByZXR1cm4gcmVmcmVzaFRva2VuU2luZ2xlVGhyZXNob2xkLnByb21pc2UoKVxuICogICB9XG4gKiB9XG4gKi9cbmV4cG9ydCBjbGFzcyBTaW5nbGVUaHJlc2hvbGRQcm9taXNlPFQ+IHtcblx0cHJvdGVjdGVkIF9jYWNoZToge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0cHJvbWlzZXM/OiB7IHJlc29sdmU6ICh2YWx1ZTogVCB8IFByb21pc2VMaWtlPFQ+KSA9PiB2b2lkOyByZWplY3Q6IChyZWFzb24/OiBhbnkpID0+IHZvaWQgfVtdXG5cdH0gPSB7fVxuXG5cdHByb3RlY3RlZCBfZmFjdG9yeUZuOiBBbnlGdW5jdGlvblByb21pc2VOb1BhcmFtczxUPlxuXG5cdGNvbnN0cnVjdG9yKGZhY3RvcnlGbjogQW55RnVuY3Rpb25Qcm9taXNlTm9QYXJhbXM8VD4pIHtcblx0XHR0aGlzLl9mYWN0b3J5Rm4gPSBmYWN0b3J5Rm5cblx0fVxuXG5cdHByb3RlY3RlZCBfcmVqZWN0UHJvbWlzZXMoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuX2NhY2hlLnByb21pc2VzKSB7XG5cdFx0XHR0aGlzLl9jYWNoZS5wcm9taXNlcy5mb3JFYWNoKChwcm9taXNlKSA9PiBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ0NhY2hlIHdhcyBjbGVhbmVkJykpKVxuXHRcdH1cblx0XHRkZWxldGUgdGhpcy5fY2FjaGUucHJvbWlzZXNcblx0fVxuXG5cdGFzeW5jIHByb21pc2UoKTogUHJvbWlzZTxUPiB7XG5cdFx0aWYgKCdwcm9taXNlcycgaW4gdGhpcy5fY2FjaGUpIHtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdHRoaXMuX2NhY2hlLnByb21pc2VzIS5wdXNoKHsgcmVqZWN0LCByZXNvbHZlIH0pXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHRoaXMuX2NhY2hlLnByb21pc2VzID0gW11cblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9mYWN0b3J5Rm4oKS5jYXRjaCgoZXJyKSA9PiB7XG5cdFx0XHR0aGlzLl9yZWplY3RQcm9taXNlcygpXG5cdFx0XHR0aHJvdyBlcnJcblx0XHR9KVxuXG5cdFx0dGhpcy5fY2FjaGUucHJvbWlzZXMuZm9yRWFjaCgocHJvbWlzZSkgPT4gcHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkpXG5cdFx0ZGVsZXRlIHRoaXMuX2NhY2hlLnByb21pc2VzXG5cblx0XHRyZXR1cm4gcmVzdWx0XG5cdH1cbn1cbiJdfQ==