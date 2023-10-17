import { tagConsNoElemArg, tag } from "../core/tag.js";
import { link as Link } from "../interface/html/link.js";

export class link extends tag {
	constructor();
	constructor(attr: Link);
	constructor(...arg: any[]) {
		super("link", tagConsNoElemArg<Link>(arg));
	}
}
