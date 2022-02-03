"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleRequestPromiseFactory = exports.SingleRequestPromise = void 0;
class SingleRequestPromise {
    constructor(factory) {
        this._cache = {};
        this._factory = factory;
    }
    _rejectPromises() {
        if (this._cache.promises)
            this._cache.promises.forEach((promise) => promise.reject(new Error('Cache was cleaned')));
        delete this._cache.promises;
    }
    async promise() {
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
        this._cache.promises.forEach((promise) => promise.resolve(result));
        delete this._cache.promises;
        return result;
    }
}
exports.SingleRequestPromise = SingleRequestPromise;
const singleRequestPromiseFactory = (...params) => new SingleRequestPromise(...params);
exports.singleRequestPromiseFactory = singleRequestPromiseFactory;
//# sourceMappingURL=single-request-promise.js.map