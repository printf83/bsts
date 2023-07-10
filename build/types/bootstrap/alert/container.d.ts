import { IAttr, IElem } from "../../core/tag.js";
import { bootstrapType } from "../../core/bootstrap.js";
import { div } from "../../html/div.js";
export interface Container extends IAttr {
    callout?: boolean;
    animation?: boolean;
    color?: bootstrapType.alertColor;
    dismissible?: bootstrapType.alertDismissible;
}
export declare class container extends div {
    constructor();
    constructor(attr: Container);
    constructor(elem: IElem);
    constructor(attr: Container, elem: IElem);
}
export declare const Container: (AttrOrElem?: Container | IElem, Elem?: IElem) => container;
