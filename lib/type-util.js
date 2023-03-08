"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeUtil = void 0;
exports.typeUtil = {
    /**
     * In TypeScript, exhaustiveMessage is a technique that can be used with switch statements to ensure that all possible cases are handled.
     *
     * When using switch statements, it is common to have a default case that handles any unanticipated cases. However, sometimes it is important to ensure that all cases are explicitly handled to avoid potential errors or bugs in the code.
     * @param {string} message
     * @param {never} _
     * @return {string}
     * @example
     * export type Animal = 'cat' | 'dog' | 'bird';
     *
     * export const makeSound = (animal: Animal): string => {
     *   switch (animal) {
     *     case 'cat':
     *       return 'Meow'
     *     case 'dog':
     *       return 'Woof'
     *     case 'bird':
     *       return 'Tweet'
     *     default:
     *       console.error(new TypeUtil().exhaustiveMessage('Unknown animal [animal]', animal))
     *       return 'unknown sound'
     *   }
     * }
     */
    exhaustiveMessage: (message, _) => {
        return message;
    },
    /**
     * This is the similar to exhaustiveMessage, but instead of message we are returning error so we can throw it
     * @param {string} message
     * @param {never} _
     * @return {Error}
     * @example
     * export type Animal = 'cat' | 'dog' | 'bird';
     *
     * export const makeSound = (animal: Animal): string => {
     *   switch (animal) {
     *     case 'cat':
     *       return 'Meow'
     *     case 'dog':
     *       return 'Woof'
     *     case 'bird':
     *       return 'Tweet'
     *     default:
     *       throw typeUtil.exhaustiveError('Unknown animal [animal]', animal)
     *   }
     * }
     */
    exhaustiveError: (message, _) => {
        return new Error(message);
    },
};
//# sourceMappingURL=type-util.js.map