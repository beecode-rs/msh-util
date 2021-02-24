"use strict";
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
        return exports.joiUtil._validate(objectToValidate, schema, { stripUnknown: true }, joiUtilOptions);
    },
    /**
     * Only validate properties specified in validation schema
     * @param {Partial<T>} objectToValidate
     * @param {Joi.Schema | ObjectSchema<T>} schema
     * @param {joiUtilOptions | undefined} joiUtilOptions
     * @returns {T} expected object after validation
     */
    validate: (objectToValidate, schema, joiUtilOptions) => {
        return exports.joiUtil._validate(objectToValidate, schema, {}, joiUtilOptions);
    },
    _validate: (objectToValidate, schema, validationOptions, options) => {
        var _a;
        const { error: validationError, value, warning } = schema.validate(objectToValidate, validationOptions);
        if (validationError)
            throw msh_node_error_1.error.client.badRequest(validationError.message.split('"').join("'"));
        if (warning && ((_a = options === null || options === void 0 ? void 0 : options.logger) === null || _a === void 0 ? void 0 : _a.warn))
            options.logger.warn('joiValidationUtil._validate', warning);
        return value;
    },
};
//# sourceMappingURL=joi-util.js.map