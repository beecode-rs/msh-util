import Joi from 'joi'
import { JoiUtil } from 'src/joi-util'

describe('JoiUtil', () => {
	const joiUtil = new JoiUtil()

	const validObject = { a: 'string', b: true, c: 123, d: new Date() }
	const invalidObject = { invalid: true }

	const joiSchema = Joi.object().keys({
		a: Joi.string().required(),
		b: Joi.boolean().required(),
		c: Joi.number().required(),
		d: Joi.date().required(),
	})

	describe('sanitize', () => {
		it('should return valid object', () => {
			const result = joiUtil.sanitize(validObject, joiSchema)
			expect(result).toEqual(validObject)
		})
		it('should return valid object and remove properties that are not defined in schema', () => {
			const result = joiUtil.sanitize({ ...validObject, test: true }, joiSchema)
			expect(result).toEqual(validObject)
			expect(result.test).toBeUndefined()
		})
		it('should throw error if object is not valid, return first error', () => {
			try {
				joiUtil.sanitize(invalidObject, joiSchema)
				expect.fail('test failed')
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (err: any) {
				expect(err.message).toEqual("'a' is required")
				expect(err.payload.details).toEqual([
					{
						context: {
							key: 'a',
							label: 'a',
						},
						message: '"a" is required',
						path: ['a'],
						type: 'any.required',
					},
				])
			}
		})
		it('should throw error if object is not valid, return all errors', () => {
			try {
				joiUtil.sanitize(invalidObject, joiSchema, { abortEarly: false })
				expect.fail('test failed')
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (err: any) {
				expect(err.message).toEqual("'a' is required. 'b' is required. 'c' is required. 'd' is required")
				expect(err.payload.details).toEqual([
					{
						context: {
							key: 'a',
							label: 'a',
						},
						message: '"a" is required',
						path: ['a'],
						type: 'any.required',
					},
					{
						context: {
							key: 'b',
							label: 'b',
						},
						message: '"b" is required',
						path: ['b'],
						type: 'any.required',
					},
					{
						context: {
							key: 'c',
							label: 'c',
						},
						message: '"c" is required',
						path: ['c'],
						type: 'any.required',
					},
					{
						context: {
							key: 'd',
							label: 'd',
						},
						message: '"d" is required',
						path: ['d'],
						type: 'any.required',
					},
				])
			}
		})
	})

	describe('validate', () => {
		it('should return valid object', () => {
			const result = joiUtil.validate(validObject, joiSchema)
			expect(result).toEqual(validObject)
		})

		it('should throw error if there are unknown properties', () => {
			try {
				joiUtil.validate({ ...validObject, test: true }, joiSchema)
				expect.fail('test failed')
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (err: any) {
				expect(err.message).toEqual("'test' is not allowed")
			}
		})
		it('should throw error if object is not valid, return first error', () => {
			try {
				joiUtil.validate(invalidObject, joiSchema)
				expect.fail('test failed')
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (err: any) {
				expect(err.message).toEqual("'a' is required")
				expect(err.payload.details).toEqual([
					{
						context: {
							key: 'a',
							label: 'a',
						},
						message: '"a" is required',
						path: ['a'],
						type: 'any.required',
					},
				])
			}
		})
		it('should throw error if object is not valid, return all errors', () => {
			try {
				joiUtil.validate(invalidObject, joiSchema, { abortEarly: false })
				expect.fail('test failed')
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (err: any) {
				expect(err.message).toEqual(
					"'a' is required. 'b' is required. 'c' is required. 'd' is required. 'invalid' is not allowed"
				)
				expect(err.payload.details).toEqual([
					{
						context: {
							key: 'a',
							label: 'a',
						},
						message: '"a" is required',
						path: ['a'],
						type: 'any.required',
					},
					{
						context: {
							key: 'b',
							label: 'b',
						},
						message: '"b" is required',
						path: ['b'],
						type: 'any.required',
					},
					{
						context: {
							key: 'c',
							label: 'c',
						},
						message: '"c" is required',
						path: ['c'],
						type: 'any.required',
					},
					{
						context: {
							key: 'd',
							label: 'd',
						},
						message: '"d" is required',
						path: ['d'],
						type: 'any.required',
					},
					{
						context: {
							child: 'invalid',
							key: 'invalid',
							label: 'invalid',
							value: true,
						},
						message: '"invalid" is not allowed',
						path: ['invalid'],
						type: 'object.unknown',
					},
				])
			}
		})

		it('should allow unknown if flag is set and call logger with warn message', () => {
			const result = joiUtil.validate({ ...validObject, unknownProp: 'test' }, joiSchema, { allowUnknown: true })
			expect(result).toEqual({ ...validObject, unknownProp: 'test' })
		})
	})
})
