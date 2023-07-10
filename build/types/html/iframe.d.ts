import { IAttr, tag } from "../core/tag.js";
export interface Iframe extends IAttr {
    allowfullscreen?: boolean;
    allowpaymentrequest?: boolean;
    loadingStyle?: "eager" | "lazy";
    name?: string;
    referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
    sandbox?: "allow-forms" | "allow-pointer-lock" | "allow-popups" | "allow-same-origin" | "allow-scripts" | "allow-top-navigation";
    src?: string;
    srcdoc?: string;
}
export declare class iframe extends tag {
    constructor();
    constructor(attr: Iframe);
}
export declare const Iframe: (Attr?: Iframe) => iframe;
