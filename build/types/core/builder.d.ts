import { tag, strHtml } from "./tag.js";
export type buildArg = tag | number | string | strHtml | (tag | string | number | strHtml)[];
export declare const build: (container: Element, arg: buildArg, append?: boolean, beforeElem?: Element | ChildNode | null) => Element;
export declare const getNode: (arg: buildArg) => Element | Element[] | null;
export declare const getHtml: (arg: buildArg) => string;
export declare const appendChild: (container: Element, arg: buildArg) => Element;
export declare const prependChild: (container: Element, arg: buildArg) => Element;
export declare const removeElement: (elem: Element) => void;
export declare const replaceWith: (elem: Element, arg: buildArg) => Element | undefined;
export declare const replaceChild: (container: Element, arg: buildArg) => Element;
