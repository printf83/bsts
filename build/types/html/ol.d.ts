import { IAttr, IElem, tag } from "../core/tag.js";
export interface Ol extends IAttr {
    unstyle?: boolean;
    inline?: boolean;
    reversed?: boolean;
    startValue?: number;
    item?: IElem;
}
export declare class ol extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Ol);
    constructor(attr: Ol, elem: IElem);
}
export declare const Ol: (AttrOrElem?: Ol | IElem, Elem?: IElem) => ol;
