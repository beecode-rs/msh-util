export class ErrorWithPayload extends Error {
    payload;
    constructor(message, payload) {
        super(message);
        this.payload = payload;
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
    sanitize(objectToValidate, schema, validationOptions) {
        return this._validate(objectToValidate, schema, { ...validationOptions, stripUnknown: true });
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
    validate(objectToValidate, schema, validationOptions) {
        return this._validate(objectToValidate, schema, validationOptions);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _validate(objectToValidate, schema, validationOptions) {
        const { error: validationError, value } = schema.validate(objectToValidate, validationOptions);
        if (validationError) {
            throw new ErrorWithPayload(validationError.message.split('"').join("'"), validationError);
        }
        return value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9pLXV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvam9pLXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLGdCQUFvQixTQUFRLEtBQUs7SUFDN0MsT0FBTyxDQUFHO0lBRVYsWUFBWSxPQUFlLEVBQUUsT0FBVTtRQUN0QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtJQUN2QixDQUFDO0NBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7QUFDSCxNQUFNLE9BQU8sT0FBTztJQUNuQjs7Ozs7Ozs7T0FRRztJQUNILDhEQUE4RDtJQUM5RCxRQUFRLENBQUksZ0JBQXFCLEVBQUUsTUFBZ0MsRUFBRSxpQkFBcUM7UUFDekcsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFJLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUcsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7SUFDakcsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsOERBQThEO0lBQzlELFFBQVEsQ0FBSSxnQkFBcUIsRUFBRSxNQUFnQyxFQUFFLGlCQUFxQztRQUN6RyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUksZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixDQUFDLENBQUE7SUFDdEUsQ0FBQztJQUVELDhEQUE4RDtJQUNwRCxTQUFTLENBQUksZ0JBQXFCLEVBQUUsTUFBZ0MsRUFBRSxpQkFBcUM7UUFDcEgsTUFBTSxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQyxDQUFBO1FBQzlGLElBQUksZUFBZSxFQUFFLENBQUM7WUFDckIsTUFBTSxJQUFJLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQTtRQUMxRixDQUFDO1FBRUQsT0FBTyxLQUFVLENBQUE7SUFDbEIsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JqZWN0U2NoZW1hLCBTY2hlbWEsIFZhbGlkYXRpb25PcHRpb25zIH0gZnJvbSAnam9pJ1xuXG5leHBvcnQgY2xhc3MgRXJyb3JXaXRoUGF5bG9hZDxUPiBleHRlbmRzIEVycm9yIHtcblx0cGF5bG9hZDogVFxuXG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgcGF5bG9hZDogVCkge1xuXHRcdHN1cGVyKG1lc3NhZ2UpXG5cdFx0dGhpcy5wYXlsb2FkID0gcGF5bG9hZFxuXHR9XG59XG5cbi8qKlxuICogVGhpcyBpcyBhIHNpbXBsZSB3cmFwcGVyIGFyb3VuZCBKb2kgdmFsaWRhdGlvbiB3aXRoIHR3byBmdW5jdGlvbnMgZXhwb3NlZCB2YWxpZGF0ZSBhbmQgc2FuaXRpemUuIElmIG9iamVjdCBpcyBub3QgdmFsaWQgZnVuY3Rpb24gdGhyb3dzIGFuIGVycm9yLlxuICogQGV4YW1wbGVcbiAqIHR5cGUgU29tZVR5cGUgPSB7XG4gKiAgIGE6IHN0cmluZ1xuICogICBiOiBudW1iZXJcbiAqIH1cbiAqIGNvbnN0IHNvbWVTY2hlbWEgPSBKb2kub2JqZWN0PFNvbWVUeXBlPigpLmtleXMoe1xuICogICBhOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAqICAgYjogSm9pLm51bWJlcigpLnJlcXVpcmVkKCksXG4gKiB9KS5yZXF1aXJlZCgpXG4gKlxuICogY29uc3Qgam9pVXRpbCA9IG5ldyBKb2lVdGlsKClcbiAqXG4gKiAvLyB1c2luZ1xuICogY29uc3QgaW52YWxpZE9iamVjdCA9IGpvaVV0aWwudmFsaWRhdGUoe30sIHNvbWVTY2hlbWEpIC8vIHZhbGlkYXRlIHRocm93cyBhbiBlcnJvclxuICogY29uc3QgdmFsaWRPYmplY3QgPSBqb2lVdGlsLnZhbGlkYXRlKHsgYTogJ2EnLCBiOiAxIH0sIHNvbWVTY2hlbWEpXG4gKi9cbmV4cG9ydCBjbGFzcyBKb2lVdGlsIHtcblx0LyoqXG5cdCAqIFZhbGlkYXRlIGFuZCBjbGVhbiBvYmplY3Rcblx0ICogQHRlbXBsYXRlIFRcblx0ICogQHRlbXBsYXRlIEpvaVxuXHQgKiBAcGFyYW0ge2FueX0gb2JqZWN0VG9WYWxpZGF0ZVxuXHQgKiBAcGFyYW0ge0pvaS5TY2hlbWEgfCBKb2kuT2JqZWN0U2NoZW1hPFQ+fSBzY2hlbWFcblx0ICogQHBhcmFtIHt2YWxpZGF0aW9uT3B0aW9uc30gW3ZhbGlkYXRpb25PcHRpb25zXVxuXHQgKiBAcmV0dXJucyB7VH0gZXhwZWN0ZWQgb2JqZWN0IGFmdGVyIHZhbGlkYXRpb25cblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdHNhbml0aXplPFQ+KG9iamVjdFRvVmFsaWRhdGU6IGFueSwgc2NoZW1hOiBTY2hlbWEgfCBPYmplY3RTY2hlbWE8VD4sIHZhbGlkYXRpb25PcHRpb25zPzogVmFsaWRhdGlvbk9wdGlvbnMpOiBUIHtcblx0XHRyZXR1cm4gdGhpcy5fdmFsaWRhdGU8VD4ob2JqZWN0VG9WYWxpZGF0ZSwgc2NoZW1hLCB7IC4uLnZhbGlkYXRpb25PcHRpb25zLCBzdHJpcFVua25vd246IHRydWUgfSlcblx0fVxuXG5cdC8qKlxuXHQgKiBPbmx5IHZhbGlkYXRlIHByb3BlcnRpZXMgc3BlY2lmaWVkIGluIHZhbGlkYXRpb24gc2NoZW1hXG5cdCAqIEB0ZW1wbGF0ZSBUXG5cdCAqIEB0ZW1wbGF0ZSBKb2lcblx0ICogQHBhcmFtIHthbnl9IG9iamVjdFRvVmFsaWRhdGVcblx0ICogQHBhcmFtIHtKb2kuU2NoZW1hIHwgSm9pLk9iamVjdFNjaGVtYTxUPn0gc2NoZW1hXG5cdCAqIEBwYXJhbSB7dmFsaWRhdGlvbk9wdGlvbnN9IFt2YWxpZGF0aW9uT3B0aW9uc11cblx0ICogQHJldHVybnMge1R9IGV4cGVjdGVkIG9iamVjdCBhZnRlciB2YWxpZGF0aW9uXG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHR2YWxpZGF0ZTxUPihvYmplY3RUb1ZhbGlkYXRlOiBhbnksIHNjaGVtYTogU2NoZW1hIHwgT2JqZWN0U2NoZW1hPFQ+LCB2YWxpZGF0aW9uT3B0aW9ucz86IFZhbGlkYXRpb25PcHRpb25zKTogVCB7XG5cdFx0cmV0dXJuIHRoaXMuX3ZhbGlkYXRlPFQ+KG9iamVjdFRvVmFsaWRhdGUsIHNjaGVtYSwgdmFsaWRhdGlvbk9wdGlvbnMpXG5cdH1cblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuXHRwcm90ZWN0ZWQgX3ZhbGlkYXRlPFQ+KG9iamVjdFRvVmFsaWRhdGU6IGFueSwgc2NoZW1hOiBTY2hlbWEgfCBPYmplY3RTY2hlbWE8VD4sIHZhbGlkYXRpb25PcHRpb25zPzogVmFsaWRhdGlvbk9wdGlvbnMpOiBUIHtcblx0XHRjb25zdCB7IGVycm9yOiB2YWxpZGF0aW9uRXJyb3IsIHZhbHVlIH0gPSBzY2hlbWEudmFsaWRhdGUob2JqZWN0VG9WYWxpZGF0ZSwgdmFsaWRhdGlvbk9wdGlvbnMpXG5cdFx0aWYgKHZhbGlkYXRpb25FcnJvcikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yV2l0aFBheWxvYWQodmFsaWRhdGlvbkVycm9yLm1lc3NhZ2Uuc3BsaXQoJ1wiJykuam9pbihcIidcIiksIHZhbGlkYXRpb25FcnJvcilcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWUgYXMgVFxuXHR9XG59XG4iXX0=