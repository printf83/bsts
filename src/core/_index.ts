import { bsConsNoElemArg, bsConstArg, bsConstArgTag } from "./bootstrap.js";
import { addClassIntoElement, manageClass } from "./util/addClassIntoElement.js";

import {
	appendChild,
	build,
	getHtml,
	getNode,
	prependChild,
	removeElement,
	replaceChild,
	replaceWith,
} from "./builder.js";

import {
	removeActiveModal,
	removeActivePopover,
	removeActiveToast,
	removeActiveTooltip,
	removeAllActivePopup,
} from "./util/removePopoup.js";

import { documentReady } from "./documentReady.js";
import { placeholder } from "./placeholder.js";
import { isAttr, isTag, tag, tagConsArg, tagConsNoElemArg } from "./tag.js";
import { camel2Dash } from "./util/camel2Dash.js";
import { elemInfo } from "./util/elemInfo.js";
import { ElementWithAbortController, addEvent, removeEvent } from "./util/eventManager.js";
import { keyOfType } from "./util/keyOfType.js";
import { mergeAttr } from "./util/mergeAttr.js";
import { mergeClass } from "./util/mergeClass.js";
import { mergeObject } from "./util/mergeObject.js";
import { removeEmptyArray } from "./util/removeEmptyArray.js";
import { rndBetween } from "./util/rndBetween.js";

import {
	ElementWithMutationObserver,
	disconnectMutationObserver,
	observeMutationObserver,
} from "./util/mutationObserverManager.js";
import { cancelIdleCallback, requestIdleCallback } from "./util/requestIdleCallback.js";
import {
	ElementWithResizeObserver,
	disconnectResizeObserver,
	observeResizeObserver,
	unobserveResizeObserver,
} from "./util/resizeObserverManager.js";
import { uppercaseFirst } from "./util/uppercaseFirst.js";
import { UUID } from "./util/uuid.js";

import {
	RGBToHex,
	getCSSVar,
	getCSSVarHexColor,
	getCSSVarRgb,
	getCSSVarRgbColor,
	hexIsDark,
	hexToHSL,
	hexToRGB,
	hslToHex,
	hslToRGB,
	setCSSVar,
	varToHexColor,
	varToRgb,
	varToRgbColor,
} from "./color/CSSVar.js";

import * as accentColor from "./color/accentColor.js";

import * as dataManager from "./util/dataManager.js";

export {
	ElementWithAbortController,
	ElementWithMutationObserver,
	ElementWithResizeObserver,
	RGBToHex,
	UUID,
	accentColor,
	addClassIntoElement,
	addEvent,
	appendChild,
	bsConsNoElemArg,
	bsConstArg,
	bsConstArgTag,
	build,
	camel2Dash,
	cancelIdleCallback,
	dataManager,
	disconnectMutationObserver,
	disconnectResizeObserver,
	documentReady,
	elemInfo,
	getCSSVar,
	getCSSVarHexColor,
	getCSSVarRgb,
	getCSSVarRgbColor,
	getHtml,
	getNode,
	hexIsDark,
	hexToHSL,
	hexToRGB,
	hslToHex,
	hslToRGB,
	isAttr,
	isHtml,
	isTag,
	keyOfType,
	manageClass,
	mergeAttr,
	mergeClass,
	mergeObject,
	observeMutationObserver,
	observeResizeObserver,
	placeholder,
	prependChild,
	removeActiveModal,
	removeActivePopover,
	removeActiveToast,
	removeActiveTooltip,
	removeAllActivePopup,
	removeElement,
	removeEmptyArray,
	removeEvent,
	replaceChild,
	replaceWith,
	requestIdleCallback,
	rndBetween,
	setCSSVar,
	tag,
	html,
	tagConsArg,
	tagConsNoElemArg,
	unobserveResizeObserver,
	uppercaseFirst,
	varToHexColor,
	varToRgb,
	varToRgbColor,
};

import { attr } from "../interface/core/attr.js";
import { bsClass } from "../interface/core/bsClass.js";
import { bsType } from "../interface/core/bsType.js";
import { bstsType } from "../interface/core/bstsType.js";
import { elem } from "../interface/core/elem.js";
import { html, isHtml } from "./html.js";

export { attr, bsClass, bsType, bstsType, elem };
