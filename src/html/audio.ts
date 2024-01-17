import { tagConstructor, tag } from "../core/tag.js";
import { elem } from "../interface/core/elem.js";
import { audio as Audio } from "../interface/html/audio.js";

/**
 * Defines the audio HTML element as a class extending tag.
 * Allows creating audio elements through a class interface.
 */
export class audio extends tag {
	constructor();
	constructor(attr: Audio);
	constructor(elem: elem | elem[]);
	constructor(attr: Audio, elem: elem | elem[]);

	constructor(...arg: any[]) {
		super("audio", tagConstructor("elem", arg));
	}
}
