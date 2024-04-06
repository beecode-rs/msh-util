export const typeUtil = {
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3R5cGUtdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUc7SUFDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bb0JHO0lBQ0gsZUFBZSxFQUFFLENBQUMsT0FBZSxFQUFFLENBQVEsRUFBUyxFQUFFO1FBQ3JELE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDMUIsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXVCRztJQUNILGlCQUFpQixFQUFFLENBQUMsT0FBZSxFQUFFLENBQVEsRUFBVSxFQUFFO1FBQ3hELE9BQU8sT0FBTyxDQUFBO0lBQ2YsQ0FBQztDQUNELENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdHlwZVV0aWwgPSB7XG5cdC8qKlxuXHQgKiBUaGlzIGlzIHRoZSBzaW1pbGFyIHRvIGV4aGF1c3RpdmVNZXNzYWdlLCBidXQgaW5zdGVhZCBvZiBtZXNzYWdlIHdlIGFyZSByZXR1cm5pbmcgZXJyb3Igc28gd2UgY2FuIHRocm93IGl0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG5cdCAqIEBwYXJhbSB7bmV2ZXJ9IF9cblx0ICogQHJldHVybiB7RXJyb3J9XG5cdCAqIEBleGFtcGxlXG5cdCAqIGV4cG9ydCB0eXBlIEFuaW1hbCA9ICdjYXQnIHwgJ2RvZycgfCAnYmlyZCc7XG5cdCAqXG5cdCAqIGV4cG9ydCBjb25zdCBtYWtlU291bmQgPSAoYW5pbWFsOiBBbmltYWwpOiBzdHJpbmcgPT4ge1xuXHQgKiAgIHN3aXRjaCAoYW5pbWFsKSB7XG5cdCAqICAgICBjYXNlICdjYXQnOlxuXHQgKiAgICAgICByZXR1cm4gJ01lb3cnXG5cdCAqICAgICBjYXNlICdkb2cnOlxuXHQgKiAgICAgICByZXR1cm4gJ1dvb2YnXG5cdCAqICAgICBjYXNlICdiaXJkJzpcblx0ICogICAgICAgcmV0dXJuICdUd2VldCdcblx0ICogICAgIGRlZmF1bHQ6XG5cdCAqICAgICAgIHRocm93IHR5cGVVdGlsLmV4aGF1c3RpdmVFcnJvcignVW5rbm93biBhbmltYWwgW2FuaW1hbF0nLCBhbmltYWwpXG5cdCAqICAgfVxuXHQgKiB9XG5cdCAqL1xuXHRleGhhdXN0aXZlRXJyb3I6IChtZXNzYWdlOiBzdHJpbmcsIF86IG5ldmVyKTogRXJyb3IgPT4ge1xuXHRcdHJldHVybiBuZXcgRXJyb3IobWVzc2FnZSlcblx0fSxcblxuXHQvKipcblx0ICogSW4gVHlwZVNjcmlwdCwgZXhoYXVzdGl2ZU1lc3NhZ2UgaXMgYSB0ZWNobmlxdWUgdGhhdCBjYW4gYmUgdXNlZCB3aXRoIHN3aXRjaCBzdGF0ZW1lbnRzIHRvIGVuc3VyZSB0aGF0IGFsbCBwb3NzaWJsZSBjYXNlcyBhcmUgaGFuZGxlZC5cblx0ICpcblx0ICogV2hlbiB1c2luZyBzd2l0Y2ggc3RhdGVtZW50cywgaXQgaXMgY29tbW9uIHRvIGhhdmUgYSBkZWZhdWx0IGNhc2UgdGhhdCBoYW5kbGVzIGFueSB1bmFudGljaXBhdGVkIGNhc2VzLiBIb3dldmVyLCBzb21ldGltZXMgaXQgaXMgaW1wb3J0YW50IHRvIGVuc3VyZSB0aGF0IGFsbCBjYXNlcyBhcmUgZXhwbGljaXRseSBoYW5kbGVkIHRvIGF2b2lkIHBvdGVudGlhbCBlcnJvcnMgb3IgYnVncyBpbiB0aGUgY29kZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2Vcblx0ICogQHBhcmFtIHtuZXZlcn0gX1xuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqIEBleGFtcGxlXG5cdCAqIGV4cG9ydCB0eXBlIEFuaW1hbCA9ICdjYXQnIHwgJ2RvZycgfCAnYmlyZCc7XG5cdCAqXG5cdCAqIGV4cG9ydCBjb25zdCBtYWtlU291bmQgPSAoYW5pbWFsOiBBbmltYWwpOiBzdHJpbmcgPT4ge1xuXHQgKiAgIHN3aXRjaCAoYW5pbWFsKSB7XG5cdCAqICAgICBjYXNlICdjYXQnOlxuXHQgKiAgICAgICByZXR1cm4gJ01lb3cnXG5cdCAqICAgICBjYXNlICdkb2cnOlxuXHQgKiAgICAgICByZXR1cm4gJ1dvb2YnXG5cdCAqICAgICBjYXNlICdiaXJkJzpcblx0ICogICAgICAgcmV0dXJuICdUd2VldCdcblx0ICogICAgIGRlZmF1bHQ6XG5cdCAqICAgICAgIGNvbnNvbGUuZXJyb3IobmV3IFR5cGVVdGlsKCkuZXhoYXVzdGl2ZU1lc3NhZ2UoJ1Vua25vd24gYW5pbWFsIFthbmltYWxdJywgYW5pbWFsKSlcblx0ICogICAgICAgcmV0dXJuICd1bmtub3duIHNvdW5kJ1xuXHQgKiAgIH1cblx0ICogfVxuXHQgKi9cblx0ZXhoYXVzdGl2ZU1lc3NhZ2U6IChtZXNzYWdlOiBzdHJpbmcsIF86IG5ldmVyKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gbWVzc2FnZVxuXHR9LFxufVxuIl19