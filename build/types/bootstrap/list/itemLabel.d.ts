import { bootstrapType } from "../../core/bootstrap.js";
import { IElem } from "../../core/tag.js";
import { Label, label } from "../../html/label.js";
export interface ItemLabel extends Label {
    active?: boolean;
    disabled?: boolean;
    action?: boolean;
    color?: bootstrapType.color;
    handleActive?: boolean;
}
export declare class itemLabel extends label {
    constructor();
    constructor(attr: ItemLabel);
    constructor(elem: IElem);
    constructor(attr: ItemLabel, elem: IElem);
}
export declare const Item: (AttrOrElem?: ItemLabel | IElem, Elem?: IElem) => itemLabel;
