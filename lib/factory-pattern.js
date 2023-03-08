"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factoryPattern = void 0;
const factoryPattern = (classType) => {
    return (...args) => {
        return new classType(...args);
    };
};
exports.factoryPattern = factoryPattern;
//# sourceMappingURL=factory-pattern.js.map