import { IAttrBSIcon } from "../../../src/bootstrap/icon.js";
import { bootstrapType, bsConsNoElemArg } from "../../../src/core/base/bootstrap.js";
import { IAttr, IElem, isTag, tag } from "../../../src/core/base/tag.js";
import { mergeClass } from "../../../src/core/fn/mergeClass.js";
import { div } from "../../../src/html/div.js";
import { core, h, b } from "../../../src/index.js";
import { subtitle } from "../example/subtitle.js";
import { title } from "../example/title.js";
import { example } from "../example/_index.js";

const changeTheme = (value: string, icon: IAttrBSIcon) => {
	let bsTheme = document.getElementById("bs-theme") as HTMLElement;
	let bsThemeMenu = bsTheme.nextSibling as HTMLElement;

	let lastActive = bsThemeMenu.querySelectorAll(".dropdown-item.active")[0];
	if (lastActive) {
		lastActive.classList.remove("active");
		lastActive.removeAttribute("aria-current");
	}

	let newActive = bsThemeMenu.querySelectorAll(`.dropdown-item[data-value='${value}']`)[0];
	if (newActive) {
		newActive.classList.add("active");
		newActive.setAttribute("aria-current", "true");
	}

	core.replaceChild(bsTheme, new b.label({ icon: icon, labelDisplay: "lg-none" }, "Toggle theme"));
	document.getElementsByTagName("HTML")[0].setAttribute("data-bs-theme", value);

	let root = bsTheme.closest(".bs-main-root");
	root?.dispatchEvent(new CustomEvent("bs-theme-change", { detail: value }));
};

const changeVersion = (value: string) => {
	let bsVersion = document.getElementById("bs-version") as HTMLElement;
	let bsVersionMenu = bsVersion.nextSibling as HTMLElement;
	let bsVersionLabel = document.getElementById("bs-version-label") as HTMLElement;

	let lastActive = bsVersionMenu.querySelectorAll(".dropdown-item.active")[0];
	if (lastActive) {
		lastActive.classList.remove("active");
		lastActive.removeAttribute("aria-current");
	}

	let newActive = bsVersionMenu.querySelectorAll(`.dropdown-item[data-value='${value}']`)[0];
	if (newActive) {
		newActive.classList.add("active");
		newActive.setAttribute("aria-current", "true");
	}

	core.replaceWith(bsVersionLabel, new h.span({ id: "bs-version-label" }, `v${value}`));

	let root = bsVersion.closest(".bs-main-root");
	root?.dispatchEvent(new CustomEvent("bs-version-change", { detail: value }));
};

const changeInsideLink = (value: string) => {
	let bsInsideLink = document.getElementById("bs-inside-link") as HTMLElement;

	let lastActive = bsInsideLink.querySelectorAll(".nav-link.active")[0];
	if (lastActive) {
		lastActive.classList.remove("active");
	}

	let newActive = bsInsideLink.querySelectorAll(`.nav-link[data-value='${value}']`)[0];
	if (newActive) {
		newActive.classList.add("active");
	}

	let root = bsInsideLink.closest(".bs-main-root");
	root?.dispatchEvent(new CustomEvent("bs-inside-link-change", { detail: value }));
};

const changeMenu = (value: string) => {
	let bsMenu = document.getElementById("bs-menu") as HTMLElement;

	let lastActive = bsMenu.querySelectorAll(".bs-links-link.active")[0];
	if (lastActive) {
		lastActive.classList.remove("active");
		lastActive.removeAttribute("aria-current");
	}

	let newActive = bsMenu.querySelectorAll(`.bs-links-link[data-value='${value}']`)[0];
	if (newActive) {
		newActive.classList.add("active");
		newActive.setAttribute("aria-current", "page");
	}

	let root = bsMenu.closest(".bs-main-root");
	root?.dispatchEvent(new CustomEvent("bs-menu-change", { detail: value }));
};

export type availabelTheme = "dark" | "light" | "auto";

export interface IAttrItemInsideLink {
	value: string;
	label: string;
}

export interface IAttrItemOutsideLink {
	href: string;
	label: string;
	icon: IAttrBSIcon;
}

export interface IAttrItemTheme {
	value: string;
	icon: IAttrBSIcon;
	label: string;
}

export interface IAttrItemVersion {
	value: string;
	label: string;
}

export interface IAttrItemMenu {
	label: string;
	icon: IAttrBSIcon;
	item: IAttrItemSubMenu[];
}

export interface IAttrItemSubMenu {
	label: string;
	value: string;
}

export interface IAttrTocItem {
	href: string;
	label: string;
	item?: IAttrTocItem[];
}

