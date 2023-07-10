import { IAttr, IElem } from "../../core/tag.js";
import { bootstrapType } from "../../core/bootstrap.js";
import { div } from "../../html/div.js";
export interface Responsive extends IAttr {
    responsive?: bootstrapType.viewport;
}
export declare class responsive extends div {
    constructor();
    constructor(attr: Responsive);
    constructor(elem: IElem);
    constructor(attr: Responsive, elem: IElem);
}
export declare const Responsive: (AttrOrElem?: Responsive | IElem, Elem?: IElem) => responsive;
