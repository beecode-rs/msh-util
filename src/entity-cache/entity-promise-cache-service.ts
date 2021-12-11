import { CacheSubscription, CallBackCacheEntity, EntityCacheMemory } from './entity-cache-memory'

export abstract class EntityPromiseCacheService<ENTITY, ID extends string | number = string> {
  protected readonly _dao: EntityCacheMemory<ENTITY>

  protected abstract readonly _timeoutOffsetMs?: number
  protected abstract _entityAsync(id: ID): Promise<ENTITY>

  protected constructor(dao: EntityCacheMemory<ENTITY>) {
    this._dao = dao
  }

  /**
   * Subscribe to entity cache change and retrieve cached value if not undefined
   * @param {ID} id - entity unique identifier
   * @param {CallBackCacheEntity<ENTITY>} callback -
   * @returns {CacheSubscription}
   */
  public subscribeToEntityChange(id: ID, callback: CallBackCacheEntity<ENTITY>): CacheSubscription {
    const idString = id.toString()
    const subscription = this._dao.subscribe(idString, callback)
    const { entity, needToFetch = false } = this._dao.get(idString)
    if (entity !== undefined) callback({ id: idString, entity })
    if (needToFetch) this.forceRefresh(id)
    return subscription
  }

  public forceRefresh(id: ID): void {
    this._entityAsync(id).then((entity) => {
      return this._dao.set({ id: id.toString(), entity }, this._timeoutOffsetMs)
    })
  }
}
