import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr } from "../../core/tag.js";

export interface a extends IAttr {
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
