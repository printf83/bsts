import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr, IElem } from "../../core/tag.js";
import { div } from "../../html/div.js";
export interface Bar extends IAttr {
    color?: bootstrapType.color;
    striped?: boolean;
    animated?: boolean;
}
export declare class bar extends div {
    constructor();
    constructor(attr: Bar);
    constructor(elem: IElem);
    constructor(attr: Bar, elem: IElem);
}
export declare const Bar: (AttrOrElem?: Bar | IElem, Elem?: IElem) => bar;
