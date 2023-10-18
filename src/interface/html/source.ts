import { attr } from "../core/attr.js";

export interface source extends attr {
	media?: string;
	sizes?: string;
	src?: string;
	srcset?: string;
	type?: string;

	elem?: undefined;
}
