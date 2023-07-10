import { IAttr, IElem } from "../../core/tag.js";
import { div } from "../../html/div.js";
export interface ContainerItem {
    title: IElem;
    elem: IElem;
    show?: boolean;
}
export interface Container extends IAttr {
    flush?: boolean;
    alwaysOpen?: boolean;
    item?: ContainerItem | ContainerItem[];
}
export declare class container extends div {
    constructor();
    constructor(attr: Container);
    constructor(elem: IElem);
    constructor(attr: Container, elem: IElem);
}
export declare const Container: (AttrOrElem?: Container | IElem, Elem?: IElem) => container;
