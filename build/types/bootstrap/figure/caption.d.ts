import { IAttr, IElem } from "../../core/tag.js";
import { figcaption } from "../../html/figcaption.js";
export declare class caption extends figcaption {
    constructor();
    constructor(attr: IAttr);
    constructor(elem: IElem);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Caption: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => caption;
