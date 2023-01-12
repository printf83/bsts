import { IAttr, IElem, tag } from "../core/attach/_index.js";

export interface IAttrTagTrack extends IAttr {
	default?: boolean;
	kind?: "captions" | "chapters" | "descriptions" | "metadata" | "subtitles";
	label?: string;
	src?: string;
	srclang?: string;
}

export class track extends tag {
	constructor();
	constructor(elem: IElem);
	constructor(attr: IAttrTagTrack, elem: IElem);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("track");
		} else if (arg.length === 1) {
			super("track", undefined, arg[0]);
		} else if (arg.length === 2) {
			super("track", arg[0], arg[1]);
		}
	}
}
