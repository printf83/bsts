import { IBase } from './../base/base.interface.js';
export declare const build: (container: HTMLElement, arg: IBase | string | null | (IBase | string | null)[], append?: boolean, pos?: HTMLElement | null) => HTMLElement;
export declare const appendChild: (container: HTMLElement, arg: IBase | string | null | (IBase | string | null)[]) => HTMLElement;
export declare const prependChild: (container: HTMLElement, arg: IBase | string | null | (IBase | string | null)[]) => HTMLElement;
export declare const replaceWith: (elem: HTMLElement, arg: IBase | string | null | (IBase | string | null)[]) => HTMLElement;
export declare const replaceChild: (container: HTMLElement, arg: IBase | string | null | (IBase | string | null)[]) => HTMLElement;
export declare const html: (arg: IBase | string | null | (IBase | string | null)[]) => string;
