export declare const regexUtil: {
    /**
     * This is a UUID regex expression. This is usually used in express router to constrict the values passed as a path parameter (if you are using UUID as your identifier).
     * @return {string}
     * @example
     * const uuid = regexUtil.uuid()
     * router.route(`/users/:userId(${uuid})`).get(getUsersById)
     * //...
     */
    uuid: () => string;
};
//# sourceMappingURL=regex-util.d.ts.map