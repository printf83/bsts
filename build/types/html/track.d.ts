import { IAttr, IElem, tag } from "../core/tag.js";
export interface Track extends IAttr {
    default?: boolean;
    kind?: "captions" | "chapters" | "descriptions" | "metadata" | "subtitles";
    label?: string;
    attrLabel?: string;
    src?: string;
    srclang?: string;
}
export declare class track extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Track);
    constructor(attr: Track, elem: IElem);
}
export declare const Track: (AttrOrElem?: Track | IElem, Elem?: IElem) => track;
