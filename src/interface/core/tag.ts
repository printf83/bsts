import { attr } from "./attr.js";
import { elem } from "./elem.js";

export interface tag {
	tag: string;
	elem?: elem | elem[];
	attr?: attr;
}
