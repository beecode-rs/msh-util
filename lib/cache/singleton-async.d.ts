declare type AnyFunctionNoParamsPromise<R = any> = () => Promise<R>;
export declare class SingletonAsync<R = any> {
    protected _cache: {
        singleton?: R;
        promises?: {
            resolve: (value: R | PromiseLike<R>) => void;
            reject: (reason?: any) => void;
        }[];
    };
    protected _factory: AnyFunctionNoParamsPromise<R>;
    constructor(factory: AnyFunctionNoParamsPromise<R>);
    /**
     * Empty cached value.
     */
    cleanCache(): void;
    protected _rejectPromises(): void;
    /**
     * Return singleton value in a promise. If there is no cached value then try to get it from factory.
     * @returns {Promise<R>}
     */
    promise(): Promise<R>;
    /**
     * Return cached value, if there is no value cached return undefined.
     * @returns {R | undefined}
     */
    cached(): R | undefined;
}
export declare const singletonAsyncFactory: (factory: AnyFunctionNoParamsPromise<unknown>) => SingletonAsync;
export {};
//# sourceMappingURL=singleton-async.d.ts.map