import { IElem } from "../core/tag.js";
import { Select as ISelect, select as TSelect } from "../html/select.js";
export interface Select extends ISelect {
    weight?: "sm" | "lg";
    isvalid?: boolean;
}
export declare class select extends TSelect {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Select);
    constructor(attr: Select, elem: IElem);
}
export declare const Select: (AttrOrElem?: Select | IElem, Elem?: IElem) => select;
