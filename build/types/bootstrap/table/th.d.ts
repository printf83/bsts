import { IElem } from "../../core/tag.js";
import { bootstrapType } from "../../core/bootstrap.js";
import { Th as ITh, th as TTh } from "../../html/th.js";
export interface Th extends ITh {
    color?: bootstrapType.color;
    active?: boolean;
    responsiveAttr?: string;
    responsiveTitle?: string;
}
export declare class th extends TTh {
    constructor();
    constructor(attr: Th);
    constructor(elem: IElem);
    constructor(attr: Th, elem: IElem);
}
export declare const Th: (AttrOrElem?: Th | IElem, Elem?: IElem) => th;
