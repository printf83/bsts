import { mergeObject } from "./mergeObject.js";
import { isAttr } from "./tag.js";
import { addClassIntoElement } from "./addClassIntoElement.js";
import { IAttachFn } from "./attach/_index.js";
import { keyOfType } from "./keyOfType.js";
import { bsClassFormatter } from "../interface/core/bsClassFormatter.js";
import { bsTypeA } from "../interface/core/bsTypeA.js";
import { attr } from "../interface/core/attr.js";

export class bsClassFormatterRule implements bsClassFormatter {
	shared?: boolean;
	value?: (string | number | boolean)[];
	format?: string;
	formatValue?: string;
	formatTrue?: string;
	formatFalse?: string;

	constructor(d: bsClassFormatter) {
		this.shared = d.shared;
		this.value = d.value;
		this.format = d.format;
		this.formatValue = d.formatValue;
		this.formatTrue = d.formatTrue;
		this.formatFalse = d.formatFalse;
	}
}

const bsClassFormatterDB: {
	[key: string]: bsClassFormatterRule;
} = {
	//---------------------
	// viewport & color handle by component
	//---------------------

	flex: new bsClassFormatterRule({
		format: "flex-$1",
		value: bsTypeA.flex,
	}),
	float: new bsClassFormatterRule({
		format: "float-$1",
		value: bsTypeA.float,
	}),
	order: new bsClassFormatterRule({
		format: "order-$1",
		value: bsTypeA.order,
	}),
	offset: new bsClassFormatterRule({
		format: "offset-$1",
		value: bsTypeA.offset,
	}),

	//---------------------

	alignContent: new bsClassFormatterRule({
		format: "align-content-$1",
		value: bsTypeA.alignContent,
	}),
	justifyContent: new bsClassFormatterRule({
		format: "justify-content-$1",
		value: bsTypeA.justifyContent,
	}),
	alignItem: new bsClassFormatterRule({
		format: "align-items-$1",
		value: bsTypeA.alignItem,
	}),
	alignSelf: new bsClassFormatterRule({
		format: "align-self-$1",
		value: bsTypeA.alignSelf,
	}),
	display: new bsClassFormatterRule({
		format: "d-$1",
		value: bsTypeA.display,
	}),
	rowCol: new bsClassFormatterRule({
		format: "row-cols-$1",
		value: bsTypeA.rowCol,
	}),

	//---------------------

	visible: new bsClassFormatterRule({
		formatTrue: "visible",
		formatFalse: "invisible",
		value: bsTypeA.visible,
	}),
	textWrap: new bsClassFormatterRule({
		formatTrue: "text-wrap",
		formatFalse: "text-nowrap",
		value: bsTypeA.textWrap,
	}),
	fontItalic: new bsClassFormatterRule({
		formatTrue: "fst-italic",
		formatFalse: "fst-normal",
		value: bsTypeA.fontItalic,
	}),
	bgGradient: new bsClassFormatterRule({
		formatTrue: "bg-gradient",
		value: bsTypeA.bgGradient,
	}),
	textBreak: new bsClassFormatterRule({
		formatTrue: "text-break",
		value: bsTypeA.textBreak,
	}),
	monospace: new bsClassFormatterRule({
		formatTrue: "font-monospace",
		value: bsTypeA.monospace,
	}),

	//---------------------

	loadingPlaceholder: new bsClassFormatterRule({
		formatTrue: "placeholder",
		value: bsTypeA.loadingPlaceholder,
	}),
	loadingPlaceholderAnimation: new bsClassFormatterRule({
		format: "placeholder-$1",
		value: bsTypeA.loadingPlaceholderAnimation,
	}),
	loadingPlaceholderWeight: new bsClassFormatterRule({
		format: "placeholder-$1",
		formatValue: "placeholder $1",
		value: bsTypeA.loadingPlaceholderWeight,
	}),

	//---------------------

	row: new bsClassFormatterRule({
		formatTrue: "row",
		value: bsTypeA.row,
	}),
	col: new bsClassFormatterRule({
		format: "col-$1",
		formatTrue: "col",
		value: bsTypeA.col,
	}),

	//---------------------

	userSelect: new bsClassFormatterRule({
		format: "user-select-$1",
		value: bsTypeA.userSelect,
	}),
	pointerEvent: new bsClassFormatterRule({
		format: "pe-$1",
		value: bsTypeA.pointerEvent,
	}),
	position: new bsClassFormatterRule({
		format: "position-$1",
		value: bsTypeA.position,
	}),
	overflow: new bsClassFormatterRule({
		format: "overflow-$1",
		value: bsTypeA.overflow,
	}),
	overflowX: new bsClassFormatterRule({
		format: "overflow-x-$1",
		value: bsTypeA.overflowX,
	}),
	overflowY: new bsClassFormatterRule({
		format: "overflow-y-$1",
		value: bsTypeA.overflowY,
	}),

	//---------------------

	textAlign: new bsClassFormatterRule({
		format: "text-$1",
		value: bsTypeA.textAlign,
	}),
	verticalAlign: new bsClassFormatterRule({
		format: "align-$1",
		value: bsTypeA.verticalAlign,
	}),

	//---------------------

	opacity: new bsClassFormatterRule({
		format: "opacity-$1",
		value: bsTypeA.opacity,
	}),
	bgOpacity: new bsClassFormatterRule({
		format: "bg-opacity-$1",
		value: bsTypeA.bgOpacity,
	}),
	textOpacity: new bsClassFormatterRule({
		format: "text-opacity-$1",
		value: bsTypeA.textOpacity,
	}),

	//---------------------

	focusRing: new bsClassFormatterRule({
		format: "focus-ring-$1",
		formatValue: "focus-ring",
		value: bsTypeA.focusRing,
	}),
	textBgColor: new bsClassFormatterRule({
		format: "text-bg-$1",
		value: bsTypeA.textBgColor,
	}),
	textColor: new bsClassFormatterRule({
		format: "text-$1",
		value: bsTypeA.textColor,
	}),
	bgColor: new bsClassFormatterRule({
		format: "bg-$1",
		value: bsTypeA.bgColor,
	}),

	//---------------------

	iconLink: new bsClassFormatterRule({
		format: "icon-link-$1",
		formatValue: "icon-link",
		formatTrue: "icon-link",
		value: bsTypeA.iconLink,
	}),

	//---------------------

	textTransform: new bsClassFormatterRule({
		format: "text-$1",
		value: bsTypeA.textTransform,
	}),
	textDecoration: new bsClassFormatterRule({
		format: "text-decoration-$1",
		value: bsTypeA.textDecoration,
	}),
	lineHeight: new bsClassFormatterRule({
		format: "lh-$1",
		value: bsTypeA.lineHeight,
	}),

	//---------------------

	fontSize: new bsClassFormatterRule({
		format: "fs-$1",
		value: bsTypeA.fontSize,
	}),
	fontDisplay: new bsClassFormatterRule({
		format: "display-$1",
		value: bsTypeA.fontDisplay,
	}),
	fontWeight: new bsClassFormatterRule({
		format: "fw-$1",
		value: bsTypeA.fontWeight,
	}),

	//---------------------

	top: new bsClassFormatterRule({
		format: "top-$1",
		value: bsTypeA.top,
	}),
	bottom: new bsClassFormatterRule({
		format: "bottom-$1",
		value: bsTypeA.bottom,
	}),
	start: new bsClassFormatterRule({
		format: "start-$1",
		value: bsTypeA.start,
	}),
	end: new bsClassFormatterRule({
		format: "end-$1",
		value: bsTypeA.end,
	}),
	tMiddle: new bsClassFormatterRule({
		format: "translate-middle-$1",
		formatTrue: "translate-middle",
		value: bsTypeA.tMiddle,
	}),

	//---------------------

	height: new bsClassFormatterRule({
		format: "h-$1",
		value: bsTypeA.height,
		shared: true,
	}),
	width: new bsClassFormatterRule({
		format: "w-$1",
		value: bsTypeA.width,
		shared: true,
	}),

	//---------------------

	maxHeight: new bsClassFormatterRule({
		format: "mh-$1",
		value: bsTypeA.maxHeight,
	}),
	maxWidth: new bsClassFormatterRule({
		format: "mw-$1",
		value: bsTypeA.maxWidth,
	}),
	minViewHeight: new bsClassFormatterRule({
		format: "min-vh-$1",
		value: bsTypeA.minViewHeight,
	}),
	minViewWidth: new bsClassFormatterRule({
		format: "min-vw-$1",
		value: bsTypeA.minViewWidth,
	}),
	viewHeight: new bsClassFormatterRule({
		format: "vh-$1",
		value: bsTypeA.viewHeight,
	}),
	viewWidth: new bsClassFormatterRule({
		format: "vw-$1",
		value: bsTypeA.viewWidth,
	}),

	//---------------------

	shadow: new bsClassFormatterRule({
		format: "shadow-$1",
		formatTrue: "shadow",
		formatValue: "shadow",
		formatFalse: "shadow-none",
		value: bsTypeA.shadow,
	}),

	//---------------------

	borderNone: new bsClassFormatterRule({
		format: "border-$1-0",
		formatTrue: "border-0",
		formatFalse: "border",
		value: bsTypeA.borderNone,
	}),
	border: new bsClassFormatterRule({
		format: "border-$1",
		formatTrue: "border",
		formatFalse: "border-0",
		value: bsTypeA.border,
	}),
	borderColor: new bsClassFormatterRule({
		format: "border-$1",
		value: bsTypeA.borderColor,
	}),
	borderOpacity: new bsClassFormatterRule({
		format: "border-opacity-$1",
		value: bsTypeA.borderOpacity,
	}),
	borderWidth: new bsClassFormatterRule({
		format: "border-$1",
		value: bsTypeA.borderWidth,
	}),

	//---------------------

	roundedNone: new bsClassFormatterRule({
		format: "rounded-$1-0",
		formatTrue: "rounded",
		formatFalse: "rounded-0",
		value: bsTypeA.roundedNone,
	}),
	rounded: new bsClassFormatterRule({
		format: "rounded-$1",
		formatTrue: "rounded",
		formatFalse: "rounded-0",
		value: bsTypeA.rounded,
	}),
	roundedSize: new bsClassFormatterRule({
		format: "rounded-$1",
		value: bsTypeA.roundedSize,
	}),

	//---------------------

	padding: new bsClassFormatterRule({
		format: "p-$1",
		value: bsTypeA.padding,
	}),
	paddingX: new bsClassFormatterRule({
		format: "px-$1",
		value: bsTypeA.paddingX,
	}),
	paddingY: new bsClassFormatterRule({
		format: "py-$1",
		value: bsTypeA.paddingY,
	}),
	paddingTop: new bsClassFormatterRule({
		format: "pt-$1",
		value: bsTypeA.paddingTop,
	}),
	paddingBottom: new bsClassFormatterRule({
		format: "pb-$1",
		value: bsTypeA.paddingBottom,
	}),
	paddingStart: new bsClassFormatterRule({
		format: "ps-$1",
		value: bsTypeA.paddingStart,
	}),
	paddingEnd: new bsClassFormatterRule({
		format: "pe-$1",
		value: bsTypeA.paddingEnd,
	}),

	//---------------------

	margin: new bsClassFormatterRule({
		format: "m-$1",
		value: bsTypeA.margin,
	}),
	marginX: new bsClassFormatterRule({
		format: "mx-$1",
		value: bsTypeA.marginX,
	}),
	marginY: new bsClassFormatterRule({
		format: "my-$1",
		value: bsTypeA.marginY,
	}),
	marginTop: new bsClassFormatterRule({
		format: "mt-$1",
		value: bsTypeA.marginTop,
	}),
	marginBottom: new bsClassFormatterRule({
		format: "mb-$1",
		value: bsTypeA.marginBottom,
	}),
	marginStart: new bsClassFormatterRule({
		format: "ms-$1",
		value: bsTypeA.marginStart,
	}),
	marginEnd: new bsClassFormatterRule({
		format: "me-$1",
		value: bsTypeA.marginEnd,
	}),

	//---------------------

	gap: new bsClassFormatterRule({
		format: "gap-$1",
		value: bsTypeA.gap,
	}),
	gutter: new bsClassFormatterRule({
		format: "g-$1",
		value: bsTypeA.gutter,
	}),
	gutterX: new bsClassFormatterRule({
		format: "gx-$1",
		value: bsTypeA.gutterX,
	}),
	gutterY: new bsClassFormatterRule({
		format: "gy-$1",
		value: bsTypeA.gutterY,
	}),

	//---------------------

	print: new bsClassFormatterRule({
		format: "d-print-$1",
		value: bsTypeA.print,
	}),
	container: new bsClassFormatterRule({
		format: "container-$1",
		formatTrue: "container",
		value: bsTypeA.container,
	}),

	//---------------------

	zIndex: new bsClassFormatterRule({
		format: "z-$1",
		value: bsTypeA.zIndex,
	}),
	objectFit: new bsClassFormatterRule({
		format: "object-fit-$1",
		value: bsTypeA.objectFit,
	}),

	//---------------------

	ratio: new bsClassFormatterRule({
		format: "ratio-$1",
		formatValue: "ratio",
		formatTrue: "ratio",
		value: bsTypeA.ratio,
	}),
	fixed: new bsClassFormatterRule({
		format: "fixed-$1",
		value: bsTypeA.fixed,
	}),
	sticky: new bsClassFormatterRule({
		format: "sticky-$1",
		value: bsTypeA.sticky,
	}),

	//---------------------

	clearfix: new bsClassFormatterRule({
		formatTrue: "clearfix",
		value: bsTypeA.clearfix,
	}),
	textTruncate: new bsClassFormatterRule({
		formatTrue: "text-truncate",
		value: bsTypeA.textTruncate,
	}),

	vstack: new bsClassFormatterRule({
		formatTrue: "vstack",
		value: bsTypeA.vstack,
	}),
	hstack: new bsClassFormatterRule({
		formatTrue: "hstack",
		value: bsTypeA.hstack,
	}),
	visually: new bsClassFormatterRule({
		format: "visually-$1",
		value: bsTypeA.visually,
	}),
	h: new bsClassFormatterRule({
		format: "h$1",
		value: bsTypeA.h,
	}),
	small: new bsClassFormatterRule({
		formatTrue: "small",
		value: bsTypeA.small,
	}),

	//---------------------

	linkColor: new bsClassFormatterRule({
		format: "link-$1",
		value: bsTypeA.linkColor,
	}),
	linkUnderlineColor: new bsClassFormatterRule({
		format: "link-underline-$1",
		value: bsTypeA.linkUnderlineColor,
	}),
	linkOffset: new bsClassFormatterRule({
		format: "link-offset-$1",
		value: bsTypeA.linkOffset,
	}),
	linkOffsetHover: new bsClassFormatterRule({
		format: "link-offset-$1-hover",
		value: bsTypeA.linkOffsetHover,
	}),
	linkOpacity: new bsClassFormatterRule({
		format: "link-opacity-$1",
		value: bsTypeA.linkOpacity,
	}),
	linkOpacityHover: new bsClassFormatterRule({
		format: "link-opacity-$1-hover",
		value: bsTypeA.linkOpacityHover,
	}),
	linkUnderline: new bsClassFormatterRule({
		formatTrue: "link-underline",
		value: bsTypeA.linkUnderline,
	}),
	linkUnderlineOpacity: new bsClassFormatterRule({
		format: "link-underline-opacity-$1",
		value: bsTypeA.linkUnderlineOpacity,
	}),
	linkUnderlineOpacityHover: new bsClassFormatterRule({
		format: "link-underline-opacity-$1-hover",
		value: bsTypeA.linkUnderlineOpacityHover,
	}),

	//---------------------

	btnColor: new bsClassFormatterRule({
		format: "btn-$1",
		formatValue: "btn",
		value: bsTypeA.btnColor,
	}),
	btnOutlineColor: new bsClassFormatterRule({
		format: "btn-outline-$1",
		formatValue: "btn",
		value: bsTypeA.btnOutlineColor,
	}),
	alertColor: new bsClassFormatterRule({
		format: "alert-$1",
		value: bsTypeA.alertColor,
	}),
	alertDismissible: new bsClassFormatterRule({
		formatTrue: "alert-dismissible",
		value: bsTypeA.alertDismissible,
	}),
	dropdownDirection: new bsClassFormatterRule({
		format: "drop$1",
		value: bsTypeA.dropdownDirection,
	}),
	dropdownMenuPositionView: new bsClassFormatterRule({
		format: "dropdown-menu-$1",
		value: bsTypeA.dropdownMenuPositionView,
	}),
};

