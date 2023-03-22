import { IAttr } from "../../../src/core/base/tag.js";
import { bsConsNoElemArg } from "../../../src/core/base/bootstrap.js";
import { div } from "../../../src/html/div.js";
import { card } from "../../../src/bootstrap/card/_index.js";
import { preview } from "./preview.js";
import { a } from "../../../src/html/a.js";
import { icon } from "../../../src/bootstrap/icon.js";
import { tooltip } from "../../../src/bootstrap/tooltip.js";
import { span } from "../../../src/html/span.js";

function itemCodeCopy(e: Event) {
	e.stopPropagation();
	e.preventDefault();

	return false;
}

export interface IAttrBSExampleCodepreview extends IAttr {
	code?: string;
	type?: "js" | "ts" | "css" | "html";
}

const convert = (attr: IAttrBSExampleCodepreview): IAttr => {
	if (attr.code) {
		attr.elem = [
			new card.container({ class: "example", marginY: 3, bgColor: "body-tertiary", border: false }, [
				new card.body([
					new span(
						{ position: "absolute", end: 0, marginEnd: 3 },
						new tooltip(
							{ content: "Copy to clipboard" },
							new a({ href: "#", color: "secondary", on: { click: itemCodeCopy } }, icon.reg("clipboard"))
						)
					),
					new preview({ type: attr.type ? attr.type : "js" }, attr.code),
				]),
			]),
		];
	}

	delete attr.code;
	delete attr.type;

	return attr;
};

export class codepreview extends div {
	constructor();
	constructor(attr: IAttrBSExampleCodepreview);
	constructor(...arg: any[]) {
		super(bsConsNoElemArg<IAttrBSExampleCodepreview>(convert, arg));
	}
}
