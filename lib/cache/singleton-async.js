"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singletonAsyncFactory = exports.SingletonAsync = void 0;
class SingletonAsync {
    constructor(factory) {
        this._cache = {};
        this._factory = factory;
    }
    /**
     * Empty cached value.
     */
    cleanCache() {
        delete this._cache.singleton;
        this._rejectPromises();
    }
    _rejectPromises() {
        if (this._cache.promises)
            this._cache.promises.forEach((promise) => promise.reject(new Error('Cache was cleaned')));
        delete this._cache.promises;
    }
    /**
     * Return singleton value in a promise. If there is no cached value then try to get it from factory.
     * @returns {Promise<R>}
     */
    async promise() {
        if ('singleton' in this._cache)
            return this._cache.singleton;
        if ('promises' in this._cache) {
            return new Promise((resolve, reject) => {
                this._cache.promises.push({ resolve, reject });
            });
        }
        this._cache.promises = [];
        const result = await this._factory().catch((err) => {
            this._rejectPromises();
            throw err;
        });
        this._cache.singleton = result;
        this._cache.promises.forEach((promise) => promise.resolve(result));
        delete this._cache.promises;
        return result;
    }
    /**
     * Return cached value, if there is no value cached return undefined.
     * @returns {R | undefined}
     */
    cached() {
        if ('singleton' in this._cache)
            return this._cache.singleton;
        return undefined;
    }
}
exports.SingletonAsync = SingletonAsync;
const singletonAsyncFactory = (...params) => new SingletonAsync(...params);
exports.singletonAsyncFactory = singletonAsyncFactory;
//# sourceMappingURL=singleton-async.js.map