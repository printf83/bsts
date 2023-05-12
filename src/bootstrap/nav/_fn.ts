import { mergeObject } from "../../core/mergeObject.js";
import { IElem } from "../../core/tag.js";
import { UUID } from "../../core/uuid.js";
import { Container, container as contentContainer } from "./content/container.js";
import { header } from "../card/header.js";
import { ContainerNav, containerNav } from "./header/containerNav.js";
import { container as headerContainer } from "./header/container.js";
import { mergeClass } from "../../core/mergeClass.js";

export interface TabItem {
	label?: IElem;
	elem?: IElem;
	active?: boolean;
	disabled?: boolean;
}

export interface Tab extends Omit<ContainerNav, "item" | "container"> {
	card?: true;
	animation?: boolean;
	item?: TabItem | TabItem[];
	attrContent?: Container;
}

//only available as function
export const Tab = (attr: Tab) => {
	if (attr.item) {
		if (!Array.isArray(attr.item)) {
			attr.item = [attr.item];
		}

		attr.id ??= UUID();
		attr.type ??= "tab";
		attr.animation ??= true;

		let tAttr = Object.assign({}, attr);

		tAttr.class = mergeClass(tAttr.class, attr.card ? `card-header-${attr.type}s` : undefined);

		delete tAttr.card;
		delete tAttr.animation;
		delete tAttr.item;
		delete tAttr.attrContent;

		tAttr.item = attr.item.map((i, ix) => {
			return {
				active: i.active,
				disabled: i.disabled,
				id: `${attr.id}-tab-${ix}`,
				target: `#${attr.id}-content-${ix}`,
				controlfor: `#${attr.id}-content-${ix}`,
				toggle: "tab",
				elem: i.label,
			};
		});

		let THeader: containerNav | headerContainer;
		THeader = new containerNav(tAttr as ContainerNav);

		let tAttrContent = mergeObject<Container>(
			{
				id: `${attr.id}-content`,
				marginTop: attr.card || attr.vertical ? undefined : 3,
				class: attr.card ? "card-body" : undefined,
				item: attr.item.map((i, ix) => {
					return {
						id: `${attr.id}-content-${ix}`,
						role: "tabpanel",
						labelledby: `${attr.id}-tab-${ix}`,
						active: i.active,
						animation: attr.animation,
						elem: i.elem,
					};
				}),
			},
			attr.attrContent ? attr.attrContent : {}
		);

		let TContent: contentContainer = new contentContainer(tAttrContent);

		if (attr.card) {
			return [new header(THeader), TContent];
		} else {
			return [THeader, TContent];
		}
	}
	return "";
};
