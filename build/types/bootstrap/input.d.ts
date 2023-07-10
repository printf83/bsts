import { Input as IInput, input as TInput } from "../html/input.js";
export interface Input extends IInput {
    weight?: "sm" | "lg";
    toggle?: true;
    switch?: true;
    plaintext?: true;
    isvalid?: boolean;
}
export declare class input extends TInput {
    constructor();
    constructor(value: string);
    constructor(attr: Input);
    constructor(attr: Input, value: string);
}
export declare const Input: (AttrOrValue?: Input | string, Value?: string) => input;