export interface IAttrContent {
	title?: string;
	sourceUrl?: string;
	sourceWeb?: string;
	addedVersion?: string;

	description?: string;

	item?: IElem;
}

export interface IAttrFooterItem {
	href: string;
	label: string;
}

export interface IAttrFooter {
	title: string;
	item: IAttrFooterItem[];
}

const genTheme = (
	textColor: bootstrapType.textColor[number],
	navbarItemTheme?: IAttrItemTheme[],
	currentTheme?: string
) => {
	if (navbarItemTheme) {
		let getCurrentIconIndex = navbarItemTheme.find((j) => j.value === currentTheme);
		let currentIcon = getCurrentIconIndex?.icon;

		return [
			new b.navbar.item(
				{
					paddingY: [2, "lg-1"],
					col: [12, "lg-auto"],
				},
				[
					new b.verticalrule({
						display: ["none", "lg-flex"],
						height: 100,
						marginX: "lg-2",
						textColor: textColor,
					}),
					new h.hr({ display: "lg-none", marginY: 2, textColor: "light" }),
				]
			),
			new b.navbar.item({ dropdown: true }, [
				new b.dropdown.toggle(
					{
						id: "bs-theme",
						color: "link",
						class: "nav-link",
						paddingY: 2,
						paddingX: [0, "lg-2"],
						display: "flex",
						alignItem: "center",
						textColor: textColor,
					},
					new b.label(
						{
							icon: currentIcon,
							labelDisplay: "lg-none",
						},
						"Toggle theme"
					)
				),
				new b.dropdown.menu(
					{ positionView: "end" },
					navbarItemTheme.map((i) => {
						return new b.dropdown.item(
							{
								on: {
									click: (_e) => {
										changeTheme(i.value, i.icon);
									},
								},
								active: i.value === currentTheme,
								data: { value: i.value },
							},
							new b.label({ icon: i.icon }, i.label)
						);
					})
				),
			]),
		];
	} else {
		return [];
	}
};

const genVersion = (
	textColor: bootstrapType.textColor[number],
	name: string,
	navbarItemVersion?: IAttrItemVersion[],
	currentVersion?: string
) => {
	if (navbarItemVersion) {
		return [
			new b.navbar.item(
				{
					paddingY: [2, "lg-1"],
					col: [12, "lg-auto"],
				},
				[
					new b.verticalrule({
						display: ["none", "lg-flex"],
						height: 100,
						marginX: "lg-2",
						textColor: textColor,
					}),
					new h.hr({ display: "lg-none", marginY: 2, textColor: "light" }),
				]
			),
			new b.navbar.item({ dropdown: true }, [
				new b.dropdown.toggle(
					{
						id: "bs-version",
						color: "link",
						class: "nav-link",
						paddingY: 2,
						paddingX: [0, "lg-2"],
						textColor: textColor,
					},
					[
						new h.span({ display: "lg-none", marginEnd: 2, aria: { hidden: "true" } }, name),
						new h.span({ id: "bs-version-label" }, `v${currentVersion}`),
					]
				),
				new b.dropdown.menu(
					{ positionView: "end" },
					navbarItemVersion.map((i) => {
						return new b.dropdown.item(
							{
								on: {
									click: (_e) => {
										changeVersion(i.value);
									},
								},
								active: i.value === currentVersion,
								data: { value: i.value },
							},
							i.label
						);
					})
				),
			]),
		];
	} else {
		return [];
	}
};

const genOutsideLink = (
	textColor: bootstrapType.textColor[number],
	itemOutsideLink?: IAttrItemOutsideLink[],
	itemVersion?: tag[],
	itemTheme?: tag[]
) => {
	return [
		new h.hr({ display: "lg-none", textColor: "light" }),
		new b.navbar.itemcontainer({ flex: ["row", "wrap"], marginStart: "md-auto" }, [
			...(itemOutsideLink
				? itemOutsideLink.map((i) => {
						return new b.navbar.item({ col: [6, "lg-auto"] }, [
							new b.navbar.link(
								{
									paddingY: 2,
									paddingX: [0, "lg-2"],
									textColor: textColor,
									href: i.href,
								},
								new b.label({ icon: i.icon, labelDisplay: "lg-none" }, i.label)
							),
						]);
				  })
				: ""),
			...(itemVersion ? itemVersion : ""),
			...(itemTheme ? itemTheme : ""),
		]),
	];
};

