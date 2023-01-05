import { bsType } from "../core/base/attachBootstrap.js";
import { baseAttr } from "../core/base/index.js";
import { mergeObject } from "../core/fn/mergeObject.js";
import { div } from "./div.js";
import { tag } from "./index.js";

export class divCol extends div {
	constructor(
		public col: typeof bsType.col[number],
		public elem?: string | tag | (string | tag)[],
		public attr?: baseAttr
	) {
		attr = mergeObject(attr, { col: col });

		super(elem, attr);
	}
}
