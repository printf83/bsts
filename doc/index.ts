import { IAttrBSButton } from "../lib/bootstrap/button.js";
import { b, core, h } from "../lib/index.js";

core.documentReady(() => {
	let body = document.getElementById("main") as HTMLElement;
	core.replaceChild(body, [
		new b.navbar.containerHeader({ expand: "lg", sticky: "top", textBgColor: "primary" }, [
			new b.navbar.innercontainerNav(
				{
					class: "bs-gutter",
					container: "xxl",
					flex: ["wrap", "lg-nowrap"],
					label: "Main navigation",
				},
				[
					new h.div({ class: "bs-navbar-toggle" }, [
						new b.navbar.toggle.offcanvas({
							padding: 2,
							target: "#bsSidebar",
							control: "bsSidebar",
							label: "Toggle docs navigation",
						}),
					]),

					new b.navbar.brand(
						{ href: "#", label: "Bootstrap", marginEnd: ["lg-2", 0], padding: 0 },
						b.icon.brand("bootstrap", { weight: "xl" })
					),
					new h.div({ display: "flex" }, [
						new b.navbar.toggle.offcanvas({
							display: ["flex", "lg-none"],
							order: 3,
							padding: 2,
							target: "#bsNavbar",
							controlby: "bsNavbar",
							label: "Toggle navigation",
						}),
					]),
					new b.offcanvas.container(
						{
							id: "bsNavbar",
							placement: "end",
							hide: "lg",
							flex: "grow-1",
							labelledby: "bsNavbarOffcanvasLabel",
							scroll: true,
						},
						[
							new b.offcanvas.header({ paddingX: 4, paddingBottom: 0 }, [
								new b.offcanvas.title({ id: "bsNavbarOffcanvasLabel" }, "Bootstrap"),
								new b.offcanvas.btnclose({ target: "#bsNavbar" }),
							]),
							new b.offcanvas.body({ padding: [4, "lg-0"], paddingTop: 0 }, [
								new h.hr({ display: "lg-none", textColor: "light" }),
								new b.navbar.itemcontainer({ flex: "wrap" }, [
									new b.navbar.item({ col: [6, "lg-auto"] }, [
										new b.navbar.link({ paddingY: 2, paddingX: [0, "lg-2"], href: "#" }, "Docs"),
									]),
									new b.navbar.item({ col: [6, "lg-auto"] }, [
										new b.navbar.link({ paddingY: 2, paddingX: [0, "lg-2"], href: "#" }, "Docs"),
									]),
									new b.navbar.item({ col: [6, "lg-auto"] }, [
										new b.navbar.link({ paddingY: 2, paddingX: [0, "lg-2"], href: "#" }, "Docs"),
									]),
								]),
								new h.hr({ display: "lg-none", textColor: "light" }),
							]),
						]
					),
				]
			),
		]),

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
							new h.nav({ id: "bs_docs_nav", class: "bs-links", width: 100, label: "Docs navication" }, [
								new h.ul(
									{
										class: "bs-links-nav",
										unstyle: true,
										marginBottom: 0,
										paddingBottom: [3, "md-2"],
										paddingEnd: "lg-2",
									},
									[
										new h.li({ class: "bs-links-group", paddingY: 2 }, [
											new h.strong(
												{
													class: "bs-links-heading",
													display: "flex",
													width: 100,
													alignItem: "center",
													fontWeight: "semibold",
												},
												new b.label({ icon: "home" }, "Getting started")
											),
											new h.ul(
												{
													unstyle: true,
													fontWeight: "normal",
													paddingBottom: 2,
												},
												[
													new h.li(
														new h.a(
															{
																class: "bs-links-link",
																display: "inline-block",
																rounded: true,
																href: "#",
															},
															"Introduction"
														)
													),
												]
											),
										]),
									]
								),
							]),
						]),
					]
				),
			]),
			new h.main({ order: 1, class: "bs-main" }, [
				new h.div({ class: "bs-intro", paddingTop: 2, paddingStart: "lg-2" }, [
					new b.example.pagetitle("Get started with Bootstrap"),
					new b.example.description(
						"Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes."
					),
				]),
				new h.div(
					{
						class: "bs-toc",
						marginTop: 3,
						marginBottom: [5, "lg-5"],
						marginY: "lg-0",
						paddingStart: "xl-3",
						textColor: "body-secondary",
					},
					"Toc"
				),
				new h.div({ class: "bs-content", paddingStart: "lg-2" }, [
					new b.example.title("Quick start "),
					new b.example.text(
						"Get started by including Bootstrap’s production-ready CSS and JavaScript via CDN without the need for any build steps. See it in practice with this Bootstrap CodePen demo."
					),
					new b.example.code({
						output: () => {
							return [
								"primary",
								"secondary",
								"success",
								"danger",
								"info",
								"warning",
								"light",
								"dark",
								"link",
							].map((i) => new b.button({ color: i as IAttrBSButton["color"] }, i));
						},
					}),
				]),
			]),
		]),
	]);
});
