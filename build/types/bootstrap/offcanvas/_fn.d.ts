import { Offcanvas as BSOffcanvas } from "bootstrap";
export declare const init: (elem: string | Element, options?: Partial<BSOffcanvas.Options>) => BSOffcanvas;
export declare const getInstance: (elem: string | Element) => BSOffcanvas | null;
export declare const getOrCreateInstance: (elem: string | Element, options?: Partial<BSOffcanvas.Options>) => BSOffcanvas;
export declare const hide: (elem: string | Element) => void;
export declare const show: (elem: string | Element, relatedTarget?: HTMLElement) => void;
export declare const toggle: (elem: string | Element, relatedTarget?: HTMLElement) => void;
export declare const dispose: (elem: string | Element) => void;
