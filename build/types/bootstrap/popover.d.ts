import { IAttr, IElem } from "../core/tag.js";
import { span } from "../html/span.js";
import { Popover as BSPopover } from "bootstrap";
export interface Popover extends IAttr {
    inline?: boolean;
    trigger?: "hover" | "focus" | "click" | ("hover" | "focus" | "click")[];
    title?: string;
    content?: string;
    placement?: "right" | "left" | "top" | "bottom";
    parent?: string;
    customClass?: string;
    allowHtml?: boolean;
    autoInit?: boolean;
    allowList?: object;
    animation?: boolean;
    boundary?: string;
    showDelay?: string | number;
    hideDelay?: string | number;
    delay?: string | number;
    fallbackPlacement?: "right" | "left" | "top" | "bottom" | ("right" | "left" | "top" | "bottom")[];
    viewOffset?: string | number[];
    popperConfig?: object;
    sanitize?: boolean;
    sanitizeFn?: string;
    selector?: string | false;
    template?: string;
}
export declare class popover extends span {
    constructor();
    constructor(attr: Popover);
    constructor(elem: IElem);
    constructor(attr: Popover, elem: IElem);
    static init: (elem: Element | string, options?: Partial<BSPopover.Options>) => BSPopover;
    static getInstance: (elem: Element | string) => BSPopover | null;
    static getOrCreateInstance: (elem: Element | string, options?: Partial<BSPopover.Options>) => BSPopover;
    static disable: (elem: Element | string) => void;
    static dispose: (elem: Element | string) => void;
    static enable: (elem: Element | string) => void;
    static hide: (elem: Element | string) => void;
    static show: (elem: Element | string) => void;
    static setContent: (elem: Element | string, content?: Record<string, string | Element | null>) => void;
    static toggle: (elem: Element | string) => void;
    static toggleEnabled: (elem: Element | string) => void;
    static update: (elem: Element | string) => void;
}
export declare const Popover: (AttrOrElem?: Popover | IElem, Elem?: IElem) => popover;
