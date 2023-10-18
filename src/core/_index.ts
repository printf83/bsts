import { manageClass, addClassIntoElement } from "./addClassIntoElement.js";
import { bsConsNoElemArg, bsConstArg, bsConstArgTag } from "./bootstrap.js";

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
import { tag, isAttr, isTag, tagConsArg, tagConsNoElemArg } from "./tag.js";

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

import {
	setCSSVar,
	getCSSVar,
	getCSSVarHexColor,
	getCSSVarRgbColor,
	getCSSVarRgb,
	hexIsDark,
	hexToHSL,
	hslToRGB,
	hslToHex,
	RGBToHex,
	hexToRGB,
	varToHexColor,
	varToRgb,
	varToRgbColor,
} from "./CSSVar.js";

import * as accentColor from "./accentColor.js";

import * as dataManager from "./dataManager.js";

export {
	accentColor,
	setCSSVar,
	getCSSVar,
	getCSSVarHexColor,
	getCSSVarRgbColor,
	getCSSVarRgb,
	hexIsDark,
	hexToHSL,
	hslToRGB,
	hslToHex,
	RGBToHex,
	hexToRGB,
	varToHexColor,
	varToRgb,
	varToRgbColor,
	dataManager,
	ElementWithMutationObserver,
	observeMutationObserver,
	disconnectMutationObserver,
	ElementWithResizeObserver,
	observeResizeObserver,
	unobserveResizeObserver,
	disconnectResizeObserver,
	manageClass,
	addClassIntoElement,
	bsConsNoElemArg,
	bsConstArg,
	bsConstArgTag,
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
	isAttr,
	isTag,
	tagConsArg,
	tagConsNoElemArg,
	UUID,
	uppercaseFirst,
	rndBetween,
	placeholder,
	elemInfo,
};
