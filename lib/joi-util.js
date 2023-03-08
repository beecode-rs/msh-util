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
exports.JoiUtil = exports.ErrorWithPayload = void 0;
class ErrorWithPayload extends Error {
    constructor(message, payload) {
        super(message);
        this.payload = payload;
    }
}
exports.ErrorWithPayload = ErrorWithPayload;
/**
 * This is a simple wrapper around Joi validation with two functions exposed validate and sanitize. If object is not valid function throws an error.
 * @example
 * type SomeType = {
 *   a: string
 *   b: number
 * }
 * const someSchema = Joi.object<SomeType>().keys({
 *   a: Joi.string().required(),
 *   b: Joi.number().required(),
 * }).required()
 *
 * const joiUtil = new JoiUtil()
 *
 * // using
 * const invalidObject = joiUtil.validate({}, someSchema) // validate throws an error
 * const validObject = joiUtil.validate({ a: 'a', b: 1 }, someSchema)
 */
class JoiUtil {
    /**
     * Validate and clean object
     * @template T
     * @template Joi
     * @param {any} objectToValidate
     * @param {Joi.Schema | Joi.ObjectSchema<T>} schema
     * @param {joiUtilOptions | undefined} joiUtilOptions
     * @returns {T} expected object after validation
     */
    sanitize(objectToValidate, schema, joiUtilOptions) {
        return this._validate(objectToValidate, schema, Object.assign(Object.assign({}, joiUtilOptions), { stripUnknown: true }));
    }
    /**
     * Only validate properties specified in validation schema
     * @template T
     * @template Joi
     * @param {any} objectToValidate
     * @param {Joi.Schema | Joi.ObjectSchema<T>} schema
     * @param {joiUtilOptions | undefined} joiUtilOptions
     * @returns {T} expected object after validation
     */
    validate(objectToValidate, schema, joiUtilOptions) {
        return this._validate(objectToValidate, schema, joiUtilOptions);
    }
    _validate(objectToValidate, schema, options) {
        const _a = options !== null && options !== void 0 ? options : {}, { logger } = _a, validationOptions = __rest(_a, ["logger"]);
        const { error: validationError, value, warning } = schema.validate(objectToValidate, validationOptions);
        if (validationError)
            throw new ErrorWithPayload(validationError.message.split('"').join("'"), validationError);
        if (warning && (logger === null || logger === void 0 ? void 0 : logger.warn))
            logger.warn('joiValidationUtil._validate', warning);
        return value;
    }
}
exports.JoiUtil = JoiUtil;
//# sourceMappingURL=joi-util.js.map