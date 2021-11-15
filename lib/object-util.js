"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectUtil = void 0;
const lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
exports.objectUtil = {
    stringifyOrNullUndefined: (obj) => {
        if (obj == null)
            return obj;
        return JSON.stringify(obj, Object.keys(obj).sort());
    },
    deepClone: (objectToClone) => {
        return (0, lodash_clonedeep_1.default)(objectToClone);
    },
};
//# sourceMappingURL=object-util.js.map