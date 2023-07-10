import { IElem } from "../../core/tag.js";
import { Container, container } from "../collapse/container.js";
export interface Body extends Container {
    labelledby?: string;
    parent?: string;
    show?: boolean;
}
export declare class body extends container {
    constructor();
    constructor(attr: Body);
    constructor(elem: IElem);
    constructor(attr: Body, elem: IElem);
}
export declare const Body: (AttrOrElem?: Body | IElem, Elem?: IElem) => body;
