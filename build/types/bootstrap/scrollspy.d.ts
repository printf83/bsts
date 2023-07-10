import { IAttr, IElem } from "../core/tag.js";
import { div } from "../html/div.js";
import { ScrollSpy as BSScrollSpy } from "bootstrap";
export interface Scrollspy extends IAttr {
    target?: string;
    smooth?: boolean;
    rootMargin?: string;
    initDelay?: number;
}
export declare class scrollspy extends div {
    constructor();
    constructor(attr: Scrollspy);
    constructor(elem: IElem);
    constructor(attr: Scrollspy, elem: IElem);
    static init: (elem: Element | string, options?: Partial<BSScrollSpy.Options>) => BSScrollSpy;
    static getInstance: (elem: Element | string) => BSScrollSpy | null;
    static getOrCreateInstance: (elem: Element | string, options?: Partial<BSScrollSpy.Options>) => BSScrollSpy;
    static dispose: (elem: Element | string) => void;
    static refresh: (elem: Element | string) => void;
}
export declare const Scrollspy: (AttrOrElem?: Scrollspy | IElem, Elem?: IElem) => scrollspy;
