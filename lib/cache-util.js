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
            const result = fun(...args);
            cache[key] = result;
            return result;
        });
    },
    singleton: (fun) => {
        const cache = {};
        const key = 'singleton';
        return () => {
            if (key in cache)
                return cache[key];
            const result = fun();
            cache[key] = result;
            return result;
        };
    },
};
//# sourceMappingURL=cache-util.js.map