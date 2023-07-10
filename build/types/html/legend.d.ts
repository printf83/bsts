import { IAttr, IElem, tag } from "../core/tag.js";
export declare class legend extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Legend: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => legend;
