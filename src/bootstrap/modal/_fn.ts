import { appendChild } from "../../core/builder.js";
import { init as coreInit } from "../../core/init.js";
import { addEvent, ElementWithAbortController } from "../../core/eventManager.js";
import { mergeAttr } from "../../core/mergeAttr.js";
import { removeElement } from "../../core/removeElement.js";
import { IAttr, IElem, isTag } from "../../core/tag.js";
import { UUID } from "../../core/uuid.js";
import { button, Button } from "../button.js";
import { body } from "./body.js";
import { container, Container } from "./container.js";
import { footer } from "./footer.js";
import { header, Header } from "./header.js";
import { title } from "./title.js";

export const init = (elem: string | Element, options?: Partial<bootstrap.Modal.Options>) => {
	return getOrCreateInstance(elem, options);
};
export const getInstance = (elem: string | Element) => {
	return window.bootstrap.Modal.getInstance(elem);
};
export const getOrCreateInstance = (elem: string | Element, options?: Partial<bootstrap.Modal.Options>) => {
	addEvent("destroy", elem, (i) => {
		// console.log("Dispose modal", i);
		const m = getInstance(i.target as Element);
		if (m) {
			m.hide();
			m.dispose();
		}
	});

	return window.bootstrap.Modal.getOrCreateInstance(elem, options);
};
export const handleUpdate = (elem: string | Element) => {
	getOrCreateInstance(elem)?.handleUpdate();
};
export const toggle = (elem: string | Element, relatedTarget?: HTMLElement) => {
	getOrCreateInstance(elem)?.toggle(relatedTarget);
};
export const dispose = (elem: string | Element) => {
	getOrCreateInstance(elem)?.dispose();
};
export const hide = (elem: string | Element) => {
	if (typeof elem === "string") {
		getOrCreateInstance(elem)?.hide();
	} else {
		const mdl = elem.classList.contains("modal") ? elem : elem.closest(".modal");
		if (mdl) {
			getOrCreateInstance(mdl)?.hide();
		}
	}
};

export const show = (elem: string | Element | container, relatedTarget?: HTMLElement) => {
	if (isTag<container>(elem)) {
		if (!elem.attr) {
			elem.attr = {};
		}

		elem.attr.id ??= UUID();

		appendChild(document.body, elem);

		let mdl = document.getElementById(elem.attr.id);
		if (mdl) {
			addEvent("hidden.bs.modal", mdl as ElementWithAbortController, (e) => {
				const target = e.target as Element;
				// dispose(target);
				removeElement(target);
			});

			getOrCreateInstance(mdl).show(relatedTarget);
			coreInit(mdl);
		}
	} else {
		getOrCreateInstance(elem)?.show(relatedTarget);
	}
};

interface btnItem {
	color?: Button["color"];
	elem: IElem;
	click?: EventListener;
}

const genBtnItem = (btn?: btnItem | btnItem[]) => {
	if (btn) {
		if (!Array.isArray(btn)) {
			btn = [btn];
		}

		return btn
			.map((i) => {
				if (typeof i.click === "function") {
					return new button(
						{
							color: i.color,
							on: { click: i.click },
						},
						i.elem
					);
				} else {
					return new button(
						{
							color: i.color,
							dismiss: "modal",
						},
						i.elem
					);
				}
			})
			.reverse();
	} else {
		return [];
	}
};

type btnType =
	| "ok"
	| "cancel"
	| "yes"
	| "no"
	| "retry"
	| "continue"
	| "delete"
	| "save"
	| "savechanges"
	| "agree"
	| "disagree"
	| "reject"
	| "close"
	| "yesdelete"
	| "yessave"
	| "yescontinue";

interface btnItemDB {
	color?: Button["color"];
	elem: IElem;
}

const btnTypeDB = (btnType: btnType): btnItemDB => {
	switch (btnType) {
		case "ok":
			return {
				color: "primary",
				elem: "Okay",
			};
		case "cancel":
			return {
				color: "transparent",
				elem: "Cancel",
			};
		case "close":
			return {
				color: "transparent",
				elem: "Close",
			};
		case "yes":
			return {
				color: "primary",
				elem: "Yes",
			};
		case "no":
			return {
				color: "transparent",
				elem: "No",
			};
		case "retry":
			return {
				color: "primary",
				elem: "Retry",
			};
		case "continue":
			return {
				color: "primary",
				elem: "Continue",
			};
		case "delete":
			return {
				color: "danger",
				elem: "Delete",
			};
		case "save":
			return {
				color: "primary",
				elem: "Save",
			};
		case "savechanges":
			return {
				color: "primary",
				elem: "Save changes",
			};
		case "agree":
			return {
				color: "primary",
				elem: "Agree",
			};
		case "disagree":
			return {
				color: "transparent",
				elem: "Disagree",
			};
		case "reject":
			return {
				color: "transparent",
				elem: "Reject",
			};
		case "yesdelete":
			return {
				color: "danger",
				elem: "Yes, delete",
			};
		case "yessave":
			return {
				color: "primary",
				elem: "Yes, save",
			};
		case "yescontinue":
			return {
				color: "primary",
				elem: "Yes, continue",
			};
	}
};

const genBtn = (btn?: btnType | btnType[], fn?: EventListener | EventListener[]) => {
	let hasDismissButton: boolean = false;

	if (btn) {
		if (!Array.isArray(btn)) {
			btn = [btn];
		}

		let aFn: EventListener[] = [];
		if (fn) {
			if (!Array.isArray(fn)) {
				aFn = [fn];
			} else {
				aFn = fn;
			}
		}

		let tBtnItem: btnItem[] = [];
		for (let x = 0; x < btn.length; x++) {
			if (aFn.length <= x) {
				hasDismissButton = true;
			}

			let t = btnTypeDB(btn[x]);
			tBtnItem.push({
				color: t.color,
				elem: t.elem,
				click: aFn.length > x ? aFn[x] : undefined,
			});
		}

		return { hasDismissButton: hasDismissButton, btn: genBtnItem(tBtnItem) };
	} else {
		return { hasDismissButton: false, btn: [] };
	}
};

export interface Simple extends Omit<Container, "title"> {
	btn?: btnType | btnType[];
	btnFn?: EventListener | EventListener[];
	title?: IElem;
	elem?: IElem;

	attrHeader?: Header;
	attrBody?: IAttr;
	attrFooter?: IAttr;
}

export const Simple = (attr: Simple) => {
	let contAttr = Object.assign({}, attr);

	delete contAttr.btn;
	delete contAttr.btnFn;
	delete contAttr.title;
	delete contAttr.elem;
	delete contAttr.attrHeader;
	delete contAttr.attrBody;
	delete contAttr.attrFooter;

	let btn = genBtn(attr.btn, attr.btnFn);
	let showHeader: boolean = false;
	let showFooter: boolean = btn.btn.length > 0;

	if (!btn.hasDismissButton) {
		contAttr.backdrop ??= "static";
		attr.backdrop ??= "static";
	}

	if (attr.title) {
		showHeader = true;
	} else {
		showHeader = !(attr.backdrop === "static" ? false : btn.hasDismissButton);
	}

	return new container(contAttr as Container, [
		showHeader
			? new header(
					mergeAttr(
						{
							close: attr.backdrop === "static" ? false : btn.hasDismissButton,
						},
						attr.attrHeader
					),
					new title(attr.title || document.title)
			  )
			: "",
		new body(attr.attrBody ? attr.attrBody : {}, attr.elem ? attr.elem : ""),
		showFooter ? new footer(attr.attrFooter ? attr.attrFooter : {}, btn.btn) : "",
	]);
};
