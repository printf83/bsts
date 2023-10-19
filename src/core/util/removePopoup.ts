import * as modalFn from "../../bootstrap/modal/_fn.js";
import * as toastFn from "../../bootstrap/toast/_fn.js";

export const removeAllActivePopup = () => {
	removeActiveTooltip();
	removeActivePopover();
	removeActiveModal();
	removeActiveToast();
};

export const removeActiveTooltip = () => {
	const elem = document.getElementsByClassName("tooltip show");
	if (elem && elem.length > 0) Array.from(elem).forEach((i) => i.remove());
};

export const removeActivePopover = () => {
	const elem = document.getElementsByClassName("popover show");
	if (elem && elem.length > 0) Array.from(elem).forEach((i) => i.remove());
};

export const removeActiveModal = () => {
	const elem = document.getElementsByClassName("modal show");
	if (elem && elem.length > 0) Array.from(elem).forEach((i) => modalFn.hide(i));
};

export const removeActiveToast = () => {
	const elem = document.getElementsByClassName("toast show");
	if (elem && elem.length > 0) Array.from(elem).forEach((i) => toastFn.hide(i));
};
