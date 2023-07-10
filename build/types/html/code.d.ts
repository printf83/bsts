import { IAttr, IElem, tag } from "../core/tag.js";
export declare class code extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Code: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => code;
