import { IElem } from "../../core/tag.js";
import { Ul } from "../../html/ul.js";
import { nav } from "../../html/nav.js";
export interface Container extends Ul {
    weight?: "sm" | "lg";
    total?: number;
    skip?: number;
    limit?: number;
    maxBtnCount?: number;
    firstLast?: boolean;
    nextPrev?: boolean;
    nextLable?: IElem;
    prevLabel?: IElem;
    firstLabel?: IElem;
    lastLabel?: IElem;
}
export declare class container extends nav {
    constructor();
    constructor(attr: Container);
    constructor(elem: IElem);
    constructor(attr: Container, elem: IElem);
}
export declare const Container: (AttrOrElem?: Container | IElem, Elem?: IElem) => container;
