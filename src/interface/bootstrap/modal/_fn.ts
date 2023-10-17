import { appendChild, removeElement } from "../../core/builder.js";
import { addEvent, ElementWithAbortController } from "../../core/eventManager.js";
import { mergeAttr } from "../../core/mergeAttr.js";
import { IAttr, IElem, isTag } from "../../core/tag.js";
import { UUID } from "../../core/uuid.js";
import { button, Button } from "../button.js";
import { body } from "./body.js";
import { container, Container } from "./container.js";
import { footer } from "./footer.js";
import { header, Header } from "./header.js";
import { title } from "./title.js";
import { bootstrapType } from "../../core/bootstrap.js";
import { btnclose } from "./btnclose.js";
import { bstsConsole as console } from "../../core/console.js";
import { Modal as BSModal } from "bootstrap";
// import { disconnectResizeObserver, observeResizeObserver } from "../../core/resizeObserverManager.js";

export const init = (elem: string | Element, options?: Partial<BSModal.Options>) => {
	return getOrCreateInstance(elem, options);
};
export const getInstance = (elem: string | Element) => {
	return BSModal.getInstance(elem);
};
export const getOrCreateInstance = (elem: string | Element, options?: Partial<BSModal.Options>) => {
	addEvent("destroy", elem, (i) => {
		const target = i.target as Element;

		// disconnectResizeObserver(target);

		const m = getInstance(target);
		if (m) {
			console.info(`Dispose bootstrap modal from $1`, target);
			m.hide();
			m.dispose();
		}
	});

	// observeResizeObserver(elem, (r) => {
	// 	handleUpdate(elem);
	// });

	console.info(`Initialize bootstrap modal to $1`, elem);
	return BSModal.getOrCreateInstance(elem, options);
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
				removeElement(e.target as Element);
			});

			getOrCreateInstance(mdl).show(relatedTarget);
		}
	} else {
		getOrCreateInstance(elem)?.show(relatedTarget);
	}
};

type customStyleButton = 1 | 2;

interface btnItem {
	color?: Button["color"];
	elem: IElem;
	click?: EventListener;
}

const genBtnItem = (customStyle?: customStyleButton, btn?: btnItem | btnItem[]) => {
	if (btn) {
		if (!Array.isArray(btn)) {
			btn = [btn];
		}

		if (customStyle === 1) {
			return btn.map((i) => {
				if (typeof i.click === "function") {
					return new button(
						{
							weight: "lg",
							color: i.color ? (i.color === "transparent" ? "secondary" : i.color) : undefined,
							on: { click: i.click },
						},
						i.elem
					);
				} else {
					return new button(
						{
							weight: "lg",
							color: i.color ? (i.color === "transparent" ? "secondary" : i.color) : undefined,
							dismiss: "modal",
						},
						i.elem
					);
				}
			});
		} else if (customStyle === 2) {
			const lastBtnIndex = btn.length - 1;
			return btn.map((i, ix) => {
				if (typeof i.click === "function") {
					return new button(
						{
							fontWeight: i.color ? (i.color !== "transparent" ? "bold" : undefined) : undefined,
							border: ix < lastBtnIndex ? "end" : undefined,
							flex: ["grow-1", "wrap"],
							textDecoration: "none",
							textColor: i.color !== "transparent" ? (i.color as bootstrapType.textColor) : "primary",

							color: "transparent",
							rounded: 0,
							weight: "lg",
							fontSize: 6,
							paddingY: 3,
							margin: 0,
							on: { click: i.click },
						},
						i.elem
					);
				} else {
					return new button(
						{
							fontWeight: i.color ? (i.color !== "transparent" ? "bold" : undefined) : undefined,
							border: ix < lastBtnIndex ? "end" : undefined,
							flex: ["grow-1", "wrap"],
							textDecoration: "none",
							textColor: i.color !== "transparent" ? (i.color as bootstrapType.textColor) : "primary",
							color: "transparent",
							rounded: 0,
							weight: "lg",
							fontSize: 6,
							paddingY: 3,
							margin: 0,
							dismiss: "modal",
						},
						i.elem
					);
				}
			});
		} else {
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
		}
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
	| "yescontinue"
	| "yesenable"
	| "nothanks";

interface btnItemDB {
	color?: Button["color"];
	elem: IElem;
}

const btnTypeDB = (btnType?: btnType): btnItemDB => {
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
		case "yesenable":
			return {
				color: "primary",
				elem: "Yes, enable",
			};
		case "nothanks":
			return {
				color: "transparent",
				elem: "No thanks",
			};
		default:
			return {
				color: "primary",
				elem: "Okay",
			};
	}
};

const genBtn = (customStyle?: customStyleButton, btn?: btnType | btnType[], fn?: EventListener | EventListener[]) => {
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

		if (aFn.length < btn.length) {
			hasDismissButton = true;
		}

		let tBtnItem: btnItem[] = [];
		for (let x = 0; x < btn.length; x++) {
			let t = btnTypeDB(btn[x]);
			tBtnItem.push({
				color: t.color,
				elem: t.elem,
				click: aFn.length > x ? aFn[x] : undefined,
			});
		}

		return { hasDismissButton: hasDismissButton, btn: genBtnItem(customStyle, tBtnItem) };
	} else {
		return { hasDismissButton: false, btn: [] };
	}
};

