import { attachAttr } from "./base/index.js";
import { elemInfo } from "./fn/elemInfo.js";
import { multiClass } from "./fn/multiClass.js";
import { mergeStyle } from "./fn/mergeStyle.js";
import { mergeObject } from "./fn/mergeObject.js";
import { mergeClass } from "./fn/mergeClass.js";
import { setupEventListenerRemover } from "./fn/setupEventListenerRemover.js";
import { removeEmptyArray } from "./fn/removeEmptyArray.js";
import { removeElement } from "./fn/removeElement.js";
import { removeChildElement } from "./fn/removeChildElement.js";
import { multipleConstructorClass } from "./fn/multipleConstructorClass.js";
import { isHTML } from "./fn/isHTML.js";
import { genClassList } from "./fn/genClassList.js";
import { eventDB } from "./fn/eventDB.js";
import { extend } from "./fn/extend.js";
import { deleteEventListener } from "./fn/deleteEventListener.js";
import { dash2Camel } from "./fn/dash2Camel.js";
import { combineArray } from "./fn/combineArray.js";
import { camel2Dash } from "./fn/camel2Dash.js";
import { addIntoClassList } from "./fn/addIntoClassList.js";
import { capitalize } from "./fn/capitalize.js";
import { codeMarker } from "./fn/codeMarker.js";
import { cookie } from "./fn/cookie.js";
import { detachEventListener } from "./fn/detachEventListener.js";
import { getBaseIcon } from "./fn/getBaseIcon.js";
import { getCSSVar } from "./fn/getCSSVar.js";
import { isColorDark } from "./fn/isColorDark.js";
import { loadCSS } from "./fn/loadCSS.js";
import { num2En } from "./fn/num2En.js";
import { num2EnTh } from "./fn/num2EnTh.js";
import { randomDB } from "./fn/randomDB.js";
import { rnd } from "./fn/rnd.js";
import { setting } from "./fn/setting.js";
import { shuffleArray } from "./fn/shuffleArray.js";
import { UUID } from "./fn/uuid.js";
import { importJS } from "./fn/importJS.js";
import { importJSPromise } from "./fn/importJSPromise.js";
import { appendChild, build, html, prependChild, replaceChild, replaceWith } from "./fn/builder.js";
import { isTag } from "../tag/index.js";

export const core = {
	addIntoClassList,
	camel2Dash,
	capitalize,
	codeMarker,
	combineArray,
	cookie,
	dash2Camel,
	deleteEventListener,
	detachEventListener,
	elemInfo,
	eventDB,
	extend,
	genClassList,
	getBaseIcon,
	getCSSVar,
	importJS,
	importJSPromise,
	isColorDark,
	isHTML,
	isTag,
	loadCSS,
	mergeClass,
	mergeObject,
	mergeStyle,
	multiClass,
	multipleConstructorClass,
	num2En,
	num2EnTh,
	randomDB,
	removeChildElement,
	removeElement,
	removeEmptyArray,
	rnd,
	setting,
	setupEventListenerRemover,
	shuffleArray,
	UUID,
	attachAttr,
	html,
	build,
	appendChild,
	prependChild,
	replaceChild,
	replaceWith,
};
