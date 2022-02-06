const _self = {
  exhaustiveMessage: (message: string, _: never): string => {
    return `${message}`
  },
  exhaustiveError: (message: string, _: never): Error => {
    return new Error(_self.exhaustiveMessage(message, _))
  },
  /**
   * @deprecated since version 3.2.0
   * Please use exhaustiveError
   * @param {string} message
   * @param {never} _
   * @returns {Error}
   */
  exhaustiveCheck: (message: string, _: never): Error => {
    return new Error(`ExhaustiveCheck: ${message} [${_}]`)
  },
}

export const typeUtil = _self
