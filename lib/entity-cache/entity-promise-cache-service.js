"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityPromiseCacheService = void 0;
class EntityPromiseCacheService {
    constructor(dao) {
        this._dao = dao;
    }
    /**
     * Subscribe to entity cache change and retrieve cached value if not undefined
     * @param {ID} id - entity unique identifier
     * @param {CallBackCacheEntity<ENTITY>} callback -
     * @returns {CacheSubscription}
     */
    subscribeToEntityChange(id, callback) {
        const idString = id.toString();
        const subscription = this._dao.subscribe(idString, callback);
        const { entity, needToFetch = false } = this._dao.get(idString);
        if (entity !== undefined)
            callback({ id: idString, entity });
        if (needToFetch)
            this.forceRefresh(id);
        return subscription;
    }
    forceRefresh(id) {
        this._entityAsync(id).then((entity) => {
            return this._dao.set({ id: id.toString(), entity }, this._timeoutOffsetMs);
        });
    }
}
exports.EntityPromiseCacheService = EntityPromiseCacheService;
//# sourceMappingURL=entity-promise-cache-service.js.map