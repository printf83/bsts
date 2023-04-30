import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { UUID } from "../../core/uuid.js";
import { div } from "../../html/div.js";

export interface Container extends IAttr {
	static?: boolean;
	weight?: "sm" | "lg" | "xl";
	fullscreen?: true | bootstrapType.viewport;
	centered?: boolean;
	scrollable?: boolean;
	animation?: boolean;

	debug?: boolean;
}

const convert = (attr: Container) => {
	attr.animation ??= true;

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
	constructor(attr: Container); //#2
	constructor(elem: IElem); //#3
	constructor(attr: Container, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}

export const Container = (AttrOrElem?: Container | IElem, Elem?: IElem) =>
	genTagClass<container, Container>(container, AttrOrElem, Elem);
