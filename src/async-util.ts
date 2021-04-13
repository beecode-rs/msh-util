export const asyncUtil = {
  /**
   * Wrap async express http request end return promise or call next on catch
   * @param _target
   * @param _key
   * @param descriptor
   */
  httpErrorHandler: (_target: any, _key: string, descriptor: TypedPropertyDescriptor<any>): any => {
    const originalMethod = descriptor.value
    descriptor.value = function (): any {
      const next = arguments[2] // eslint-disable-line prefer-rest-params
      return Promise.resolve(originalMethod.apply(this, arguments)).catch(next) // eslint-disable-line prefer-rest-params
    }
    return descriptor
  },
  timeout: (t: number): Promise<NodeJS.Timeout> => new Promise((resolve) => setTimeout(resolve, t)),
}
