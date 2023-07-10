import { IAttr, IElem } from "../../core/tag.js";
import { container, Container } from "./container.js";
import { Header } from "./header.js";
import { Modal as BSModal } from "bootstrap";
export declare const init: (elem: string | Element, options?: Partial<BSModal.Options>) => BSModal;
export declare const getInstance: (elem: string | Element) => BSModal | null;
export declare const getOrCreateInstance: (elem: string | Element, options?: Partial<BSModal.Options>) => BSModal;
export declare const handleUpdate: (elem: string | Element) => void;
export declare const toggle: (elem: string | Element, relatedTarget?: HTMLElement) => void;
export declare const dispose: (elem: string | Element) => void;
export declare const hide: (elem: string | Element) => void;
export declare const show: (elem: string | Element | container, relatedTarget?: HTMLElement) => void;
type customStyleButton = 1 | 2;
type btnType = "ok" | "cancel" | "yes" | "no" | "retry" | "continue" | "delete" | "save" | "savechanges" | "agree" | "disagree" | "reject" | "close" | "yesdelete" | "yessave" | "yescontinue" | "yesenable" | "nothanks";
export interface Create extends Omit<Container, "title"> {
    customStyle?: customStyleButton;
    btn?: btnType | btnType[];
    btnFn?: EventListener | EventListener[];
    title?: IElem;
    elem?: IElem;
    attrHeader?: Header;
    attrBody?: IAttr;
    attrFooter?: IAttr;
}
export declare const Create: (attr: Create) => container;
export {};
