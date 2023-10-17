import { tagConsArg, IElem, tag } from "../core/tag.js";
import { audio as Audio } from "../interface/html/audio.js";

export class audio extends tag {
	constructor();
	constructor(attr: Audio);
	constructor(elem: IElem);
	constructor(attr: Audio, elem: IElem);

	constructor(...arg: any[]) {
		super("audio", tagConsArg("elem", arg));
	}
}
