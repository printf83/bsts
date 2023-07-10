import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr, IElem } from "../../core/tag.js";
import { div } from "../../html/div.js";
export interface Container extends IAttr {
    placement?: "start" | "end" | "top" | "bottom";
    show?: boolean | bootstrapType.viewport;
    dark?: boolean;
    backdrop?: boolean | "static";
    scroll?: boolean;
    labelledby?: string;
    debug?: boolean;
}
export declare class container extends div {
    constructor();
    constructor(attr: Container);
    constructor(elem: IElem);
    constructor(attr: Container, elem: IElem);
}
export declare const Container: (AttrOrElem?: Container | IElem, Elem?: IElem) => container;
