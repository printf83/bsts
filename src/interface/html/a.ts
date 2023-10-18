import { attr } from "../core/attr.js";
import { bsType } from "../core/bsType.js";

export interface a extends attr {
	download?: string;
	href?: string;
	hreflang?: string;
	media?: string;
	ping?: string;
	referrerpolicy?:
		| "no-referrer"
		| "no-referrer-when-downgrade"
		| "origin"
		| "origin-when-cross-origin"
		| "same-origin"
		| "strict-origin"
		| "strict-origin-when-cross-origin"
		| "unsafe-url";
	rel?:
		| "alternate"
		| "author"
		| "bookmark"
		| "external"
		| "help"
		| "license"
		| "next"
		| "nofollow"
		| "noreferrer"
		| "noopener"
		| "prev"
		| "search"
		| "tag";
	target?: "_blank" | "_parent" | "_self" | "_top";
	type?: string;
	color?: bsType.linkColor;
	stretched?: true;

	disabled?: boolean;

	linkColor?: bsType.linkColor;
	linkUnderlineColor?: bsType.linkUnderlineColor;
	linkOffset?: bsType.linkOffset;
	linkOffsetHover?: bsType.linkOffsetHover;
	linkOpacity?: bsType.linkOpacity;
	linkUnderline?: bsType.linkUnderline;
	linkUnderlineOpacity?: bsType.linkUnderlineOpacity;
	linkUnderlineOpacityHover?: bsType.linkUnderlineOpacityHover;
	linkOpacityHover?: bsType.linkOpacityHover;
}