export interface Create extends Omit<Container, "title"> {
	customStyle?: customStyleButton;
	btn?: btnType | btnType[];
	btnFn?: EventListener | EventListener[];
	title?: IElem;
	elem?: IElem;

	attrHeader?: Header;
	attrBody?: IAttr;
	attrFooter?: IAttr;
}

export const Create = (attr: Create) => {
	let contAttr = Object.assign({}, attr);

	delete contAttr.customStyle;
	delete contAttr.btn;
	delete contAttr.btnFn;
	delete contAttr.title;
	delete contAttr.elem;
	delete contAttr.attrHeader;
	delete contAttr.attrBody;
	delete contAttr.attrFooter;

	let btn = genBtn(attr.customStyle, attr.btn, attr.btnFn);
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

	if (attr.customStyle === 1) {
		contAttr.contentAttr = { rounded: 4 };
		contAttr.view = "end";

		if (!attr.debug) {
			contAttr.animate = "slide-in-bottom";
			contAttr.animateDuration = "300ms";
		}

		return new container(contAttr as Container, [
			showHeader
				? new header(
						mergeAttr(
							{
								borderNone: "bottom",
								close: attr.backdrop === "static" ? false : btn.hasDismissButton,
							},
							attr.attrHeader
						),
						new title(attr.title || document.title)
				  )
				: "",
			new body(mergeAttr({ paddingY: 0 }, attr.attrBody), attr.elem ? attr.elem : ""),
			showFooter
				? new footer(
						mergeAttr(
							{
								flex: "column",
								alignItem: "stretch",
								width: 100,
								gap: 2,
								paddingBottom: 3,
								borderNone: "top",
							},
							attr.attrFooter
						),
						btn.btn
				  )
				: "",
		]);
	} else if (attr.customStyle === 2) {
		return new container(contAttr as Container, [
			showHeader
				? new header(
						mergeAttr(
							{
								textAlign: "center",
								padding: 4,
								paddingBottom: 0,
								borderNone: "bottom",
								position: "relative",
								close: false, //manually create float btnclose
							},
							attr.attrHeader
						),
						[
							new title({ width: 100 }, attr.title || document.title),
							(attr.backdrop === "static" ? false : btn.hasDismissButton)
								? new btnclose({
										float: "end",
										top: 0,
										end: 0,
										marginTop: 2,
										marginEnd: 2,
										opacity: "25",
										position: "absolute",
								  })
								: "",
						]
				  )
				: "",
			new body(
				mergeAttr({ padding: 4, paddingTop: showHeader ? 0 : undefined, textAlign: "center" }, attr.attrBody),
				attr.elem ? attr.elem : ""
			),
			showFooter
				? new footer(
						mergeAttr(
							{
								flex: ["nowrap", "grow-1"],
								padding: 0,
							},
							attr.attrFooter
						),
						btn.btn
				  )
				: "",
		]);
	} else {
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
	}
};
