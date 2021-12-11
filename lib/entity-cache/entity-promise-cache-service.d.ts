import { CacheSubscription, CallBackCacheEntity, EntityCacheMemory } from './entity-cache-memory';
export declare abstract class EntityPromiseCacheService<ENTITY, ID extends string | number = string> {
    protected readonly _dao: EntityCacheMemory<ENTITY>;
    protected abstract readonly _timeoutOffsetMs?: number;
    protected abstract _entityAsync(id: ID): Promise<ENTITY>;
    protected constructor(dao: EntityCacheMemory<ENTITY>);
    /**
     * Subscribe to entity cache change and retrieve cached value if not undefined
     * @param {ID} id - entity unique identifier
     * @param {CallBackCacheEntity<ENTITY>} callback -
     * @returns {CacheSubscription}
     */
    subscribeToEntityChange(id: ID, callback: CallBackCacheEntity<ENTITY>): CacheSubscription;
    forceRefresh(id: ID): void;
}
//# sourceMappingURL=entity-promise-cache-service.d.ts.map