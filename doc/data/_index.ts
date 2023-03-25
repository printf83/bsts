import { IAttrContent } from "../ctl/main/container.js";
import { doc_component_alert } from "./doc_component_alert.js";
import { doc_component_accordion } from "./doc_component_accordion.js";
import { doc_gettingstarted_introduction } from "./doc_gettingstarted_introduction.js";
import { doc_component_badge } from "./doc_component_badge.js";
import { doc_component_breadcrumb } from "./doc_component_breadcrumb.js";
import { doc_component_button } from "./doc_component_button.js";
import { doc_component_btngroup } from "./doc_component_btngroup.js";
import { doc_component_card } from "./doc_component_card.js";
import { doc_component_carousel } from "./doc_component_carousel.js";
import { doc_component_btnclose } from "./doc_component_btnclose.js";

export const data = (doc: string): IAttrContent => {
	switch (doc) {
		case "doc_component_accordion":
			return doc_component_accordion;
		case "doc_component_alert":
			return doc_component_alert;
		case "doc_component_badge":
			return doc_component_badge;
		case "doc_component_breadcrumb":
			return doc_component_breadcrumb;
		case "doc_component_button":
			return doc_component_button;
		case "doc_component_btngroup":
			return doc_component_btngroup;
		case "doc_component_card":
			return doc_component_card;
		case "doc_component_carousel":
			return doc_component_carousel;
		case "doc_component_btnclose":
			return doc_component_btnclose;

		case "doc_gettingstarted_introduction":
			return doc_gettingstarted_introduction;
		default:
			return { title: "Ooopppssss!", description: `Document {{${doc}}} not found!` } as IAttrContent;
	}
};
