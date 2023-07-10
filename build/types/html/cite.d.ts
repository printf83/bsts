import { IAttr, IElem, tag } from "../core/tag.js";
export declare class cite extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Cite: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => cite;
