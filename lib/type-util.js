"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeUtil = void 0;
const _self = {
    exhaustiveMessage: (message, _) => {
        return `${message}`;
    },
    exhaustiveError: (message, _) => {
        return new Error(_self.exhaustiveMessage(message, _));
    },
    /**
     * @deprecated since version 3.2.0
     * Please use exhaustiveError
     * @param {string} message
     * @param {never} _
     * @returns {Error}
     */
    exhaustiveCheck: (message, _) => {
        return new Error(`ExhaustiveCheck: ${message} [${_}]`);
    },
};
exports.typeUtil = _self;
//# sourceMappingURL=type-util.js.map