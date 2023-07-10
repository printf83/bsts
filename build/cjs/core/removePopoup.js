"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeActiveToast = exports.removeActiveModal = exports.removeActivePopover = exports.removeActiveTooltip = exports.removeAllActivePopup = void 0;
const modalFn = __importStar(require("../bootstrap/modal/_fn.js"));
const toastFn = __importStar(require("../bootstrap/toast/_fn.js"));
const removeAllActivePopup = () => {
    (0, exports.removeActiveTooltip)();
    (0, exports.removeActivePopover)();
    (0, exports.removeActiveModal)();
    (0, exports.removeActiveToast)();
};
exports.removeAllActivePopup = removeAllActivePopup;
const removeActiveTooltip = () => {
    const elem = document.getElementsByClassName("tooltip show");
    if (elem && elem.length > 0)
        Array.from(elem).forEach((i) => i.remove());
};
exports.removeActiveTooltip = removeActiveTooltip;
const removeActivePopover = () => {
    const elem = document.getElementsByClassName("popover show");
    if (elem && elem.length > 0)
        Array.from(elem).forEach((i) => i.remove());
};
exports.removeActivePopover = removeActivePopover;
const removeActiveModal = () => {
    const elem = document.getElementsByClassName("modal show");
    if (elem && elem.length > 0)
        Array.from(elem).forEach((i) => modalFn.hide(i));
};
exports.removeActiveModal = removeActiveModal;
const removeActiveToast = () => {
    const elem = document.getElementsByClassName("toast show");
    if (elem && elem.length > 0)
        Array.from(elem).forEach((i) => toastFn.hide(i));
};
exports.removeActiveToast = removeActiveToast;
