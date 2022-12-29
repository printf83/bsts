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
import { extend  } from './fn/extend';
import { deleteEventListener } from './fn/deleteEventListener';
import { dash2Camel } from './fn/dash2Camel';
import { combineArray } from './fn/combineArray';
import { camel2Dash } from './fn/camel2Dash';
import { addIntoClassList } from './fn/addIntoClassList';
import { capitalize } from "./fn/capitalize";
import { codeMarker } from "./fn/codeMarker";
import { cookie } from "./fn/cookie";
import { detachEventListener } from "./fn/detachEventListener";
import { getBaseIcon } from "./fn/getBaseIcon";
import { getCSSVar } from "./fn/getCSSVar";
import { isColorDark } from "./fn/isColorDark";
import { loadCSS } from "./fn/loadCSS";
import { num2En } from "./fn/num2En";
import { num2EnTh } from "./fn/num2EnTh";
import { randomDB } from "./fn/randomDB";
import { rnd } from "./fn/rnd";
import { setting } from "./fn/setting";
import { shuffleArray } from "./fn/shuffleArray";
import { UUID } from "./fn/uuid";
import { importJS } from './fn/importJS';
import { importJSPromise } from './fn/importJSPromise';
import { appendChild, build, html, prependChild, replaceChild, replaceWith } from './fn/builder';

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



