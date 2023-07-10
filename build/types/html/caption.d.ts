import { IAttr, IElem, tag } from "../core/tag.js";
export declare class caption extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Caption: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => caption;
