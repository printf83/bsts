import { bootstrapType } from "../../core/base/bootstrap.js";
import { IAttr, IElem } from "../../core/base/tag.js";
import { bsConstArg } from "../../core/base/bootstrap.js";
import { mergeObject } from "../../core/fn/mergeObject.js";
import { UUID } from "../../core/fn/uuid.js";
import { div } from "../../ht/div.js";

export interface IAttrBSModalContainer extends IAttr {
	static?: boolean;
	weight?: "sm" | "lg" | "xl";
	fullscreen?: true | bootstrapType.viewport[number];
	centered?: boolean;
	scrollable?: boolean;
	animation?: boolean;
	labelledby?: string;
	describedby?: string;
	debug?: true;
}

const convert = (attr: IAttrBSModalContainer) => {
	attr.animation = attr.animation || true;

	attr = mergeObject(
		{
			id: attr.id || UUID(),
			class: ["modal", attr.animation ? "fade" : "", attr.debug ? "show" : ""],
			tabindex: "-1",
			data: {
				"bs-backdrop": attr.static ? "static" : undefined,
				"bs-keyboard": attr.static ? "false" : undefined,
			},
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

	attr.elem = new div(
		{
			class: [
				"modal-dialog",
				attr.weight ? `modal-${attr.weight}` : "",
				attr.fullscreen
					? attr.fullscreen === true
						? "modal-fullscreen"
						: `modal-fullscreen-${attr.fullscreen}-down`
					: "",
				attr.scrollable ? "modal-dialog-scrollable" : "",
				attr.centered ? "modal-dialog-centered" : "",
			],
		},
		attr.elem ? new div({ class: "modal-content" }, attr.elem) : new div({ class: "modal-content" })
	);

	delete attr.static;
	delete attr.animation;
	delete attr.labelledby;
	delete attr.describedby;
	delete attr.debug;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IAttrBSModalContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSModalContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSModalContainer>("elem", convert, arg));
	}
}
