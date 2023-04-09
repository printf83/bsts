import { manageClass, addClassIntoElement } from "./addClassIntoElement.js";
import {
	bootstrapBase,
	bootstrapType,
	IBootstrapAttachRule,
	bootstrapAttachRule,
	bootstrapRuleDB,
	isBootstrapType,
	bsConsNoElemArg,
	bsConstArg,
	bsConstArgTag,
} from "./bootstrap.js";
import {
	init,
	build,
	node,
	html,
	appendChild,
	prependChild,
	replaceChild,
	replaceWith,
	removeActiveModal,
	removeActivePopover,
	removeActiveToast,
	removeActiveTooltip,
} from "./builder.js";
import { camel2Dash } from "./camel2Dash.js";
import { elemReady, documentReady } from "./documentReady.js";
import { IDEventDB, HTMLElementWithEventDB, addEvent, deleteEvent } from "./eventManager.js";
import { keyOfType } from "./keyOfType.js";
import { mergeAttr } from "./mergeAttr.js";
import { mergeClass } from "./mergeClass.js";
import { mergeObject } from "./mergeObject.js";
import { removeChildElement } from "./removeChildElement.js";
import { removeElement } from "./removeElement.js";
import { removeEmptyArray } from "./removeEmptyArray.js";
import {
	tag,
	IAria,
	IAttr,
	IBootstrap,
	IData,
	IElem,
	IEvent,
	IGlobal,
	IGlobalAria,
	IStyle,
	ITag,
	isAttr,
	isTag,
	tagConsArg,
	tagConsNoElemArg,
} from "./tag.js";

import { UUID } from "./uuid.js";

export {
	manageClass,
	addClassIntoElement,
	bootstrapBase,
	bootstrapType,
	IBootstrapAttachRule,
	bootstrapAttachRule,
	bootstrapRuleDB,
	isBootstrapType,
	bsConsNoElemArg,
	bsConstArg,
	bsConstArgTag,
	init,
	build,
	node,
	html,
	appendChild,
	prependChild,
	replaceChild,
	replaceWith,
	removeActiveModal,
	removeActivePopover,
	removeActiveToast,
	removeActiveTooltip,
	camel2Dash,
	elemReady,
	documentReady,
	IDEventDB,
	HTMLElementWithEventDB,
	addEvent,
	deleteEvent,
	keyOfType,
	mergeAttr,
	mergeClass,
	mergeObject,
	removeChildElement,
	removeElement,
	removeEmptyArray,
	tag,
	IAria,
	IAttr,
	IBootstrap,
	IData,
	IElem,
	IEvent,
	IGlobal,
	IGlobalAria,
	IStyle,
	ITag,
	isAttr,
	isTag,
	tagConsArg,
	tagConsNoElemArg,
	UUID,
};
