import { IAttr, tag } from "../core/tag.js";
export interface Meta extends IAttr {
    charset?: string;
    content?: string;
    httpEquiv?: "content-security-policy" | "content-type" | "default-style" | "refresh";
    name?: "application-name" | "author" | "description" | "generator" | "keywords" | "viewport";
}
export declare class meta extends tag {
    constructor();
    constructor(attr: Meta);
}
export declare const Meta: (Attr?: Meta) => meta;
