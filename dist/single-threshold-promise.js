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
            this._cache.promises.forEach((promise) => {
                promise.reject(new Error('Cache was cleaned'));
            });
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
        this._cache.promises.forEach((promise) => {
            promise.resolve(result);
        });
        delete this._cache.promises;
        return result;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlLXRocmVzaG9sZC1wcm9taXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NpbmdsZS10aHJlc2hvbGQtcHJvbWlzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7Ozs7Ozs7Ozs7Ozs7OztHQWdCRztBQUNILE1BQU0sT0FBTyxzQkFBc0I7SUFDeEIsTUFBTSxHQUdaLEVBQUUsQ0FBQTtJQUVJLFVBQVUsQ0FBK0I7SUFFbkQsWUFBWSxTQUF3QztRQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQTtJQUM1QixDQUFDO0lBRVMsZUFBZTtRQUN4QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ3hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO1lBQy9DLENBQUMsQ0FBQyxDQUFBO1FBQ0gsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7SUFDNUIsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFPO1FBQ1osSUFBSSxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQy9CLE9BQU8sSUFBSSxPQUFPLENBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO1lBQ2hELENBQUMsQ0FBQyxDQUFBO1FBQ0gsQ0FBQztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQTtRQUN6QixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFZLEVBQUUsRUFBRTtZQUM3RCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7WUFDdEIsTUFBTSxHQUFHLENBQUE7UUFDVixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3hDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO1FBRTNCLE9BQU8sTUFBTSxDQUFBO0lBQ2QsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgQW55RnVuY3Rpb25Qcm9taXNlTm9QYXJhbXM8VD4gPSAoKSA9PiBQcm9taXNlPFQ+XG5cbi8qKlxuICogU2luZ2xlVGhyZXNob2xkUHJvbWlzZSByZXR1cm5zIGEgc2luZ2xlIHByb21pc2UsIGFuZCBzdWJzZXF1ZW50IGNhbGxzIG1hZGUgYmVmb3JlIHRoZSBwcm9taXNlIHJlc29sdmVzIHdpbGwgcmV0dXJuIHRoZSBzYW1lIHByb21pc2UuXG4gKiBAZXhhbXBsZVxuICogZXhwb3J0IGNvbnN0IHJlZnJlc2hUb2tlblNpbmdsZVRocmVzaG9sZCA9IG5ldyBTaW5nbGVUaHJlc2hvbGRQcm9taXNlKGFzeW5jICgpID0+IHtcbiAqICAgY29uc3Qgb2xkUmVmcmVzaFRva2VuID0gYXdhaXQgcmVmcmVzaFRva2VuU2VydmljZS5nZXQoKVxuICogICBjb25zdCB7IGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4gfSA9IGF3YWl0IGF1dGhTZXJ2aWNlLnJlZnJlc2hUb2tlbih7XG4gKiAgICAgcmVmcmVzaFRva2VuOiBvbGRSZWZyZXNoVG9rZW4sXG4gKiAgIH0pXG4gKiAgIHJldHVybiB7IGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4gfVxuICogfSlcbiAqXG4gKiBleHBvcnQgY29uc3QgYXV0aFNlcnZpY2UgPSB7XG4gKiAgIHJlZnJlc2hUb2tlbjogYXN5bmMgKCk6IFByb21pc2U8eyBhY2Nlc3NUb2tlbjogc3RyaW5nOyByZWZyZXNoVG9rZW46c3RyaW5nIH0+ID0+IHtcbiAqICAgICByZXR1cm4gcmVmcmVzaFRva2VuU2luZ2xlVGhyZXNob2xkLnByb21pc2UoKVxuICogICB9XG4gKiB9XG4gKi9cbmV4cG9ydCBjbGFzcyBTaW5nbGVUaHJlc2hvbGRQcm9taXNlPFQ+IHtcblx0cHJvdGVjdGVkIF9jYWNoZToge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0cHJvbWlzZXM/OiB7IHJlc29sdmU6ICh2YWx1ZTogVCB8IFByb21pc2VMaWtlPFQ+KSA9PiB2b2lkOyByZWplY3Q6IChyZWFzb24/OiBhbnkpID0+IHZvaWQgfVtdXG5cdH0gPSB7fVxuXG5cdHByb3RlY3RlZCBfZmFjdG9yeUZuOiBBbnlGdW5jdGlvblByb21pc2VOb1BhcmFtczxUPlxuXG5cdGNvbnN0cnVjdG9yKGZhY3RvcnlGbjogQW55RnVuY3Rpb25Qcm9taXNlTm9QYXJhbXM8VD4pIHtcblx0XHR0aGlzLl9mYWN0b3J5Rm4gPSBmYWN0b3J5Rm5cblx0fVxuXG5cdHByb3RlY3RlZCBfcmVqZWN0UHJvbWlzZXMoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuX2NhY2hlLnByb21pc2VzKSB7XG5cdFx0XHR0aGlzLl9jYWNoZS5wcm9taXNlcy5mb3JFYWNoKChwcm9taXNlKSA9PiB7XG5cdFx0XHRcdHByb21pc2UucmVqZWN0KG5ldyBFcnJvcignQ2FjaGUgd2FzIGNsZWFuZWQnKSlcblx0XHRcdH0pXG5cdFx0fVxuXHRcdGRlbGV0ZSB0aGlzLl9jYWNoZS5wcm9taXNlc1xuXHR9XG5cblx0YXN5bmMgcHJvbWlzZSgpOiBQcm9taXNlPFQ+IHtcblx0XHRpZiAoJ3Byb21pc2VzJyBpbiB0aGlzLl9jYWNoZSkge1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0dGhpcy5fY2FjaGUucHJvbWlzZXMhLnB1c2goeyByZWplY3QsIHJlc29sdmUgfSlcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0dGhpcy5fY2FjaGUucHJvbWlzZXMgPSBbXVxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX2ZhY3RvcnlGbigpLmNhdGNoKChlcnI6IHVua25vd24pID0+IHtcblx0XHRcdHRoaXMuX3JlamVjdFByb21pc2VzKClcblx0XHRcdHRocm93IGVyclxuXHRcdH0pXG5cblx0XHR0aGlzLl9jYWNoZS5wcm9taXNlcy5mb3JFYWNoKChwcm9taXNlKSA9PiB7XG5cdFx0XHRwcm9taXNlLnJlc29sdmUocmVzdWx0KVxuXHRcdH0pXG5cdFx0ZGVsZXRlIHRoaXMuX2NhY2hlLnByb21pc2VzXG5cblx0XHRyZXR1cm4gcmVzdWx0XG5cdH1cbn1cbiJdfQ==