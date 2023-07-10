import { manageClass, addClassIntoElement } from "./addClassIntoElement.js";
import { bootstrapType, Attr, Class, bsConsNoElemArg, bsConstArg, bsConstArgTag } from "./bootstrap.js";
import { bstsType, IAnimate, ITransform, ILink, IBsts } from "./bsts.js";

import {
	build,
	getNode,
	getHtml,
	appendChild,
	prependChild,
	replaceChild,
	replaceWith,
	removeElement,
} from "./builder.js";

import {
	removeAllActivePopup,
	removeActiveModal,
	removeActivePopover,
	removeActiveToast,
	removeActiveTooltip,
} from "./removePopoup.js";

import { camel2Dash } from "./camel2Dash.js";
import { documentReady } from "./documentReady.js";
import { elemInfo } from "./elemInfo.js";
import { ElementWithAbortController, addEvent, removeEvent } from "./eventManager.js";
import { placeholder } from "./placeholder.js";
import { keyOfType } from "./keyOfType.js";
import { mergeAttr } from "./mergeAttr.js";
import { mergeClass } from "./mergeClass.js";
import { mergeObject } from "./mergeObject.js";
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
import { cancelIdleCallback, requestIdleCallback } from "./requestIdleCallback.js";
import {
	ElementWithMutationObserver,
	observeMutationObserver,
	disconnectMutationObserver,
} from "./mutationObserverManager.js";
import {
	ElementWithResizeObserver,
	observeResizeObserver,
	unobserveResizeObserver,
	disconnectResizeObserver,
} from "./resizeObserverManager.js";

export {
	ElementWithMutationObserver,
	observeMutationObserver,
	disconnectMutationObserver,
	ElementWithResizeObserver,
	observeResizeObserver,
	unobserveResizeObserver,
	disconnectResizeObserver,
	manageClass,
	addClassIntoElement,
	bootstrapType,
	Attr,
	Class,
	bsConsNoElemArg,
	bsConstArg,
	bsConstArgTag,
	bstsType,
	IAnimate,
	ITransform,
	ILink,
	IBsts,
	build,
	getNode,
	getHtml,
	appendChild,
	prependChild,
	replaceChild,
	replaceWith,
	removeElement,
	removeAllActivePopup,
	removeActiveModal,
	removeActivePopover,
	removeActiveToast,
	removeActiveTooltip,
	camel2Dash,
	documentReady,
	ElementWithAbortController,
	addEvent,
	removeEvent,
	keyOfType,
	mergeAttr,
	mergeClass,
	mergeObject,
	removeEmptyArray,
	requestIdleCallback,
	cancelIdleCallback,
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
