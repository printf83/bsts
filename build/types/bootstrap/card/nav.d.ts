import { IElem } from "../../core/tag.js";
import { container as BSNavHeaderContainer, Container } from "../nav/header/container.js";
export declare class nav extends BSNavHeaderContainer {
    constructor();
    constructor(attr: Container);
    constructor(elem: IElem);
    constructor(attr: Container, elem: IElem);
}
export declare const Nav: (AttrOrElem?: Container | IElem, Elem?: IElem) => nav;
