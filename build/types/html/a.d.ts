import { bootstrapType } from "../core/bootstrap.js";
import { IAttr, IElem, tag } from "../core/tag.js";
export interface A extends IAttr {
    download?: string;
    href?: string;
    hreflang?: string;
    media?: string;
    ping?: string;
    referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
    rel?: "alternate" | "author" | "bookmark" | "external" | "help" | "license" | "next" | "nofollow" | "noreferrer" | "noopener" | "prev" | "search" | "tag";
    target?: "_blank" | "_parent" | "_self" | "_top";
    type?: string;
    color?: bootstrapType.linkColor;
    stretched?: true;
    disabled?: boolean;
    linkColor?: bootstrapType.linkColor;
    linkUnderlineColor?: bootstrapType.linkUnderlineColor;
    linkOffset?: bootstrapType.linkOffset;
    linkOffsetHover?: bootstrapType.linkOffsetHover;
    linkOpacity?: bootstrapType.linkOpacity;
    linkUnderline?: bootstrapType.linkUnderline;
    linkUnderlineOpacity?: bootstrapType.linkUnderlineOpacity;
    linkUnderlineOpacityHover?: bootstrapType.linkUnderlineOpacityHover;
    linkOpacityHover?: bootstrapType.linkOpacityHover;
}
export declare class a extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: A);
    constructor(attr: A, elem: IElem);
}
export declare const A: (AttrOrElem?: A | IElem, Elem?: IElem) => a;
