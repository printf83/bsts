import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr, IElem } from "../../core/tag.js";
import { div } from "../../html/div.js";
export interface Container extends IAttr {
    backdrop?: boolean | "static";
    focus?: boolean;
    keyboard?: boolean;
    weight?: "sm" | "lg" | "xl";
    fullscreen?: true | bootstrapType.viewport;
    view?: "center" | "end";
    scrollable?: boolean;
    animation?: boolean;
    dialogAttr?: IAttr;
    contentAttr?: IAttr;
    debug?: boolean;
}
export declare class container extends div {
    constructor();
    constructor(attr: Container);
    constructor(elem: IElem);
    constructor(attr: Container, elem: IElem);
}
export declare const Container: (AttrOrElem?: Container | IElem, Elem?: IElem) => container;
