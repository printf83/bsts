import { IAttr, tag } from "../core/tag.js";
export interface Link extends IAttr {
    crossorigin?: "anonymous" | "use-credentials";
    href?: string;
    hreflang?: string;
    media?: string;
    referrerpolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "unsafe-url";
    rel?: "alternate" | "author" | "dns-prefetch" | "help" | "icon" | "license" | "next" | "pingback" | "preconnect" | "prefetch" | "preload" | "prerender" | "prev" | "search" | "stylesheet";
    sizes?: string;
    type?: string;
}
export declare class link extends tag {
    constructor();
    constructor(attr: Link);
}
export declare const Link: (Attr?: Link) => link;
