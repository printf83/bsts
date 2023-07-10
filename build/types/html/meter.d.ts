import { IAttr, IElem, tag } from "../core/tag.js";
export interface Meter extends IAttr {
    form?: string;
    high?: number;
    low?: number;
    max?: number;
    min?: number;
    optimum?: number;
    value?: number;
}
export declare class meter extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Meter);
    constructor(attr: Meter, elem: IElem);
}
export declare const Meter: (AttrOrElem?: Meter | IElem, Elem?: IElem) => meter;
