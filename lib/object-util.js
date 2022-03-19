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
    deepEqual: (a, b) => {
        return JSON.stringify(a) === JSON.stringify(b);
    },
    // eslint-disable-next-line @typescript-eslint/ban-types
    pick: (entity, model) => {
        const keys = Object.keys(model);
        return exports.objectUtil.pickByList(entity, keys);
    },
    // eslint-disable-next-line @typescript-eslint/ban-types
    pickByList: (entity, propertyList) => {
        return propertyList.reduce((obj, key) => {
            // eslint-disable-next-line
            if (entity && entity.hasOwnProperty(key)) {
                // eslint-disable-next-line
                // @ts-ignore
                obj[key] = entity[key];
            }
            return obj;
        }, {});
    },
};
//# sourceMappingURL=object-util.js.map