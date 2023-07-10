import { IAttr, IElem } from "../../core/tag.js";
import { footer as TFooter } from "../../html/footer.js";
export declare class footer extends TFooter {
    constructor();
    constructor(attr: IAttr);
    constructor(elem: IElem);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Footer: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => footer;
