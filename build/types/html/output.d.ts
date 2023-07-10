import { IAttr, IElem, tag } from "../core/tag.js";
export interface Output extends IAttr {
    for?: string;
    from?: string;
    name?: string;
}
export declare class output extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Output);
    constructor(attr: Output, elem: IElem);
}
export declare const Output: (AttrOrElem?: Output | IElem, Elem?: IElem) => output;
