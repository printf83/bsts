import { IAttr } from "../../core/tag.js";

export interface source extends IAttr {
	media?: string;
	sizes?: string;
	src?: string;
	srcset?: string;
	type?: string;

	elem?: undefined;
}