export type AttrFormatter = (elem: Element, data: string | number | boolean) => Element;

const attrFormatterDB: {
	[key: string]: AttrFormatter;
} = {
	theme: (elem, data) => {
		elem.setAttribute(`data-bs-theme`, data.toString());
		return elem;
	},
	pointer: (elem, data) => {
		if (data) {
			elem.setAttribute("role", "button");
		}

		return elem;
	},
	label: (elem, data) => {
		if (data) {
			elem.setAttribute("aria-label", data.toString());
		}

		return elem;
	},
	labelledby: (elem, data) => {
		if (data) {
			elem.setAttribute("aria-labelledby", data.toString());
		}

		return elem;
	},
	ownby: (elem, data) => {
		if (data) {
			elem.setAttribute("aria-owns", data.toString());
		}

		return elem;
	},
	describedby: (elem, data) => {
		if (data) {
			elem.setAttribute("aria-describedby", data.toString());
		}

		return elem;
	},
	controlfor: (elem, data) => {
		if (data) {
			elem.setAttribute("aria-controls", data.toString());
		}

		return elem;
	},
	gridTemplateColumns: (elem, data) => {
		if (data) {
			(elem as HTMLElement).style.gridTemplateColumns = data.toString();
		}

		return elem;
	},
	gridTemplateAreas: (elem, data) => {
		if (data) {
			(elem as HTMLElement).style.gridTemplateAreas = data.toString();
		}

		return elem;
	},
	gridTemplateRows: (elem, data) => {
		if (data) {
			(elem as HTMLElement).style.gridTemplateRows = data.toString();
		}

		return elem;
	},
	gridArea: (elem, data) => {
		if (data) {
			(elem as HTMLElement).style.gridArea = data.toString();
		}

		return elem;
	},
};

