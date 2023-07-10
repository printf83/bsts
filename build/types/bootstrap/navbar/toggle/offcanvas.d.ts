import { IElem } from "../../../core/tag.js";
import { Button as IToggle, button as TToggle } from "../../offcanvas/button.js";
export declare class offcanvas extends TToggle {
    constructor();
    constructor(attr: IToggle);
    constructor(elem: IElem);
    constructor(attr: IToggle, elem: IElem);
}
export declare const Offcanvas: (AttrOrElem?: IToggle | IElem, Elem?: IElem) => offcanvas;
