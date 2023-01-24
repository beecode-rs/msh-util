"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.joiUtil = void 0;
const msh_node_error_1 = require("@beecode/msh-node-error");
exports.joiUtil = {
    /**
     * Validate and clean object
     * @param {Partial<T>} objectToValidate
     * @param {Joi.Schema | Joi.ObjectSchema<T>} schema
     * @param {joiUtilOptions | undefined} joiUtilOptions
     * @returns {T} expected object after validation
     */
    sanitize: (objectToValidate, schema, joiUtilOptions) => {
        return exports.joiUtil._validate(objectToValidate, schema, Object.assign(Object.assign({}, joiUtilOptions), { stripUnknown: true }));
    },
    /**
     * Only validate properties specified in validation schema
     * @param {Partial<T>} objectToValidate
     * @param {Joi.Schema | ObjectSchema<T>} schema
     * @param {joiUtilOptions | undefined} joiUtilOptions
     * @returns {T} expected object after validation
     */
    validate: (objectToValidate, schema, joiUtilOptions) => {
        return exports.joiUtil._validate(objectToValidate, schema, joiUtilOptions);
    },
    _validate: (objectToValidate, schema, options) => {
        var _a;
        const _b = options !== null && options !== void 0 ? options : {}, { logger } = _b, validationOptions = __rest(_b, ["logger"]);
        const { error: validationError, value, warning } = schema.validate(objectToValidate, validationOptions);
        if (validationError)
            throw msh_node_error_1.nodeError.client.badRequest(validationError.message.split('"').join("'"), validationError);
        if (warning && ((_a = options === null || options === void 0 ? void 0 : options.logger) === null || _a === void 0 ? void 0 : _a.warn))
            options.logger.warn('joiValidationUtil._validate', warning);
        return value;
    },
};
//# sourceMappingURL=joi-util.js.map