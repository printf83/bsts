import { IAttr, IElem } from "../../core/tag.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { mergeObject } from "../../core/mergeObject.js";
import { div } from "../../html/div.js";

export type IAttrBSToastContainerPlacement =
	| "top-start"
	| "top-center"
	| "top-end"
	| "middle-start"
	| "middle-center"
	| "middle-end"
	| "bottom-start"
	| "bottom-center"
	| "bottom-end";

export interface IAttrBSToastContainer extends IAttr {
	debug?: boolean;
	placement?: IAttrBSToastContainerPlacement;
}

const convert = (attr: IAttrBSToastContainer) => {
	let placementAttr: IAttr = {};
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
	return attr;
};

export class container extends div {
	constructor(); //#1
	constructor(attr: IAttrBSToastContainer); //#2
	constructor(elem: IElem); //#3
	constructor(attr: IAttrBSToastContainer, elem: IElem); //#4
	constructor(...arg: any[]) {
		super(bsConstArg<IAttrBSToastContainer>("elem", convert, arg));
	}
}
