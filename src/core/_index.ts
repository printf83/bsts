import { manageClass, addClassIntoElement } from "./util/addClassIntoElement.js";
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
} from "./util/removePopoup.js";

import { camel2Dash } from "./util/camel2Dash.js";
import { documentReady } from "./documentReady.js";
import { elemInfo } from "./util/elemInfo.js";
import { ElementWithAbortController, addEvent, removeEvent } from "./util/eventManager.js";
import { placeholder } from "./placeholder.js";
import { keyOfType } from "./util/keyOfType.js";
import { mergeAttr } from "./util/mergeAttr.js";
import { mergeClass } from "./util/mergeClass.js";
import { mergeObject } from "./util/mergeObject.js";
import { removeEmptyArray } from "./util/removeEmptyArray.js";
import { rndBetween } from "./util/rndBetween.js";
import { tag, isAttr, isTag, tagConsArg, tagConsNoElemArg } from "./tag.js";

import { UUID } from "./util/uuid.js";
import { uppercaseFirst } from "./util/uppercaseFirst.js";
import { cancelIdleCallback, requestIdleCallback } from "./util/requestIdleCallback.js";
import {
	ElementWithMutationObserver,
	observeMutationObserver,
	disconnectMutationObserver,
} from "./util/mutationObserverManager.js";
import {
	ElementWithResizeObserver,
	observeResizeObserver,
	unobserveResizeObserver,
	disconnectResizeObserver,
} from "./util/resizeObserverManager.js";

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

import * as dataManager from "./util/dataManager.js";

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

import { attr } from "../interface/core/attr.js";
import { elem } from "../interface/core/elem.js";
import { bsType } from "../interface/core/bsType.js";
import { bstsType } from "../interface/core/bstsType.js";
import { bsClass } from "../interface/core/bsClass.js";

export { attr, elem, bsType, bstsType, bsClass };
