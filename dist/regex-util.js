export const regexUtil = {
    /**
     * This is a UUID regex expression. This is usually used in express router to constrict the values passed as a path parameter (if you are using UUID as your identifier).
     * @return {string}
     * @example
     * const { uuid } = regexUtil
     * router.route(`/users/:userId(${uuid})`).get(getUsersById)
     * //...
     */
    uuid: `\\b[0-9a-f]{8}\\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\\b[0-9a-f]{12}\\b`,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXgtdXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWdleC11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRztJQUN4Qjs7Ozs7OztPQU9HO0lBQ0gsSUFBSSxFQUFFLDBFQUFtRjtDQUN6RixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJlZ2V4VXRpbCA9IHtcblx0LyoqXG5cdCAqIFRoaXMgaXMgYSBVVUlEIHJlZ2V4IGV4cHJlc3Npb24uIFRoaXMgaXMgdXN1YWxseSB1c2VkIGluIGV4cHJlc3Mgcm91dGVyIHRvIGNvbnN0cmljdCB0aGUgdmFsdWVzIHBhc3NlZCBhcyBhIHBhdGggcGFyYW1ldGVyIChpZiB5b3UgYXJlIHVzaW5nIFVVSUQgYXMgeW91ciBpZGVudGlmaWVyKS5cblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKiBAZXhhbXBsZVxuXHQgKiBjb25zdCB7IHV1aWQgfSA9IHJlZ2V4VXRpbFxuXHQgKiByb3V0ZXIucm91dGUoYC91c2Vycy86dXNlcklkKCR7dXVpZH0pYCkuZ2V0KGdldFVzZXJzQnlJZClcblx0ICogLy8uLi5cblx0ICovXG5cdHV1aWQ6IGBcXFxcYlswLTlhLWZdezh9XFxcXGItWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tWzAtOWEtZl17NH0tXFxcXGJbMC05YS1mXXsxMn1cXFxcYmAgYXMgY29uc3QsXG59XG4iXX0=