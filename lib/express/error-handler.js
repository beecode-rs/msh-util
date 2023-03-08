"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressErrorHandler = void 0;
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
const expressErrorHandler = (_target, _key, descriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function () {
        const next = arguments[2]; // eslint-disable-line prefer-rest-params
        return Promise.resolve(originalMethod.apply(this, arguments)).catch(next); // eslint-disable-line prefer-rest-params
    };
    return descriptor;
};
exports.expressErrorHandler = expressErrorHandler;
//# sourceMappingURL=error-handler.js.map