import { core } from "../src/index.js";
import { genMainContent, IAttrItemMenu } from "./ctl/main/container.js";
import { main } from "./ctl/main/_index.js";
import { data } from "./data/_index.js";

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
			item: [{ label: "Accordion", value: "doc_component_accordion" }],
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
			currentMenu: "doc_gettingstarted_introduction",

			content: getData("doc_gettingstarted_introduction"),

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
			currentTheme: "dark",

			itemVersion: [{ value: "0.1.8", label: "Latest (0.1.8)" }],
			currentVersion: "0.1.8",
		})
	);
	// core.replaceChild(body, [
	// 	new b.navbar.containerHeader(
	// 		{
	// 			expand: "lg",
	// 			sticky: "top",
	// 			bgColor: "primary",
	// 			shadow: "sm",
	// 			// theme: "dark"
	// 		},
	// 		[
	// 			new b.navbar.innercontainerNav(
	// 				{
	// 					class: "bs-gutter",
	// 					container: "xxl",
	// 					flex: ["wrap", "lg-nowrap"],
	// 					label: "Main navigation",
	// 				},
	// 				[
	// 					new h.div({ class: "bs-navbar-toggle" }, [
	// 						new b.navbar.toggle.offcanvas(
	// 							{
	// 								padding: 2,
	// 								target: "#bsSidebar",
	// 								control: "bsSidebar",
	// 								label: "Toggle docs navigation",
	// 								textColor: "light",
	// 							},
	// 							b.icon.solid("bars")
	// 						),
	// 					]),

	// 					new b.navbar.brand(
	// 						{ href: "#", label: "Bootstrap", marginEnd: ["lg-2", 0], padding: 0, textColor: "light" },
	// 						b.icon.brand("bootstrap", { weight: "xl" })
	// 					),
	// 					new h.div({ display: "flex" }, [
	// 						new b.navbar.toggle.offcanvas(
	// 							{
	// 								display: ["flex", "lg-none"],
	// 								order: 3,
	// 								padding: 2,
	// 								target: "#bsNavbar",
	// 								controlby: "bsNavbar",
	// 								label: "Toggle navigation",
	// 								textColor: "light",
	// 							},
	// 							b.icon.solid("ellipsis-vertical")
	// 						),
	// 					]),
	// 					new b.offcanvas.container(
	// 						{
	// 							id: "bsNavbar",
	// 							bgColor: "primary",
	// 							placement: "end",
	// 							hide: "lg",
	// 							flex: "grow-1",
	// 							labelledby: "bsNavbarOffcanvasLabel",
	// 							scroll: true,
	// 						},
	// 						[
	// 							new b.offcanvas.header({ paddingX: 4, paddingBottom: 0 }, [
	// 								new b.offcanvas.title(
	// 									{ id: "bsNavbarOffcanvasLabel", textColor: "light" },
	// 									"Bootstrap"
	// 								),
	// 								new b.offcanvas.btnclose({ target: "#bsNavbar", white: true }),
	// 							]),
	// 							new b.offcanvas.body({ padding: [4, "lg-0"], paddingTop: 0 }, [
	// 								new h.hr({ display: "lg-none", textColor: "light" }),
	// 								new b.navbar.itemcontainer(
	// 									{ flex: ["wrap", "row"], class: "bs-navbar-nav" },
	// 									[
	// 										{ href: "#", label: "Docs", active: true },
	// 										{ href: "#", label: "Examples" },
	// 										{ href: "#", label: "Icons" },
	// 										{ href: "#", label: "Themes" },
	// 										{ href: "#", label: "Blog" },
	// 									].map((i) => {
	// 										return new b.navbar.item({ col: [6, "lg-auto"] }, [
	// 											new b.navbar.link(
	// 												{
	// 													paddingY: 2,
	// 													paddingX: [0, "lg-2"],
	// 													href: i.href,
	// 													active: i.active,
	// 													textColor: "light",
	// 												},
	// 												i.label
	// 											),
	// 										]);
	// 									})
	// 								),
	// 								new h.hr({ display: "lg-none", textColor: "light" }),
	// 								new b.navbar.itemcontainer({ flex: ["row", "wrap"], marginStart: "md-auto" }, [
	// 									...[
	// 										{ href: "#", icon: { type: "fab", icon: "github" }, label: "Github" },
	// 										{ href: "#", icon: { type: "fab", icon: "twitter" }, label: "Twitter" },
	// 										{ href: "#", icon: { type: "fab", icon: "bootstrap" }, label: "Bootstrap" },
	// 									].map((i) => {
	// 										return new b.navbar.item({ col: [6, "lg-auto"] }, [
	// 											new b.navbar.link(
	// 												{
	// 													paddingY: 2,
	// 													paddingX: [0, "lg-2"],
	// 													textColor: "light",
	// 													href: i.href,
	// 												},
	// 												new b.label(
	// 													{ icon: i.icon as IAttrBSIcon, labelDisplay: "lg-none" },
	// 													i.label
	// 												)
	// 											),
	// 										]);
	// 									}),
	// 									new b.navbar.item(
	// 										{
	// 											paddingY: [2, "lg-1"],
	// 											col: [12, "lg-auto"],
	// 										},
	// 										[
	// 											new b.verticalrule({
	// 												display: ["none", "lg-flex"],
	// 												height: 100,
	// 												marginX: "lg-2",
	// 												textColor: "light",
	// 											}),
	// 											new h.hr({ display: "lg-none", marginY: 2, textColor: "light" }),
	// 										]
	// 									),
	// 									new b.navbar.item({ dropdown: true }, [
	// 										new b.dropdown.toggle(
	// 											{
	// 												color: "link",
	// 												class: "nav-link",
	// 												paddingY: 2,
	// 												paddingX: [0, "lg-2"],
	// 												textColor: "light",
	// 											},
	// 											[
	// 												new h.span(
	// 													{ display: "lg-none", aria: { hidden: "true" } },
	// 													"Bootstrap"
	// 												),
	// 												new h.span("v5.3"),
	// 											]
	// 										),
	// 										new b.dropdown.menu({ positionView: "end" }, [
	// 											new b.dropdown.item("Latest (5.3.x)"),
	// 										]),
	// 									]),
	// 									new b.navbar.item(
	// 										{
	// 											paddingY: [2, "lg-1"],
	// 											col: [12, "lg-auto"],
	// 										},
	// 										[
	// 											new b.verticalrule({
	// 												display: ["none", "lg-flex"],
	// 												height: 100,
	// 												marginX: "lg-2",
	// 												textColor: "light",
	// 											}),
	// 											new h.hr({ display: "lg-none", marginY: 2, textColor: "light" }),
	// 										]
	// 									),
	// 									new b.navbar.item({ dropdown: true }, [
	// 										new b.dropdown.toggle(
	// 											{
	// 												id: "bs-theme",
	// 												color: "link",
	// 												class: "nav-link",
	// 												paddingY: 2,
	// 												paddingX: [0, "lg-2"],
	// 												display: "flex",
	// 												alignItem: "center",
	// 												textColor: "light",
	// 											},
	// 											new b.label({ icon: "moon", labelDisplay: "lg-none" }, "Toggle theme")
	// 										),
	// 										new b.dropdown.menu(
	// 											{ positionView: "end" },
	// 											[
	// 												{ value: "light", icon: "sun", label: "Light" },
	// 												{ value: "dark", icon: "moon", label: "Dark" },
	// 												{ value: "auto", icon: "circle-half-stroke", label: "Auto" },
	// 											].map((i) => {
	// 												return new b.dropdown.item(
	// 													{
	// 														on: {
	// 															click: (_e) => {
	// 																changeTheme(i.value, i.icon);
	// 															},
	// 														},
	// 													},
	// 													new b.label({ icon: i.icon }, i.label)
	// 												);
	// 											})
	// 										),
	// 									]),
	// 								]),
	// 							]),
	// 						]
	// 					),
	// 				]
	// 			),
	// 		]
	// 	),

	// 	new h.div({ class: ["bs-gutter", "bs-layout"], container: "xxl", marginTop: 3, marginY: "md-4" }, [
	// 		new h.aside({ class: "bs-sidebar" }, [
	// 			new b.offcanvas.container(
	// 				{
	// 					id: "bsSidebar",
	// 					hide: "lg",
	// 					placement: "start",
	// 					labelledby: "bsSidebarOffcanvasLabel",
	// 				},
	// 				[
	// 					new b.offcanvas.header({ border: "bottom" }, [
	// 						new b.offcanvas.title({ id: "bsSidebarOffcanvasLabel" }, "Browse docs"),
	// 						new b.offcanvas.btnclose({ target: "#bsSidebar" }),
	// 					]),
	// 					new b.offcanvas.body([
	// 						new h.nav({ id: "bs_docs_nav", class: "bs-links", width: 100, label: "Docs navication" }, [
	// 							new h.ul(
	// 								{
	// 									class: "bs-links-nav",
	// 									unstyle: true,
	// 									marginBottom: 0,
	// 									paddingBottom: [3, "md-2"],
	// 									paddingEnd: "lg-2",
	// 								},

	// 								[
	// 									{
	// 										label: "Getting started",
	// 										icon: { icon: "book-open", color: "primary" },
	// 										item: [
	// 											{ label: "Introduction", href: "#" },
	// 											{ label: "Download", href: "#", active: true },
	// 											{ label: "Contents", href: "#" },
	// 											{ label: "Browser & devices", href: "#" },
	// 											{ label: "Javascript", href: "#" },
	// 											{ label: "Webpack", href: "#" },
	// 											{ label: "Parcel", href: "#" },
	// 											{ label: "Vite", href: "#" },
	// 											{ label: "Accessibility", href: "#" },
	// 											{ label: "RFS", href: "#" },
	// 											{ label: "RTL", href: "#" },
	// 											{ label: "Contribute", href: "#" },
	// 										],
	// 									},
	// 									{
	// 										label: "Component",
	// 										icon: { icon: "hard-drive", color: "info" },
	// 										item: [
	// 											{ label: "Accordion", href: "#" },
	// 											{ label: "Alerts", href: "#" },
	// 											{ label: "Badge", href: "#" },
	// 											{ label: "Breadcrumb", href: "#" },
	// 											{ label: "Button", href: "#" },
	// 											{ label: "Button group", href: "#" },
	// 										],
	// 									},
	// 								].map((i) => {
	// 									return new h.li({ class: "bs-links-group", paddingY: 2 }, [
	// 										new h.strong(
	// 											{
	// 												class: "bs-links-heading",
	// 												display: "flex",
	// 												width: 100,
	// 												alignItem: "center",
	// 												fontWeight: "semibold",
	// 											},
	// 											new b.label({ icon: i.icon as IAttrBSIcon }, i.label)
	// 										),
	// 										new h.ul(
	// 											{
	// 												unstyle: true,
	// 												fontWeight: "normal",
	// 												paddingBottom: 2,
	// 												class: "small",
	// 											},
	// 											i.item.map((j) => {
	// 												return new h.li(
	// 													new h.a(
	// 														{
	// 															class: [
	// 																"bs-links-link",
	// 																j.active ? "active" : undefined,
	// 															],
	// 															display: "inline-block",
	// 															rounded: true,
	// 															href: j.href,
	// 															aria: { current: j.active ? "page" : undefined },
	// 														},
	// 														j.label
	// 													)
	// 												);
	// 											})
	// 										),
	// 									]);
	// 								})
	// 							),
	// 						]),
	// 					]),
	// 				]
	// 			),
	// 		]),
	// 		new h.main({ order: 1, class: "bs-main" }, [
	// 			new h.div({ class: "bs-intro", paddingTop: 2, paddingStart: "lg-2" }, [
	// 				new example.pagetitle(
	// 					{
	// 						sourceUrl: "#",
	// 						addedVersion: "5.3",
	// 					},
	// 					"Get {{started}}"
	// 				),
	// 				new example.description(
	// 					"{{https://www.google.com::Bootstrap}} is a {{b::powerful}}, feature-packed {{i::frontend}} toolkit. {{u::Build}} anything—from prototype to production—in {{minutes.}}"
	// 				),
	// 			]),
	// 			new h.div(
	// 				{
	// 					class: "bs-toc",
	// 					marginTop: 3,
	// 					marginBottom: [5, "lg-5"],
	// 					marginY: "lg-0",
	// 					paddingStart: "xl-3",
	// 					textColor: "body-secondary",
	// 				},
	// 				[
	// 					new b.collapse.toggle(
	// 						{
	// 							color: "link",
	// 							padding: "md-0",
	// 							marginBottom: [2, "md-0"],
	// 							textDecoration: "none",
	// 							class: "bs-toc-toggle",
	// 							display: "md-none",
	// 							target: "#tocContents",
	// 							control: "tocContents",
	// 						},
	// 						[
	// 							"On this page",
	// 							new b.icon({
	// 								icon: "sort",
	// 								display: "md-none",
	// 								marginStart: 2,
	// 								aria: { hidden: "true" },
	// 							}),
	// 						]
	// 					),
	// 					new h.strong({ display: ["none", "md-block"], fontSize: 6, marginY: 2 }, "On this page"),
	// 					new h.hr({ display: ["none", "md-block"], marginY: 2 }),
	// 					new b.collapse.container(
	// 						{
	// 							id: "tocContents",
	// 							class: "bs-toc-collapse",
	// 						},
	// 						new h.nav(
	// 							{ id: "TableOfContents" },
	// 							new h.ul(
	// 								[
	// 									{ href: "#", label: "Quick start" },
	// 									{ href: "#", label: "CDN links" },
	// 									{ href: "#", label: "Next steps" },
	// 									{ href: "#", label: "JS components" },
	// 									{
	// 										href: "#",
	// 										label: "Important globals",
	// 										item: [
	// 											{ href: "#", label: "HTML5 doctype" },
	// 											{ href: "#", label: "Responsive meta tag" },
	// 											{ href: "#", label: "Box-sizing" },
	// 											{ href: "#", label: "Reboot" },
	// 										],
	// 									},
	// 									{ href: "#", label: "Community" },
	// 								].map((i) => {
	// 									return new h.li([
	// 										new h.a({ href: i.href }, i.label),
	// 										i.item
	// 											? new h.ul(
	// 													i.item.map((j) => {
	// 														return new h.li(new h.a({ href: j.href }, j.label));
	// 													})
	// 											  )
	// 											: "",
	// 									]);
	// 								})
	// 							)
	// 						)
	// 					),
	// 				]
	// 			),
	// 			new h.div({ class: "bs-content", paddingStart: "lg-2" }, [
	// 				new example.title("Quick start "),
	// 				new example.text(
	// 					"Get started by including Bootstrap’s production-ready CSS and JavaScript via CDN {{without}} the {{need for any}} build steps. See it in practice with this Bootstrap {{http://www.codepane.com::CodePen}} demo."
	// 				),
	// 				new example.code({
	// 					output: () => {
	// 						//make first letter uppercase
	// 						let caps = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

	// 						return [
	// 							"primary",
	// 							"secondary",
	// 							"success",
	// 							"danger",
	// 							"info",
	// 							"warning",
	// 							"light",
	// 							"dark",
	// 							"link",
	// 						].map((i) => new b.button({ color: i as IAttrBSButton["color"] }, caps(i)));
	// 					},
	// 				}),
	// 				new example.title("Quick start 2"),
	// 				new example.text(
	// 					"Get started by including Bootstrap’s production-ready CSS and JavaScript via CDN {{without}} the {{need for any}} build steps. See it in practice with this Bootstrap {{http://www.codepane.com::CodePen}} demo."
	// 				),
	// 				new example.codepreview({
	// 					type: "ts",
	// 					code: `
	// 					() => {
	// 						//sample
	// 						return [
	// 							"primary",
	// 							"secondary",
	// 							"success",
	// 							"danger",
	// 							"info",
	// 							"warning",
	// 							"light",
	// 							"dark",
	// 							"link",
	// 						].map((i) => new b.button({ color: i as IAttrBSButton["color"] }, i));
	// 					}`,
	// 				}),
	// 				new example.codepreview({
	// 					type: "js",
	// 					code: `
	// 					() => {
	// 						//sample
	// 						return 2+2;
	// 					}`,
	// 				}),

	// 				new example.codepreview({
	// 					type: "css",
	// 					code: `
	// 					.button {
	// 						color:#fefefe;
	// 					}
	// 					`,
	// 				}),

	// 				new example.codepreview({
	// 					type: "html",
	// 					code: `
	// 					<div>test</div>
	// 					`,
	// 				}),
	// 			]),
	// 		]),
	// 	]),
	// ]);

	core.init(body);
});
