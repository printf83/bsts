import { IAttr, IElem, isAttr } from "../../core/base/tag.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { UUID } from "../../core/fn/uuid.js";
import { div } from "../../ht/div.js";

export interface IAttrBSModal extends IAttr {
	weight?: "sm" | "lg" | "xl";
	fullscreen?: true | "sm" | "md" | "lg" | "xl" | "xxl";
	centered?: boolean;
	scrollable?: boolean;
	animation?: boolean;
	labelledby?: string;
	describedby?: string;
	debug?: true;
}

const convert = (attr: IAttrBSModal): IAttr => {
	attr.animation = attr.animation || true;

	attr.elem = new div(
		{
			class: [
				"modal-dialog",
				attr.weight ? `modal-${attr.weight}` : "",
				attr.fullscreen
					? attr.fullscreen === true
						? "modal-fullscreen"
						: `modal-fullscreen-${attr.weight}-down`
					: "",
				attr.scrollable ? "modal-dialog-scrollable" : "",
				attr.centered ? "modal-dialog-centered" : "",
			],
		},
		attr.elem
			? new div({ class: "modal-content" }, attr.elem)
			: new div({ class: "modal-content" })
	);

	attr = mergeObject(
		{
			id: attr.id || UUID(),
			class: ["modal", attr.animation ? "fade" : ""],
			tabindex: "-1",
			aria: {
				hidden: attr.debug ? undefined : "true",
				labelledby: attr.labelledby,
				describedby: attr.describedby,
			},
			position: attr.debug ? "static" : undefined,
			display: attr.debug ? "block" : undefined,
		},
		attr
	);

	delete attr.animation;
	delete attr.labelledby;
	delete attr.describedby;
	delete attr.debug;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IAttr); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttr, elem: IElem); //#4
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			//#1
			super(convert({}));
		} else if (arg.length === 1) {
			if (isAttr<IAttr>(arg[0])) {
				//#2
				super(convert(arg[0]));
			} else {
				//#3
				super(convert({}), arg[0]);
			}
		} else if (arg.length === 2) {
			//#4
			super(convert(arg[0]), arg[1]);
		}
	}
}
