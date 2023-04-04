import { appendChild, init } from "../../core/builder.js";
import { addEvent, HTMLElementWithEventDB } from "../../core/eventManager.js";
import { removeElement } from "../../core/removeElement.js";
import { UUID } from "../../core/uuid.js";
import { btnclose } from "./btnclose.js";
import { body } from "./body.js";
import { header } from "./header.js";
import { time } from "./time.js";
import { container, IAttrBSToastContainerPlacement } from "./container.js";
import { IAttrBSToastItem, item } from "./item.js";
import { bootstrapType } from "../../core/bootstrap.js";
import { div } from "../../html/div.js";
import { IElem } from "../../core/tag.js";

export const show = (placement: IAttrBSToastContainerPlacement, i: item) => {
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

	let containerDOM: HTMLElement = document.querySelector(containerClassName) as HTMLElement;
	if (!containerDOM) {
		let body = document.getElementById("main") as HTMLElement;
		appendChild(body, new container({ placement: placement }));
		containerDOM = document.querySelector(containerClassName) as HTMLElement;
	}

	if (containerDOM) {
		if (!i.attr) {
			i.attr = {};
		}

		i.attr.id ??= UUID();

		appendChild(containerDOM, i);
		let tst = document.getElementById(i.attr.id);
		if (tst) {
			addEvent("hidden.bs.toast", tst as HTMLElementWithEventDB, (e) => {
				window.bootstrap.Modal.getInstance(e.target as Element)?.dispose();
				removeElement(e.target as HTMLElement);
			});

			window.bootstrap.Toast.getOrCreateInstance(tst as Element).show();
			init(tst);
		}
	}
};

export interface IAttrBSToastSimple {
	elem: IElem;
	color?: bootstrapType.textBgColor[number];
	btnclosewhite?: boolean;
	delay?: number;
	atomic?: boolean;
	live?: IAttrBSToastItem["live"];
	title?: IElem;
}

export const simple = (attr: IAttrBSToastSimple) => {
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
				live: attr.live,
				atomic: attr.atomic,
				delay: attr.delay,
				textBgColor: attr.color,
			},
			[new header([new div({ marginEnd: "auto" }, attr.title), new time(), new btnclose()]), new body(attr.elem)]
		);
	} else {
		return new item(
			{
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
