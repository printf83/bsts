import { IAttr, IElem } from "../core/base/index.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { div } from "./div.js";

export class divRow extends div {
	constructor(public elem?: IElem, public attr?: IAttr) {
		if (typeof attr !== "undefined") {
			attr = mergeObject(attr, { row: true });
		} else {
			attr = { row: true };
		}

		super(elem, attr);
	}
}
