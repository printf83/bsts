import { manageClass, addClassIntoElement } from "./addClassIntoElement.js";
import { bootstrapType, Attr, Class, bsConsNoElemArg, bsConstArg, bsConstArgTag } from "./bootstrap.js";
import { build, getNode, getHtml, appendChild, prependChild, replaceChild, replaceWith } from "./builder.js";
import { init, initCarousel, initPopover, initScrollSpy, initTimer, initTooltip } from "./init.js";

import {
	removeAllActivePopup,
	removeActiveModal,
	removeActivePopover,
	removeActiveToast,
	removeActiveTooltip,
} from "./removePopoup.js";

import { camel2Dash } from "./camel2Dash.js";
import { elemReady, documentReady } from "./documentReady.js";
import { elemInfo } from "./elemInfo.js";
import { ElementWithAbortController, addEvent, removeEvent } from "./eventManager.js";
import { placeholder } from "./placeholder.js";
import { keyOfType } from "./keyOfType.js";
import { mergeAttr } from "./mergeAttr.js";
import { mergeClass } from "./mergeClass.js";
import { mergeObject } from "./mergeObject.js";
import { removeChildElement } from "./removeChildElement.js";
import { removeElement } from "./removeElement.js";
import { removeEmptyArray } from "./removeEmptyArray.js";
import { rndBetween } from "./rndBetween.js";
import {
	tag,
	IAria,
	IAttr,
	IData,
	IElem,
	IEvent,
	IGlobal,
	IStyle,
	ITag,
	isAttr,
	isTag,
	tagConsArg,
	tagConsNoElemArg,
	genTagClass,
} from "./tag.js";

import { UUID } from "./uuid.js";
import { uppercaseFirst } from "./uppercaseFirst.js";

export {
	manageClass,
	addClassIntoElement,
	bootstrapType,
	Attr,
	Class,
	bsConsNoElemArg,
	bsConstArg,
	bsConstArgTag,
	init,
	initCarousel,
	initPopover,
	initScrollSpy,
	initTimer,
	initTooltip,
	build,
	getNode,
	getHtml,
	appendChild,
	prependChild,
	replaceChild,
	replaceWith,
	removeAllActivePopup,
	removeActiveModal,
	removeActivePopover,
	removeActiveToast,
	removeActiveTooltip,
	camel2Dash,
	elemReady,
	documentReady,
	ElementWithAbortController,
	addEvent,
	removeEvent,
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
	IData,
	IElem,
	IEvent,
	IGlobal,
	IStyle,
	ITag,
	isAttr,
	isTag,
	tagConsArg,
	tagConsNoElemArg,
	genTagClass,
	UUID,
	uppercaseFirst,
	rndBetween,
	placeholder,
	elemInfo,
};
