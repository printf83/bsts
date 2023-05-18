import { appendChild } from "../../core/builder.js";
import { init as coreInit } from "../../core/init.js";
import { addEvent, ElementWithAbortController } from "../../core/eventManager.js";
import { removeElement } from "../../core/removeElement.js";
import { UUID } from "../../core/uuid.js";
import { btnclose } from "./btnclose.js";
import { body } from "./body.js";
import { header } from "./header.js";
import { timer } from "./timer.js";
import { container, ContainerPlacement } from "./container.js";
import { Item, item } from "./item.js";
import { bootstrapType } from "../../core/bootstrap.js";
import { div } from "../../html/div.js";
import { strong } from "../../html/strong.js";
import { IElem, isTag } from "../../core/tag.js";

export const init = (elem: string | Element, options?: Partial<bootstrap.Toast.Options>) => {
	return getOrCreateInstance(elem, options);
};

export const getInstance = (elem: string | Element) => {
	return window.bootstrap.Toast.getInstance(elem);
};
export const getOrCreateInstance = (elem: string | Element, options?: Partial<bootstrap.Toast.Options>) => {
	addEvent("destroy", elem, (i) => {
		// console.log("Dispose toast", i);
		const m = getInstance(i.target as Element);
		if (m) {
			m.hide();
			m.dispose();
		}
	});

	return window.bootstrap.Toast.getOrCreateInstance(elem, options);
};

export const hide = (elem: string | Element) => {
	getOrCreateInstance(elem)?.hide();
};
export const dispose = (elem: string | Element) => {
	getInstance(elem)?.dispose();
};

export const isShown = (elem: string | Element) => {
	let t = getOrCreateInstance(elem);
	if (t) {
		return t.isShown();
	} else {
		return false;
	}
};

export const show = (itemOrElem: item | Element | string, placement?: ContainerPlacement) => {
	if (!isTag<item>(itemOrElem)) {
		getOrCreateInstance(itemOrElem)?.show();
	} else {
		placement ??= "top-end";
		//make container
		let containerClassName: string = ".toast-container.top-0.start-0:not(.debug)";
		switch (placement) {
			case "top-start":
				containerClassName = ".toast-container.top-0.start-0:not(.debug)";
				break;
			case "top-center":
				containerClassName = ".toast-container.top-0.start-50.translate-middle-x:not(.debug)";
				break;
			case "top-end":
				containerClassName = ".toast-container.top-0.end-0:not(.debug)";
				break;
			case "middle-start":
				containerClassName = ".toast-container.top-50.start-0.translate-middle-y:not(.debug)";
				break;
			case "middle-center":
				containerClassName = ".toast-container.top-50.start-50.translate-middle:not(.debug)";
				break;
			case "middle-end":
				containerClassName = ".toast-container.top-50.end-0.translate-middle-y:not(.debug)";
				break;
			case "bottom-start":
				containerClassName = ".toast-container.bottom-0.start-0:not(.debug)";
				break;
			case "bottom-center":
				containerClassName = ".toast-container.bottom-0.start-50.translate-middle-x:not(.debug)";
				break;
			case "bottom-end":
				containerClassName = ".toast-container.bottom-0.end-0:not(.debug)";
				break;
			default:
				containerClassName = ".toast-container.top-0.start-0:not(.debug)";
		}

		let containerDOM = document.querySelector(containerClassName);
		if (!containerDOM) {
			appendChild(document.body, new container({ placement: placement }));
			containerDOM = document.querySelector(containerClassName);
		}

		if (containerDOM) {
			if (!itemOrElem.attr) {
				itemOrElem.attr = {};
			}

			itemOrElem.attr.id ??= UUID();

			appendChild(containerDOM, itemOrElem);
			let tst = document.getElementById(itemOrElem.attr.id);
			if (tst) {
				addEvent("hidden.bs.toast", tst as ElementWithAbortController, (e) => {
					const target = e.target as Element;
					removeElement(target);
				});

				show(tst);
				coreInit(tst);
			}
		}
	}
};

export interface Simple {
	elem: IElem;
	animation?: boolean;
	color?: bootstrapType.textBgColor;
	btnclosewhite?: boolean;
	delay?: number;
	atomic?: boolean;
	live?: Item["live"];
	title?: IElem;
}

export const Simple = (attr: Simple) => {
	let defaultBtnCloseWhite = false;
	switch (attr.color) {
		case "dark":
		case "primary":
		case "secondary":
		case "success":
		case "danger":
			defaultBtnCloseWhite = true;
			break;
	}

	attr.delay ??= 5000;
	attr.atomic ??= true;
	attr.live ??= "assertive";
	attr.btnclosewhite ??= defaultBtnCloseWhite;

	if (attr.title) {
		return new item(
			{
				animation: attr.animation,
				live: attr.live,
				atomic: attr.atomic,
				delay: attr.delay,
				textBgColor: attr.color,
				border: false,
			},
			[
				new header([
					new div({ marginEnd: "auto" }, new strong(attr.title)),
					attr.delay > 5000 ? new timer() : "",
					new btnclose(),
				]),
				new body(attr.elem),
			]
		);
	} else {
		return new item(
			{
				animation: attr.animation,
				live: attr.live,
				atomic: attr.atomic,
				border: false,
				delay: attr.delay,
				textBgColor: attr.color,
			},
			new div({ display: "flex" }, [
				new body(attr.elem),
				new btnclose({
					marginEnd: 2,
					margin: "auto",
					white: attr.btnclosewhite,
				}),
			])
		);
	}
};
