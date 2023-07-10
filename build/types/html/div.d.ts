import { IAttr, IElem, tag } from "../core/tag.js";
export declare class div extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Div: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => div;
