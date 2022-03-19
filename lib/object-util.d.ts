export declare type ObjectType = {
    [k: string]: any;
};
export declare const objectUtil: {
    stringifySortOrNullOrUndefined: (obj?: ObjectType | null | undefined) => string | null | undefined;
    deepClone: <T extends ObjectType>(objectToClone: T) => T;
    deepNullToUndefined: <T_1 extends ObjectType>(objectWithNulls: T_1) => T_1;
    deepEqual: (a: any, b: any) => boolean;
    pick: <P extends T_2, T_2 extends object>(entity: T_2, model: P) => P;
    pickByList: <P_1 extends T_3, T_3 extends object>(entity: T_3, propertyList: string[]) => P_1;
};
//# sourceMappingURL=object-util.d.ts.map