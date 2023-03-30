import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { UUID } from "../../core/uuid.js";
import { div } from "../../html/div.js";

export interface IAttrBSOffcanvasContainer extends IAttr {
	placement?: "start" | "end" | "top" | "bottom";
	hide?: boolean | bootstrapType.viewport[number];
	dark?: boolean;
	backdrop?: boolean | "static";
	scroll?: boolean;
	labelledby?: string;

	debug?: boolean;
}

const convert = (attr: IAttrBSOffcanvasContainer) => {
	attr.placement ??= "start";

	attr = mergeObject(
		{
			id: attr.id || UUID(),
			class: [
				!attr.hide ? "offcanvas" : undefined,
				attr.hide === false ? "show" : undefined,
				attr.hide ? (attr.hide === true ? "" : `offcanvas-${attr.hide}`) : undefined,
				attr.placement ? `offcanvas-${attr.placement}` : undefined,
				attr.debug ? "debug" : undefined,
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
	delete attr.debug;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IAttrBSOffcanvasContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSOffcanvasContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSOffcanvasContainer>("elem", convert, arg));
	}
}