const genInsideLink = (
	textColor: bootstrapType.textColor[number],
	itemInsideLink?: IAttrItemInsideLink[],
	currentInsideLink?: string
) => {
	if (itemInsideLink) {
		return [
			new h.hr({ display: "lg-none", textColor: "light" }),
			new b.navbar.itemcontainer(
				{ flex: ["wrap", "row"], class: "bs-navbar-nav", id: "bs-inside-link" },
				itemInsideLink.map((i) => {
					return new b.navbar.item({ col: [6, "lg-auto"] }, [
						new b.navbar.link(
							{
								paddingY: 2,
								paddingX: [0, "lg-2"],
								href: "#",
								active: i.value === currentInsideLink,
								textColor: textColor,
								data: { value: i.value },
								on: {
									click: (_e) => {
										changeInsideLink(i.value);
									},
								},
							},
							i.label
						),
					]);
				})
			),
		];
	} else {
		return [];
	}
};

const genMenu = (itemMenu?: IAttrItemMenu[], currentMenu?: string) => {
	if (itemMenu) {
		return itemMenu.map((i) => {
			return new h.li({ class: "bs-links-group", paddingY: 2 }, [
				new h.strong(
					{
						class: "bs-links-heading",
						display: "flex",
						width: 100,
						alignItem: "center",
						fontWeight: "semibold",
					},
					new b.label({ icon: i.icon }, i.label)
				),
				new h.ul(
					{
						unstyle: true,
						fontWeight: "normal",
						paddingBottom: 2,
						class: "small",
					},
					i.item.map((j) => {
						let active = j.value === currentMenu ? true : false;

						return new h.li(
							new h.a(
								{
									class: ["bs-links-link", active ? "active" : undefined],
									display: "inline-block",
									rounded: true,
									href: "#",
									aria: { current: active ? "page" : undefined },
									data: { value: j.value },
									on: {
										click: (_e) => {
											changeMenu(j.value);
										},
									},
								},
								j.label
							)
						);
					})
				),
			]);
		});
	} else {
		return [];
	}
};

const genIntro = (content?: IAttrContent) => {
	if (content) {
		return new h.div({ class: "bs-intro", paddingTop: 2, paddingStart: "lg-2" }, [
			content.title
				? new example.pagetitle(
						{
							sourceWeb: content.sourceWeb,
							sourceUrl: content.sourceUrl,
							addedVersion: content.addedVersion,
						},
						content.title ? content.title : ""
				  )
				: "",
			content.description ? new example.description(content.description) : "",
		]);
	} else {
		return "";
	}
};

const genToc = (content?: IAttrContent) => {
	if (content && content.item && Array.isArray(content.item)) {
		let t: IAttrTocItem[] = [];

		content.item.forEach((i) => {
			if (isTag<title>(i) && i.tag === "h2") {
				if (i.attr?.id && i.attr?.data?.text) {
					let item = { href: `#${i.attr?.id}`, label: i.attr?.data?.text as string };
					t.push(item);
				}
			} else if (isTag<subtitle>(i) && i.tag === "h3") {
				if (i.attr?.id && i.attr?.data?.text) {
					let item = { href: `#${i.attr?.id}`, label: i.attr?.data?.text as string };

					if (t.length === 0) {
						t.push(item);
					} else {
						if (!t[t.length - 1].item) {
							t[t.length - 1].item = [];
						}

						t[t.length - 1].item?.push(item);
					}
				}
			}
		});

		if (t.length > 0) {
			return new h.div(
				{
					class: "bs-toc",
					marginTop: 3,
					marginBottom: [5, "lg-5"],
					marginY: "lg-0",
					paddingStart: "xl-3",
					textColor: "body-secondary",
				},
				[
					new b.collapse.toggle(
						{
							color: "link",
							padding: "md-0",
							marginBottom: [2, "md-0"],
							textDecoration: "none",
							class: "bs-toc-toggle",
							display: "md-none",
							target: "#tocContents",
							control: "tocContents",
						},
						[
							"On this page",
							new b.icon({
								icon: "sort",
								display: "md-none",
								marginStart: 2,
								aria: { hidden: "true" },
							}),
						]
					),
					new h.h(5, { display: ["none", "md-block"], fontSize: 6, marginY: 2 }, "On this page"),
					new h.hr({ display: ["none", "md-block"], marginY: 2 }),
					new b.collapse.container(
						{
							id: "tocContents",
							class: "bs-toc-collapse",
						},
						new h.nav(
							{ id: "TableOfContents" },
							new h.ul(
								t.map((i) => {
									return new h.li([
										new h.a({ href: i.href }, i.label),
										i.item
											? new h.ul(
													i.item.map((j) => {
														return new h.li(new h.a({ href: j.href }, j.label));
													})
											  )
											: "",
									]);
								})
							)
						)
					),
				]
			);
		} else {
			return "";
		}
	} else {
		return "";
	}
};

