import { Dropdown as BSDropdown } from "bootstrap";
export declare const init: (elem: string | Element, options?: Partial<BSDropdown.Options>) => BSDropdown;
export declare const getInstance: (elem: string | Element) => BSDropdown | null;
export declare const getOrCreateInstance: (elem: string | Element, options?: Partial<BSDropdown.Options>) => BSDropdown;
export declare const hide: (elem: string | Element) => void;
export declare const show: (elem: string | Element) => void;
export declare const toggle: (elem: string | Element) => void;
export declare const update: (elem: string | Element) => void;
export declare const dispose: (elem: string | Element) => void;
