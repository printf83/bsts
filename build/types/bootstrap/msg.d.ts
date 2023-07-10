import { IAttr, IElem } from "../core/tag.js";
import { Label, label as TLabel } from "../html/label.js";
import { Icon } from "./icon.js";
export interface Msg extends Label {
    icon?: Icon;
    iconPosition?: "start" | "end" | "top" | "bottom";
    iconContainer?: IAttr;
}
export declare class msg extends TLabel {
    constructor();
    constructor(attr: Msg);
    constructor(elem: IElem);
    constructor(icon: string, elem: IElem);
    constructor(icon: Icon, elem: IElem);
}
export declare const Msg: (AttrOrElemOrIcon?: Msg | Icon | IElem, Elem?: IElem) => msg;
