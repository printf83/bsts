import { IAttr, IElem } from "../../core/tag.js";
import { figure } from "../../html/figure.js";
export declare class container extends figure {
    constructor();
    constructor(attr: IAttr);
    constructor(elem: IElem);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Container: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => container;
