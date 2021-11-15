"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheUtil = void 0;
exports.cacheUtil = {
    memoize: (fun) => {
        const cache = {};
        return ((...args) => {
            const stringifiedArgs = JSON.stringify(args);
            if (stringifiedArgs in cache)
                return cache[stringifiedArgs];
            const result = fun(...args);
            cache[stringifiedArgs] = result;
            return result;
        });
    },
};
//# sourceMappingURL=cache-util.js.map