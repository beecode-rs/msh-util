"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringUtil = void 0;
exports.stringUtil = {
    /**
     * Generate random UUID
     * @return {string}
     * @example
     * console.log(stringUtil.uuid()) // "69bfda25-df3f-46b4-8bbb-955cf5193426"
     */
    generateUUID: () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0;
            if (c == 'x') {
                return r.toString(16);
            }
            return ((r & 0x3) | 0x8).toString(16);
        });
    },
};
//# sourceMappingURL=string-util.js.map