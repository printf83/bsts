import { tagConsArg, IElem, tag } from "../core/tag.js";
import { video as Video } from "../interface/html/video.js";

export class video extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: Video);
	constructor(attr: Video, elem: IElem);
	constructor(...arg: any[]) {
		super("video", tagConsArg<Video>("elem", arg));
	}
}
