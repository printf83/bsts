import { bootstrapType } from "../../core/bootstrap.js";
import { IElem } from "../../core/tag.js";
import { A, a } from "../../html/a.js";
export interface ItemLink extends A {
    active?: boolean;
    disabled?: boolean;
    action?: boolean;
    color?: bootstrapType.color;
    handleActive?: boolean;
}
export declare class itemLink extends a {
    constructor();
    constructor(attr: ItemLink);
    constructor(elem: IElem);
    constructor(attr: ItemLink, elem: IElem);
}
export declare const Item: (AttrOrElem?: ItemLink | IElem, Elem?: IElem) => itemLink;
