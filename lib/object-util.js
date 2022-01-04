"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectUtil = void 0;
const lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
const util_1 = __importDefault(require("util"));
exports.objectUtil = {
    stringifySortOrNullOrUndefined: (obj) => {
        if (obj == null)
            return obj;
        return util_1.default.inspect(obj, {
            depth: Infinity,
            sorted: true,
            maxArrayLength: Infinity,
            maxStringLength: Infinity,
            compact: 0,
            breakLength: Infinity,
        });
    },
    deepClone: (objectToClone) => {
        return (0, lodash_clonedeep_1.default)(objectToClone);
    },
    deepNullToUndefined: (objectWithNulls) => {
        return Object.entries(objectWithNulls).reduce((acc, cur) => {
            const [key, value] = cur;
            if (value === null)
                acc[key] = undefined;
            else if (typeof value === 'object' && !(value instanceof Date))
                acc[key] = exports.objectUtil.deepNullToUndefined(value);
            else
                acc[key] = value;
            return acc;
        }, {});
    },
};
//# sourceMappingURL=object-util.js.map