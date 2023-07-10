import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr, IElem } from "../../core/tag.js";
import { div } from "../../html/div.js";
export interface ItemDiv extends IAttr {
    active?: boolean;
    disabled?: boolean;
    action?: boolean;
    color?: bootstrapType.color;
    handleActive?: boolean;
}
export declare class itemDiv extends div {
    constructor();
    constructor(attr: ItemDiv);
    constructor(elem: IElem);
    constructor(attr: ItemDiv, elem: IElem);
}
export declare const Item: (AttrOrElem?: ItemDiv | IElem, Elem?: IElem) => itemDiv;
