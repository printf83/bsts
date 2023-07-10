import { IAttr, IElem } from "../../core/tag.js";
import { div } from "../../html/div.js";
export interface Container extends IAttr {
    weight?: "sm" | "lg";
    noWarp?: true;
}
export declare class container extends div {
    constructor();
    constructor(attr: Container);
    constructor(elem: IElem);
    constructor(attr: Container, elem: IElem);
}
export declare const Container: (AttrOrElem?: Container | IElem, Elem?: IElem) => container;
