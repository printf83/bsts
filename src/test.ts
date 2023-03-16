// import { bootstrapType } from "./core/base/bootstrap.js";
import { b, core } from "./_index.js";
// import { b, core, h, t } from "./_index.js";
// import { bootstrapBase, bootstrapType } from "./core/base/bootstrap.js";
// import { HLevel } from "./html/h.js";
// import { IAttrBSButton } from "./bootstrap/button.js";

// let loream = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta tincidunt arcu eu dignissim. Suspendisse nunc tortor, semper ut commodo nec, bibendum ut quam. Vivamus porttitor egestas luctus. Morbi tincidunt tortor eu lorem gravida imperdiet. Vestibulum tincidunt hendrerit tempus. Morbi varius est ac euismod tristique. Fusce a tortor suscipit, lacinia arcu nec, aliquet tortor. Maecenas eu lorem nec ante faucibus sollicitudin. Nunc consequat ullamcorper congue. Praesent cursus velit euismod turpis ultrices, sit amet venenatis massa pharetra. Nunc maximus pharetra purus in maximus.`;
// let fnCard = (txt: string, src: string, footer?: true) => {
// 	return new b.card.container([
// 		new b.card.img({ src: src, location: "top" }),
// 		new b.card.body([
// 			new b.card.title("Card title"),
// 			new b.card.text(txt),
// 			!footer ? new b.card.text(new h.small({ textColor: "muted" }, "Last updated 3 mins ago")) : "",
// 		]),
// 		footer ? new b.card.footer(new h.small({ textColor: "muted" }, "Last updated 3 mins ago")) : "",
// 	]);
// };
let themeToggle = (active: boolean, value: string, icon: string, label: string) => {
	let id = core.UUID();

	return [
		new b.input({
			type: "radio",
			name: "theme",
			toggle: true,
			checked: active,
			id: id,
			on: {
				change: () => {
					document.getElementsByTagName("HTML")[0].setAttribute("data-bs-theme", value);
				},
			},
		}),
		new b.label({ for: id, icon: icon, color: "primary" }, label),
	];
};

