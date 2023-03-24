import { core } from "../src/index.js";
import { genMainContent, IAttrItemMenu } from "./ctl/main/container.js";
import { main } from "./ctl/main/_index.js";
import { data } from "./data/_index.js";

let CURRENT_PAGE = "doc_component_btngroup";

declare var PR: {
	prettyPrint: () => void;
};

let m = {
	doc: [
		{
			label: "Getting started",
			icon: { icon: "book-open", color: "primary" },
			item: [{ label: "Introduction", value: "doc_gettingstarted_introduction" }],
		},
		{
			label: "Component",
			icon: { icon: "hard-drive", color: "info" },
			item: [
				{ label: "Accordion", value: "doc_component_accordion" },
				{ label: "Alert", value: "doc_component_alert" },
				{ label: "Badge", value: "doc_component_badge" },
				{ label: "Breadcrumb", value: "doc_component_breadcrumb" },
				{ label: "Button", value: "doc_component_button" },
				{ label: "Button group", value: "doc_component_btngroup" },
			],
		},
	] as IAttrItemMenu[],
};

const getData = (value: string) => {
	let c = data(value);

	c.sourceUrl = `https://github.com/printf83/bsts/tree/master/doc/data/${value}.ts`;
	c.sourceWeb = "Github";
	return c;
};

const onmenuchange = (value: string) => {
	let contentbody = document.getElementById("bs-main") as HTMLElement;
	core.replaceChild(contentbody, genMainContent(getData(value)));
	core.init(contentbody);
	PR.prettyPrint();
};

core.documentReady(() => {
	let body = document.getElementById("main") as HTMLElement;
	core.replaceChild(
		body,
		new main.container({
			name: "BSTS",
			bgColor: "primary",
			textColor: "light",
			icon: { weight: "xl", icon: "github", type: "fab" },

			on: {
				"bs-menu-change": (e) => {
					onmenuchange((<CustomEvent>e).detail);
				},
			},

			itemMenu: m.doc,
			currentMenu: CURRENT_PAGE,

			content: getData(CURRENT_PAGE),

			itemInsideLink: [
				{ value: "doc", label: "Docs" },
				{ value: "example", label: "Examples" },
			],
			currentInsideLink: "doc",

			itemOutsideLink: [
				{ href: "#", icon: { icon: "github", type: "fab" }, label: "Github" },
				{ href: "#", icon: { icon: "twitter", type: "fab" }, label: "Twitter" },
				{ href: "#", icon: { icon: "bootstrap", type: "fab" }, label: "Bootstrap" },
			],

			itemTheme: [
				{ value: "light", icon: { icon: "sun", type: "fas" }, label: "Light" },
				{ value: "dark", icon: { icon: "moon", type: "fas" }, label: "Dark" },
				{ value: "auto", icon: { icon: "circle-half-stroke", type: "fas" }, label: "Auto" },
			],
			currentTheme: "auto",

			itemVersion: [{ value: "0.1.8", label: "Latest (0.1.8)" }],
			currentVersion: "0.1.8",
		})
	);

	core.init(body);
});