let allowClassProp: (string | undefined)[] = [];

export namespace attachBSClass {
	const allowValue = <T extends string | number | boolean>(
		valueToCheck: string | number | boolean,
		listOfPossible: (string | number | boolean)[]
	): valueToCheck is T => {
		if (listOfPossible && listOfPossible.length > 0) {
			return listOfPossible.indexOf(valueToCheck) > -1;
		}
		return false;
	};

	const allowProp = (key?: string) => {
		if (key) {
			if (allowClassProp.length === 0) {
				allowClassProp = Object.keys(bsClassFormatterDB);
			}

			if (allowClassProp.indexOf(key) > -1) {
				return key;
			}
		}

		return null;
	};

	const addClass = (rule: bsClassFormatter | undefined, data: string | number | boolean, elem: Element) => {
		if (rule && rule.value && allowValue(data, rule.value)) {
			if (rule.formatValue) {
				elem = addClassIntoElement(elem, rule.formatValue!);
			}

			if (data === true && rule.formatTrue) {
				elem = addClassIntoElement(elem, rule.formatTrue!);
			} else if (data === false && rule.formatFalse) {
				elem = addClassIntoElement(elem, rule.formatFalse!);
			} else if (rule.format) {
				elem = addClassIntoElement(elem, rule.format!.replace(/\$1/g, data.toString()));
			}
		}

		return elem;
	};

