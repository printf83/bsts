import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { UUID } from "../../core/uuid.js";
import { div } from "../../html/div.js";
// import { removeElement } from "../../core/removeElement.js";
// import { appendChild, init } from "../../core/builder.js";
// import { addEvent, HTMLElementWithEventDB } from "../../core/eventManager.js";

export interface IBsModalContainer extends IAttr {
	static?: boolean;
	weight?: "sm" | "lg" | "xl";
	fullscreen?: true | bootstrapType.viewport;
	centered?: boolean;
	scrollable?: boolean;
	animation?: boolean;

	debug?: boolean;
}

const convert = (attr: IBsModalContainer) => {
	attr.animation = attr.animation === undefined ? true : attr.animation;

	attr = mergeObject(
		{
			id: attr.id || UUID(),
			class: ["modal", attr.animation && !attr.debug ? "fade" : undefined, attr.debug ? "debug" : undefined],
			tabindex: "-1",
			data: {
				"bs-backdrop": attr.static ? "static" : undefined,
				"bs-keyboard": attr.static ? "false" : undefined,
			},
			aria: {
				hidden: attr.debug ? undefined : "true",
			},
		},
		attr
	);

	attr.elem = new div(
		{
			class: [
				"modal-dialog",
				attr.weight ? `modal-${attr.weight}` : undefined,
				attr.fullscreen
					? attr.fullscreen === true
						? "modal-fullscreen"
						: `modal-fullscreen-${attr.fullscreen}-down`
					: undefined,
				attr.scrollable ? "modal-dialog-scrollable" : undefined,
				attr.centered ? "modal-dialog-centered" : undefined,
			],
		},
		attr.elem ? new div({ class: "modal-content" }, attr.elem) : new div({ class: "modal-content" })
	);

	delete attr.static;
	delete attr.animation;
	delete attr.debug;

	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IBsModalContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IBsModalContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IBsModalContainer>("elem", convert, arg));
	}
}
