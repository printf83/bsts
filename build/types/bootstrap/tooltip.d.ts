import { IAttr, IElem } from "../core/tag.js";
import { span } from "../html/span.js";
import { Tooltip as BSTooltip } from "bootstrap";
export interface Tooltip extends IAttr {
    inline?: boolean;
    trigger?: "hover" | "focus" | "click" | ("hover" | "focus" | "click")[];
    content?: string;
    placement?: "auto" | "right" | "left" | "top" | "bottom";
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
export declare class tooltip extends span {
    constructor();
    constructor(attr: Tooltip);
    constructor(elem: IElem);
    constructor(attr: Tooltip, elem: IElem);
    static init: (elem: Element | string, options?: Partial<BSTooltip.Options>) => BSTooltip;
    static getInstance: (elem: Element | string) => BSTooltip | null;
    static getOrCreateInstance: (elem: Element | string, options?: Partial<BSTooltip.Options>) => BSTooltip;
    static disable: (elem: Element | string) => void;
    static dispose: (elem: Element | string) => void;
    static enable: (elem: Element | string) => void;
    static hide: (elem: Element | string) => void;
    static show: (elem: Element | string) => void;
    static setContent: (elem: Element | string, content?: Record<string, string | Element | BSTooltip.SetContentFunction | null>) => void;
    static toggle: (elem: Element | string) => void;
    static toggleEnabled: (elem: Element | string) => void;
    static update: (elem: Element | string) => void;
}
export declare const Tooltip: (AttrOrElem?: Tooltip | IElem, Elem?: IElem) => tooltip;
