"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachBSTSClass = void 0;
const addClassIntoElement_js_1 = require("./addClassIntoElement.js");
const keyOfType_js_1 = require("./keyOfType.js");
const bootstrap_js_1 = require("./bootstrap.js");
var bstsTypeA;
(function (bstsTypeA) {
    const ROTATE = [45, 90, 135, 180, 225, 270, 315];
    const REPEAT = [1, 2, 3, 5, 10];
    //this from bootstrapA
    const COLOR = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
    const BODYCOLOR = ["body", "body-secondary", "body-tertiary"];
    const OTHERCOLOR = ["white", "black"];
    const BODYTEXTCOLOR = [...BODYCOLOR, ...OTHERCOLOR, "body-emphasis"];
    //---------------------
    //transform
    bstsTypeA.rotate = [...ROTATE, ...ROTATE.map((i) => `${i}`)];
    bstsTypeA.flip = ["horizontal", "vertical", "both"];
    //animate
    bstsTypeA.animate = [
        "rotation",
        "sidetoside",
        "zoom-in",
        "zoom-out",
        "spin",
        "pulse",
        "shake",
        "barrel-roll",
        "floater",
        "wiggle",
        "pound",
        "heartbeat",
        "roller-right",
        "roller-left",
        "slide-down",
        "slide-up",
        "slide-left",
        "slide-right",
        "fade-in",
        "fade-out",
        "rotate-in-right",
        "rotate-in-left",
        "rotate-in",
        "bounce-in",
    ];
    bstsTypeA.animateDuration = [
        "250ms",
        "400ms",
        "500ms",
        "800ms",
        "1s",
        "1500ms",
        "2s",
        "2500ms",
        "3s",
        "4s",
        "5s",
    ];
    bstsTypeA.animateRepeat = [...REPEAT, ...REPEAT.map((i) => `${i}`), "infinite"];
    bstsTypeA.animateDirection = [
        "normal",
        "reverse",
        "alternate",
        "alternate-reverse",
        "normal-reverse",
        "alternate-reverse-normal",
    ];
    bstsTypeA.animateDelay = [...bstsTypeA.animateDuration];
    bstsTypeA.animateFill = ["none", "forwards", "backwards", "both", "none-backward", "both-foward-none"];
    bstsTypeA.animateTiming = ["ease", "ease-in-out", "linear", "zoom", "bounce"];
    //link
    //bsts css
    bstsTypeA.linkNormal = [...COLOR, ...BODYTEXTCOLOR, "link", "transparent"];
    bstsTypeA.linkBorder = bstsTypeA.linkNormal;
    bstsTypeA.linkHover = bstsTypeA.linkNormal;
    bstsTypeA.linkActive = bstsTypeA.linkNormal;
    bstsTypeA.linkActiveBg = bstsTypeA.linkNormal;
    bstsTypeA.linkActiveBorder = bstsTypeA.linkNormal;
    bstsTypeA.linkBg = bstsTypeA.linkNormal;
    bstsTypeA.linkHoverBg = bstsTypeA.linkNormal;
    bstsTypeA.linkHoverBorder = bstsTypeA.linkNormal;
})(bstsTypeA || (bstsTypeA = {}));
const bsClassFormatterDB = {
    rotate: new bootstrap_js_1.bsClassFormatterRule({
        format: "rotate-$1",
        value: bstsTypeA.rotate,
    }),
    flip: new bootstrap_js_1.bsClassFormatterRule({
        format: "flip-$1",
        value: bstsTypeA.flip,
    }),
    //---------------------
    animate: new bootstrap_js_1.bsClassFormatterRule({
        format: "animate-$1",
        value: bstsTypeA.animate,
    }),
    animateDuration: new bootstrap_js_1.bsClassFormatterRule({
        format: "animate-duration-$1",
        value: bstsTypeA.animateDuration,
    }),
    animateRepeat: new bootstrap_js_1.bsClassFormatterRule({
        format: "animate-repeat-$1",
        value: bstsTypeA.animateRepeat,
    }),
    animateDelay: new bootstrap_js_1.bsClassFormatterRule({
        format: "animate-delay-$1",
        value: bstsTypeA.animateDelay,
    }),
    animateFill: new bootstrap_js_1.bsClassFormatterRule({
        format: "animate-fill-$1",
        value: bstsTypeA.animateFill,
    }),
    animateTiming: new bootstrap_js_1.bsClassFormatterRule({
        format: "animate-timing-$1",
        value: bstsTypeA.animateTiming,
    }),
    //---------------------
    linkNormal: new bootstrap_js_1.bsClassFormatterRule({
        format: "link-normal-$1",
        value: bstsTypeA.linkNormal,
    }),
    linkBorder: new bootstrap_js_1.bsClassFormatterRule({
        format: "link-border-$1",
        value: bstsTypeA.linkBorder,
    }),
    linkHover: new bootstrap_js_1.bsClassFormatterRule({
        format: "link-hover-$1",
        value: bstsTypeA.linkHover,
    }),
    linkHoverBorder: new bootstrap_js_1.bsClassFormatterRule({
        format: "link-hover-border-$1",
        value: bstsTypeA.linkHoverBorder,
    }),
    linkActive: new bootstrap_js_1.bsClassFormatterRule({
        format: "link-active-$1",
        value: bstsTypeA.linkActive,
    }),
    linkActiveBg: new bootstrap_js_1.bsClassFormatterRule({
        format: "link-active-bg-$1",
        value: bstsTypeA.linkActiveBg,
    }),
    linkActiveBorder: new bootstrap_js_1.bsClassFormatterRule({
        format: "link-active-border-$1",
        value: bstsTypeA.linkActiveBorder,
    }),
    linkHoverBg: new bootstrap_js_1.bsClassFormatterRule({
        format: "link-hover-bg-$1",
        value: bstsTypeA.linkHoverBg,
    }),
    linkBg: new bootstrap_js_1.bsClassFormatterRule({
        format: "link-bg-$1",
        value: bstsTypeA.linkBg,
    }),
    //---------------------
};
let allowClassProp = [];
var attachBSTSClass;
(function (attachBSTSClass) {
    const allowValue = (valueToCheck, listOfPossible) => {
        if (listOfPossible && listOfPossible.length > 0) {
            return listOfPossible.indexOf(valueToCheck) > -1;
        }
        return false;
    };
    const allowProp = (key) => {
        if (allowClassProp.length === 0) {
            allowClassProp = Object.keys(bsClassFormatterDB);
        }
        if (allowClassProp.indexOf(key) > -1) {
            return key;
        }
        return null;
    };
    const addClass = (rule, data, elem) => {
        if (rule.value && allowValue(data, rule.value)) {
            if (rule.formatValue) {
                elem = (0, addClassIntoElement_js_1.addClassIntoElement)(elem, rule.formatValue);
            }
            if (data === true && rule.formatTrue) {
                elem = (0, addClassIntoElement_js_1.addClassIntoElement)(elem, rule.formatTrue);
            }
            else if (data === false && rule.formatFalse) {
                elem = (0, addClassIntoElement_js_1.addClassIntoElement)(elem, rule.formatFalse);
            }
            else if (rule.format) {
                elem = (0, addClassIntoElement_js_1.addClassIntoElement)(elem, rule.format.replace(/\$1/g, data.toString()));
            }
        }
        return elem;
    };
    attachBSTSClass.attach = (key, elem, attr) => {
        let changed = false;
        let allowKey = allowProp(key);
        if (allowKey) {
            let a = (0, keyOfType_js_1.keyOfType)(key, attr);
            let b = (0, keyOfType_js_1.keyOfType)(allowKey, bsClassFormatterDB);
            let data = [];
            if (!Array.isArray(attr[a])) {
                data = [attr[a]];
            }
            else {
                data = attr[a];
            }
            data.forEach((i) => {
                elem = addClass(bsClassFormatterDB[b], i, elem);
            });
            delete attr[a];
            changed = true;
        }
        return { attr, elem, changed };
    };
})(attachBSTSClass = exports.attachBSTSClass || (exports.attachBSTSClass = {}));
