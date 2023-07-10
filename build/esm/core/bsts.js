import { addClassIntoElement } from "./addClassIntoElement.js";
import { keyOfType } from "./keyOfType.js";
import { bsClassFormatterRule } from "./bootstrap.js";
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
    rotate: new bsClassFormatterRule({
        format: "rotate-$1",
        value: bstsTypeA.rotate,
    }),
    flip: new bsClassFormatterRule({
        format: "flip-$1",
        value: bstsTypeA.flip,
    }),
    //---------------------
    animate: new bsClassFormatterRule({
        format: "animate-$1",
        value: bstsTypeA.animate,
    }),
    animateDuration: new bsClassFormatterRule({
        format: "animate-duration-$1",
        value: bstsTypeA.animateDuration,
    }),
    animateRepeat: new bsClassFormatterRule({
        format: "animate-repeat-$1",
        value: bstsTypeA.animateRepeat,
    }),
    animateDelay: new bsClassFormatterRule({
        format: "animate-delay-$1",
        value: bstsTypeA.animateDelay,
    }),
    animateFill: new bsClassFormatterRule({
        format: "animate-fill-$1",
        value: bstsTypeA.animateFill,
    }),
    animateTiming: new bsClassFormatterRule({
        format: "animate-timing-$1",
        value: bstsTypeA.animateTiming,
    }),
    //---------------------
    linkNormal: new bsClassFormatterRule({
        format: "link-normal-$1",
        value: bstsTypeA.linkNormal,
    }),
    linkBorder: new bsClassFormatterRule({
        format: "link-border-$1",
        value: bstsTypeA.linkBorder,
    }),
    linkHover: new bsClassFormatterRule({
        format: "link-hover-$1",
        value: bstsTypeA.linkHover,
    }),
    linkHoverBorder: new bsClassFormatterRule({
        format: "link-hover-border-$1",
        value: bstsTypeA.linkHoverBorder,
    }),
    linkActive: new bsClassFormatterRule({
        format: "link-active-$1",
        value: bstsTypeA.linkActive,
    }),
    linkActiveBg: new bsClassFormatterRule({
        format: "link-active-bg-$1",
        value: bstsTypeA.linkActiveBg,
    }),
    linkActiveBorder: new bsClassFormatterRule({
        format: "link-active-border-$1",
        value: bstsTypeA.linkActiveBorder,
    }),
    linkHoverBg: new bsClassFormatterRule({
        format: "link-hover-bg-$1",
        value: bstsTypeA.linkHoverBg,
    }),
    linkBg: new bsClassFormatterRule({
        format: "link-bg-$1",
        value: bstsTypeA.linkBg,
    }),
    //---------------------
};
let allowClassProp = [];
export var attachBSTSClass;
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
                elem = addClassIntoElement(elem, rule.formatValue);
            }
            if (data === true && rule.formatTrue) {
                elem = addClassIntoElement(elem, rule.formatTrue);
            }
            else if (data === false && rule.formatFalse) {
                elem = addClassIntoElement(elem, rule.formatFalse);
            }
            else if (rule.format) {
                elem = addClassIntoElement(elem, rule.format.replace(/\$1/g, data.toString()));
            }
        }
        return elem;
    };
    attachBSTSClass.attach = (key, elem, attr) => {
        let changed = false;
        let allowKey = allowProp(key);
        if (allowKey) {
            let a = keyOfType(key, attr);
            let b = keyOfType(allowKey, bsClassFormatterDB);
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
})(attachBSTSClass || (attachBSTSClass = {}));
