import { IAttr, IElem } from "../../core/tag.js";
import { div } from "../../html/div.js";
export declare const ContainerPlacementA: string[];
export type ContainerPlacement = "top-start" | "top-center" | "top-end" | "middle-start" | "middle-center" | "middle-end" | "bottom-start" | "bottom-center" | "bottom-end";
export interface Container extends IAttr {
    debug?: boolean;
    placement?: ContainerPlacement;
}
export declare class container extends div {
    constructor();
    constructor(attr: Container);
    constructor(elem: IElem);
    constructor(attr: Container, elem: IElem);
}
export declare const Container: (AttrOrElem?: Container | IElem, Elem?: IElem) => container;
