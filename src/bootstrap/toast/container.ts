import { attr } from "../../interface/core/attr.js";
import { elem } from "../../interface/core/elem.js";
import { bsConstructor } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/util/mergeObject.js";
import { div } from "../../html/div.js";
import { container as Container } from "../../interface/bootstrap/toast/container.js";

export class container extends div {
	constructor();
	constructor(attr: Container);
	constructor(elem: elem | elem[]);
	constructor(attr: Container, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super(bsConstructor<Container>("elem", arg));
	}

	convert(attr: Container) {
		let placementAttr: attr = {};
		attr.placement ??= "top-end";

		switch (attr.placement) {
			case "top-start":
				placementAttr = { top: 0, start: 0 };
				break;
			case "top-center":
				placementAttr = { top: 0, start: 50, tMiddle: "x" };
				break;
			case "top-end":
				placementAttr = { top: 0, end: 0 };
				break;

			case "middle-start":
				placementAttr = { top: 50, start: 0, tMiddle: "y" };
				break;
			case "middle-center":
				placementAttr = { top: 50, start: 50, tMiddle: true };
				break;
			case "middle-end":
				placementAttr = { top: 50, end: 0, tMiddle: "y" };
				break;

			case "bottom-start":
				placementAttr = { bottom: 0, start: 0 };
				break;
			case "bottom-center":
				placementAttr = { bottom: 0, start: 50, tMiddle: "x" };
				break;
			case "bottom-end":
				placementAttr = { bottom: 0, end: 0 };
				break;
		}

		attr = mergeObject(
			{ class: ["toast-container", attr.debug ? "debug" : undefined], padding: 3, position: "fixed" },
			attr
		);

		attr = mergeObject(placementAttr, attr);

		delete attr.debug;
		delete attr.placement;
		return super.convert(attr);
	}
}
