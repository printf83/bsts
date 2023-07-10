import { IAttr, IElem, tag } from "../core/tag.js";
export declare class body extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Body: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => body;
