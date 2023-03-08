import { IAttr, IElem, isAttr } from "../../core/base/tag.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { UUID } from "../../core/fn/uuid.js";
import { div } from "../../ht/div.js";

export interface IAttrBSOffcanvasContainer extends IAttr {
	placement?: "start" | "end" | "top" | "bottom";
	hide?: boolean | "sm" | "md" | "lg" | "xl" | "xxl";
	dark?: boolean;
	backdrop?: boolean | "static";
	scroll?: boolean;
	labelledby?: string;
}

const convert = (attr: IAttrBSOffcanvasContainer): IAttr => {
	attr.placement = attr.placement || "start";

	attr = mergeObject(
		{
			id: attr.id || UUID(),
			class: [
				!attr.hide ? "offcanvas" : "",
				attr.hide === false ? "show" : "",
				attr.hide
					? attr.hide === true
						? ""
						: `offcanvas-${attr.hide}`
					: "",
				attr.placement ? `offcanvas-${attr.placement}` : "",
			],
			tabindex: "-1",
			textBgColor: attr.textBgColor || attr.dark ? "dark" : undefined,
			data: {
				"bs-scroll": attr.scroll ? "true" : undefined,
				"bs-backdrop": attr.backdrop
					? attr.backdrop === true
						? "true"
						: attr.backdrop
					: attr.backdrop === false
					? "false"
					: undefined,
			},
			aria: {
				labelledby: attr.labelledby,
			},
			position: attr.debug ? "static" : undefined,
			display: attr.debug ? "block" : undefined,
		},
		attr
	);

	delete attr.placement;
	delete attr.dark;
	delete attr.hide;
	delete attr.backdrop;
	delete attr.scroll;
	delete attr.labelledby;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IAttrBSOffcanvasContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSOffcanvasContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttrBSOffcanvasContainer>(arg[0])) {
				//#2
				super(convert(arg[0]));
			} else {
				//#3
				super(convert({ elem: arg[0] }));
			}
		} else if (arg.length === 2) {
			//#4
			super(convert(mergeObject({ elem: arg[1] }, arg[0])));
		}
	}
}
