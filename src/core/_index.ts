import {
	init,
	appendChild,
	prependChild,
	replaceChild,
	replaceWith,
} from "./fn/builder.js";
import { documentReady } from "./fn/documentReady.js";
import { removeElement } from "./fn/removeElement.js";
import { UUID } from "./fn/uuid.js";

export const core = {
	documentReady,
	removeElement,
	UUID,
	init,
	appendChild,
	prependChild,
	replaceChild,
	replaceWith,
};
