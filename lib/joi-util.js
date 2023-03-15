"use strict";
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
     * @param {validationOptions} [validationOptions]
     * @returns {T} expected object after validation
     */
    sanitize(objectToValidate, schema, validationOptions) {
        return this._validate(objectToValidate, schema, Object.assign(Object.assign({}, validationOptions), { stripUnknown: true }));
    }
    /**
     * Only validate properties specified in validation schema
     * @template T
     * @template Joi
     * @param {any} objectToValidate
     * @param {Joi.Schema | Joi.ObjectSchema<T>} schema
     * @param {validationOptions} [validationOptions]
     * @returns {T} expected object after validation
     */
    validate(objectToValidate, schema, validationOptions) {
        return this._validate(objectToValidate, schema, validationOptions);
    }
    _validate(objectToValidate, schema, validationOptions) {
        const { error: validationError, value } = schema.validate(objectToValidate, validationOptions);
        if (validationError) {
            throw new ErrorWithPayload(validationError.message.split('"').join("'"), validationError);
        }
        return value;
    }
}
exports.JoiUtil = JoiUtil;
//# sourceMappingURL=joi-util.js.map