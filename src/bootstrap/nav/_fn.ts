import { mergeObject } from "../../core/mergeObject.js";
import { IElem } from "../../core/tag.js";
import { UUID } from "../../core/uuid.js";
import { IBsNavContentContainer, container as contentContainer } from "./content/container.js";
import { header } from "../card/header.js";
import { IBsNavContainerNav, containerNav } from "./header/containerNav.js";
import { container as headerContainer } from "./header/container.js";
import { mergeClass } from "../../core/mergeClass.js";

export interface IBsTabItem {
	label?: IElem;
	elem?: IElem;
	active?: boolean;
	disabled?: boolean;
}

export interface IBsTab extends Omit<IBsNavContainerNav, "item" | "container"> {
	card?: true;
	animation?: boolean;
	item?: IBsTabItem | IBsTabItem[];
	attrContent?: IBsNavContentContainer;
}

export const Tab = (attr: IBsTab) => {
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
				id: `${attr.id}_tab_${ix}`,
				target: `#${attr.id}_content_${ix}`,
				controlfor: `#${attr.id}_content_${ix}`,
				toggle: "tab",
				elem: i.label,
			};
		});

		let THeader: containerNav | headerContainer;
		THeader = new containerNav(tAttr as IBsNavContainerNav);

		let tAttrContent = mergeObject<IBsNavContentContainer>(
			{
				id: `${attr.id}_content`,
				marginTop: attr.card || attr.vertical ? undefined : 3,
				class: attr.card ? "card-body" : undefined,
				item: attr.item.map((i, ix) => {
					return {
						id: `${attr.id}_content_${ix}`,
						role: "tabpanel",
						labelledby: `${attr.id}_tab_${ix}`,
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
