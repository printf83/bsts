import { tagConsArg, IElem, tag } from "../core/tag.js";
import { blockquote as Blockquote } from "../interface/html/blockquote.js";

export class blockquote extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Blockquote);
	constructor(attr: Blockquote, elem: IElem);
	constructor(...arg: any[]) {
		super("blockquote", tagConsArg<Blockquote>("elem", arg));
	}
}
