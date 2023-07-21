import { bootstrapType } from "../core/bootstrap.js";
import { IAttr, IElem, tag, tagConsArg } from "../core/tag.js";
import { mergeClass } from "../core/mergeClass.js";
import { mergeObject } from "../core/mergeObject.js";

export interface A extends IAttr {
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

const convert = (attr: A) => {
	attr.class = mergeClass(attr.class, [
		attr.color ? `link-${attr.color}` : undefined,
		attr.stretched ? "stretched-link" : undefined,
		attr.disabled ? "disabled" : undefined,
	]);

	if (attr.disabled) {
		delete attr.href;

		attr = mergeObject(
			{
				aria: { disabled: "true" },
				tabindex: -1,
			},
			attr
		);
	}

	delete attr.color;
	delete attr.stretched;
	delete attr.disabled;

	return attr;
};

export class a extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: A);
	constructor(attr: A, elem: IElem);
	constructor(...arg: any[]) {
		super("a", convert(tagConsArg<A>("elem", arg)));
	}
}
