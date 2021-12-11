"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityCacheMemory = void 0;
const time_util_1 = require("../time-util");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class EntityCacheMemory {
    constructor() {
        this._memory = {};
        this._subject = new rxjs_1.Subject();
    }
    get(id) {
        const memo = this._memory[id];
        if (!memo) {
            this._memory[id] = {};
            return { needToFetch: true };
        }
        const needToFetch = this._timeoutExpired(memo.timeoutMs);
        return { entity: memo.entity, needToFetch };
    }
    set(params, timeoutOffsetMs) {
        const { id, entity } = params;
        const timeoutMs = this._calculateTimeout(timeoutOffsetMs);
        this._memory[id] = { entity, timeoutMs };
        this._subject.next({ id, entity });
    }
    subscribe(id, callback) {
        return this._subject.pipe((0, operators_1.filter)((o) => o.id === id)).subscribe(callback);
    }
    _calculateTimeout(timeoutOffsetMs) {
        if (timeoutOffsetMs === undefined)
            return undefined;
        return time_util_1.timeUtil.dateToUnix() + timeoutOffsetMs;
    }
    _timeoutExpired(timeoutMs) {
        if (timeoutMs === undefined)
            return false;
        return time_util_1.timeUtil.dateToUnix() > timeoutMs;
    }
}
exports.EntityCacheMemory = EntityCacheMemory;
//# sourceMappingURL=entity-cache-memory.js.map