import { timeUtil } from '../time-util'
import { Subject } from 'rxjs'
import { filter } from 'rxjs/operators'

export type CacheEntity<ENTITY> = { id: string; entity: ENTITY }
export type CallBackCacheEntity<ENTITY> = (cbParams: CacheEntity<ENTITY>) => void
export type CacheSubscription = { unsubscribe: () => void }

export class EntityCacheMemory<ENTITY> {
  protected _memory: { [k: string]: { entity?: ENTITY; timeoutMs?: number } } = {}
  protected _subject = new Subject<CacheEntity<ENTITY>>()

  public get(id: string): { needToFetch?: boolean; entity?: ENTITY } {
    const memo = this._memory[id]

    if (!memo) {
      this._memory[id] = {}
      return { needToFetch: true }
    }

    const needToFetch = this._timeoutExpired(memo.timeoutMs)

    return { entity: memo.entity, needToFetch }
  }

  public set(params: CacheEntity<ENTITY>, timeoutOffsetMs?: number): void {
    const { id, entity } = params
    const timeoutMs = this._calculateTimeout(timeoutOffsetMs)
    this._memory[id] = { entity, timeoutMs }
    this._subject.next({ id, entity })
  }

  public subscribe(id: string, callback: (par: CacheEntity<ENTITY>) => void): CacheSubscription {
    return this._subject.pipe(filter((o) => o.id === id)).subscribe(callback)
  }

  protected _calculateTimeout(timeoutOffsetMs?: number): number | undefined {
    if (timeoutOffsetMs === undefined) return undefined
    return timeUtil.dateToUnix() + timeoutOffsetMs
  }

  protected _timeoutExpired(timeoutMs?: number): boolean {
    if (timeoutMs === undefined) return false
    return timeUtil.dateToUnix() > timeoutMs
  }
}
