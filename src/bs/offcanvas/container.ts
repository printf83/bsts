import { bootstrapType } from "../../core/base/bootstrap.js";
import { IAttr, IElem } from "../../core/base/tag.js";
import { conProp } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { UUID } from "../../core/fn/uuid.js";
import { div } from "../../ht/div.js";

export interface IAttrBSOffcanvasContainer extends IAttr {
	placement?: "start" | "end" | "top" | "bottom";
	hide?: boolean | bootstrapType.viewport[number];
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
				attr.hide ? (attr.hide === true ? "" : `offcanvas-${attr.hide}`) : "",
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
		super(conProp<IAttrBSOffcanvasContainer>("elem", convert, arg));
	}
}
