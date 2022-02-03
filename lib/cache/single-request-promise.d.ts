export declare type AnyFunctionNoParamsPromise<R = any> = () => Promise<R>;
export declare class SingleRequestPromise<R = any> {
    protected _cache: {
        promises?: {
            resolve: (value: R | PromiseLike<R>) => void;
            reject: (reason?: any) => void;
        }[];
    };
    protected _factory: AnyFunctionNoParamsPromise<R>;
    constructor(factory: AnyFunctionNoParamsPromise<R>);
    protected _rejectPromises(): void;
    promise(): Promise<R>;
}
export declare const singleRequestPromiseFactory: (factory: AnyFunctionNoParamsPromise<unknown>) => SingleRequestPromise;
//# sourceMappingURL=single-request-promise.d.ts.map