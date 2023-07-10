import { IElem } from "../../core/tag.js";
import { Container, container as contentContainer } from "./content/container.js";
import { header } from "../card/header.js";
import { ContainerNav } from "./header/containerNav.js";
export interface TabItem {
    label?: IElem;
    elem?: IElem;
    active?: boolean;
    disabled?: boolean;
}
export interface Tab extends Omit<ContainerNav, "item" | "container"> {
    card?: true;
    animation?: boolean;
    item?: TabItem | TabItem[];
    attrContent?: Container;
}
export declare const Tab: (attr: Tab) => "" | (contentContainer | header)[];
