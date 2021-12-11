import { Subject } from 'rxjs';
export declare type CacheEntity<ENTITY> = {
    id: string;
    entity: ENTITY;
};
export declare type CallBackCacheEntity<ENTITY> = (cbParams: CacheEntity<ENTITY>) => void;
export declare type CacheSubscription = {
    unsubscribe: () => void;
};
export declare class EntityCacheMemory<ENTITY> {
    protected _memory: {
        [k: string]: {
            entity?: ENTITY;
            timeoutMs?: number;
        };
    };
    protected _subject: Subject<CacheEntity<ENTITY>>;
    get(id: string): {
        needToFetch?: boolean;
        entity?: ENTITY;
    };
    set(params: CacheEntity<ENTITY>, timeoutOffsetMs?: number): void;
    subscribe(id: string, callback: (par: CacheEntity<ENTITY>) => void): CacheSubscription;
    protected _calculateTimeout(timeoutOffsetMs?: number): number | undefined;
    protected _timeoutExpired(timeoutMs?: number): boolean;
}
//# sourceMappingURL=entity-cache-memory.d.ts.map