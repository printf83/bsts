import { IAttr, IElem, tag } from "../core/tag.js";
export interface Video extends IAttr {
    autoplay?: boolean;
    controls?: boolean;
    loop?: boolean;
    muted?: boolean;
    poster?: string;
    preload?: "auto" | "metadata" | "none";
    src?: string;
}
export declare class video extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Video);
    constructor(attr: Video, elem: IElem);
}
export declare const Video: (AttrOrElem?: Video | IElem, Elem?: IElem) => video;
