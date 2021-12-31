"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheUtil = void 0;
exports.cacheUtil = {
    memoize: (fun) => {
        const cache = {};
        return ((...args) => {
            const key = JSON.stringify(args);
            if (key in cache)
                return cache[key];
            return (cache[key] = fun(...args));
        });
    },
    singleton: (fun) => {
        const cache = {};
        return () => {
            if ('singleton' in cache)
                return cache.singleton;
            return (cache.singleton = fun());
        };
    },
};
//# sourceMappingURL=cache-util.js.map