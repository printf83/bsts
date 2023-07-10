import { Textarea as ITextarea, textarea as TTextarea } from "../html/textarea.js";
export interface Textarea extends ITextarea {
    weight?: "sm" | "lg";
    isvalid?: boolean;
}
export declare class textarea extends TTextarea {
    constructor();
    constructor(value: string);
    constructor(attr: Textarea);
    constructor(attr: Textarea, value: string);
}
export declare const Textarea: (AttrOrValue?: Textarea | string, Value?: string) => textarea;
