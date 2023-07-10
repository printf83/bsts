import { IAttr, IElem, tag } from "../core/tag.js";
export interface Ul extends IAttr {
    unstyle?: boolean;
    inline?: boolean;
    item?: IElem;
}
export declare class ul extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Ul);
    constructor(attr: Ul, elem: IElem);
}
export declare const Ul: (AttrOrElem?: Ul | IElem, Elem?: IElem) => ul;
