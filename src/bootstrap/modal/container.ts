import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr, IElem, genTagClass } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { UUID } from "../../core/uuid.js";
import { div } from "../../html/div.js";

export interface Container extends IAttr {
	backdrop?: boolean | "static";
	focus?: boolean;
	keyboard?: boolean;

	weight?: "sm" | "lg" | "xl";
	fullscreen?: true | bootstrapType.viewport;
	centered?: boolean;
	scrollable?: boolean;
	animation?: boolean;

	debug?: boolean;
}

const convert = (attr: Container) => {
	attr.animation ??= true;
	attr.keyboard ??= attr.backdrop === "static" ? false : undefined;

	attr = mergeObject(
		{
			id: attr.id || UUID(),
			class: ["modal", attr.animation && !attr.debug ? "fade" : undefined, attr.debug ? "debug" : undefined],
			tabindex: "-1",
			data: {
				"bs-backdrop": attr.backdrop,
				"bs-keyboard": attr.keyboard,
				"bs-focus": attr.focus,
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

	delete attr.backdrop;
	delete attr.animation;
	delete attr.debug;

	return attr;
};

export class container extends div {
	constructor();
	constructor(attr: Container);
	constructor(elem: IElem);
	constructor(attr: Container, elem: IElem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}

export const Container = (AttrOrElem?: Container | IElem, Elem?: IElem) =>
	genTagClass<container, Container>(container, AttrOrElem, Elem);
