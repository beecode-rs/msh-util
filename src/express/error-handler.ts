/**
 * Wrap async express http request end return promise or call next on catch
 * @param _target
 * @param _key
 * @param descriptor
 * @example
 * export class RootController {
 *  /@expressErrorHandler
 *   async login(req: Request, res: Response): Promise<void> {
 *     const { username, password } = validationUtil().sanitize(req.body, postLoginBodySchema)
 *     const result = await authorizationUseCase.login({ username, password })
 *     res.json(result)
 *   }
 * }
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const expressErrorHandler = (_target: any, _key: string, descriptor: TypedPropertyDescriptor<any>): any => {
	const originalMethod = descriptor.value
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	descriptor.value = function (): any {
		const next = arguments[2] // eslint-disable-line prefer-rest-params

		return Promise.resolve(originalMethod.apply(this, arguments)).catch(next) // eslint-disable-line prefer-rest-params
	}

	return descriptor
}
