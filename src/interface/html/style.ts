import { attr } from "../core/attr.js";

export interface style extends attr {
	media?: string;
	type?: "text/css";
}
