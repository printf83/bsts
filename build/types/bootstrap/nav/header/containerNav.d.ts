import { IAttr, IElem } from "../../../core/tag.js";
import { nav } from "../../../html/nav.js";
import { Button } from "./button.js";
import { Link } from "./link.js";
export interface ContainerNav extends IAttr {
    type?: "tab" | "pill" | "underline";
    itemWidth?: "fill" | "justified";
    vertical?: true;
    role?: "tablist";
    item?: Button | Button[];
    link?: Link | Link[];
}
export declare class containerNav extends nav {
    constructor();
    constructor(attr: ContainerNav);
    constructor(elem: IElem);
    constructor(attr: ContainerNav, elem: IElem);
}
export declare const ContainerNav: (AttrOrElem?: ContainerNav | IElem, Elem?: IElem) => containerNav;
