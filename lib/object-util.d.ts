export declare type ObjectType = {
    [k: string]: any;
};
export declare const objectUtil: {
    stringifyOrNullUndefined: (obj?: ObjectType | null | undefined) => string | null | undefined;
    deepClone: <T extends ObjectType>(objectToClone: T) => T;
};
//# sourceMappingURL=object-util.d.ts.map