	export const attach: IAttachFn = (key, elem, attr) => {
		let changed = false;
		let allowKey = allowProp(key);
		if (allowKey) {
			let a = keyOfType(key, attr);
			let b = keyOfType(allowKey, bsClassFormatterDB);
			let data: (string | number | boolean)[] = [];

			if (!Array.isArray(attr[a])) {
				data = [attr[a] as string | number | boolean];
			} else {
				data = attr[a] as (string | number | boolean)[];
			}

			data.forEach((i) => {
				elem = addClass(bsClassFormatterDB[b], i, elem);
			});

			delete attr[a];
			changed = true;
		}

		return { attr, elem, changed };
	};
}

let allowAttrProp: (string | undefined)[] = [];

export namespace attachBSAttr {
	const allow = (key?: string) => {
		if (key) {
			if (allowAttrProp.length === 0) {
				allowAttrProp = Object.keys(attrFormatterDB);
			}

			if (allowAttrProp.indexOf(key) > -1) {
				return key;
			}
		}

		return null;
	};

	const addAttr = (rule: AttrFormatter | undefined, data: string | number | boolean, elem: Element) => {
		if (rule) {
			elem = rule(elem, data);
		}

		return elem;
	};

	export const attach: IAttachFn = (key, elem, attr) => {
		let changed = false;
		let allowKey = allow(key);
		if (allowKey) {
			let a = keyOfType(key, attr);
			let b = keyOfType(allowKey, attrFormatterDB);
			let data: (string | number | boolean)[] = [];

			if (!Array.isArray(attr[a])) {
				data = [attr[a] as string | number | boolean];
			} else {
				data = attr[a] as (string | number | boolean)[];
			}

			data.forEach((i) => {
				elem = addAttr(attrFormatterDB[b], i, elem);
			});

			delete attr[a];
			changed = true;
		}

		return { attr, elem, changed };
	};
}

