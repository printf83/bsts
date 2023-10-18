import { IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { UUID } from "../../core/uuid.js";
import { div } from "../../html/div.js";
import { container as Container } from "../../interface/bootstrap/offcanvas/container.js";

const convert = (attr: Container) => {
	attr.placement ??= "start";

	attr = mergeObject(
		{
			id: attr.id || UUID(),
			class: [
				attr.show === true ? "show" : undefined,
				attr.show ? (attr.show === true ? "offcanvas" : `offcanvas-${attr.show}`) : "offcanvas",
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
		},
		attr
	);

	delete attr.placement;
	delete attr.dark;
	delete attr.show;
	delete attr.backdrop;
	delete attr.scroll;
	delete attr.labelledby;
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
