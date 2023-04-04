import { appendChild, init } from "../../core/builder.js";
import { addEvent, HTMLElementWithEventDB } from "../../core/eventManager.js";
import { removeElement } from "../../core/removeElement.js";
import { UUID } from "../../core/uuid.js";
import { span } from "../../html/span.js";
import { strong } from "../../html/strong.js";
import { btnclose } from "./btnclose.js";
import { icon } from "../icon.js";
import { body } from "./body.js";
import { container, IAttrBSToastContainerPlacement } from "./container.js";
import { header } from "./header.js";
import { item } from "./item.js";
import { time } from "./time.js";
import { bootstrapType } from "../../core/bootstrap.js";
import { label } from "../label.js";

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

interface IAttrBSToastTemplate {
	color: bootstrapType.textBgColor[number];
	icon: icon;
	title: string;
	msg: string;
	delay?: number;
}

const template = (attr: IAttrBSToastTemplate) => {
	attr.delay ??= 5000;
	return new item(
		{
			live: "assertive",
			atomic: true,
			delay: attr.delay,
			textBgColor: attr.color,
		},
		[
			new header([
				new span(
					{
						marginEnd: 2,
						fontWeight: "bolder",
					},
					attr.icon
				),
				new strong(
					{
						marginEnd: "auto",
					},
					attr.title
				),
				new time(),
				new btnclose(),
			]),
			new body(attr.msg),
		]
	);
};

export const primary = (msg: string, title?: string) => {
	return template({
		color: "primary",
		icon: icon.bi("info-circle-fill", { fontSize: 6, textColor: "primary" }),
		title: title || document.title,
		msg: msg,
		delay: 5000,
	});
};

export const secondary = (msg: string, title?: string) => {
	return template({
		color: "secondary",
		icon: icon.bi("info-circle-fill", { fontSize: 6, textColor: "secondary" }),
		title: title || document.title,
		msg: msg,
		delay: 5000,
	});
};

export const info = (msg: string, title?: string) => {
	return template({
		color: "info",
		icon: icon.bi("info-circle-fill", { fontSize: 6, textColor: "info" }),
		title: title || document.title,
		msg: msg,
		delay: 5000,
	});
};

export const warning = (msg: string, title?: string) => {
	return template({
		color: "warning",
		icon: icon.bi("exclamation-triangle-fill", { fontSize: 6, textColor: "warning" }),
		title: title || document.title,
		msg: msg,
		delay: 10000,
	});
};

export const success = (msg: string, title?: string) => {
	return template({
		color: "success",
		icon: icon.bi("check-circle-fill", { fontSize: 6, textColor: "success" }),
		title: title || document.title,
		msg: msg,
		delay: 5000,
	});
};

export const danger = (msg: string, title?: string) => {
	return template({
		color: "danger",
		icon: icon.bi("x-circle-fill", { fontSize: 6, textColor: "danger" }),
		title: title || document.title,
		msg: msg,
		delay: 15000,
	});
};
