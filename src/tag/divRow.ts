import { baseAttr, baseElem } from "../core/base/index.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { div } from "./div.js";

export class divRow extends div {
	constructor(public elem?: baseElem, public attr?: baseAttr) {
		attr = mergeObject(attr, { row: true });

		super(elem, attr);
	}
}
