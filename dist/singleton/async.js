/**
 * This is a singleton wrapper that is used to wrap around async function. We have additional functionality to clear the cache
 * and reject any subscriptions to initial promise. And we can also check if there is anything i cache
 * @example
 * export const configSingleton = new SingletonAsync(async () => {
 *   await timeout(3000)
 *   return {
 *     env: process.env.NODE_ENV
 *   } as const
 * })
 *
 * // using
 * // cache value before we call promise
 * console.log(configSingleton().cache()) // undefined
 * console.log('NODE_ENV: ', await configSingleton().promise().env) // NODE_ENV: prod
 * // cache value after we call promise
 * console.log(configSingleton().cache()) // { env: 'prod' }
 */
export class SingletonAsync {
    _cache = {};
    _factory;
    constructor(factory) {
        this._factory = factory;
    }
    /**
     * Empty cached value and reject any subscribed promise that is waiting for the initial promise to be resolved.
     */
    cleanCache() {
        delete this._cache.singleton;
        this._rejectPromises({ error: new Error('Cache was cleaned') });
    }
    _rejectPromises(params) {
        const { error } = params;
        if (this._cache.promises) {
            this._cache.promises.forEach((promise) => promise.reject(error));
        }
        delete this._cache.promises;
    }
    /**
     * Return singleton value in a promise. If there is no cached value then try to get it from factory.
     * @template T
     * @returns {Promise<T>}
     */
    async promise() {
        if ('singleton' in this._cache) {
            return this._cache.singleton;
        }
        if ('promises' in this._cache) {
            return new Promise((resolve, reject) => {
                this._cache.promises.push({ reject, resolve });
            });
        }
        this._cache.promises = [];
        const result = await this._factory().catch((error) => {
            this._rejectPromises({ error });
            throw error;
        });
        this._cache.singleton = result;
        this._cache.promises.forEach((promise) => promise.resolve(result));
        delete this._cache.promises;
        return result;
    }
    /**
     * Return cached value, if there is no value cached return undefined.
     * @template T
     * @returns {T | undefined}
     */
    cached() {
        if ('singleton' in this._cache) {
            return this._cache.singleton;
        }
        return undefined;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2luZ2xldG9uL2FzeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUNILE1BQU0sT0FBTyxjQUFjO0lBQ2hCLE1BQU0sR0FJWixFQUFFLENBQUE7SUFFSSxRQUFRLENBQStCO0lBRWpELFlBQVksT0FBc0M7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUE7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUE7UUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNoRSxDQUFDO0lBRVMsZUFBZSxDQUFDLE1BQXdCO1FBQ2pELE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUE7UUFFeEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1FBQ2pFLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBO0lBQzVCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLE9BQU87UUFDWixJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVUsQ0FBQTtRQUM5QixDQUFDO1FBQ0QsSUFBSSxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQy9CLE9BQU8sSUFBSSxPQUFPLENBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO1lBQ2hELENBQUMsQ0FBQyxDQUFBO1FBQ0gsQ0FBQztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQTtRQUN6QixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNwRCxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtZQUMvQixNQUFNLEtBQUssQ0FBQTtRQUNaLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFBO1FBRTlCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBQ2xFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFFM0IsT0FBTyxNQUFNLENBQUE7SUFDZCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU07UUFDTCxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVUsQ0FBQTtRQUM5QixDQUFDO1FBRUQsT0FBTyxTQUFTLENBQUE7SUFDakIsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgQW55RnVuY3Rpb25Qcm9taXNlTm9QYXJhbXM8VD4gPSAoKSA9PiBQcm9taXNlPFQ+XG5cbi8qKlxuICogVGhpcyBpcyBhIHNpbmdsZXRvbiB3cmFwcGVyIHRoYXQgaXMgdXNlZCB0byB3cmFwIGFyb3VuZCBhc3luYyBmdW5jdGlvbi4gV2UgaGF2ZSBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkgdG8gY2xlYXIgdGhlIGNhY2hlXG4gKiBhbmQgcmVqZWN0IGFueSBzdWJzY3JpcHRpb25zIHRvIGluaXRpYWwgcHJvbWlzZS4gQW5kIHdlIGNhbiBhbHNvIGNoZWNrIGlmIHRoZXJlIGlzIGFueXRoaW5nIGkgY2FjaGVcbiAqIEBleGFtcGxlXG4gKiBleHBvcnQgY29uc3QgY29uZmlnU2luZ2xldG9uID0gbmV3IFNpbmdsZXRvbkFzeW5jKGFzeW5jICgpID0+IHtcbiAqICAgYXdhaXQgdGltZW91dCgzMDAwKVxuICogICByZXR1cm4ge1xuICogICAgIGVudjogcHJvY2Vzcy5lbnYuTk9ERV9FTlZcbiAqICAgfSBhcyBjb25zdFxuICogfSlcbiAqXG4gKiAvLyB1c2luZ1xuICogLy8gY2FjaGUgdmFsdWUgYmVmb3JlIHdlIGNhbGwgcHJvbWlzZVxuICogY29uc29sZS5sb2coY29uZmlnU2luZ2xldG9uKCkuY2FjaGUoKSkgLy8gdW5kZWZpbmVkXG4gKiBjb25zb2xlLmxvZygnTk9ERV9FTlY6ICcsIGF3YWl0IGNvbmZpZ1NpbmdsZXRvbigpLnByb21pc2UoKS5lbnYpIC8vIE5PREVfRU5WOiBwcm9kXG4gKiAvLyBjYWNoZSB2YWx1ZSBhZnRlciB3ZSBjYWxsIHByb21pc2VcbiAqIGNvbnNvbGUubG9nKGNvbmZpZ1NpbmdsZXRvbigpLmNhY2hlKCkpIC8vIHsgZW52OiAncHJvZCcgfVxuICovXG5leHBvcnQgY2xhc3MgU2luZ2xldG9uQXN5bmM8VD4ge1xuXHRwcm90ZWN0ZWQgX2NhY2hlOiB7XG5cdFx0c2luZ2xldG9uPzogVFxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdFx0cHJvbWlzZXM/OiB7IHJlc29sdmU6ICh2YWx1ZTogVCB8IFByb21pc2VMaWtlPFQ+KSA9PiB2b2lkOyByZWplY3Q6IChyZWFzb24/OiBhbnkpID0+IHZvaWQgfVtdXG5cdH0gPSB7fVxuXG5cdHByb3RlY3RlZCBfZmFjdG9yeTogQW55RnVuY3Rpb25Qcm9taXNlTm9QYXJhbXM8VD5cblxuXHRjb25zdHJ1Y3RvcihmYWN0b3J5OiBBbnlGdW5jdGlvblByb21pc2VOb1BhcmFtczxUPikge1xuXHRcdHRoaXMuX2ZhY3RvcnkgPSBmYWN0b3J5XG5cdH1cblxuXHQvKipcblx0ICogRW1wdHkgY2FjaGVkIHZhbHVlIGFuZCByZWplY3QgYW55IHN1YnNjcmliZWQgcHJvbWlzZSB0aGF0IGlzIHdhaXRpbmcgZm9yIHRoZSBpbml0aWFsIHByb21pc2UgdG8gYmUgcmVzb2x2ZWQuXG5cdCAqL1xuXHRjbGVhbkNhY2hlKCk6IHZvaWQge1xuXHRcdGRlbGV0ZSB0aGlzLl9jYWNoZS5zaW5nbGV0b25cblx0XHR0aGlzLl9yZWplY3RQcm9taXNlcyh7IGVycm9yOiBuZXcgRXJyb3IoJ0NhY2hlIHdhcyBjbGVhbmVkJykgfSlcblx0fVxuXG5cdHByb3RlY3RlZCBfcmVqZWN0UHJvbWlzZXMocGFyYW1zOiB7IGVycm9yOiBFcnJvciB9KTogdm9pZCB7XG5cdFx0Y29uc3QgeyBlcnJvciB9ID0gcGFyYW1zXG5cblx0XHRpZiAodGhpcy5fY2FjaGUucHJvbWlzZXMpIHtcblx0XHRcdHRoaXMuX2NhY2hlLnByb21pc2VzLmZvckVhY2goKHByb21pc2UpID0+IHByb21pc2UucmVqZWN0KGVycm9yKSlcblx0XHR9XG5cdFx0ZGVsZXRlIHRoaXMuX2NhY2hlLnByb21pc2VzXG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHNpbmdsZXRvbiB2YWx1ZSBpbiBhIHByb21pc2UuIElmIHRoZXJlIGlzIG5vIGNhY2hlZCB2YWx1ZSB0aGVuIHRyeSB0byBnZXQgaXQgZnJvbSBmYWN0b3J5LlxuXHQgKiBAdGVtcGxhdGUgVFxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxUPn1cblx0ICovXG5cdGFzeW5jIHByb21pc2UoKTogUHJvbWlzZTxUPiB7XG5cdFx0aWYgKCdzaW5nbGV0b24nIGluIHRoaXMuX2NhY2hlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fY2FjaGUuc2luZ2xldG9uIVxuXHRcdH1cblx0XHRpZiAoJ3Byb21pc2VzJyBpbiB0aGlzLl9jYWNoZSkge1xuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFx0dGhpcy5fY2FjaGUucHJvbWlzZXMhLnB1c2goeyByZWplY3QsIHJlc29sdmUgfSlcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0dGhpcy5fY2FjaGUucHJvbWlzZXMgPSBbXVxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX2ZhY3RvcnkoKS5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdHRoaXMuX3JlamVjdFByb21pc2VzKHsgZXJyb3IgfSlcblx0XHRcdHRocm93IGVycm9yXG5cdFx0fSlcblx0XHR0aGlzLl9jYWNoZS5zaW5nbGV0b24gPSByZXN1bHRcblxuXHRcdHRoaXMuX2NhY2hlLnByb21pc2VzLmZvckVhY2goKHByb21pc2UpID0+IHByb21pc2UucmVzb2x2ZShyZXN1bHQpKVxuXHRcdGRlbGV0ZSB0aGlzLl9jYWNoZS5wcm9taXNlc1xuXG5cdFx0cmV0dXJuIHJlc3VsdFxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBjYWNoZWQgdmFsdWUsIGlmIHRoZXJlIGlzIG5vIHZhbHVlIGNhY2hlZCByZXR1cm4gdW5kZWZpbmVkLlxuXHQgKiBAdGVtcGxhdGUgVFxuXHQgKiBAcmV0dXJucyB7VCB8IHVuZGVmaW5lZH1cblx0ICovXG5cdGNhY2hlZCgpOiBUIHwgdW5kZWZpbmVkIHtcblx0XHRpZiAoJ3NpbmdsZXRvbicgaW4gdGhpcy5fY2FjaGUpIHtcblx0XHRcdHJldHVybiB0aGlzLl9jYWNoZS5zaW5nbGV0b24hXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHVuZGVmaW5lZFxuXHR9XG59XG4iXX0=