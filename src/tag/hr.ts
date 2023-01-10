import { baseAttr } from "../core/base/index.js";
import { tag } from "./index.js";

export class hr extends tag {
	constructor(public attr?: baseAttr) {
		super("hr", undefined, attr);
	}
}
