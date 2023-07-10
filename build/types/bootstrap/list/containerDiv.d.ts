import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr, IElem } from "../../core/tag.js";
import { div } from "../../html/div.js";
export interface ContainerDiv extends IAttr {
    flush?: boolean;
    numbered?: boolean;
    horizontal?: boolean | bootstrapType.viewport;
}
export declare class containerDiv extends div {
    constructor();
    constructor(attr: ContainerDiv);
    constructor(elem: IElem);
    constructor(attr: ContainerDiv, elem: IElem);
}
export declare const ContainerDiv: (AttrOrElem?: ContainerDiv | IElem, Elem?: IElem) => containerDiv;
