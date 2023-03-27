import { init, appendChild, prependChild, replaceChild, replaceWith } from "./builder.js";
import { documentReady } from "./documentReady.js";
import { mergeAttr } from "./mergeAttr.js";
import { mergeClass } from "./mergeClass.js";
import { mergeObject } from "./mergeObject.js";
import { removeElement } from "./removeElement.js";
import { UUID } from "./uuid.js";

export const core = {
	documentReady,
	removeElement,
	UUID,
	init,
	appendChild,
	prependChild,
	replaceChild,
	replaceWith,
	mergeAttr,
	mergeClass,
	mergeObject,
};
