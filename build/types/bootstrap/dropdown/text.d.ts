import { IAttr, IElem } from "../../core/tag.js";
import { span } from "../../html/span.js";
export declare class text extends span {
    constructor();
    constructor(attr: IAttr);
    constructor(elem: IElem);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Text: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => text;
