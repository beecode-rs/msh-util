declare type AnyFunctionNoParamsPromise<R = any> = () => Promise<R>;
export declare class SingletonAsync<R = any> {
    protected _cache: {
        singleton?: R;
        resolvers?: ((value: R | PromiseLike<R>) => void)[];
    };
    protected _factory: AnyFunctionNoParamsPromise<R>;
    constructor(factory: AnyFunctionNoParamsPromise<R>);
    cleanCache(): void;
    promise(): Promise<R>;
}
export declare const singletonAsyncFactory: (factory: AnyFunctionNoParamsPromise<unknown>) => SingletonAsync;
export {};
//# sourceMappingURL=singleton-async.d.ts.map