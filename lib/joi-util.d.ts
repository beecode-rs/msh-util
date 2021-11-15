import { ObjectType } from './object-util';
import { ObjectSchema, Schema, ValidationOptions } from 'joi';
export interface JoiLogger {
    warn(msg: string, obj: ObjectType): void;
}
export declare type joiUtilOptions = {
    logger?: JoiLogger;
};
export declare const joiUtil: {
    /**
     * Validate and clean object
     * @param {Partial<T>} objectToValidate
     * @param {Joi.Schema | Joi.ObjectSchema<T>} schema
     * @param {joiUtilOptions | undefined} joiUtilOptions
     * @returns {T} expected object after validation
     */
    sanitize: <T>(objectToValidate: Partial<T>, schema: Schema<any> | ObjectSchema<T>, joiUtilOptions?: joiUtilOptions | undefined) => T;
    /**
     * Only validate properties specified in validation schema
     * @param {Partial<T>} objectToValidate
     * @param {Joi.Schema | ObjectSchema<T>} schema
     * @param {joiUtilOptions | undefined} joiUtilOptions
     * @returns {T} expected object after validation
     */
    validate: <T_1>(objectToValidate: Partial<T_1>, schema: Schema<any> | ObjectSchema<T_1>, joiUtilOptions?: joiUtilOptions | undefined) => T_1;
    _validate: <T_2>(objectToValidate: Partial<T_2>, schema: Schema<any> | ObjectSchema<T_2>, validationOptions: ValidationOptions, options?: joiUtilOptions | undefined) => T_2;
};
//# sourceMappingURL=joi-util.d.ts.map