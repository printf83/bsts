import { IAttr, IElem } from "../../core/tag.js";
import { bootstrapType } from "../../core/bootstrap.js";
import { div } from "../../html/div.js";
export interface Menu extends IAttr {
    viewOffset?: string | number[];
    reference?: "toggle" | "parent";
    autoClose?: "true" | "false" | "auto" | "manual" | "inside" | "outside";
    boundary?: string;
    positioning?: "dynamic" | "static";
    popperConfig?: object;
    positionView?: bootstrapType.dropdownMenuPositionView | bootstrapType.dropdownMenuPositionView[];
    dropdownMenuPositionView?: bootstrapType.dropdownMenuPositionView | bootstrapType.dropdownMenuPositionView[];
    customStyle?: 1;
    debug?: boolean;
}
export declare class menu extends div {
    constructor();
    constructor(attr: Menu);
    constructor(elem: IElem);
    constructor(attr: Menu, elem: IElem);
}
export declare const Menu: (AttrOrElem?: Menu | IElem, Elem?: IElem) => menu;
