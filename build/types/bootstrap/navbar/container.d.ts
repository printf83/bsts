import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr, IElem } from "../../core/tag.js";
import { nav } from "../../html/nav.js";
import { header } from "../../html/header.js";
export interface Container extends IAttr {
    expand?: bootstrapType.viewport;
}
export declare class container extends nav {
    constructor();
    constructor(attr: Container);
    constructor(elem: IElem);
    constructor(attr: Container, elem: IElem);
}
export declare const Container: (AttrOrElem?: Container | IElem, Elem?: IElem) => container;
export declare class containerHeader extends header {
    constructor();
    constructor(attr: Container);
    constructor(elem: IElem);
    constructor(attr: Container, elem: IElem);
}
export declare const ContainerHeader: (AttrOrElem?: Container | IElem, Elem?: IElem) => containerHeader;
