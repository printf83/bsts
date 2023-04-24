import { appendChild, init } from "../../core/builder.js";
import { addEvent, HTMLElementWithEventDB } from "../../core/eventManager.js";
import { mergeAttr } from "../../core/mergeAttr.js";
import { removeElement } from "../../core/removeElement.js";
import { IAttr, IElem } from "../../core/tag.js";
import { UUID } from "../../core/uuid.js";
import { button, IBsButton } from "../button.js";
import { body } from "./body.js";
import { container, IBsModalContainer } from "./container.js";
import { footer } from "./footer.js";
import { header, IBsModalHeader } from "./header.js";
import { title } from "./title.js";

export const show = (i: container) => {
	if (!i.attr) {
		i.attr = {};
	}

	i.attr.id ??= UUID();

	appendChild(document.body, i);

	let mdl = document.getElementById(i.attr.id);
	if (mdl) {
		addEvent("hidden.bs.modal", mdl as HTMLElementWithEventDB, (e) => {
			window.bootstrap.Modal.getInstance(e.target as Element)?.dispose();
			removeElement(e.target as HTMLElement);
		});

		window.bootstrap.Modal.getOrCreateInstance(mdl as Element).show();
		init(mdl);
	}
};

export const hide = (i: HTMLElement) => {
	let container = i.classList.contains("modal") ? i : i.closest(".modal");
	const mdl = window.bootstrap.Modal.getInstance(container as Element);
	if (mdl) {
		mdl.hide();
	}
};

interface btnItem {
	color?: IBsButton["color"];
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
	| "agree"
	| "disagree"
	| "reject"
	| "yesdelete"
	| "yessave"
	| "yescontinue";

interface btnItemDB {
	color?: IBsButton["color"];
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

export interface IBsModalSimple extends Omit<IBsModalContainer, "title"> {
	btn?: btnType | btnType[];
	btnFn?: EventListener | EventListener[];
	title?: IElem;
	elem?: IElem;

	attrHeader?: IBsModalHeader;
	attrBody?: IAttr;
	attrFooter?: IAttr;
}

export const Simple = (attr: IBsModalSimple) => {
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
		contAttr.static ??= true;
		attr.static ??= true;
	}

	if (attr.title) {
		showHeader = true;
	} else {
		showHeader = !(attr.static ? false : btn.hasDismissButton);
	}

	return new container(contAttr as IBsModalContainer, [
		showHeader
			? new header(
					mergeAttr(
						{
							close: attr.static ? false : btn.hasDismissButton,
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
