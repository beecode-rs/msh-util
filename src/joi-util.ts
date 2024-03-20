import { ObjectSchema, Schema, ValidationOptions } from 'joi'

export class ErrorWithPayload<T> extends Error {
	payload: T

	constructor(message: string, payload: T) {
		super(message)
		this.payload = payload
	}
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
export class JoiUtil {
	/**
	 * Validate and clean object
	 * @template T
	 * @template Joi
	 * @param {any} objectToValidate
	 * @param {Joi.Schema | Joi.ObjectSchema<T>} schema
	 * @param {validationOptions} [validationOptions]
	 * @returns {T} expected object after validation
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	sanitize<T>(objectToValidate: any, schema: Schema | ObjectSchema<T>, validationOptions?: ValidationOptions): T {
		return this._validate<T>(objectToValidate, schema, { ...validationOptions, stripUnknown: true })
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
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	validate<T>(objectToValidate: any, schema: Schema | ObjectSchema<T>, validationOptions?: ValidationOptions): T {
		return this._validate<T>(objectToValidate, schema, validationOptions)
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	protected _validate<T>(objectToValidate: any, schema: Schema | ObjectSchema<T>, validationOptions?: ValidationOptions): T {
		const { error: validationError, value } = schema.validate(objectToValidate, validationOptions)
		if (validationError) {
			throw new ErrorWithPayload(validationError.message.split('"').join("'"), validationError)
		}

		return value as T
	}
}
