import { bsType } from "../core/base/attachBootstrap.js";
import { baseAttr, baseElem } from "../core/base/index.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { div } from "./div.js";

export class divCol extends div {
	constructor(public col: typeof bsType.col[number], public elem?: baseElem, public attr?: baseAttr) {
		if (typeof attr !== "undefined") {
			attr = mergeObject(attr, { col: col });
		} else {
			attr = { col: col };
		}

		super(elem, attr);
	}
}
