import { Collapse as BSCollapse } from "bootstrap";
export declare const init: (elem: string | Element, options?: Partial<BSCollapse.Options>) => BSCollapse;
export declare const getInstance: (elem: string | Element) => BSCollapse | null;
export declare const getOrCreateInstance: (elem: string | Element, options?: Partial<BSCollapse.Options>) => BSCollapse;
export declare const hide: (elem: string | Element) => void;
export declare const show: (elem: string | Element) => void;
export declare const toggle: (elem: string | Element) => void;
export declare const dispose: (elem: string | Element) => void;
