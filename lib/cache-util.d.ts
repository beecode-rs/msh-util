export declare type AnyFunction<R = any> = (...args: any[]) => R;
export declare type AnyFunctionNoParams<R = any> = () => R;
export declare const cacheUtil: {
    memoize: <T extends AnyFunction<R>, R = any>(fun: T) => T;
    singleton: <R_1 = any>(fun: AnyFunctionNoParams<R_1>) => AnyFunctionNoParams<R_1>;
};
//# sourceMappingURL=cache-util.d.ts.map