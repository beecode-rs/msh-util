"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expressErrorHandler = void 0;
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
var expressErrorHandler = exports.expressErrorHandler = function expressErrorHandler(_target, _key, descriptor) {
  var originalMethod = descriptor.value;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  descriptor.value = function () {
    var next = arguments[2]; // eslint-disable-line prefer-rest-params

    return Promise.resolve(originalMethod.apply(this, arguments))["catch"](next); // eslint-disable-line prefer-rest-params
  };
  return descriptor;
};