export const bsConsNoElemArg = <T extends attr>(fn: <T extends attr>(attr: T) => attr, arg?: any[]) => {
	if (arg) {
		if (arg.length === 1) {
			return fn(arg[0] as T);
		} else {
			return fn({});
		}
	} else {
		return fn({});
	}
};

export const bsConstArg = <T extends attr>(prop: string, arg?: any[]) => {
	if (arg) {
		if (arg.length === 1) {
			if (isAttr<T>(arg[0])) {
				return arg[0] as T;
			} else {
				return { [prop]: arg[0] } as T;
			}
		} else if (arg.length === 2) {
			return mergeObject<T>({ [prop]: arg[1] } as T, arg[0] as T);
		} else {
			return {} as T;
		}
	} else {
		return {} as T;
	}
};

export const bsConstArgTag = <T extends attr>(
	prop: string,
	t1: string,
	t2: string,
	fn: (i: T) => boolean,
	arg?: any[]
) => {
	if (arg) {
		if (arg.length === 1) {
			if (isAttr<T>(arg[0])) {
				return fn(arg[0]) ? t2 : t1;
			} else {
				return t1;
			}
		} else if (arg.length === 2) {
			return fn(mergeObject<T>({ [prop]: arg[1] } as T, arg[0] as T)) ? t2 : t1;
		} else {
			return t1;
		}
	} else {
		return t1;
	}
};
