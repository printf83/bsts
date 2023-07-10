import { IAttr, IElem, tag } from "../core/tag.js";
export declare class strong extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Strong: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => strong;
