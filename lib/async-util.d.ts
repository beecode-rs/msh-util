export declare const asyncUtil: {
    /**
     * Wrap async express http request end return promise or call next on catch
     * @param _target
     * @param _key
     * @param descriptor
     */
    httpErrorHandler: (_target: any, _key: string, descriptor: TypedPropertyDescriptor<any>) => any;
    timeout: (t: number) => Promise<void>;
};
//# sourceMappingURL=async-util.d.ts.map