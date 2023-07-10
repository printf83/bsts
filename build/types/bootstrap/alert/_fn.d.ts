import { Alert as BSAlert } from "bootstrap";
export declare const init: (elem: string | Element) => BSAlert;
export declare const getInstance: (elem: string | Element) => BSAlert | null;
export declare const getOrCreateInstance: (elem: string | Element) => BSAlert;
export declare const close: (elem: string | Element) => void;
export declare const dispose: (elem: string | Element) => void | undefined;
