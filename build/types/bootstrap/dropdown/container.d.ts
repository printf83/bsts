import { IElem } from "../../core/tag.js";
import { Btngroup, btngroup } from "../btngroup.js";
export type Drop = "down" | "down-center" | "up" | "up-center" | "start" | "end";
export interface Container extends Btngroup {
    drop?: Drop;
}
export declare class container extends btngroup {
    constructor();
    constructor(attr: Container);
    constructor(elem: IElem);
    constructor(attr: Container, elem: IElem);
}
export declare const Container: (AttrOrElem?: Container | IElem, Elem?: IElem) => container;
