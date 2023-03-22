import { IAttrContent } from "../ctl/main/container.js";
import { doc_component_accordion } from "./doc_component_accordion.js";
import { doc_gettingstarted_introduction } from "./doc_gettingstarted_introduction.js";

export const data = (doc: string): IAttrContent => {
	switch (doc) {
		case "doc_component_accordion":
			return doc_component_accordion;
		case "doc_gettingstarted_introduction":
			return doc_gettingstarted_introduction;
		default:
			return { title: "Ooopppssss!", description: `Document {{${doc}}} not found!` } as IAttrContent;
	}
};
