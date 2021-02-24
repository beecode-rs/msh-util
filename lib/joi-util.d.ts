import { ObjectSchema, Schema, ValidationOptions } from 'joi';
export declare type joiUtilOptions = {
    logger: any;
};
export declare const joiUtil: {
    /**
     * Validate and clean object
     * @param {Partial<T>} objectToValidate
     * @param {Joi.Schema | Joi.ObjectSchema<T>} schema
     * @param {joiUtilOptions | undefined} joiUtilOptions
     * @returns {T} expected object after validation
     */
    sanitize: <T>(objectToValidate: Partial<T>, schema: import("joi").AnySchema | import("joi").ArraySchema | import("joi").AlternativesSchema | import("joi").BinarySchema | import("joi").BooleanSchema | import("joi").DateSchema | import("joi").FunctionSchema | import("joi").NumberSchema | import("joi").StringSchema | import("joi").LinkSchema | import("joi").SymbolSchema | ObjectSchema<any> | ObjectSchema<T>, joiUtilOptions?: joiUtilOptions | undefined) => T;
    /**
     * Only validate properties specified in validation schema
     * @param {Partial<T>} objectToValidate
     * @param {Joi.Schema | ObjectSchema<T>} schema
     * @param {joiUtilOptions | undefined} joiUtilOptions
     * @returns {T} expected object after validation
     */
    validate: <T_1>(objectToValidate: Partial<T_1>, schema: import("joi").AnySchema | import("joi").ArraySchema | import("joi").AlternativesSchema | import("joi").BinarySchema | import("joi").BooleanSchema | import("joi").DateSchema | import("joi").FunctionSchema | import("joi").NumberSchema | import("joi").StringSchema | import("joi").LinkSchema | import("joi").SymbolSchema | ObjectSchema<any> | ObjectSchema<T_1>, joiUtilOptions?: joiUtilOptions | undefined) => T_1;
    _validate: <T_2>(objectToValidate: Partial<T_2>, schema: import("joi").AnySchema | import("joi").ArraySchema | import("joi").AlternativesSchema | import("joi").BinarySchema | import("joi").BooleanSchema | import("joi").DateSchema | import("joi").FunctionSchema | import("joi").NumberSchema | import("joi").StringSchema | import("joi").LinkSchema | import("joi").SymbolSchema | ObjectSchema<any> | ObjectSchema<T_2>, validationOptions: ValidationOptions, options?: joiUtilOptions | undefined) => T_2;
};
//# sourceMappingURL=joi-util.d.ts.map