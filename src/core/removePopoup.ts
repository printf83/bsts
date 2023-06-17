import * as modalFn from "../bootstrap/modal/_fn.js";
import * as toastFn from "../bootstrap/toast/_fn.js";

export const removeAllActivePopup = () => {
	removeActiveTooltip();
	removeActivePopover();
	removeActiveModal();
	removeActiveToast();
};

export const removeActiveTooltip = () => {
	const elem = document.querySelectorAll("div.tooltip.show");
	if (elem && elem.length > 0) elem.forEach((i) => i.remove());
};

export const removeActivePopover = () => {
	const elem = document.querySelectorAll("div.popover.show");
	if (elem && elem.length > 0) elem.forEach((i) => i.remove());
};

export const removeActiveModal = () => {
	const elem = document.querySelectorAll("div.modal.show");
	if (elem && elem.length > 0) {
		elem.forEach((i) => {
			modalFn.hide(i);
		});
	}
};

export const removeActiveToast = () => {
	const elem = document.querySelectorAll("div.toast.show");
	if (elem && elem.length > 0) {
		elem.forEach((i) => {
			toastFn.hide(i);
		});
	}
};