const genContent = (content?: IAttrContent) => {
	if (content && content.item) {
		return new b.scrollspy(
			{
				target: "#TableOfContents",
				smooth: true,
				class: "bs-content",
				paddingStart: "lg-2",
			},
			content.item
		);
	} else {
		return "";
	}
};

const genFooter = (itemFooter?: IAttrFooter[]) => {
	if (itemFooter) {
		return itemFooter.map((i, ix) => {
			return new h.div({ col: [6, "lg-2"], marginBottom: 3, offset: ix === 0 ? "lg-1" : undefined }, [
				new h.h(5, i.title),
				new h.ul(
					{ unstyle: true },
					i.item.map((j) => {
						return new h.li({ marginBottom: 2 }, new h.a({ href: j.href }, j.label));
					})
				),
			]);
		});
	} else {
		return [];
	}
};

export const genMainContent = (content?: IAttrContent) => {
	return [genIntro(content), genToc(content), genContent(content)];
};

export interface IAttrBSMainContainer extends IAttr {
	icon?: IAttrBSIcon;
	name?: string;

	textColor?: bootstrapType.textColor[number];
	bgColor?: bootstrapType.bgColor[number];

	itemOutsideLink?: IAttrItemOutsideLink[];

	itemMenu?: IAttrItemMenu[];
	itemInsideLink?: IAttrItemInsideLink[];
	itemTheme?: IAttrItemTheme[];
	itemVersion?: IAttrItemVersion[];
	itemFooter?: IAttrFooter[];

	currentMenu?: string;
	currentInsideLink?: string;
	currentTheme?: availabelTheme;
	currentVersion?: string;

	content?: IAttrContent;
}

