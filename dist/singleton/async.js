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
            this._cache.promises.forEach((promise) => {
                promise.reject(error);
            });
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
            if (error instanceof Error) {
                this._rejectPromises({ error });
            }
            throw error;
        });
        this._cache.singleton = result;
        this._cache.promises.forEach((promise) => {
            promise.resolve(result);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2luZ2xldG9uL2FzeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUNILE1BQU0sT0FBTyxjQUFjO0lBQ2hCLE1BQU0sR0FJWixFQUFFLENBQUE7SUFFSSxRQUFRLENBQStCO0lBRWpELFlBQVksT0FBc0M7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUE7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUE7UUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNoRSxDQUFDO0lBRVMsZUFBZSxDQUFDLE1BQXdCO1FBQ2pELE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUE7UUFFeEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUN4QyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3RCLENBQUMsQ0FBQyxDQUFBO1FBQ0gsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7SUFDNUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxLQUFLLENBQUMsT0FBTztRQUNaLElBQUksV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNoQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBVSxDQUFBO1FBQzlCLENBQUM7UUFDRCxJQUFJLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDL0IsT0FBTyxJQUFJLE9BQU8sQ0FBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7WUFDaEQsQ0FBQyxDQUFDLENBQUE7UUFDSCxDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFBO1FBQ3pCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQWMsRUFBRSxFQUFFO1lBQzdELElBQUksS0FBSyxZQUFZLEtBQUssRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtZQUNoQyxDQUFDO1lBQ0QsTUFBTSxLQUFLLENBQUE7UUFDWixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQTtRQUU5QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN4QyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQTtRQUUzQixPQUFPLE1BQU0sQ0FBQTtJQUNkLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTTtRQUNMLElBQUksV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNoQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBVSxDQUFBO1FBQzlCLENBQUM7UUFFRCxPQUFPLFNBQVMsQ0FBQTtJQUNqQixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBBbnlGdW5jdGlvblByb21pc2VOb1BhcmFtczxUPiA9ICgpID0+IFByb21pc2U8VD5cblxuLyoqXG4gKiBUaGlzIGlzIGEgc2luZ2xldG9uIHdyYXBwZXIgdGhhdCBpcyB1c2VkIHRvIHdyYXAgYXJvdW5kIGFzeW5jIGZ1bmN0aW9uLiBXZSBoYXZlIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eSB0byBjbGVhciB0aGUgY2FjaGVcbiAqIGFuZCByZWplY3QgYW55IHN1YnNjcmlwdGlvbnMgdG8gaW5pdGlhbCBwcm9taXNlLiBBbmQgd2UgY2FuIGFsc28gY2hlY2sgaWYgdGhlcmUgaXMgYW55dGhpbmcgaSBjYWNoZVxuICogQGV4YW1wbGVcbiAqIGV4cG9ydCBjb25zdCBjb25maWdTaW5nbGV0b24gPSBuZXcgU2luZ2xldG9uQXN5bmMoYXN5bmMgKCkgPT4ge1xuICogICBhd2FpdCB0aW1lb3V0KDMwMDApXG4gKiAgIHJldHVybiB7XG4gKiAgICAgZW52OiBwcm9jZXNzLmVudi5OT0RFX0VOVlxuICogICB9IGFzIGNvbnN0XG4gKiB9KVxuICpcbiAqIC8vIHVzaW5nXG4gKiAvLyBjYWNoZSB2YWx1ZSBiZWZvcmUgd2UgY2FsbCBwcm9taXNlXG4gKiBjb25zb2xlLmxvZyhjb25maWdTaW5nbGV0b24oKS5jYWNoZSgpKSAvLyB1bmRlZmluZWRcbiAqIGNvbnNvbGUubG9nKCdOT0RFX0VOVjogJywgYXdhaXQgY29uZmlnU2luZ2xldG9uKCkucHJvbWlzZSgpLmVudikgLy8gTk9ERV9FTlY6IHByb2RcbiAqIC8vIGNhY2hlIHZhbHVlIGFmdGVyIHdlIGNhbGwgcHJvbWlzZVxuICogY29uc29sZS5sb2coY29uZmlnU2luZ2xldG9uKCkuY2FjaGUoKSkgLy8geyBlbnY6ICdwcm9kJyB9XG4gKi9cbmV4cG9ydCBjbGFzcyBTaW5nbGV0b25Bc3luYzxUPiB7XG5cdHByb3RlY3RlZCBfY2FjaGU6IHtcblx0XHRzaW5nbGV0b24/OiBUXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRwcm9taXNlcz86IHsgcmVzb2x2ZTogKHZhbHVlOiBUIHwgUHJvbWlzZUxpa2U8VD4pID0+IHZvaWQ7IHJlamVjdDogKHJlYXNvbj86IGFueSkgPT4gdm9pZCB9W11cblx0fSA9IHt9XG5cblx0cHJvdGVjdGVkIF9mYWN0b3J5OiBBbnlGdW5jdGlvblByb21pc2VOb1BhcmFtczxUPlxuXG5cdGNvbnN0cnVjdG9yKGZhY3Rvcnk6IEFueUZ1bmN0aW9uUHJvbWlzZU5vUGFyYW1zPFQ+KSB7XG5cdFx0dGhpcy5fZmFjdG9yeSA9IGZhY3Rvcnlcblx0fVxuXG5cdC8qKlxuXHQgKiBFbXB0eSBjYWNoZWQgdmFsdWUgYW5kIHJlamVjdCBhbnkgc3Vic2NyaWJlZCBwcm9taXNlIHRoYXQgaXMgd2FpdGluZyBmb3IgdGhlIGluaXRpYWwgcHJvbWlzZSB0byBiZSByZXNvbHZlZC5cblx0ICovXG5cdGNsZWFuQ2FjaGUoKTogdm9pZCB7XG5cdFx0ZGVsZXRlIHRoaXMuX2NhY2hlLnNpbmdsZXRvblxuXHRcdHRoaXMuX3JlamVjdFByb21pc2VzKHsgZXJyb3I6IG5ldyBFcnJvcignQ2FjaGUgd2FzIGNsZWFuZWQnKSB9KVxuXHR9XG5cblx0cHJvdGVjdGVkIF9yZWplY3RQcm9taXNlcyhwYXJhbXM6IHsgZXJyb3I6IEVycm9yIH0pOiB2b2lkIHtcblx0XHRjb25zdCB7IGVycm9yIH0gPSBwYXJhbXNcblxuXHRcdGlmICh0aGlzLl9jYWNoZS5wcm9taXNlcykge1xuXHRcdFx0dGhpcy5fY2FjaGUucHJvbWlzZXMuZm9yRWFjaCgocHJvbWlzZSkgPT4ge1xuXHRcdFx0XHRwcm9taXNlLnJlamVjdChlcnJvcilcblx0XHRcdH0pXG5cdFx0fVxuXHRcdGRlbGV0ZSB0aGlzLl9jYWNoZS5wcm9taXNlc1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBzaW5nbGV0b24gdmFsdWUgaW4gYSBwcm9taXNlLiBJZiB0aGVyZSBpcyBubyBjYWNoZWQgdmFsdWUgdGhlbiB0cnkgdG8gZ2V0IGl0IGZyb20gZmFjdG9yeS5cblx0ICogQHRlbXBsYXRlIFRcblx0ICogQHJldHVybnMge1Byb21pc2U8VD59XG5cdCAqL1xuXHRhc3luYyBwcm9taXNlKCk6IFByb21pc2U8VD4ge1xuXHRcdGlmICgnc2luZ2xldG9uJyBpbiB0aGlzLl9jYWNoZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2NhY2hlLnNpbmdsZXRvbiFcblx0XHR9XG5cdFx0aWYgKCdwcm9taXNlcycgaW4gdGhpcy5fY2FjaGUpIHtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRcdHRoaXMuX2NhY2hlLnByb21pc2VzIS5wdXNoKHsgcmVqZWN0LCByZXNvbHZlIH0pXG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdHRoaXMuX2NhY2hlLnByb21pc2VzID0gW11cblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9mYWN0b3J5KCkuY2F0Y2goKGVycm9yOiB1bmtub3duKSA9PiB7XG5cdFx0XHRpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0XHR0aGlzLl9yZWplY3RQcm9taXNlcyh7IGVycm9yIH0pXG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBlcnJvclxuXHRcdH0pXG5cdFx0dGhpcy5fY2FjaGUuc2luZ2xldG9uID0gcmVzdWx0XG5cblx0XHR0aGlzLl9jYWNoZS5wcm9taXNlcy5mb3JFYWNoKChwcm9taXNlKSA9PiB7XG5cdFx0XHRwcm9taXNlLnJlc29sdmUocmVzdWx0KVxuXHRcdH0pXG5cdFx0ZGVsZXRlIHRoaXMuX2NhY2hlLnByb21pc2VzXG5cblx0XHRyZXR1cm4gcmVzdWx0XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGNhY2hlZCB2YWx1ZSwgaWYgdGhlcmUgaXMgbm8gdmFsdWUgY2FjaGVkIHJldHVybiB1bmRlZmluZWQuXG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqIEByZXR1cm5zIHtUIHwgdW5kZWZpbmVkfVxuXHQgKi9cblx0Y2FjaGVkKCk6IFQgfCB1bmRlZmluZWQge1xuXHRcdGlmICgnc2luZ2xldG9uJyBpbiB0aGlzLl9jYWNoZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2NhY2hlLnNpbmdsZXRvbiFcblx0XHR9XG5cblx0XHRyZXR1cm4gdW5kZWZpbmVkXG5cdH1cbn1cbiJdfQ==