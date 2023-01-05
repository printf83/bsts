import { baseAttr } from "../core/base/index.js";
import { tag } from "./index.js";

export class span extends tag {
	constructor(public elem?: string | tag | (string | tag)[], public attr?: baseAttr) {
		super("span", elem, attr);
	}
}