core.documentReady(() => {
	let body = document.getElementById("main") as HTMLElement;
	core.replaceChild(body, new b.row());

	core.appendChild(
		body,
		new b.row({ paddingY: 5, gap: 3 }, [
			new b.row(
				new b.col([
					new b.btngroup([
						...themeToggle(true, "auto", "circle-half-stroke", "Auto"),
						...themeToggle(false, "dark", "moon", "Dark"),
						...themeToggle(false, "light", "sun", "Light"),
					]),
				])
			),
		])
	);

	// core.appendChild(body,
	// 	new b.row({ paddingY: 5, gap: 3 }, [
	// 		// new b.row(new b.col([])),
	// 		// new b.row(new b.col([])),
	// 		// new b.row(new b.col([])),
	// 		// new b.row(new b.col([])),
	// 		// new b.row(new b.col([])),
	// 		// new b.row(new b.col([])),
	// 	]));

	core.appendChild(
		body,
		new b.row({ paddingY: 5, gap: 3 }, [
			new b.row(
				new b.col([
					new b.example.container({
						output: () => {
							return new b.table.container(
								{
									striped: "row",
									hoverable: true,
									small: true,
								},
								[
									new b.table.caption("Table title"),
									new b.table.thead({ color: "primary" }, [
										new b.table.tr([
											new b.table.th({ scope: "col" }, "#"),
											new b.table.th({ scope: "col" }, "First"),
											new b.table.th({ scope: "col" }, "Last"),
											new b.table.th({ scope: "col" }, "Handle"),
										]),
									]),
									new b.table.tbody({ divider: true }, [
										...[
											["1", "Mark", "Otto", "@mdo"],
											["2", "Jacob", "Thornton", "@fat"],
											["3", "Larry the Bird", "", "@twitter"],
											["4", "Hamzah", "Aziezs", "@printf83"],
											["5", "Ali", "", "@ali"],
											["6", "Siti", "Aminah", "@siti"],
											["7", "Raju", "", "@raju"],
											["8", "Chong", "", "@chong"],
										].map((i, ix) => {
											return new b.table.tr({ active: ix === 3 ? true : undefined }, [
												new b.table.th({ scope: "row" }, i[0]),
												new b.table.td({ colspan: i[2] === "" ? 2 : undefined }, i[1]),
												i[2] !== "" ? new b.table.td(i[2]) : "",
												new b.table.td(i[3]),
											]);
										}),
									]),
								]
							);
						},
					}),
				])
			),
			// new b.row(new b.col([])),
			// new b.row(new b.col([])),
			// new b.row(new b.col([])),
			// new b.row(new b.col([])),
			// new b.row(new b.col([])),
		])
	);

	// core.appendChild(
	// 	body,
	// 	new b.row({ paddingY: 5, gap: 3 }, [
	// 		new b.row(
	// 			new b.col({ display: "grid", gap: 2 }, [
	// 				...["home", "bomb", "car", "cloud", "user", "key"].map((i, ix) => {
	// 					let c = ["primary", "secondary", "success", "danger", "warning", "info"][ix];
	// 					return new b.pill(
	// 						{
	// 							icon: i,
	// 							color: c as bootstrapType.color[number],
	// 							// rounded: 5,
	// 							// iconPosition: "start",
	// 						},
	// 						`${c} ${i}`
	// 					);
	// 				}),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col({ display: "flex", gap: 2 }, [
	// 				...["home", "bomb", "car", "cloud", "user", "key"].map((i, ix) => {
	// 					let c = ["primary", "secondary", "success", "danger", "warning", "info"][ix];
	// 					return new b.pill(
	// 						{
	// 							icon: i,
	// 							color: c as bootstrapType.color[number],
	// 							iconPosition: "top",
	// 						},
	// 						`${c} ${i}`
	// 					);
	// 				}),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				new b.table.container(
	// 					{
	// 						striped: "row",
	// 						hoverable: true,
	// 						small: true,
	// 					},
	// 					[
	// 						new b.table.caption("Table title"),
	// 						new b.table.thead({ color: "primary" }, [
	// 							new b.table.tr([
	// 								new b.table.th({ scope: "col" }, "#"),
	// 								new b.table.th({ scope: "col" }, "First"),
	// 								new b.table.th({ scope: "col" }, "Last"),
	// 								new b.table.th({ scope: "col" }, "Handle"),
	// 							]),
	// 						]),
	// 						new b.table.tbody({ divider: true }, [
	// 							...[
	// 								["1", "Mark", "Otto", "@mdo"],
	// 								["2", "Jacob", "Thornton", "@fat"],
	// 								["3", "Larry the Bird", "", "@twitter"],
	// 								["4", "Hamzah", "Aziezs", "@printf83"],
	// 								["5", "Ali", "", "@ali"],
	// 								["6", "Siti", "Aminah", "@siti"],
	// 								["7", "Raju", "", "@raju"],
	// 								["8", "Chong", "", "@chong"],
	// 							].map((i, ix) => {
	// 								// let col = [
	// 								// 	"primary",
	// 								// 	"secondary",
	// 								// 	"success",
	// 								// 	"danger",
	// 								// 	"warning",
	// 								// 	"info",
	// 								// 	"light",
	// 								// 	"dark",
	// 								// ][ix];

	// 								// return new b.table.tr({ color: col as bootstrapType.color[number] }, [
	// 								return new b.table.tr({ active: ix === 3 ? true : undefined }, [
	// 									new b.table.th({ scope: "row" }, i[0]),
	// 									new b.table.td({ colspan: i[2] === "" ? 2 : undefined }, i[1]),
	// 									i[2] !== "" ? new b.table.td(i[2]) : "",
	// 									new b.table.td(i[3]),
	// 								]);
	// 							}),
	// 						]),
	// 					]
	// 				),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col({ display: "flex", gap: 2 }, [
	// 				b.button.gen[1](b.icon.solid("home", { spin: true }), "Home", (_e) => {
	// 					alert("Onclick");
	// 				}),
	// 				new b.button(new b.label({ icon: "bomb" }, "Bomb")),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				new b.row([
	// 					new b.col({ col: 4 }, [
	// 						new h.div(
	// 							{
	// 								id: "simple-list-example",
	// 								display: "flex",
	// 								flex: "column",
	// 								gap: 2,
	// 								textAlign: "center",
	// 							},
	// 							[0, 1, 2, 3, 4, 5].map((i) => {
	// 								return new b.button({ href: `#simple-list-item-${i}` }, `Item ${i + 1}`);
	// 							})
	// 						),
	// 					]),
	// 					new b.col(
	// 						{ col: 8 },
	// 						new b.scrollspy(
	// 							{
	// 								target: "#simple-list-example",
	// 								offset: 0,
	// 								smooth: true,
	// 								overflow: "auto",
	// 								style: { maxHeight: "300px" },
	// 							},
	// 							[0, 1, 2, 3, 4, 5].map((i) => {
	// 								return new h.div({ id: `simple-list-item-${i}` }, [
	// 									new h.h(4, `Item ${i + 1}`),
	// 									new h.p(loream),
	// 								]);
	// 							})
	// 						)
	// 					),
	// 				]),
	// 			])
	// 		),
	// 		// new b.row(new b.col([])),
	// 		// new b.row(new b.col([])),
	// 	])
	// );

	// core.appendChild(
	// 	body,
	// 	new b.row({ paddingY: 5, gap: 3 }, [
	// 		new b.row(
	// 			new b.col([
	// 				new b.pagination.container({ label: "Page navigation example" }, [
	// 					new b.pagination.item("Previous"),
	// 					new b.pagination.item("1"),
	// 					new b.pagination.item("2"),
	// 					new b.pagination.item("3"),
	// 					new b.pagination.item("Next"),
	// 				]),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				new b.pagination.container({ label: "Page navigation example" }, [
	// 					new b.pagination.item(
	// 						{ label: "Previous", disabled: true },
	// 						new b.icon({ icon: "chevron-left", aria: { hidden: "true" } })
	// 					),
	// 					new b.pagination.item("1"),
	// 					new b.pagination.item({ active: true }, "2"),
	// 					new b.pagination.item("3"),
	// 					new b.pagination.item(
	// 						{ label: "Next" },
	// 						new b.icon({ icon: "chevron-right", aria: { hidden: "true" } })
	// 					),
	// 				]),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				new b.pagination.container({ label: "Page navigation example", weight: "lg" }, [
	// 					new b.pagination.item(
	// 						{ label: "Previous", disabled: true },
	// 						new b.icon({ icon: "chevron-left", aria: { hidden: "true" } })
	// 					),
	// 					new b.pagination.item("1"),
	// 					new b.pagination.item({ active: true }, "2"),
	// 					new b.pagination.item("3"),
	// 					new b.pagination.item(
	// 						{ label: "Next" },
	// 						new b.icon({ icon: "chevron-right", aria: { hidden: "true" } })
	// 					),
	// 				]),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				new b.pagination.container({ label: "Page navigation example", weight: "sm" }, [
	// 					new b.pagination.item(
	// 						{ label: "Previous", disabled: true },
	// 						new b.icon({ icon: "chevron-left", aria: { hidden: "true" } })
	// 					),
	// 					new b.pagination.item("1"),
	// 					new b.pagination.item({ active: true }, "2"),
	// 					new b.pagination.item("3"),
	// 					new b.pagination.item(
	// 						{ label: "Next" },
	// 						new b.icon({ icon: "chevron-right", aria: { hidden: "true" } })
	// 					),
	// 				]),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				new b.pagination.container({ label: "Page navigation example", justifyContent: "center" }, [
	// 					new b.pagination.item(
	// 						{ label: "Previous", disabled: true },
	// 						new b.icon({ icon: "chevron-left", aria: { hidden: "true" } })
	// 					),
	// 					new b.pagination.item("1"),
	// 					new b.pagination.item({ active: true }, "2"),
	// 					new b.pagination.item("3"),
	// 					new b.pagination.item(
	// 						{ label: "Next" },
	// 						new b.icon({ icon: "chevron-right", aria: { hidden: "true" } })
	// 					),
	// 				]),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				new b.pagination.container({ label: "Page navigation example", justifyContent: "end" }, [
	// 					new b.pagination.item(
	// 						{ label: "Previous", disabled: true },
	// 						new b.icon({ icon: "chevron-left", aria: { hidden: "true" } })
	// 					),
	// 					new b.pagination.item("1"),
	// 					new b.pagination.item({ active: true }, "2"),
	// 					new b.pagination.item("3"),
	// 					new b.pagination.item(
	// 						{ label: "Next" },
	// 						new b.icon({ icon: "chevron-right", aria: { hidden: "true" } })
	// 					),
	// 				]),
	// 			])
	// 		),
	// 		new b.row(new b.col([new h.span({ textColor: "muted" }, "Muted text")])),
	// 		// new b.row(new b.col([])),
	// 		// new b.row(new b.col([])),
	// 		// new b.row(new b.col([])),
	// 	])
	// );

	// core.appendChild(
	// 	body,
	// 	new b.row({ paddingY: 5, gap: 3 }, [
	// 		new b.row(
	// 			new b.col([
	// 				new b.accordion.container({ id: "accordionExample", flush: false }, [
	// 					...["home", "star", "image", "bomb", "car"].map((i, ix) => {
	// 						return new b.accordion.item([
	// 							new b.accordion.header(
	// 								{
	// 									id: `heading${i}`,
	// 									target: `#collapse${i}`,
	// 									control: `collapse${i}`,
	// 									expanded: ix === 0 ? true : false,
	// 								},
	// 								new b.label({ icon: { icon: i } }, `Accordion Item #${ix + 1}`)
	// 							),
	// 							new b.accordion.body(
	// 								{
	// 									id: `collapse${i}`,
	// 									parent: "#accordionExample",
	// 									show: ix === 0 ? true : false,
	// 								},
	// 								`This is body for accordion #${ix + 1}`
	// 							),
	// 						]);
	// 					}),
	// 				]),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				new b.carousel.container({ id: "carouselExample" }, [
	// 					new b.carousel.indicators.container([
	// 						...[0, 1, 2, 3, 4, 5, 6].map((_i, ix) => {
	// 							return new b.carousel.indicators.button({
	// 								target: "#carouselExample",
	// 								slide: ix,
	// 								active: ix === 0 ? true : undefined,
	// 							});
	// 						}),
	// 					]),
	// 					new b.carousel.inner.container({ rounded: true }, [
	// 						...[1234, 1231, 6123, 9918, 5123, 1254, 5158].map((i, ix) => {
	// 							return new b.carousel.inner.item.container({ active: ix === 0 ? true : undefined }, [
	// 								new b.carousel.inner.item.img({ src: `https://picsum.photos/seed/${i}/400/200` }),
	// 								new b.carousel.inner.item.caption([
	// 									new h.h(5, `Slide #${ix + 1}`),
	// 									new h.p(`Some representative placeholder content for the slide #${ix + 1}.`),
	// 								]),
	// 							]);
	// 						}),
	// 					]),
	// 					new b.carousel.inner.control.prev({ target: "#carouselExample" }),
	// 					new b.carousel.inner.control.next({ target: "#carouselExample" }),
	// 				]),
	// 			])
	// 		),
	// 	])
	// );

	// core.appendChild(
	// 	body,
	// 	new b.row({ paddingY: 5, gap: 3 }, [
	// 		new b.row(
	// 			new b.col([
	// 				new b.breadcrumb.container({ marginBottom: 3, label: "Breadcrumb 1" }, [
	// 					new b.breadcrumb.item({ active: true }, "Home"),
	// 				]),

	// 				new b.breadcrumb.container({ marginBottom: 3, label: "Breadcrumb 2" }, [
	// 					new b.breadcrumb.item({ href: "#" }, "Home"),
	// 					new b.breadcrumb.item({ active: true }, "Library"),
	// 				]),

	// 				new b.breadcrumb.container({ marginBottom: 3, label: "Breadcrumb 3" }, [
	// 					new b.breadcrumb.item({ href: "#" }, "Home"),
	// 					new b.breadcrumb.item({ href: "#" }, "Library"),
	// 					new b.breadcrumb.item({ active: true }, "Data"),
	// 				]),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				new b.breadcrumb.container(
	// 					{
	// 						marginBottom: 3,
	// 						label: "Breadcrumb 1",
	// 						divider: "''",
	// 					},
	// 					[
	// 						new b.breadcrumb.item({ href: "#" }, "Home"),
	// 						new b.breadcrumb.item({ active: true }, "Library"),
	// 					]
	// 				),

	// 				new b.breadcrumb.container(
	// 					{
	// 						marginBottom: 3,
	// 						label: "Breadcrumb 2",
	// 						divider: "'>'",
	// 					},
	// 					[
	// 						new b.breadcrumb.item({ href: "#" }, "Home"),
	// 						new b.breadcrumb.item({ active: true }, "Library"),
	// 					]
	// 				),

	// 				new b.breadcrumb.container(
	// 					{
	// 						marginBottom: 3,
	// 						label: "Breadcrumb 3",
	// 						divider: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`,
	// 					},
	// 					[
	// 						new b.breadcrumb.item({ href: "#" }, "Home"),
	// 						new b.breadcrumb.item({ href: "#" }, "Library"),
	// 						new b.breadcrumb.item({ active: true }, "Data"),
	// 					]
	// 				),
	// 			])
	// 		),
	// 	])
	// );

	// core.appendChild(
	// 	body,
	// 	new b.row({ paddingY: 5, gap: 3 }, [
	// 		new b.row(
	// 			new b.col({ marginBottom: 3 }, [
	// 				new b.navbar.container({ bgColor: "body-tertiary" }, [new b.navbar.brand({ href: "#" }, "Navbar")]),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col({ marginBottom: 3 }, [
	// 				new b.navbar.container({ bgColor: "body-tertiary" }, [new b.navbar.brand("Navbar")]),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col({ marginBottom: 3 }, [
	// 				new b.navbar.container({ bgColor: "body-tertiary" }, [
	// 					new b.navbar.brand({ href: "#" }, [
	// 						new b.img({
	// 							src: "https://picsum.photos/seed/6548/30/24",
	// 							display: "inline-block",
	// 							verticalAlign: "text-top",
	// 						}),
	// 						"Bootstrap",
	// 					]),
	// 				]),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col({ marginBottom: 3 }, [
	// 				new b.navbar.container({ bgColor: "body-tertiary", expand: "lg" }, [
	// 					new b.navbar.brand({ href: "#" }, "Navbar"),
	// 					new b.navbar.toggle.collapse({
	// 						target: "#navbarNav",
	// 						control: "navbarNav",
	// 					}),
	// 					new b.navbar.collapse({ id: "navbarNav" }, [
	// 						new b.navbar.itemcontainer([
	// 							new b.nav.header.item(new b.nav.header.link({ active: true, href: "#" }, "Home")),
	// 							new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Features")),
	// 							new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Pricing")),
	// 							new b.nav.header.item(new b.nav.header.link({ disabled: true }, "Disabled")),
	// 						]),
	// 					]),
	// 				]),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col({ marginBottom: 3 }, [
	// 				new b.navbar.container({ bgColor: "body-tertiary", expand: "lg" }, [
	// 					new b.navbar.brand({ href: "#" }, "Navbar"),
	// 					new b.navbar.toggle.collapse({
	// 						target: "#navbarNav",
	// 						control: "navbarNav",
	// 					}),
	// 					new b.navbar.collapse({ id: "navbarNav" }, [
	// 						new b.navbar.itemcontainer([
	// 							new b.nav.header.item(new b.nav.header.link({ active: true, href: "#" }, "Home")),
	// 							new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Features")),
	// 							new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Pricing")),
	// 							new b.nav.header.item(
	// 								{
	// 									dropdown: true,
	// 								},
	// 								[
	// 									new b.nav.header.link({ dropdown: true }, "Dropdown link"),
	// 									new b.dropdown.menu([
	// 										new b.dropdown.item({ href: "#" }, "Action"),
	// 										new b.dropdown.item({ href: "#" }, "Another action"),
	// 										new b.dropdown.item({ href: "#" }, "Something else here"),
	// 									]),
	// 								]
	// 							),
	// 						]),
	// 					]),
	// 				]),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				new b.navbar.container({ bgColor: "body-tertiary" }, [
	// 					new h.form({ display: "flex" }, [
	// 						new b.input(
	// 							{
	// 								marginEnd: 2,
	// 								type: "search",
	// 								placeholderText: "Search",
	// 								aria: { label: "Search" },
	// 							},
	// 							""
	// 						),
	// 						new b.button(
	// 							{
	// 								outline: true,
	// 								color: "success",
	// 								type: "submit",
	// 							},
	// 							"Search"
	// 						),
	// 					]),
	// 				]),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				new b.navbar.container({ bgColor: "body-tertiary" }, [
	// 					new b.navbar.brand("Navbar"),
	// 					new h.form({ display: "flex" }, [
	// 						new b.input(
	// 							{
	// 								marginEnd: 2,
	// 								type: "search",
	// 								placeholderText: "Search",
	// 								aria: { label: "Search" },
	// 							},
	// 							""
	// 						),
	// 						new b.button(
	// 							{
	// 								outline: true,
	// 								color: "success",
	// 								type: "submit",
	// 							},
	// 							"Search"
	// 						),
	// 					]),
	// 				]),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				new b.navbar.container({ bgColor: "body-tertiary" }, [
	// 					new b.inputgroup.container([
	// 						new b.inputgroup.text({ id: "basic-addon1" }, "@"),
	// 						new b.input({
	// 							placeholderText: "Username",
	// 							aria: {
	// 								label: "Username",
	// 								describedby: "basic-addon1",
	// 							},
	// 						}),
	// 					]),
	// 				]),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				new b.navbar.container(
	// 					{
	// 						bgColor: "body-tertiary",
	// 						container: "fluid",
	// 						justifyContent: "start",
	// 					},
	// 					[
	// 						new b.button(
	// 							{
	// 								outline: true,
	// 								color: "success",
	// 								marginEnd: 2,
	// 							},
	// 							"Main button"
	// 						),
	// 						new b.button(
	// 							{
	// 								outline: true,
	// 								color: "secondary",
	// 								weight: "sm",
	// 								marginEnd: 2,
	// 							},
	// 							"Smaller button"
	// 						),
	// 					]
	// 				),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				new b.navbar.container({ bgColor: "body-tertiary" }, [
	// 					new b.navbar.text("Navbar text with an inline element"),
	// 				]),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col({ marginBottom: 3 }, [
	// 				new b.navbar.container(
	// 					{
	// 						bgColor: "primary",
	// 						expand: "lg",
	// 						placement: "sticky-top",
	// 					},
	// 					[
	// 						new b.navbar.brand({ href: "#" }, "Navbar"),
	// 						new b.navbar.toggle.collapse({
	// 							target: "#navbarNav",
	// 							control: "navbarNav",
	// 						}),
	// 						new b.navbar.collapse({ id: "navbarNav" }, [
	// 							new b.navbar.itemcontainer({ scroll: true, scrollHeight: "100px" }, [
	// 								new b.nav.header.item(new b.nav.header.link({ active: true, href: "#" }, "Home")),
	// 								new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Features")),
	// 								new b.nav.header.item(new b.nav.header.link({ href: "#" }, "Pricing")),
	// 								new b.nav.header.item(
	// 									{
	// 										dropdown: true,
	// 									},
	// 									[
	// 										new b.nav.header.link({ dropdown: true }, "Dropdown link"),
	// 										new b.dropdown.menu([
	// 											new b.dropdown.item({ href: "#" }, "Action"),
	// 											new b.dropdown.item({ href: "#" }, "Another action"),
	// 											new b.dropdown.item({ href: "#" }, "Something else here"),
	// 										]),
	// 									]
	// 								),
	// 							]),
	// 						]),
	// 					]
	// 				),
	// 			])
	// 		),
	// 	])
	// );

	// core.appendChild(
	// 	body,
	// 	new b.row({ paddingY: 5, gap: 3 }, [
	// 		new b.row(
	// 			new b.col([
	// 				new b.offcanvas.toggle(
	// 					{
	// 						link: true,
	// 						target: "#offcanvasExample",
	// 						control: "offcanvasExample",
	// 						marginEnd: 3,
	// 					},
	// 					"Link with href"
	// 				),
	// 				new b.offcanvas.toggle(
	// 					{
	// 						target: "#offcanvasExample",
	// 						control: "offcanvasExample",
	// 					},
	// 					"Link with data-bs-target"
	// 				),

	// 				new b.offcanvas.container(
	// 					{
	// 						id: "offcanvasExample",
	// 						labelledby: "offcanvasExampleTitle",
	// 					},
	// 					[
	// 						new b.offcanvas.header([
	// 							new b.offcanvas.title(
	// 								{
	// 									id: "offcanvasExampleTitle",
	// 								},
	// 								"Offcanvas"
	// 							),
	// 							new b.offcanvas.btnclose({ white: true }),
	// 						]),
	// 						new b.offcanvas.body([
	// 							new h.p(
	// 								"Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc."
	// 							),
	// 							new b.dropdown.container([
	// 								new b.dropdown.toggle({ color: "secondary" }, "Dropdown button"),
	// 								new b.dropdown.menu({ theme: "dark" }, [
	// 									new b.dropdown.item("Action"),
	// 									new b.dropdown.item("Another action"),
	// 									new b.dropdown.item("Something else here"),
	// 								]),
	// 							]),
	// 						]),
	// 					]
	// 				),
	// 			])
	// 		),

	// 		new b.row(
	// 			new b.col([
	// 				new b.offcanvas.toggle(
	// 					{
	// 						target: "#offcanvasExample2",
	// 						control: "offcanvasExample2",
	// 						display: "lg-none",
	// 					},
	// 					"Toggle offcanvas"
	// 				),

	// 				new b.alert.container(
	// 					{ color: "info", callout: true, display: ["none", "lg-block"] },
	// 					"Resize your browser to show the responsive offcanvas toggle."
	// 				),

	// 				new b.offcanvas.container(
	// 					{
	// 						id: "offcanvasExample2",
	// 						labelledby: "offcanvasExampleTitle2",
	// 						hide: "lg",
	// 						placement: "end",
	// 					},
	// 					[
	// 						new b.offcanvas.header([
	// 							new b.offcanvas.title(
	// 								{
	// 									id: "offcanvasExampleTitle2",
	// 								},
	// 								"Offcanvas"
	// 							),
	// 							new b.offcanvas.btnclose({
	// 								target: "#offcanvasExample2", //important for bs.offcanvas.container.hide
	// 							}),
	// 						]),
	// 						new b.offcanvas.body([
	// 							new h.p(
	// 								"Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc."
	// 							),
	// 							new b.dropdown.container({ theme: "dark" }, [
	// 								new b.dropdown.toggle({ color: "secondary" }, "Dropdown button"),
	// 								new b.dropdown.menu([
	// 									new b.dropdown.item("Action"),
	// 									new b.dropdown.item("Another action"),
	// 									new b.dropdown.item("Something else here"),
	// 								]),
	// 							]),
	// 						]),
	// 					]
	// 				),
	// 			])
	// 		),
	// 	])
	// );

	// core.appendChild(
	// 	body,
	// 	new b.row({ paddingY: 5, gap: 3 }, [
	// 		new b.row(
	// 			new b.col([
	// 				new b.tooltip(
	// 					{
	// 						inline: true,
	// 						trigger: "click",
	// 						placement: "right",
	// 						content: "And here's some amazing content. It's very engaging. Right?",
	// 					},
	// 					new b.button({ color: "danger", weight: "lg" }, "Click to toggle tooltip")
	// 				),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				new b.popover(
	// 					{
	// 						inline: true,
	// 						trigger: "click",
	// 						placement: "left",
	// 						title: "Popover title",
	// 						content: "And here's some amazing content. It's very engaging. Right?",
	// 					},
	// 					new b.button({ color: "warning", weight: "lg" }, "Click to toggle popover")
	// 				),
	// 			])
	// 		),
	// 	])
	// );

	// core.appendChild(
	// 	body,
	// 	new b.row({ paddingY: 5, gap: 3 }, [
	// 		new b.row(
	// 			new b.col([
	// 				...[0, 25, 50, 75, 100].map((i) => {
	// 					return new b.progress.container(
	// 						{
	// 							label: "Basic sample",
	// 							value: i,
	// 							min: 0,
	// 							max: 100,
	// 							marginBottom: 3,
	// 						},
	// 						new b.progress.bar({ style: { width: `${i}%` } })
	// 					);
	// 				}),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				...[1, 20].map((i) => {
	// 					return new b.progress.container(
	// 						{
	// 							label: `Example ${i}px high`,
	// 							value: 25,
	// 							min: 0,
	// 							max: 100,
	// 							marginBottom: 3,
	// 							style: { height: `${i}px` },
	// 						},
	// 						new b.progress.bar({ style: { width: `25%` } })
	// 					);
	// 				}),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				new b.progress.container(
	// 					{
	// 						label: "Example with label",
	// 						value: 25,
	// 						min: 0,
	// 						max: 100,
	// 						marginBottom: 3,
	// 					},
	// 					new b.progress.bar({ style: { width: `25%` } }, "25%")
	// 				),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				...["success", "info", "warning", "danger"].map((i, ix) => {
	// 					let val = [25, 50, 75, 100][ix];

	// 					return new b.progress.container(
	// 						{
	// 							label: "Basic sample",
	// 							value: val,
	// 							min: 0,
	// 							max: 100,
	// 							marginBottom: 3,
	// 						},
	// 						new b.progress.bar({
	// 							color: i as bootstrapType.color[number],
	// 							style: { width: `${val}%` },
	// 						})
	// 					);
	// 				}),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				new b.progress.stacked([
	// 					...["success", "warning", "danger"].map((i, ix) => {
	// 						let val = [15, 30, 20][ix];

	// 						return new b.progress.container(
	// 							{
	// 								label: `Segment #${ix + 1}`,
	// 								value: val,
	// 								min: 0,
	// 								max: 100,
	// 								style: { width: `${val}%` },
	// 							},
	// 							new b.progress.bar({
	// 								color: i as bootstrapType.color[number],
	// 							})
	// 						);
	// 					}),
	// 				]),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				...[undefined, "success", "info", "warning", "danger"].map((i, ix) => {
	// 					let val = [10, 25, 50, 75, 100][ix];

	// 					return new b.progress.container(
	// 						{
	// 							label: `${i ? i : "Default"} striped example`,
	// 							value: val,
	// 							min: 0,
	// 							max: 100,
	// 							marginBottom: 3,
	// 						},
	// 						new b.progress.bar({
	// 							color: i as bootstrapType.color[number],
	// 							striped: true,
	// 							style: { width: `${val}%` },
	// 						})
	// 					);
	// 				}),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				...[undefined, "success", "info", "warning", "danger"].map((i, ix) => {
	// 					let val = [10, 25, 50, 75, 100][ix];

	// 					return new b.progress.container(
	// 						{
	// 							label: `${i ? i : "Default"} striped example`,
	// 							value: val,
	// 							min: 0,
	// 							max: 100,
	// 							marginBottom: 3,
	// 						},
	// 						new b.progress.bar({
	// 							color: i as bootstrapType.color[number],
	// 							striped: true,
	// 							animated: true,
	// 							style: { width: `${val}%` },
	// 						})
	// 					);
	// 				}),
	// 			])
	// 		),
	// 	])
	// );

	// core.appendChild(
	// 	body,
	// 	new b.row({ paddingY: 5, gap: 3 }, [
	// 		new b.row(
	// 			new b.col([
	// 				...[
	// 					"primary",
	// 					"primary-emphasis",
	// 					"secondary",
	// 					"secondary-emphasis",
	// 					"success",
	// 					"success-emphasis",
	// 					"danger",
	// 					"danger-emphasis",
	// 					"warning",
	// 					"warning-emphasis",
	// 					"info",
	// 					"info-emphasis",
	// 					"light",
	// 					"light-emphasis",
	// 					"dark",
	// 					"dark-emphasis",
	// 					"body",
	// 					"muted",
	// 					"body-emphasis",
	// 					"body-secondary",
	// 					"body-tertiary",
	// 				].map((i) => {
	// 					let lits = bootstrapBase.textColor.concat();
	// 					type Lit = typeof bootstrapBase.textColor[number];

	// 					function isLit(str: string): str is Lit {
	// 						return !!lits.find((lit) => str === lit);
	// 					}

	// 					if (isLit(i)) {
	// 						return new h.div({ textColor: i, padding: 3 }, `.text-${i}`);
	// 					} else {
	// 						return new h.div({ class: `text-${i}`, padding: 3 }, `.text-${i} (Unsupported)`);
	// 					}
	// 				}),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				...[
	// 					"primary",
	// 					"primary-subtle",
	// 					"secondary",
	// 					"secondary-subtle",
	// 					"success",
	// 					"success-subtle",
	// 					"danger",
	// 					"danger-subtle",
	// 					"warning",
	// 					"warning-subtle",
	// 					"info",
	// 					"info-subtle",
	// 					"light",
	// 					"light-subtle",
	// 					"dark",
	// 					"dark-subtle",
	// 					"body-secondary",
	// 					"body-tertiary",
	// 					"body",
	// 					"black",
	// 					"white",
	// 					"transparent",
	// 				].map((i) => {
	// 					let lits = bootstrapBase.bgColor.concat();
	// 					type Lit = typeof bootstrapBase.bgColor[number];

	// 					function isLit(str: string): str is Lit {
	// 						return !!lits.find((lit) => str === lit);
	// 					}

	// 					if (isLit(i)) {
	// 						return new h.div({ bgColor: i, padding: 3 }, `.bg-${i}`);
	// 					} else {
	// 						return new h.div({ class: `bg-${i}`, padding: 3 }, `.bg-${i} (Unsupported)`);
	// 					}
	// 				}),
	// 			])
	// 		),
	// 		// new bs.row(
	// 		// 	new bs.col([
	// 		// 		new ht.div(
	// 		// 			{
	// 		// 				zIndex: 3,
	// 		// 				position: "absolute",
	// 		// 				padding: 5,
	// 		// 				roundedSize: 3,
	// 		// 				bgColor: "secondary",
	// 		// 				border: true,
	// 		// 				// opacity: 25,
	// 		// 				style: { marginTop: "10px", marginLeft: "10px" },
	// 		// 			},
	// 		// 			""
	// 		// 		),
	// 		// 		new ht.div(
	// 		// 			{
	// 		// 				zIndex: 2,
	// 		// 				position: "absolute",
	// 		// 				padding: 5,
	// 		// 				roundedSize: 3,
	// 		// 				bgColor: "secondary",
	// 		// 				border: true,
	// 		// 				// opacity: 25,
	// 		// 				style: { marginTop: "20px", marginLeft: "20px" },
	// 		// 			},
	// 		// 			""
	// 		// 		),
	// 		// 		new ht.div(
	// 		// 			{
	// 		// 				zIndex: 1,
	// 		// 				position: "absolute",
	// 		// 				padding: 5,
	// 		// 				roundedSize: 3,
	// 		// 				bgColor: "secondary",
	// 		// 				border: true,
	// 		// 				// opacity: 25,
	// 		// 				style: { marginTop: "30px", marginLeft: "30px" },
	// 		// 			},
	// 		// 			""
	// 		// 		),
	// 		// 		new ht.div(
	// 		// 			{
	// 		// 				zIndex: 0,
	// 		// 				position: "absolute",
	// 		// 				padding: 5,
	// 		// 				roundedSize: 3,
	// 		// 				bgColor: "secondary",
	// 		// 				border: true,
	// 		// 				// opacity: 25,
	// 		// 				style: { marginTop: "40px", marginLeft: "40px" },
	// 		// 			},
	// 		// 			""
	// 		// 		),
	// 		// 		new ht.div(
	// 		// 			{
	// 		// 				zIndex: "n1",
	// 		// 				position: "absolute",
	// 		// 				padding: 5,
	// 		// 				roundedSize: 3,
	// 		// 				bgColor: "secondary",
	// 		// 				border: true,
	// 		// 				// opacity: 25,
	// 		// 				style: { marginTop: "50px", marginLeft: "50px" },
	// 		// 			},
	// 		// 			""
	// 		// 		),
	// 		// 	])
	// 		// ),
	// 	])
	// );

	// core.appendChild(
	// 	body,
	// 	new b.row({ paddingY: 5, gap: 3 }, [
	// 		new b.row(
	// 			new b.col([
	// 				new b.toast.container([
	// 					new b.toast.item({ debug: true, color: "danger" }, [
	// 						new b.toast.header([
	// 							// new bs.icon({
	// 							// 	icon: "bootstrap",
	// 							// 	type: "fab",
	// 							// 	marginEnd: 2,
	// 							// }),
	// 							// new bs.toast.title("Bootstrap"),

	// 							new b.toast.title(new b.label({ icon: { icon: "home" } }, "Bootstrap")),

	// 							new b.toast.time("11 min ago"),
	// 							new b.toast.btnclose(),
	// 						]),
	// 						new b.toast.body("Hello, world! This is a toast message."),
	// 					]),
	// 				]),
	// 			])
	// 		),
	// 	])
	// );

	// core.appendChild(
	// 	body,
	// 	new b.row({ paddingY: 5, gap: 3 }, [
	// 		new b.row(
	// 			new b.col([
	// 				new b.button(
	// 					{
	// 						color: "primary",
	// 						toggle: "modal",
	// 						target: "#exampleModal",
	// 					},
	// 					"Launch demo modal"
	// 				),

	// 				new b.modal.container(
	// 					{
	// 						id: "exampleModal",
	// 						labelledby: "exampleModalTitle",
	// 						static: true,
	// 						scrollable: true,
	// 						centered: true,
	// 						fullscreen: "sm",
	// 					},
	// 					[
	// 						new b.modal.header(
	// 							{ close: true },
	// 							new b.modal.title({ id: "exampleModalTitle" }, "Modal title")
	// 						),
	// 						new b.modal.body([
	// 							new h.p(loream),
	// 							// new ht.p(loream),
	// 							// new ht.p(loream),
	// 						]),
	// 						new b.modal.footer([
	// 							new b.button({ color: "secondary", dismiss: "modal" }, "Close"),
	// 							new b.button({ color: "primary" }, "Save changes"),
	// 						]),
	// 					]
	// 				),
	// 			])
	// 		),
	// 	])
	// );

	// core.appendChild(
	// 	body,
	// 	new b.row({ paddingY: 5, gap: 3 }, [
	// 		new b.row(
	// 			new b.col([
	// 				new b.nav.header.container({ type: "pill" }, [
	// 					new b.nav.header.item(new b.nav.header.link({ active: true }, "Active")),
	// 					new b.nav.header.item({ dropdown: true }, [
	// 						new b.nav.header.link({ dropdown: true }, "Dropdown"),
	// 						new b.dropdown.menu([
	// 							new b.dropdown.item("Action"),
	// 							new b.dropdown.item("Another action"),
	// 							new b.dropdown.item("Something else here"),
	// 							new b.dropdown.divider(),
	// 							new b.dropdown.item("Separated link"),
	// 						]),
	// 					]),
	// 					new b.nav.header.item(new b.nav.header.link("Link")),
	// 					new b.nav.header.item(new b.nav.header.link({ disabled: true }, "Disabled")),
	// 				]),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				new b.nav.header.container({ role: "tablist", marginBottom: 3, type: "tab" }, [
	// 					new b.nav.header.button(
	// 						{
	// 							active: true,
	// 							id: "nav-home-tab",
	// 							target: "#nav-home",
	// 							control: "nav-home",
	// 						},
	// 						"Home"
	// 					),
	// 					new b.nav.header.button(
	// 						{
	// 							id: "nav-profile-tab",
	// 							target: "#nav-profile",
	// 							control: "nav-profile",
	// 						},
	// 						"Profile"
	// 					),
	// 					new b.nav.header.button(
	// 						{
	// 							id: "nav-contact-tab",
	// 							target: "#nav-contact",
	// 							control: "nav-contact",
	// 						},
	// 						"Contact"
	// 					),
	// 					new b.nav.header.button(
	// 						{
	// 							disabled: true,
	// 							id: "nav-disabled-tab",
	// 							target: "#nav-disabled",
	// 							control: "nav-disabled",
	// 						},
	// 						"Disabled"
	// 					),
	// 				]),
	// 				new b.nav.content.container([
	// 					new b.nav.content.item(
	// 						{
	// 							active: true,
	// 							id: "nav-home",
	// 							labelledby: "nav-home-tab",
	// 						},
	// 						"Tab 1 content"
	// 					),
	// 					new b.nav.content.item(
	// 						{
	// 							id: "nav-profile",
	// 							labelledby: "nav-profile-tab",
	// 						},
	// 						"Tab 2 content"
	// 					),
	// 					new b.nav.content.item(
	// 						{
	// 							id: "nav-contact",
	// 							labelledby: "nav-contact-tab",
	// 						},
	// 						"Tab 3 content"
	// 					),
	// 					new b.nav.content.item(
	// 						{
	// 							id: "nav-disabled",
	// 							labelledby: "nav-disabled-tab",
	// 						},
	// 						"Tab 4 content"
	// 					),
	// 				]),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col([
	// 				new b.card.container([
	// 					new b.card.header([
	// 						new b.card.nav(
	// 							{
	// 								role: "tablist",
	// 								type: "pill",
	// 							},
	// 							[
	// 								new b.nav.header.button(
	// 									{
	// 										active: true,
	// 										id: "card-nav-home-tab",
	// 										target: "#card-nav-home",
	// 										control: "card-nav-home",
	// 									},
	// 									"Home"
	// 								),
	// 								new b.nav.header.button(
	// 									{
	// 										id: "card-nav-profile-tab",
	// 										target: "#card-nav-profile",
	// 										control: "card-nav-profile",
	// 									},
	// 									"Profile"
	// 								),
	// 								new b.nav.header.button(
	// 									{
	// 										id: "card-nav-contact-tab",
	// 										target: "#card-nav-contact",
	// 										control: "card-nav-contact",
	// 										on: {
	// 											"show.bs.tab": function () {
	// 												let i = document.getElementById("card-nav-contact");
	// 												core.replaceChild(
	// 													i!,
	// 													new h.span(`Item update by JS on ${new Date().toString()}`)
	// 												);
	// 											},
	// 										},
	// 									},
	// 									"Contact"
	// 								),
	// 								new b.nav.header.button(
	// 									{
	// 										disabled: true,
	// 										id: "card-nav-disabled-tab",
	// 										target: "#card-nav-disabled",
	// 										control: "card-nav-disabled",
	// 									},
	// 									"Disabled"
	// 								),
	// 							]
	// 						),
	// 					]),
	// 					new b.card.body([
	// 						new b.nav.content.container([
	// 							new b.nav.content.item(
	// 								{
	// 									active: true,
	// 									id: "card-nav-home",
	// 									labelledby: "card-nav-home-tab",
	// 								},
	// 								"Tab 1 content"
	// 							),
	// 							new b.nav.content.item(
	// 								{
	// 									id: "card-nav-profile",
	// 									labelledby: "card-nav-profile-tab",
	// 								},
	// 								"Tab 2 content"
	// 							),
	// 							new b.nav.content.item(
	// 								{
	// 									id: "card-nav-contact",
	// 									labelledby: "card-nav-contact-tab",
	// 								},
	// 								"Tab 3 content"
	// 							),
	// 							new b.nav.content.item(
	// 								{
	// 									id: "card-nav-disabled",
	// 									labelledby: "card-nav-disabled-tab",
	// 								},
	// 								"Tab 4 content"
	// 							),
	// 						]),
	// 					]),
	// 				]),
	// 			])
	// 		),
	// 	])
	// );

	// core.appendChild(
	// 	body,
	// 	new b.row({ paddingY: 5, gap: 3 }, [
	// 		new b.row(
	// 			new b.col([
	// 				new b.list.container([
	// 					new b.list.item({ action: true, active: true }, "An item"),
	// 					new b.list.item({ action: true }, "A second item"),
	// 					new b.list.item({ action: true, color: "warning" }, "A third item"),
	// 					new b.list.item({ action: true, color: "success" }, "A fourth item"),
	// 					new b.list.item({ action: true }, "And a fifth one"),
	// 				]),
	// 			])
	// 		),

	// 		new b.row(
	// 			new b.col(
	// 				[1, 2, 3, 4, 5, 6].map((i) => {
	// 					return new h.h(i as HLevel, ["Example heading", new b.badge({ bgColor: "secondary" }, "New")]);
	// 				})
	// 			)
	// 		),

	// 		//=====================
	// 		new b.row(
	// 			new b.col([
	// 				new b.button({ color: "primary", position: "relative" }, [
	// 					"Inbox",
	// 					new b.badge(
	// 						{
	// 							position: "absolute",
	// 							bgColor: "danger",
	// 							top: 0,
	// 							start: 100,
	// 							tMiddle: true,
	// 							rounded: "pill",
	// 						},
	// 						"99+"
	// 					),
	// 				]),
	// 			])
	// 		),

	// 		new b.row(
	// 			new b.col([
	// 				new b.button({ color: "primary", position: "relative" }, [
	// 					"Profile",
	// 					new b.badge(
	// 						{
	// 							position: "absolute",
	// 							bgColor: "danger",
	// 							top: 0,
	// 							start: 100,
	// 							padding: 2,
	// 							tMiddle: true,
	// 							borderColor: "light",
	// 							rounded: "circle",
	// 						},
	// 						new b.visuallyhidden("New alerts")
	// 					),
	// 				]),
	// 			])
	// 		),

	// 		new b.row(
	// 			new b.col([
	// 				new b.button({ color: "primary" }, [
	// 					"Notification",
	// 					new b.badge({ textBgColor: "secondary" }, "4"),
	// 				]),
	// 			])
	// 		),

	// 		new b.row(
	// 			new b.col(
	// 				new b.dropdown.container({ drop: "up", center: true }, [
	// 					new b.button({ color: "danger" }, "Dropdown"),
	// 					new b.dropdown.toggle({
	// 						split: true,
	// 						color: "danger",
	// 					}),
	// 					new b.dropdown.menu(
	// 						{
	// 							theme: "dark",
	// 							positionView: ["start", "md-center", "lg-end"],
	// 						},
	// 						[
	// 							new b.dropdown.header("Hello"),
	// 							new b.dropdown.item({ active: true }, "Action"),
	// 							new b.dropdown.item("Another action"),
	// 							new b.dropdown.item("Something else here"),
	// 							new b.dropdown.divider(),
	// 							new b.dropdown.item("Separated link"),
	// 						]
	// 					),
	// 				])
	// 			)
	// 		),
	// 	])
	// );

	// core.appendChild(
	// 	body,
	// 	new b.row({ paddingY: 5, gap: 3 }, [
	// 		new b.row(new b.col({ padding: 3 }, "")),
	// 		new b.row(
	// 			new b.col([
	// 				new b.inputgroup.container({ marginBottom: 3, weight: "sm" }, [
	// 					new b.inputgroup.text({ id: "inputGroup-sizing-small" }, "Small"),
	// 					new b.input({
	// 						type: "text",
	// 						aria: {
	// 							label: "Sizing example input",
	// 							describedby: "inputGroup-sizing-small",
	// 						},
	// 					}),
	// 				]),
	// 				new b.inputgroup.container({ marginBottom: 3 }, [
	// 					new b.inputgroup.text({ id: "inputGroup-sizing-default" }, "Default"),
	// 					new b.input({
	// 						type: "text",
	// 						aria: {
	// 							label: "Sizing example input",
	// 							describedby: "inputGroup-sizing-default",
	// 						},
	// 					}),
	// 				]),
	// 				new b.inputgroup.container({ marginBottom: 3, weight: "lg" }, [
	// 					new b.inputgroup.text({ id: "inputGroup-sizing-large" }, "Large"),
	// 					new b.input({
	// 						type: "text",
	// 						aria: {
	// 							label: "Sizing example input",
	// 							describedby: "inputGroup-sizing-large",
	// 						},
	// 					}),
	// 				]),
	// 			])
	// 		),

	// 		new b.row(
	// 			new b.col([
	// 				new b.inputgroup.container({ marginBottom: 3 }, [
	// 					new b.inputgroup.text(
	// 						new b.input({
	// 							type: "checkbox",
	// 							marginTop: 0,
	// 							aria: {
	// 								label: "Checkbox for following text input",
	// 							},
	// 						})
	// 					),
	// 					new b.input({
	// 						type: "text",
	// 						aria: {
	// 							label: "Text input with checkbox",
	// 						},
	// 					}),
	// 				]),
	// 				new b.inputgroup.container({ marginBottom: 3, weight: "lg" }, [
	// 					new b.inputgroup.text(
	// 						new b.input({
	// 							type: "radio",
	// 							marginTop: 0,
	// 							aria: {
	// 								label: "Radio button for following text input",
	// 							},
	// 						})
	// 					),
	// 					new b.input({
	// 						type: "text",
	// 						aria: {
	// 							label: "Text input with radio button",
	// 						},
	// 					}),
	// 				]),
	// 			])
	// 		),

	// 		new b.row(
	// 			new b.col(
	// 				new b.inputgroup.container({ marginBottom: 3 }, [
	// 					new b.inputgroup.text("First and last name"),
	// 					new b.input({
	// 						type: "text",
	// 						aria: {
	// 							label: "First name",
	// 						},
	// 					}),
	// 					new b.input({
	// 						type: "text",
	// 						aria: {
	// 							label: "Last name",
	// 						},
	// 					}),
	// 				])
	// 			)
	// 		),

	// 		new b.row(
	// 			new b.col(
	// 				new b.inputgroup.container({ marginBottom: 3 }, [
	// 					new b.dropdown.toggle({
	// 						elem: "Dropdown",
	// 						outline: true,
	// 						color: "secondary",
	// 					}),
	// 					new b.dropdown.menu([
	// 						new b.dropdown.header("Hello"),
	// 						new b.dropdown.item({ active: true }, "Action"),
	// 						new b.dropdown.item("Another action"),
	// 						new b.dropdown.item("Something else here"),
	// 						new b.dropdown.divider(),
	// 						new b.dropdown.item("Separated link"),
	// 					]),
	// 					new b.input({
	// 						type: "text",
	// 						aria: {
	// 							label: "Text input with dropdown button",
	// 						},
	// 					}),
	// 				])
	// 			)
	// 		),

	// 		new b.row(
	// 			new b.col(
	// 				new b.dropdown.container({ drop: "up", center: true, theme: "dark" }, [
	// 					// new bs.button({ color: "danger" }, "Dropdown button X"),
	// 					new b.dropdown.toggle({
	// 						// split: true,
	// 						color: "danger",
	// 					}),
	// 					new b.dropdown.menu(
	// 						{
	// 							positionView: ["start", "md-center", "lg-end"],
	// 						},
	// 						[
	// 							new b.dropdown.header("Hello"),
	// 							new b.dropdown.item({ active: true }, "Action"),
	// 							new b.dropdown.item("Another action"),
	// 							new b.dropdown.item("Something else here"),
	// 							new b.dropdown.divider(),
	// 							new b.dropdown.item("Separated link"),
	// 						]
	// 					),
	// 				])
	// 			)
	// 		),

	// 		new b.row(
	// 			new b.col(
	// 				new b.dropdown.container(
	// 					{
	// 						drop: "start",
	// 						on: {
	// 							"hidden.bs.dropdown": function () {
	// 								alert("Test hidden.bs.dropdown event");
	// 							},
	// 						},
	// 					},
	// 					[
	// 						new b.dropdown.toggle({
	// 							split: true,
	// 							menuAutoClose: "manual",
	// 						}),
	// 						new b.dropdown.menu(
	// 							{
	// 								positionView: ["start", "md-center", "lg-end"],
	// 								textColor: "muted",
	// 								padding: 3,
	// 							},
	// 							[new h.div("Hello"), new h.div("World")]
	// 						),
	// 						new b.button("Dropdown button X"),
	// 					]
	// 				)
	// 			)
	// 		),

	// 		new b.row(
	// 			new b.col(
	// 				new b.formfloating([
	// 					new b.select(
	// 						{ id: "floatingSelectGrid", class: "is-invalid" },
	// 						[
	// 							{ value: "A", elem: "A" },
	// 							{ value: "B", elem: "B" },
	// 							{ value: "C", elem: "C" },
	// 							{ value: "D", elem: "D" },
	// 							{ value: "E", elem: "E" },
	// 						].map((i) => new h.option(i))
	// 					),
	// 					new b.label({ for: "floatingSelectGrid" }, "Works with selects"),
	// 				])
	// 			)
	// 		),

	// 		new b.row(
	// 			new b.col(
	// 				{ col: 6 },
	// 				new b.card.container({ style: { width: "18rem" } }, [
	// 					new b.card.img({
	// 						location: "top",
	// 						src: "https://picsum.photos/seed/1231/200/200",
	// 					}),

	// 					new b.card.body([
	// 						new b.card.title("Card title"),
	// 						new b.card.text(
	// 							"Some quick example text to build on the card title and make up the bulk of the card's content."
	// 						),
	// 					]),

	// 					new b.list.container({ flush: true }, [
	// 						new b.list.item("An item"),
	// 						new b.list.item("A second item"),
	// 						new b.list.item("A third item"),
	// 					]),

	// 					new b.card.body([
	// 						new b.card.link({ href: "#" }, "Card link"),
	// 						new b.card.link({ href: "#" }, "Another link"),
	// 					]),
	// 				])
	// 			)
	// 		),

	// 		new b.row(
	// 			new b.col(
	// 				{ col: 6 },
	// 				new b.card.container({ textAlign: "center", style: { width: "18rem" } }, [
	// 					new b.card.header("Featured"),
	// 					new b.card.body([
	// 						new b.card.title("Special title treatment"),
	// 						new b.card.text("With supporting text below as a natural lead-in to additional content."),
	// 						new b.button({ href: "#" }, "Go somewhere"),
	// 					]),
	// 					new b.card.footer({ textColor: "muted" }, "2 days ago"),
	// 				])
	// 			)
	// 		),

	// 		new b.row(
	// 			new b.col(
	// 				{ col: 6 },
	// 				new b.card.container([
	// 					new b.card.img({
	// 						rounded: true,
	// 						src: "https://picsum.photos/seed/1231/400/220",
	// 					}),
	// 					new b.card.imgoverlay([
	// 						new b.card.title("Card title"),
	// 						new b.card.text(
	// 							"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
	// 						),
	// 						new b.card.text(new h.small("Last updated 3 mins ago")),
	// 					]),
	// 				])
	// 			)
	// 		),

	// 		new b.row(
	// 			new b.col(
	// 				{ col: 6 },
	// 				new b.card.container([
	// 					new b.row({ gap: 0 }, [
	// 						new b.col(
	// 							{ col: "md-4" },
	// 							new b.card.img({
	// 								fluid: true,
	// 								rounded: "start",
	// 								src: "https://picsum.photos/seed/1231/100/280",
	// 							})
	// 						),
	// 						new b.col(
	// 							{
	// 								col: "md-8",
	// 							},
	// 							new b.card.body([
	// 								new b.card.title("Card title"),
	// 								new b.card.text(
	// 									"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
	// 								),
	// 								new b.card.text(new h.small("Last updated 3 mins ago")),
	// 							])
	// 						),
	// 					]),
	// 				])
	// 			)
	// 		),

	// 		new b.row(
	// 			new b.col(
	// 				{ col: 4 },
	// 				new b.card.container({ borderColor: "success" }, [
	// 					new b.card.header("Header"),
	// 					new b.card.body([
	// 						new b.card.title("Card title"),
	// 						new b.card.text(
	// 							"Some quick example text to build on the card title and make up the bulk of the card's content."
	// 						),
	// 					]),
	// 				])
	// 			)
	// 		),

	// 		new b.row(
	// 			new b.col(
	// 				new b.card.group([
	// 					fnCard(
	// 						"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
	// 						"https://picsum.photos/seed/1232/200/150"
	// 					),
	// 					fnCard(
	// 						"This card has supporting text below as a natural lead-in to additional content.",
	// 						"https://picsum.photos/seed/1233/200/150"
	// 					),
	// 					fnCard(
	// 						"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
	// 						"https://picsum.photos/seed/1234/200/150"
	// 					),
	// 				])
	// 			)
	// 		),

	// 		new b.row(
	// 			new b.col(
	// 				new b.card.group([
	// 					fnCard(
	// 						"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
	// 						"https://picsum.photos/seed/1232/200/150",
	// 						true
	// 					),
	// 					fnCard(
	// 						"This card has supporting text below as a natural lead-in to additional content.",
	// 						"https://picsum.photos/seed/1233/200/150",
	// 						true
	// 					),
	// 					fnCard(
	// 						"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
	// 						"https://picsum.photos/seed/1234/200/150",
	// 						true
	// 					),
	// 				])
	// 			)
	// 		),

	// 		new b.row(
	// 			new b.col({ col: 6 }, [
	// 				new h.p({ display: "flex", gap: 1 }, [
	// 					new b.collapse.toggle(
	// 						{
	// 							link: true,
	// 							target: "#cE1",
	// 							control: "cE1",
	// 						},
	// 						"First"
	// 					),
	// 					new b.collapse.toggle(
	// 						{
	// 							target: "#cE2",
	// 							control: "cE2",
	// 						},
	// 						"Second"
	// 					),
	// 					new b.collapse.toggle(
	// 						{
	// 							target: ".multi-collapse",
	// 							control: "cE1 cE2",
	// 						},
	// 						"Both"
	// 					),
	// 				]),
	// 				new b.collapse.container(
	// 					{ id: "cE1", class: "multi-collapse" },
	// 					new b.card.container(new b.card.body("1"))
	// 				),
	// 				new b.collapse.container(
	// 					{ id: "cE2", class: "multi-collapse" },
	// 					new b.card.container(new b.card.body("2"))
	// 				),
	// 			])
	// 		),
	// 	])
	// );

	// core.appendChild(
	// 	body,
	// 	new b.row({ gap: 3 }, [
	// 		new b.row(new b.col({ padding: 3 }, "")),

	// 		new b.row(
	// 			new b.col([
	// 				new b.select(
	// 					[
	// 						{ value: "A", elem: "A" },
	// 						{ value: "B", elem: "B" },
	// 						{ value: "C", elem: "C" },
	// 						{ value: "D", elem: "D" },
	// 						{ value: "E", elem: "E" },
	// 					].map((i) => {
	// 						return new h.option(i);
	// 					})
	// 				),
	// 			])
	// 		),

	// 		new b.row(
	// 			new b.col([
	// 				new b.alert.container({ color: "success", dismissible: true }, [
	// 					new b.alert.header(4, "Well done"),
	// 					new h.p(
	// 						"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
	// 					),
	// 					new h.hr(),
	// 					new h.p("Whenever you need to, be sure to use margin utilities to keep things nice and tidy."),
	// 				]),
	// 			])
	// 		),

	// 		new b.row(
	// 			new b.col([
	// 				new b.alert.container({ color: "info", callout: true }, [
	// 					new h.strong("This is an info callout."),
	// 					new h.span("Example text to show it in action."),
	// 				]),
	// 			])
	// 		),

	// 		new b.row(
	// 			new b.col([
	// 				new b.alert.container({ color: "warning", callout: true }, [
	// 					new h.strong("This is a warning callout."),
	// 					new h.span("Example text to show it in action."),
	// 				]),
	// 			])
	// 		),

	// 		new b.row(
	// 			new b.col([
	// 				new b.alert.container({ color: "danger", callout: true }, [
	// 					new h.strong("This is a danger callout."),
	// 					new h.span("Example text to show it in action."),
	// 				]),
	// 			])
	// 		),

	// 		new b.row(
	// 			new b.col([
	// 				new b.alert.container({ color: "success", callout: true }, [
	// 					new h.strong("This is a success callout."),
	// 					new h.span("Example text to show it in action."),
	// 				]),
	// 			])
	// 		),

	// 		new b.row(
	// 			new b.col([
	// 				new b.alert.container({ color: "primary", callout: true }, [
	// 					new h.strong("This is a primary callout."),
	// 					new h.span("Example text to show it in action."),
	// 				]),
	// 			])
	// 		),

	// 		new b.row(
	// 			new b.col({ theme: "light", padding: 3, bgColor: "body" }, [
	// 				new b.btnclose(),
	// 				new b.btnclose({ disabled: true }),
	// 			])
	// 		),
	// 		new b.row(
	// 			new b.col({ theme: "dark", padding: 3, bgColor: "body" }, [
	// 				new b.btnclose(),
	// 				new b.btnclose({ disabled: true }),
	// 			])
	// 		),

	// 		new h.ul(new h.li("hello")),
	// 		new h.ol([new h.li("hello"), new h.li("world")]),
	// 		new h.ul(["AAAAA", "AAAAA2", "AAAAA3", "AAAAA4"].map((i) => new h.li(i))),
	// 		new h.hr({ id: "aaaa" }),
	// 		new b.button({ color: "danger", elem: "Hello World" }),
	// 		new t("h1", { elem: "Hello World" }),
	// 		new h.p(loream),

	// 		new b.container(
	// 			new b.row(
	// 				new b.col({ display: "flex", gap: 3 }, [
	// 					...[
	// 						{ id: "a", elem: "1" },
	// 						{ id: "b", elem: "2" },
	// 						{ id: "c", elem: "3" },
	// 						{ id: "d", elem: "4" },
	// 					].map((i) => new h.a(i)),
	// 					...[
	// 						{ color: "primary", elem: new b.label("Primary") },
	// 						{
	// 							color: "secondary",
	// 							elem: new b.label("Secondary"),
	// 						},
	// 						{ color: "success", elem: new b.label("Success") },
	// 						{ color: "warning", elem: new b.label("Warning") },
	// 						{ color: "danger", elem: new b.label("Danger") },
	// 						{ color: "info", elem: new b.label("Info") },
	// 					].map((i) => new b.button(i as IAttrBSButton)),
	// 				])
	// 			)
	// 		),
	// 		new b.container([
	// 			new b.row(
	// 				new b.col(
	// 					new h.div({ display: "flex", gap: 3 }, [
	// 						new b.input({
	// 							disabled: true,
	// 							type: "checkbox",
	// 							id: "chk1",
	// 							toggle: true,
	// 						}),
	// 						new b.label({
	// 							color: "primary",
	// 							outline: true,
	// 							for: "chk1",
	// 							elem: "Single toggle",
	// 						}),
	// 						new b.input({
	// 							type: "checkbox",
	// 							id: "chk2",
	// 							toggle: true,
	// 							checked: true,
	// 						}),
	// 						new b.label(
	// 							{
	// 								color: "secondary",
	// 								outline: true,
	// 								for: "chk2",
	// 							},
	// 							"Checked"
	// 						),
	// 						new b.input({
	// 							type: "radio",
	// 							id: "rad1",
	// 							name: "radGroup1",
	// 							toggle: true,
	// 							checked: true,
	// 						}),
	// 						new b.label({
	// 							color: "success",
	// 							outline: true,
	// 							for: "rad1",
	// 							elem: "Checked success radio",
	// 						}),
	// 						new b.input({
	// 							type: "radio",
	// 							id: "rad2",
	// 							name: "radGroup1",
	// 							toggle: true,
	// 						}),
	// 						new b.label({ color: "danger", outline: true, for: "rad2" }, "Danger radio"),
	// 					])
	// 				)
	// 			),
	// 			new b.row(
	// 				new b.col([
	// 					new h.div({ class: "form-check" }, [
	// 						new b.input({
	// 							type: "checkbox",
	// 							id: "chk1a",
	// 							disabled: true,
	// 						}),
	// 						new b.label({ class: "form-check-label", for: "chk1a" }, "Chk1"),
	// 					]),
	// 					new h.div({ class: "form-check" }, [
	// 						new b.input({
	// 							type: "checkbox",
	// 							id: "chk2a",
	// 							checked: true,
	// 						}),
	// 						new b.label(
	// 							{
	// 								class: "form-check-label",
	// 								for: "chk2a",
	// 							},
	// 							"Chk2"
	// 						),
	// 					]),
	// 				])
	// 			),
	// 			new b.row(
	// 				new b.col([
	// 					new h.div({ class: "form-check" }, [
	// 						new b.input({
	// 							type: "radio",
	// 							id: "chk12",
	// 							name: "aaa",
	// 						}),
	// 						new b.label({ class: "form-check-label", for: "chk12" }, "Chk12"),
	// 					]),
	// 					new h.div({ class: "form-check" }, [
	// 						new b.input({
	// 							type: "radio",
	// 							id: "chk22",
	// 							checked: true,
	// 							name: "aaa",
	// 						}),
	// 						new b.label(
	// 							{
	// 								class: "form-check-label",
	// 								for: "chk22",
	// 							},
	// 							"Chk22"
	// 						),
	// 					]),
	// 				])
	// 			),
	// 			new b.row(
	// 				new b.col([
	// 					new h.div({ class: ["form-check", "form-switch"] }, [
	// 						new b.input({ switch: true, id: "chk123" }),
	// 						new b.label({ class: "form-check-label", for: "chk123" }, "Chk123"),
	// 					]),
	// 					new h.div({ class: ["form-check", "form-switch"] }, [
	// 						new b.input({
	// 							switch: true,
	// 							id: "chk223",
	// 							checked: true,
	// 						}),
	// 						new b.label(
	// 							{
	// 								class: "form-check-label",
	// 								for: "chk223",
	// 							},
	// 							"Chk223"
	// 						),
	// 					]),
	// 				])
	// 			),
	// 			new b.row(
	// 				new b.col([
	// 					new h.div(
	// 						{
	// 							class: ["form-check", "form-switch", "form-check-inline"],
	// 						},
	// 						[
	// 							new b.input({ switch: true, id: "chk1234" }),
	// 							new b.label(
	// 								{
	// 									class: "form-check-label",
	// 									for: "chk1234",
	// 								},
	// 								"Chk123"
	// 							),
	// 						]
	// 					),
	// 					new h.div(
	// 						{
	// 							class: ["form-check", "form-switch", "form-check-inline"],
	// 						},
	// 						[
	// 							new b.input({
	// 								switch: true,
	// 								id: "chk2234",
	// 								checked: true,
	// 							}),
	// 							new b.label(
	// 								{
	// 									class: "form-check-label",
	// 									for: "chk2234",
	// 								},
	// 								"Chk223"
	// 							),
	// 						]
	// 					),
	// 				])
	// 			),
	// 			new b.row(
	// 				new b.col([
	// 					new h.div(
	// 						{
	// 							class: ["form-check", "form-switch", "form-check-reverse"],
	// 						},
	// 						[
	// 							new b.input({ switch: true, id: "chk12345" }),
	// 							new b.label(
	// 								{
	// 									class: "form-check-label",
	// 									for: "chk12345",
	// 								},
	// 								"Chk123"
	// 							),
	// 						]
	// 					),
	// 					new h.div(
	// 						{
	// 							class: ["form-check", "form-switch", "form-check-reverse"],
	// 						},
	// 						[
	// 							new b.input({
	// 								switch: true,
	// 								id: "chk22345",
	// 								checked: true,
	// 							}),
	// 							new b.label(
	// 								{
	// 									class: "form-check-label",
	// 									for: "chk22345",
	// 								},
	// 								"Chk223"
	// 							),
	// 						]
	// 					),
	// 				])
	// 			),
	// 			new b.row(new b.col({ col: "auto" }, new h.option({ value: "axddd", textColor: "primary" }, "a"))),
	// 		]),
	// 		new b.container(
	// 			new b.grid({}, [
	// 				new b.row(new b.col([new b.input({ type: "file", disabled: true })])),
	// 				new b.row(
	// 					{
	// 						style: {
	// 							height: "60px !important",
	// 						},
	// 					},
	// 					[
	// 						new b.col(
	// 							{
	// 								col: 3,
	// 								textColor: "warning",
	// 								borderColor: "secondary",
	// 								borderWidth: 3,
	// 								rounded: true,
	// 								aria: { wowoww: "what?" },
	// 								data: { mehhh: "yaya" },
	// 								style: { backgroundColor: "red" },
	// 								fontWeight: "bolder",
	// 							},
	// 							"hello"
	// 						),
	// 						new h.h(
	// 							1,
	// 							{
	// 								col: 3,
	// 								on: {
	// 									click: (e: Event) => {
	// 										alert("click");
	// 										core.removeElement(e.target as HTMLElement);
	// 									},
	// 								},
	// 							},
	// 							"world"
	// 						),
	// 						new h.h(
	// 							2,
	// 							{
	// 								col: 3,
	// 								textColor: "primary",
	// 								class: ["hello", "world"],
	// 							},
	// 							"2"
	// 						),
	// 						new h.h(
	// 							3,
	// 							{
	// 								col: 3,
	// 								textColor: "success",
	// 								class: "world",
	// 								borderColor: "danger",
	// 							},
	// 							"3"
	// 						),
	// 					]
	// 				),
	// 				new b.row(
	// 					new b.col(
	// 						new h.hr({
	// 							title: "test",
	// 							style: { backgroundColor: "red" },
	// 						})
	// 					)
	// 				),
	// 				new b.row(new b.col(new h.a({ href: "#", linkColor: "danger" }, "this is link"))),
	// 				new b.row(
	// 					new b.col(
	// 						new b.input({
	// 							disabled: true,
	// 							type: "range",
	// 							min: 30,
	// 							max: 130,
	// 							value: 50,
	// 						})
	// 					)
	// 				),
	// 				new b.row([
	// 					new b.col(
	// 						new b.label(
	// 							{
	// 								for: "txtTest",
	// 								icon: { icon: "home", weight: "2xl" },
	// 								iconPosition: "top",
	// 								textColor: "danger",
	// 								labelDisplay: ["sm-none", "md-flex"],
	// 								iconDisplay: ["sm-flex", "md-none"],
	// 							},
	// 							"Home"
	// 						)
	// 					),
	// 					new b.col(
	// 						new b.label({ for: "txtTest", textColor: "success", icon: { icon: "home" } }, "Home")
	// 					),
	// 					new b.col(new b.label({ for: "txtTest" }, "hello bs label")),
	// 				]),
	// 				new b.row([
	// 					new b.col(
	// 						new b.button(
	// 							{ color: "danger" },
	// 							new b.label(
	// 								{
	// 									iconPosition: "top",
	// 									labelDisplay: ["sm-none", "md-flex"],
	// 									iconDisplay: ["sm-flex", "md-none"],
	// 									icon: { icon: "home" },
	// 								},
	// 								"Home"
	// 							)
	// 						)
	// 					),
	// 					new b.col(
	// 						new b.button(
	// 							{ color: "success", disabled: true },
	// 							new b.label({ for: "txtTest", icon: { icon: "home" } }, loream)
	// 						)
	// 					),
	// 				]),
	// 				new b.row(
	// 					new b.col([
	// 						new b.input({
	// 							disabled: true,
	// 							id: "txtTest",
	// 							type: "text",
	// 							weight: "lg",
	// 							list: "txtTest_list",
	// 						}),
	// 						new h.datalist({
	// 							id: "txtTest_list",
	// 							elem: loream.split(" ").map((i) => new h.option(i)),
	// 						}),
	// 					])
	// 				),
	// 				new b.row(
	// 					new b.col([
	// 						new b.alert.container(
	// 							{ color: "danger", dismissible: true },
	// 							new b.msg("star", [
	// 								"A simple primary alert with ",
	// 								new b.alert.link({ href: "#" }, "an example link"),
	// 								". Give it a click if you like.",
	// 							])
	// 						),
	// 					])
	// 				),
	// 				new b.row(
	// 					new b.col(
	// 						new b.img({
	// 							fluid: true,
	// 							thumbnail: true,
	// 							rounded: true,
	// 							src: "https://picsum.photos/seed/1231/800/400",
	// 						})
	// 					)
	// 				),
	// 				new b.row(new b.col(new h.a("this is link 2"))),
	// 				new b.row(new b.col(new h.b({ title: "test" }, "this is bold"))),
	// 				new b.row(new b.col(new h.i("nothing even happen"))),
	// 				new b.row(new b.col(new h.i({ id: "hhhhh" }, "test i 2"))),
	// 				new b.row(new b.col(new h.progress({ max: 100, value: 55 }, "test"))),
	// 				new b.row(
	// 					new b.col([
	// 						new b.icon("star"),
	// 						new b.icon({
	// 							icon: "star",
	// 							color: "primary",
	// 							weight: "xl",
	// 						}),
	// 						new b.icon({
	// 							type: "fab",
	// 							icon: "bootstrap",
	// 							color: "danger",
	// 						}),
	// 					])
	// 				),

	// 				new b.row(
	// 					new b.col([
	// 						new b.grid([
	// 							new b.button("Hello"),
	// 							new b.button(new b.label({ icon: { icon: "home" } }, "Hello World")),
	// 							new b.button(
	// 								{
	// 									color: "danger",
	// 									on: {
	// 										click: () => {
	// 											alert("hi");
	// 										},
	// 									},
	// 								},
	// 								new b.label({ icon: { icon: "star" } }, "Test ON")
	// 							),
	// 							new b.button(
	// 								{
	// 									color: "warning",
	// 									outline: true,
	// 									weight: "lg",
	// 								},
	// 								"Hello World"
	// 							),
	// 							new b.button(
	// 								{
	// 									color: "warning",
	// 									disabled: true,
	// 									weight: "sm",
	// 									type: "reset",
	// 								},
	// 								"Hello World (DIS)"
	// 							),
	// 							new b.button(
	// 								{
	// 									color: "success",
	// 									style: {
	// 										"--bs-btn-padding-y": ".25rem",
	// 										"--bs-btn-padding-x": ".5rem",
	// 										"--bs-btn-font-size": ".75rem",
	// 									},
	// 								},
	// 								"Custom"
	// 							),
	// 							new b.button(
	// 								{
	// 									color: "success",
	// 									outline: true,
	// 									toggle: "button",
	// 									disabled: true,
	// 								},
	// 								"Hello World (Dis)"
	// 							),
	// 							new b.button(
	// 								{
	// 									color: "success",
	// 									outline: true,
	// 									toggle: "button",
	// 									href: "#",
	// 								},
	// 								"Hello World"
	// 							),
	// 							new b.button(
	// 								{
	// 									color: "success",
	// 									outline: true,
	// 									toggle: "button",
	// 									disabled: true,
	// 									href: "#",
	// 								},
	// 								"Hello World (Dis)"
	// 							),
	// 						]),
	// 					])
	// 				),
	// 				new b.row(
	// 					new b.col(
	// 						new b.grid([
	// 							new b.msg("home", "Home"),
	// 							new b.msg("star", loream),
	// 							new b.msg({
	// 								iconPosition: "top",
	// 								iconContainer: {
	// 									fontDisplay: 1,
	// 									margin: 5,
	// 								},
	// 								icon: {
	// 									icon: "star",
	// 									weight: "2xl",
	// 									color: "primary",
	// 								},
	// 								elem: loream,
	// 							}),
	// 						])
	// 					)
	// 				),
	// 			])
	// 		),
	// 	])
	// );

	core.init(body);
});