const convert = (attr: IAttrBSMainContainer) => {
	attr.class = mergeClass(attr.class, "bs-main-root");
	attr.elem = [
		new b.navbar.containerHeader(
			{
				expand: "lg",
				sticky: "top",
				bgColor: attr.bgColor || "primary",
				shadow: "sm",
				padding: 2,
			},
			[
				new b.navbar.innercontainerNav(
					{
						class: "bs-gutter",
						container: "xxl",
						padding: 0,
						flex: ["wrap", "lg-nowrap"],
						label: "Main navigation",
					},
					[
						new h.div({ class: "bs-navbar-toggle" }, [
							new b.navbar.toggle.offcanvas(
								{
									padding: 2,
									target: "#bsSidebar",
									control: "bsSidebar",
									label: "Toggle docs navigation",
									textColor: attr.textColor || "light",
								},
								b.icon.solid("bars")
							),
						]),

						new b.navbar.brand(
							{
								href: "#",
								label: attr.name || "Bootstrap",
								marginEnd: ["lg-2", 0],
								fontSize: 6,
								padding: 0,
								textColor: attr.textColor || "light",
							},
							attr.icon ? new b.icon(attr.icon) : b.icon.brand("bootstrap", { weight: "xl" })
						),
						new h.div({ display: "flex" }, [
							new b.navbar.toggle.offcanvas(
								{
									display: ["flex", "lg-none"],
									order: 3,
									padding: 2,
									target: "#bsNavbar",
									control: "bsNavbar",
									label: "Toggle navigation",
									textColor: attr.textColor || "light",
								},
								b.icon.solid("ellipsis")
							),
						]),
						new b.offcanvas.container(
							{
								id: "bsNavbar",
								bgColor: attr.bgColor || "primary",
								placement: "end",
								hide: "lg",
								flex: "grow-1",
								labelledby: "bsNavbarOffcanvasLabel",
								scroll: true,
							},
							[
								new b.offcanvas.header({ paddingX: 4, paddingBottom: 0 }, [
									new b.offcanvas.title(
										{ id: "bsNavbarOffcanvasLabel", textColor: attr.textColor || "light" },
										attr.name || "Bootstrap"
									),
									new b.offcanvas.btnclose({ target: "#bsNavbar", white: true }),
								]),
								new b.offcanvas.body({ padding: [4, "lg-0"], paddingTop: 0 }, [
									...genInsideLink(
										attr.textColor || "primary",
										attr.itemInsideLink,
										attr.currentInsideLink
									),
									...(attr.itemOutsideLink || attr.itemVersion || attr.itemTheme
										? genOutsideLink(
												attr.textColor || "primary",
												attr.itemOutsideLink,
												genVersion(
													attr.textColor || "primary",
													attr.name || "Bootstrap",
													attr.itemVersion,
													attr.currentVersion
												),
												genTheme(attr.textColor || "primary", attr.itemTheme, attr.currentTheme)
										  )
										: []),
								]),
							]
						),
					]
				),
			]
		),

		new h.div({ class: ["bs-gutter", "bs-layout"], container: "xxl", marginTop: 3, marginY: "md-4" }, [
			new h.aside({ class: "bs-sidebar" }, [
				new b.offcanvas.container(
					{
						id: "bsSidebar",
						hide: "lg",
						placement: "start",
						labelledby: "bsSidebarOffcanvasLabel",
					},
					[
						new b.offcanvas.header({ border: "bottom" }, [
							new b.offcanvas.title({ id: "bsSidebarOffcanvasLabel" }, "Browse docs"),
							new b.offcanvas.btnclose({ target: "#bsSidebar" }),
						]),
						new b.offcanvas.body([
							new h.nav({ id: "bs-menu", class: "bs-links", width: 100, label: "Docs navication" }, [
								new h.ul(
									{
										class: "bs-links-nav",
										unstyle: true,
										marginBottom: 0,
										paddingBottom: [3, "md-2"],
										paddingEnd: "lg-2",
									},

									genMenu(attr.itemMenu, attr.currentMenu)
								),
							]),
						]),
					]
				),
			]),
			new h.main({ order: 1, class: "bs-main", id: "bs-main" }, [
				genIntro(attr.content),
				genToc(attr.content),
				genContent(attr.content),
			]),
		]),
		new h.footer(
			{ class: "bs-footer", paddingY: [4, "md-5"], marginTop: 5, bgColor: "body-tertiary" },
			new h.div(
				{ container: true, paddingY: 4, paddingX: [4, "md-3"], textColor: "body-secondary" },
				new h.div({ row: true }, [
					new h.div({ col: "lg-3", marginBottom: 3 }, [
						new h.a(
							{
								display: "inline-flex",
								alignItem: "center",
								marginBottom: 2,
								textColor: "body-secondary",
								textDecoration: "none",
								href: "#",
								label: attr.name || "Bootstrap",
							},
							[
								attr.icon ? new b.icon(attr.icon) : b.icon.brand("bootstrap", { weight: "xl" }),
								new h.span({ fontSize: 5, marginStart: 2 }, attr.name || "Bootstrap"),
							]
						),
						new h.ul({ unstyle: true, class: "small" }, [
							new h.li(
								{ marginBottom: 2 },
								"Designed and built with all the love in the world by the {{https://getbootstrap.com/docs/5.3/about/team/::Bootstrap team}} with the help of our contributors."
							),
							new h.li(
								{ marginBottom: 2 },
								"Code licensed {{https://github.com/twbs/bootstrap/blob/main/LICENSE::MIT}}, docs {{https://creativecommons.org/licenses/by/3.0/::CC BY 3.0}}."
							),
							new h.li({ marginBottom: 2 }, [
								"Current view port is : ",
								new h.span(
									{
										display: ["inline-block", "sm-none"],
									},
									"Extra small {{k::xs}}"
								),
								new h.span({ display: ["sm-inline-block", "md-none", "none"] }, "Small {{k::sm}}"),
								new h.span({ display: ["md-inline-block", "lg-none", "none"] }, "Medium {{k::md}}"),
								new h.span({ display: ["lg-inline-block", "xl-none", "none"] }, "Large {{k::lg}}"),
								new h.span(
									{ display: ["xl-inline-block", "xxl-none", "none"] },
									"Extra large {{k::xl}}"
								),
								new h.span({ display: ["xxl-inline-block", "none"] }, "Super large {{k::xxl}}"),
							]),
							new h.li({ marginBottom: 2 }, "Currently v5.3.0-alpha2."),
						]),
					]),
					...genFooter(attr.itemFooter),
				])
			)
		),
	];

	delete attr.icon;
	delete attr.name;

	delete attr.textColor;
	delete attr.bgColor;

	delete attr.itemOutsideLink;

	delete attr.itemMenu;
	delete attr.itemInsideLink;
	delete attr.itemTheme;
	delete attr.itemVersion;
	delete attr.itemFooter;

	delete attr.currentMenu;
	delete attr.currentInsideLink;
	delete attr.currentTheme;
	delete attr.currentVersion;

	delete attr.content;

	return attr;
};

export class container extends div {
	constructor();
	constructor(attr: IAttrBSMainContainer);
	constructor(...arg: any[]) {
		super(bsConsNoElemArg<IAttrBSMainContainer>(convert, arg));
	}
}
