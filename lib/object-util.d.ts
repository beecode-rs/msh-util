export declare type ObjectType = {
    [k: string]: any;
};
export declare const objectUtil: {
    stringifySortOrNullOrUndefined: (obj?: ObjectType | null | undefined) => string | null | undefined;
    deepClone: <T extends ObjectType>(objectToClone: T) => T;
    deepNullToUndefined: <T_1 extends ObjectType>(objectWithNulls: T_1) => T_1;
};
//# sourceMappingURL=object-util.d.ts.map