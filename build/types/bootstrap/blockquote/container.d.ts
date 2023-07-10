import { IAttr, IElem } from "../../core/tag.js";
import { blockquote } from "../../html/blockquote.js";
export declare class container extends blockquote {
    constructor();
    constructor(attr: IAttr);
    constructor(elem: IElem);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Container: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => container;
