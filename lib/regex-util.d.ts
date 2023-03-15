export declare const regexUtil: {
    /**
     * This is a UUID regex expression. This is usually used in express router to constrict the values passed as a path parameter (if you are using UUID as your identifier).
     * @return {string}
     * @example
     * const { uuid } = regexUtil
     * router.route(`/users/:userId(${uuid})`).get(getUsersById)
     * //...
     */
    uuid: "\\b[0-9a-f]{8}\\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\\b[0-9a-f]{12}\\b";
};
//# sourceMappingURL=regex-util.d.ts.map