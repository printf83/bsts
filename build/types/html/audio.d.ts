import { IAttr, IElem, tag } from "../core/tag.js";
export interface Audio extends IAttr {
    autoplay?: boolean;
    controls?: boolean;
    loop?: boolean;
    muted?: boolean;
    preload?: "auto" | "metadata" | "none";
    src?: string;
}
export declare class audio extends tag {
    constructor();
    constructor(attr: Audio);
    constructor(elem: IElem);
    constructor(attr: Audio, elem: IElem);
}
export declare const Audio: (AttrOrElem?: Audio | IElem, Elem?: IElem) => audio;
