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
        delete this._cache.resolvers;
        delete this._cache.singleton;
    }
    /**
     * Return singleton value in a promise. If there is no cached value then try to get it from factory.
     * @returns {Promise<R>}
     */
    async promise() {
        if ('singleton' in this._cache)
            return this._cache.singleton;
        if ('resolvers' in this._cache) {
            return new Promise((resolve) => {
                this._cache.resolvers.push(resolve);
            });
        }
        this._cache.resolvers = [];
        const result = await this._factory();
        this._cache.singleton = result;
        this._cache.resolvers.forEach((resolve) => resolve(result));
        delete this._cache.resolvers;
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