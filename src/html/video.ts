import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { video as Video } from "../interface/html/video.js";

export class video extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Video);
	constructor(attr: Video, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("video", tagConstructor<Video>("elem", arg));
	}
}
