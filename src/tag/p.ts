import { baseAttr } from "../core/base/index.js";
import { tag } from "./index.js";

export class p extends tag {
	constructor(public elem?: string | tag | (string | tag)[], public attr?: baseAttr) {
		super("p", elem, attr);
	}
}
