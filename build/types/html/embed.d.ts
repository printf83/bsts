import { IAttr, tag } from "../core/tag.js";
export interface Embed extends IAttr {
    src?: string;
    type?: string;
}
export declare class embed extends tag {
    constructor();
    constructor(type: string, src: string);
    constructor(attr: Embed);
}
export declare const Embed: (AttrOrType?: Embed | string, Src?: string) => embed;
