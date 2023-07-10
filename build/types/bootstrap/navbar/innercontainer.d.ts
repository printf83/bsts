import { IAttr, IElem } from "../../core/tag.js";
import { div } from "../../html/div.js";
import { nav } from "../../html/nav.js";
export declare class innercontainer extends div {
    constructor();
    constructor(attr: IAttr);
    constructor(elem: IElem);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Innercontainer: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => innercontainer;
export declare class innercontainerNav extends nav {
    constructor();
    constructor(attr: IAttr);
    constructor(elem: IElem);
    constructor(attr: IAttr, elem: IElem);
}
export declare const InnercontainerNav: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => innercontainerNav;
