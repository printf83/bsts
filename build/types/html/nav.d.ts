import { IAttr, IElem, tag } from "../core/tag.js";
export declare class nav extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Nav: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => nav;
