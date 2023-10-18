import { elem } from "../../interface/core/elem.js";
import { bsConstArg } from "../../core/bootstrap.js";
import { nav } from "../../html/nav.js";
import { header } from "../../html/header.js";
import { mergeClass } from "../../core/mergeClass.js";
import { mergeObject } from "../../core/mergeObject.js";
import { container as Container } from "../../interface/bootstrap/navbar/container.js";

const convert = (attr: Container) => {
	attr.class = mergeClass(attr.class, ["navbar", attr.expand ? `navbar-expand-${attr.expand}` : undefined]);

	if (attr.textColorRGB) {
		attr = mergeObject(
			{
				style: {
					"--bs-navbar-color": `rgba(${attr.textColorRGB}, 0.65)`,
					"--bs-navbar-active-color": `rgba(${attr.textColorRGB}, 1)`,
					"--bs-navbar-brand-color": `rgba(${attr.textColorRGB}, 1)`,
					"--bs-navbar-brand-hover-color": `rgba(${attr.textColorRGB}, 1)`,
					"--bs-navbar-hover-color": `rgba(${attr.textColorRGB}, 0.8)`,
					"--bs-navbar-disabled-color": `rgba(${attr.textColorRGB}, 0.3)`,
					"--bs-navbar-toggler-icon-bg": `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28${attr.textColorRGB}, 0.75%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`,
				},
			},
			attr
		);

		delete attr.textColorRGB;
	}

	delete attr.expand;
	return attr;
};

export class container extends nav {
	constructor();
	constructor(attr: Container);
	constructor(elem: elem);
	constructor(attr: Container, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}

export class containerHeader extends header {
	constructor();
	constructor(attr: Container);
	constructor(elem: elem);
	constructor(attr: Container, elem: elem);
	constructor(...arg: any[]) {
		super(convert(bsConstArg<Container>("elem", arg)));
	}
}
