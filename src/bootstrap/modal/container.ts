import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { UUID } from "../../core/uuid.js";
import { div } from "../../html/div.js";
import { container as Container } from "../../interface/bootstrap/modal/container.js";

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

	const dialogProp = mergeObject(
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
				attr.view ? "modal-dialog-centered" : undefined,
			],
			display: attr.view === "end" ? "flex" : undefined,
			flex: attr.view === "end" ? "column" : undefined,
			justifyContent: attr.view === "end" ? "end" : undefined,
			role: "document",
		},
		attr.dialogAttr
	);

	const contentProp = mergeObject(
		{
			class: "modal-content",
		},
		attr.contentAttr
	);

	attr.elem = new div(dialogProp, attr.elem ? new div(contentProp, attr.elem) : new div(contentProp));

	delete attr.backdrop;
	delete attr.focus;
	delete attr.keyboard;

	delete attr.weight;
	delete attr.fullscreen;
	delete attr.view;
	delete attr.scrollable;
	delete attr.animation;

	delete attr.dialogAttr;
	delete attr.contentAttr;

	delete attr.debug;

	return attr;
};

export class container extends div {
	constructor();
	constructor(attr: Container);
	constructor(elem: elem);
	constructor(attr: Container, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}
