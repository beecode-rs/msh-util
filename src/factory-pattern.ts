export type ClassType<T = object> = new (...args: T extends { new (...args: infer P): any } ? P : never[]) => T

export const factoryPattern = <C extends ClassType>(classType: C): ((...args: ConstructorParameters<C>) => InstanceType<C>) => {
  return (...args: ConstructorParameters<C>): InstanceType<C> => {
    return new classType(...args) as InstanceType<C>
  }
}
