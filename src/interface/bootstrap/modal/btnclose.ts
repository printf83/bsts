import { btnclose as IBtnclose } from "../btnclose.js";

export interface btnclose extends IBtnclose {
	dismiss?: "modal";
	target?: string;
}
