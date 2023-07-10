import { IAttr, tag } from "../core/tag.js";
export interface Img extends IAttr {
    alt?: string;
    crossorigin?: "anonymous" | "use-credentials";
    ismap?: boolean;
    loadingStyle?: "eager" | "lazy";
    longdesc?: string;
    referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "unsafe-url";
    sizes?: string;
    src?: string;
    srcset?: string;
    usemap?: string;
}
export declare class img extends tag {
    constructor();
    constructor(attr: Img);
}
export declare const Img: (Attr?: Img) => img;
