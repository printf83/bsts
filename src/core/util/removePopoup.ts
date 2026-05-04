import * as modalFn from "../../bootstrap/modal/_fn.js";
import * as toastFn from "../../bootstrap/toast/_fn.js";

const removeActive = (selector: string, action: (element: Element) => void = (element) => element.remove()) => {
	document.querySelectorAll(selector).forEach(action);
};

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
export const removeActiveTooltip = () => removeActive(".tooltip.show");

/**
 * Removes any active popovers from the DOM.
 * Looks for elements with class "popover show" and removes them.
 */
export const removeActivePopover = () => removeActive(".popover.show");

/**
 * Removes any active modals from the DOM.
 * Looks for elements with class "modal show" and removes them by calling modalFn.hide().
 */
export const removeActiveModal = () => removeActive(".modal.show", modalFn.hide);

/**
 * Removes any active toasts from the DOM.
 * Looks for elements with class "toast show" and removes them by calling toastFn.hide().
 */
export const removeActiveToast = () => removeActive(".toast.show", toastFn.hide);
