import { isTypeOf } from './fn/isTypeOf';
import { attachAttr } from './base/index';
import { elemInfo } from './fn/elemInfo';
import { multiClass } from './fn/multiClass';
import { mergeStyle } from './fn/mergeStyle';
import { mergeObject } from './fn/mergeObject';
import { mergeClass } from './fn/mergeClass';
import { setupEventListenerRemover } from './fn/setupEventListenerRemover';
import { removeEmptyArray } from './fn/removeEmptyArray';
import { removeElement } from './fn/removeElement';
import { removeChildElement } from './fn/removeChildElement';
import { multipleConstructorClass } from './fn/multipleConstructorClass';
import { isHTML } from './fn/isHTML';
import { genClassList } from './fn/genClassList';
import { eventDB } from './fn/eventDB';
import { extend  } from './fn/extend.js';
import { deleteEventListener } from './fn/deleteEventListener';
import { dash2Camel } from 'src/core/fn/dash2Camel.js';
import { combineArray } from './fn/combineArray';
import { camel2Dash } from 'src/core/fn/camel2Dash.js';
import { addIntoClassList } from 'src/core/fn/addIntoClassList.js';
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
import { importJS } from './fn/importJS.js';
import { importJSPromise } from './fn/importJSPromise.js';
import { appendChild, build, html, prependChild, replaceChild, replaceWith } from './fn/builder.js';

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
    isTypeOf,
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
}



