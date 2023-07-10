import { IAttr, IElem, tag } from "../core/tag.js";
import { bootstrapType } from "../core/bootstrap.js";
export interface Spinner extends IAttr {
    type?: "border" | "grow";
    small?: true;
    role?: "status";
    color?: bootstrapType.textColor;
}
export declare class spinner extends tag {
    constructor();
    constructor(attr: Spinner);
    constructor(elem: IElem);
    constructor(attr: Spinner, elem: IElem);
}
export declare const Spinner: (AttrOrElem?: Spinner | IElem, Elem?: IElem) => spinner;
