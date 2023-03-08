export type ClassType<T = object> = new (...args: T extends {
    new (...args: infer P): any;
} ? P : never[]) => T;
export declare const factoryPattern: <C extends ClassType<object>>(classType: C) => (...args: ConstructorParameters<C>) => InstanceType<C>;
//# sourceMappingURL=factory-pattern.d.ts.map