import * as modalFn from "../../bootstrap/modal/_fn.js";
import * as toastFn from "../../bootstrap/toast/_fn.js";

/**
 * Removes all currently active popups in the DOM by calling the
 * individual popup removal functions. Removes tooltips, popovers,
 * modals and toasts that have the 'show' class.
 */
export const removeAllActivePopup = () => {
	removeActiveTooltip();
	removeActivePopover();
	removeActiveModal();
	removeActiveToast();
};

/**
 * Removes any active tooltips from the DOM.
 * Looks for elements with class "tooltip show" and removes them.
 */
export const removeActiveTooltip = () => {
	const elem = document.getElementsByClassName("tooltip show");
	if (elem && elem.length > 0) Array.from(elem).forEach((i) => i.remove());
};

/**
 * Removes any active popovers from the DOM.
 * Looks for elements with class "popover show" and removes them.
 */
export const removeActivePopover = () => {
	const elem = document.getElementsByClassName("popover show");
	if (elem && elem.length > 0) Array.from(elem).forEach((i) => i.remove());
};

/**
 * Removes any active modals from the DOM.
 * Looks for elements with class "modal show" and removes them by calling modalFn.hide().
 */
export const removeActiveModal = () => {
	const elem = document.getElementsByClassName("modal show");
	if (elem && elem.length > 0) Array.from(elem).forEach((i) => modalFn.hide(i));
};

/**
 * Removes any active toasts from the DOM.
 * Looks for elements with class "toast show" and removes them by calling toastFn.hide().
 */
export const removeActiveToast = () => {
	const elem = document.getElementsByClassName("toast show");
	if (elem && elem.length > 0) Array.from(elem).forEach((i) => toastFn.hide(i));
};
