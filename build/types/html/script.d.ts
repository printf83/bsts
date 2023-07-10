import { IAttr, tag } from "../core/tag.js";
export interface Script extends IAttr {
    async?: boolean;
    crossorigin?: "anonymous" | "use-credentials";
    defer?: boolean;
    integrity?: string;
    nomodule?: boolean;
    referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
    src?: string;
    type?: string;
}
export declare class script extends tag {
    constructor();
    constructor(attr: Script);
}
export declare const Script: (Attr?: Script) => script;
