import { IAttr, IElem, tag } from "../core/tag.js";
export declare class main extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Main: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => main;
