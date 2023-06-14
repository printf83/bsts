import * as modalFn from "../bootstrap/modal/_fn.js";
import * as toastFn from "../bootstrap/toast/_fn.js";
import { removeElement } from "./removeElement.js";

export const removeAllActivePopup = () => {
	removeActiveTooltip();
	removeActivePopover();
	removeActiveModal();
	removeActiveToast();
};

export const removeActiveTooltip = () => {
	const elem = document.querySelectorAll("div.tooltip.show");
	elem.forEach((i) => removeElement(i));
};

export const removeActivePopover = () => {
	const elem = document.querySelectorAll("div.popover.show");
	elem.forEach((i) => removeElement(i));
};

export const removeActiveModal = () => {
	const elem = document.querySelectorAll("div.modal.show");
	elem.forEach((i) => {
		modalFn.hide(i);
	});
};

export const removeActiveToast = () => {
	const elem = document.querySelectorAll("div.toast.show");
	elem.forEach((i) => {
		toastFn.hide(i);
	});
};
