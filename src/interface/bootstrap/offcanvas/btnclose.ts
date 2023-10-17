import { btnclose as IBtnclose } from "../btnclose.js";

export interface btnclose extends IBtnclose {
	dismiss?: "offcanvas";
	target?: string;
}
