import { keyOfType } from "./fn/keyOfType.js";
import { elemInfo } from "./fn/elemInfo.js";
import { mergeAttr } from "./fn/mergeAttr.js";
import { mergeObject } from "./fn/mergeObject.js";
import { mergeClass } from "./fn/mergeClass.js";
import { addEvent, deleteEvent } from "./fn/eventManager.js";
import { removeEmptyArray } from "./fn/removeEmptyArray.js";
import { removeElement } from "./fn/removeElement.js";
import { removeChildElement } from "./fn/removeChildElement.js";
import { isHTML } from "./fn/isHTML.js";
import { eventDB } from "./fn/eventDB.js";
import { extend } from "./fn/extend.js";
import { dash2Camel } from "./fn/dash2Camel.js";
import { combineArray } from "./fn/combineArray.js";
import { camel2Dash } from "./fn/camel2Dash.js";
import { addClassIntoElement } from "./fn/addClassIntoElement.js";
import { capitalize } from "./fn/capitalize.js";
import { codeMarker } from "./fn/codeMarker.js";
import { cookie } from "./fn/cookie.js";
import { getBaseIcon, setBaseIcon } from "./fn/getBaseIcon.js";
import { getCSSVar } from "./fn/getCSSVar.js";
import { isColorDark } from "./fn/isColorDark.js";
import { loadCSS } from "./fn/loadCSS.js";
import { num2En, num2EnTh } from "./fn/num2En.js";
import { randomDB } from "./fn/randomDB.js";
import { rnd } from "./fn/rnd.js";
import { setting } from "./fn/setting.js";
import { shuffleArray } from "./fn/shuffleArray.js";
import { UUID } from "./fn/uuid.js";
import { importJS, importJSPromise } from "./fn/importJS.js";
import { appendChild, build, html, prependChild, replaceChild, replaceWith } from "./fn/builder.js";
import { documentReady, elemReady } from "./fn/documentReady.js";
import { attachAttr } from "./attach/_index.js";
import { isTag } from "./base/tag.js";

export const core = {
	addClassIntoElement,
	camel2Dash,
	capitalize,
	codeMarker,
	combineArray,
	cookie,
	dash2Camel,
	addEvent,
	deleteEvent,
	documentReady,
	elemInfo,
	elemReady,
	eventDB,
	extend,
	getBaseIcon,
	setBaseIcon,
	getCSSVar,
	importJS,
	importJSPromise,
	isColorDark,
	isHTML,
	isTag,
	keyOfType,
	loadCSS,
	mergeClass,
	mergeObject,
	mergeAttr,
	num2En,
	num2EnTh,
	randomDB,
	removeChildElement,
	removeElement,
	removeEmptyArray,
	rnd,
	setting,
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
