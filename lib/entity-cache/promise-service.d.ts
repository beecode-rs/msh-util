import { EntityCacheCallBack, EntityCacheMemory, EntityCacheSubscription } from '../entity-cache/memory';
export declare abstract class EntityCachePromiseService<ENTITY, ID extends string | number = string> {
    protected readonly _dao: EntityCacheMemory<ENTITY>;
    protected abstract readonly _timeoutOffsetMs?: number;
    protected abstract _entityAsync(id: ID): Promise<ENTITY>;
    protected constructor(dao: EntityCacheMemory<ENTITY>);
    /**
     * Subscribe to entity cache change and retrieve cached value if not undefined
     * @param {ID} id - entity unique identifier
     * @param {EntityCacheCallBack<ENTITY>} callback -
     * @returns {EntityCacheSubscription}
     */
    subscribeToEntityChangeById(id: ID, callback: EntityCacheCallBack<ENTITY>): EntityCacheSubscription;
    forceRefresh(id: ID): void;
}
//# sourceMappingURL=promise-service.d.ts.map