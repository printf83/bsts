import { IElem } from "../../core/tag.js";
import { container as TCollapseContainer, Container } from "../collapse/container.js";
export declare class collapse extends TCollapseContainer {
    constructor();
    constructor(attr: Container);
    constructor(elem: IElem);
    constructor(attr: Container, elem: IElem);
}
export declare const Collapse: (AttrOrElem?: Container | IElem, Elem?: IElem) => collapse;
