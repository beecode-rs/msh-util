import { ObjectSchema, Schema, ValidationOptions } from 'joi';
export declare class ErrorWithPayload<T> extends Error {
    payload: T;
    constructor(message: string, payload: T);
}
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
export declare class JoiUtil {
    /**
     * Validate and clean object
     * @template T
     * @template Joi
     * @param {any} objectToValidate
     * @param {Joi.Schema | Joi.ObjectSchema<T>} schema
     * @param {validationOptions} [validationOptions]
     * @returns {T} expected object after validation
     */
    sanitize<T>(objectToValidate: any, schema: Schema | ObjectSchema<T>, validationOptions?: ValidationOptions): T;
    /**
     * Only validate properties specified in validation schema
     * @template T
     * @template Joi
     * @param {any} objectToValidate
     * @param {Joi.Schema | Joi.ObjectSchema<T>} schema
     * @param {validationOptions} [validationOptions]
     * @returns {T} expected object after validation
     */
    validate<T>(objectToValidate: any, schema: Schema | ObjectSchema<T>, validationOptions?: ValidationOptions): T;
    protected _validate<T>(objectToValidate: any, schema: Schema | ObjectSchema<T>, validationOptions?: ValidationOptions): T;
}
//# sourceMappingURL=joi-util.d.ts.map