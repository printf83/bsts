import { IAttr, IElem } from "../../../core/tag.js";
import { div } from "../../../html/div.js";
export interface Pane extends IAttr {
    animation?: boolean;
    active?: boolean;
    role?: "tabpanel";
}
export declare class pane extends div {
    constructor();
    constructor(attr: Pane);
    constructor(elem: IElem);
    constructor(attr: Pane, elem: IElem);
}
export declare const Pane: (AttrOrElem?: Pane | IElem, Elem?: IElem) => pane;
