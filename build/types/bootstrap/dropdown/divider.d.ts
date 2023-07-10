import { IAttr } from "../../core/tag.js";
import { hr } from "../../html/hr.js";
export declare class divider extends hr {
    constructor();
    constructor(attr: IAttr);
}
export declare const Divider: (Attr?: IAttr) => divider;
