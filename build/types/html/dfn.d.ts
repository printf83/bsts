import { IAttr, IElem, tag } from "../core/tag.js";
export declare class dfn extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Dfn: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => dfn;
