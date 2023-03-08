/**
 * Wrap async express http request end return promise or call next on catch
 * @param _target
 * @param _key
 * @param descriptor
 * @example
 * export class RootController {
 *  /@ErrorHandler
 *   async login(req: Request, res: Response): Promise<void> {
 *     const { username, password } = validationUtil().sanitize(req.body, postLoginBodySchema)
 *     const result = await authorizationUseCase.login({ username, password })
 *     res.json(result)
 *   }
 * }
 */
export declare const expressErrorHandler: (_target: any, _key: string, descriptor: TypedPropertyDescriptor<any>) => any;
//# sourceMappingURL=error-handler.d.ts.map