interface IMultipleConstructor {
    rule: string[];
    fn: Function;
}
export declare const multipleConstructorClass: (rules: IMultipleConstructor[], caller: string, obj: any[]) => any;
export {};
