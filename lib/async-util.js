"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncUtil = void 0;
exports.asyncUtil = {
    /**
     * Wrap async express http request end return promise or call next on catch
     * @param _target
     * @param _key
     * @param descriptor
     */
    httpErrorHandler: (_target, _key, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function () {
            const next = arguments[2]; // eslint-disable-line prefer-rest-params
            return Promise.resolve(originalMethod.apply(this, arguments)).catch(next); // eslint-disable-line prefer-rest-params
        };
        return descriptor;
    },
    timeout: (t) => new Promise((resolve) => setTimeout(resolve, t)),
};
//# sourceMappingURL=async-util.js.map