import { error } from '@beecode/msh-node-error'
import { ObjectSchema, Schema, ValidationOptions } from 'joi'

export type validationUtilOptions = {
  logger: any
}

export const validationUtil = {
  /**
   * Validate and clean object
   * @param {Partial<T>} objectToValidate
   * @param {Joi.Schema | Joi.ObjectSchema<T>} schema
   * @param {validationUtilOptions | undefined} validationUtilOptions
   * @returns {T} expected object after validation
   */
  sanitize: <T>(
    objectToValidate: Partial<T>,
    schema: Schema | ObjectSchema<T>,
    validationUtilOptions?: validationUtilOptions
  ): T => {
    return validationUtil._validate<T>(objectToValidate, schema, { stripUnknown: true }, validationUtilOptions)
  },
  /**
   * Only validate properties specified in validation schema
   * @param {Partial<T>} objectToValidate
   * @param {Joi.Schema | ObjectSchema<T>} schema
   * @param {validationUtilOptions | undefined} validationUtilOptions
   * @returns {T} expected object after validation
   */
  validate: <T>(
    objectToValidate: Partial<T>,
    schema: Schema | ObjectSchema<T>,
    validationUtilOptions?: validationUtilOptions
  ): T => {
    return validationUtil._validate<T>(objectToValidate, schema, {}, validationUtilOptions)
  },
  _validate: <T>(
    objectToValidate: Partial<T>,
    schema: Schema | ObjectSchema<T>,
    validationOptions: ValidationOptions = {},
    options?: validationUtilOptions
  ): T => {
    const { error: validationError, value, warning } = schema.validate(objectToValidate, validationOptions)
    if (validationError) throw error.client.badRequest(validationError.message.split('"').join("'"))
    if (warning && options?.logger?.warn) options.logger.warn('validationUtil._validate', warning)
    return value as T
  },
}
