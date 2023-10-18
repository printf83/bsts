import { tag } from "../core/tag.js";
import { embed as Embed } from "../interface/html/embed.js";

export class embed extends tag {
	constructor();
	constructor(type: string, src: string);
	constructor(attr: Embed);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("embed");
		} else if (arg.length === 2) {
			super("embed", { type: arg[0], src: arg[1] } as Embed);
		} else if (arg.length === 1) {
			super("embed", arg[0]);
		}
	}
}
