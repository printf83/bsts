// import { IAttrBSButton } from "./bs/button.js";
import { HLevel } from "./ht/h.js";
import { bs, core, ht } from "./index.js";
// let loream = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta tincidunt arcu eu dignissim. Suspendisse nunc tortor, semper ut commodo nec, bibendum ut quam. Vivamus porttitor egestas luctus. Morbi tincidunt tortor eu lorem gravida imperdiet. Vestibulum tincidunt hendrerit tempus. Morbi varius est ac euismod tristique. Fusce a tortor suscipit, lacinia arcu nec, aliquet tortor. Maecenas eu lorem nec ante faucibus sollicitudin. Nunc consequat ullamcorper congue. Praesent cursus velit euismod turpis ultrices, sit amet venenatis massa pharetra. Nunc maximus pharetra purus in maximus.`;
// let select_option = [
// 	{ value: "A", elem: "A" },
// 	{ value: "B", elem: "B" },
// 	{ value: "C", elem: "C" },
// 	{ value: "D", elem: "D" },
// 	{ value: "E", elem: "E" },
// ];

// let fnCard = (txt: string, src: string, footer?: true) => {
// 	return new bs.card.container([
// 		new bs.card.img({ src: src, location: "top" }),
// 		new bs.card.body([
// 			new bs.card.title("Card title"),
// 			new bs.card.text(txt),
// 			!footer
// 				? new bs.card.text(
// 						new ht.small(
// 							{ textColor: "muted" },
// 							"Last updated 3 mins ago"
// 						)
// 				  )
// 				: "",
// 		]),
// 		footer
// 			? new bs.card.footer(
// 					new ht.small(
// 						{ textColor: "muted" },
// 						"Last updated 3 mins ago"
// 					)
// 			  )
// 			: "",
// 	]);
// };

core.documentReady(() => {
	let body = document.getElementById("main") as HTMLElement;

	// core.replaceChild(body,
	// 	new bs.row({ paddingY: 5, gap: 3 }, [
	// 		// new bs.row(new bs.col([])),
	// 	]));

	core.replaceChild(
		body,
		new bs.row({ paddingY: 5, gap: 3 }, [
			new bs.row(
				new bs.col([
					new bs.nav.header.container({ type: "pill" }, [
						new bs.nav.header.item(
							new bs.nav.header.link({ active: true }, "Active")
						),
						new bs.nav.header.item({ dropdown: true }, [
							new bs.nav.header.link(
								{ dropdown: true },
								"Dropdown"
							),
							new bs.dropdown.menu([
								new bs.dropdown.item("Action"),
								new bs.dropdown.item("Another action"),
								new bs.dropdown.item("Something else here"),
								new bs.dropdown.divider(),
								new bs.dropdown.item("Separated link"),
							]),
						]),
						new bs.nav.header.item(new bs.nav.header.link("Link")),
						new bs.nav.header.item(
							new bs.nav.header.link(
								{ disabled: true },
								"Disabled"
							)
						),
					]),
				])
			),
			new bs.row(
				new bs.col([
					new bs.nav.header.container(
						{ role: "tablist", marginBottom: 3, type: "tab" },
						[
							new bs.nav.header.button(
								{
									active: true,
									id: "nav-home-tab",
									target: "#nav-home",
									control: "nav-home",
								},
								"Home"
							),
							new bs.nav.header.button(
								{
									id: "nav-profile-tab",
									target: "#nav-profile",
									control: "nav-profile",
								},
								"Profile"
							),
							new bs.nav.header.button(
								{
									id: "nav-contact-tab",
									target: "#nav-contact",
									control: "nav-contact",
								},
								"Contact"
							),
							new bs.nav.header.button(
								{
									disabled: true,
									id: "nav-disabled-tab",
									target: "#nav-disabled",
									control: "nav-disabled",
								},
								"Disabled"
							),
						]
					),
					new bs.nav.content.container([
						new bs.nav.content.item(
							{
								active: true,
								id: "nav-home",
								labelledby: "nav-home-tab",
							},
							"Tab 1 content"
						),
						new bs.nav.content.item(
							{
								id: "nav-profile",
								labelledby: "nav-profile-tab",
							},
							"Tab 2 content"
						),
						new bs.nav.content.item(
							{
								id: "nav-contact",
								labelledby: "nav-contact-tab",
							},
							"Tab 3 content"
						),
						new bs.nav.content.item(
							{
								id: "nav-disabled",
								labelledby: "nav-disabled-tab",
							},
							"Tab 4 content"
						),
					]),
				])
			),
			// new bs.row(new bs.col([])),
			// new bs.row(new bs.col([])),
			// new bs.row(new bs.col([])),
			// new bs.row(new bs.col([])),
			// new bs.row(new bs.col([])),
			// new bs.row(new bs.col([])),
			// new bs.row(new bs.col([])),
			// new bs.row(new bs.col([])),
		])
	);

	// core.replaceChild(
	// 	body,
	// 	new bs.row({ paddingY: 5, gap: 3 }, [
	// 		// new bs.row(new bs.col([])),
	// 		new bs.row(
	// 			new bs.col([
	// 				new bs.list.group([
	// 					new bs.list.item(
	// 						{ action: true, active: true },
	// 						"An item"
	// 					),
	// 					new bs.list.item({ action: true }, "A second item"),
	// 					new bs.list.item(
	// 						{ action: true, color: "warning" },
	// 						"A third item"
	// 					),
	// 					new bs.list.item(
	// 						{ action: true, color: "success" },
	// 						"A fourth item"
	// 					),
	// 					new bs.list.item({ action: true }, "And a fifth one"),
	// 				]),
	// 			])
	// 		),

	// 		new bs.row(
	// 			new bs.col(
	// 				[1, 2, 3, 4, 5, 6].map((i) => {
	// 					return new ht.h(i as HLevel, [
	// 						"Example heading",
	// 						new bs.badge({ bgColor: "secondary" }, "New"),
	// 					]);
	// 				})
	// 			)
	// 		),

	// 		new bs.row(
	// 			new bs.col([
	// 				new bs.button({ position: "relative" }, [
	// 					"Inbox",
	// 					new bs.badge(
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

	// 		new bs.row(
	// 			new bs.col([
	// 				new bs.button({ position: "relative" }, [
	// 					"Profile",
	// 					new bs.badge(
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
	// 						new bs.visuallyhidden("New alerts")
	// 					),
	// 				]),
	// 			])
	// 		),

	// 		new bs.row(
	// 			new bs.col([
	// 				new bs.button([
	// 					"Notification",
	// 					new bs.badge({ textBgColor: "secondary" }, "4"),
	// 				]),
	// 			])
	// 		),

	// 		new bs.row(
	// 			new bs.col(
	// 				new bs.dropdown.container({ drop: "up", center: true }, [
	// 					new bs.button({ color: "danger" }, "Dropdown"),
	// 					new bs.dropdown.toggle({
	// 						split: true,
	// 						color: "danger",
	// 					}),
	// 					new bs.dropdown.menu(
	// 						{
	// 							dark: true,
	// 							positionView: ["start", "md-center", "lg-end"],
	// 						},
	// 						[
	// 							new bs.dropdown.header("Hello"),
	// 							new bs.dropdown.item(
	// 								{ active: true },
	// 								"Action"
	// 							),
	// 							new bs.dropdown.item("Another action"),
	// 							new bs.dropdown.item("Something else here"),
	// 							new bs.dropdown.divider(),
	// 							new bs.dropdown.item("Separated link"),
	// 						]
	// 					),
	// 				])
	// 			)
	// 		),
	// 	])
	// );

	// core.replaceChild(
	// 	body,
	// 	new bs.row({ paddingY: 5, gap: 3 }, [
	// 		new bs.row(new bs.col({ padding: 3 }, "")),
	// 		new bs.row(
	// 			new bs.col([
	// 				new bs.inputgroup.container(
	// 					{ marginBottom: 3, weight: "sm" },
	// 					[
	// 						new bs.inputgroup.text(
	// 							{ id: "inputGroup-sizing-small" },
	// 							"Small"
	// 						),
	// 						new bs.input({
	// 							type: "text",
	// 							aria: {
	// 								label: "Sizing example input",
	// 								describedby: "inputGroup-sizing-small",
	// 							},
	// 						}),
	// 					]
	// 				),
	// 				new bs.inputgroup.container({ marginBottom: 3 }, [
	// 					new bs.inputgroup.text(
	// 						{ id: "inputGroup-sizing-default" },
	// 						"Default"
	// 					),
	// 					new bs.input({
	// 						type: "text",
	// 						aria: {
	// 							label: "Sizing example input",
	// 							describedby: "inputGroup-sizing-default",
	// 						},
	// 					}),
	// 				]),
	// 				new bs.inputgroup.container(
	// 					{ marginBottom: 3, weight: "lg" },
	// 					[
	// 						new bs.inputgroup.text(
	// 							{ id: "inputGroup-sizing-large" },
	// 							"Large"
	// 						),
	// 						new bs.input({
	// 							type: "text",
	// 							aria: {
	// 								label: "Sizing example input",
	// 								describedby: "inputGroup-sizing-large",
	// 							},
	// 						}),
	// 					]
	// 				),
	// 			])
	// 		),

	// 		new bs.row(
	// 			new bs.col([
	// 				new bs.inputgroup.container({ marginBottom: 3 }, [
	// 					new bs.inputgroup.text(
	// 						new bs.input({
	// 							type: "checkbox",
	// 							marginTop: 0,
	// 							aria: {
	// 								label: "Checkbox for following text input",
	// 							},
	// 						})
	// 					),
	// 					new bs.input({
	// 						type: "text",
	// 						aria: {
	// 							label: "Text input with checkbox",
	// 						},
	// 					}),
	// 				]),
	// 				new bs.inputgroup.container(
	// 					{ marginBottom: 3, weight: "lg" },
	// 					[
	// 						new bs.inputgroup.text(
	// 							new bs.input({
	// 								type: "radio",
	// 								marginTop: 0,
	// 								aria: {
	// 									label: "Radio button for following text input",
	// 								},
	// 							})
	// 						),
	// 						new bs.input({
	// 							type: "text",
	// 							aria: {
	// 								label: "Text input with radio button",
	// 							},
	// 						}),
	// 					]
	// 				),
	// 			])
	// 		),

	// 		new bs.row(
	// 			new bs.col(
	// 				new bs.inputgroup.container({ marginBottom: 3 }, [
	// 					new bs.inputgroup.text("First and last name"),
	// 					new bs.input({
	// 						type: "text",
	// 						aria: {
	// 							label: "First name",
	// 						},
	// 					}),
	// 					new bs.input({
	// 						type: "text",
	// 						aria: {
	// 							label: "Last name",
	// 						},
	// 					}),
	// 				])
	// 			)
	// 		),

	// 		new bs.row(
	// 			new bs.col(
	// 				new bs.inputgroup.container({ marginBottom: 3 }, [
	// 					new bs.dropdown.toggle({
	// 						elem: "Dropdown",
	// 						outline: true,
	// 						color: "secondary",
	// 					}),
	// 					new bs.dropdown.menu([
	// 						new bs.dropdown.header("Hello"),
	// 						new bs.dropdown.item({ active: true }, "Action"),
	// 						new bs.dropdown.item("Another action"),
	// 						new bs.dropdown.item("Something else here"),
	// 						new bs.dropdown.divider(),
	// 						new bs.dropdown.item("Separated link"),
	// 					]),
	// 					new bs.input({
	// 						type: "text",
	// 						aria: {
	// 							label: "Text input with dropdown button",
	// 						},
	// 					}),
	// 				])
	// 			)
	// 		),

	// 		new bs.row(
	// 			new bs.col(
	// 				new bs.dropdown.container({ drop: "up", center: true }, [
	// 					// new bs.button({ color: "danger" }, "Dropdown button X"),
	// 					new bs.dropdown.toggle({
	// 						// split: true,
	// 						color: "danger",
	// 					}),
	// 					new bs.dropdown.menu(
	// 						{
	// 							dark: true,
	// 							positionView: ["start", "md-center", "lg-end"],
	// 						},
	// 						[
	// 							new bs.dropdown.header("Hello"),
	// 							new bs.dropdown.item(
	// 								{ active: true },
	// 								"Action"
	// 							),
	// 							new bs.dropdown.item("Another action"),
	// 							new bs.dropdown.item("Something else here"),
	// 							new bs.dropdown.divider(),
	// 							new bs.dropdown.item("Separated link"),
	// 						]
	// 					),
	// 				])
	// 			)
	// 		),

	// 		new bs.row(
	// 			new bs.col(
	// 				new bs.dropdown.container(
	// 					{
	// 						drop: "start",
	// 						on: {
	// 							"hidden.bs.dropdown": function () {
	// 								alert("Test hidden.bs.dropdown event");
	// 							},
	// 						},
	// 					},
	// 					[
	// 						new bs.dropdown.toggle({
	// 							split: true,
	// 							menuAutoClose: "manual",
	// 						}),
	// 						new bs.dropdown.menu(
	// 							{
	// 								positionView: [
	// 									"start",
	// 									"md-center",
	// 									"lg-end",
	// 								],
	// 								textColor: "muted",
	// 								padding: 3,
	// 							},
	// 							[new ht.div("Hello"), new ht.div("World")]
	// 						),
	// 						new bs.button("Dropdown button X"),
	// 					]
	// 				)
	// 			)
	// 		),

	// 		new bs.row(
	// 			new bs.col(
	// 				new bs.formfloating([
	// 					new bs.select(
	// 						{ id: "floatingSelectGrid", class: "is-invalid" },
	// 						select_option.map((i) => new ht.option(i))
	// 					),
	// 					new bs.label(
	// 						{ for: "floatingSelectGrid" },
	// 						"Works with selects"
	// 					),
	// 				])
	// 			)
	// 		),

	// 		new bs.row(
	// 			new bs.col(
	// 				{ col: 6 },
	// 				new bs.card.container({ style: { width: "18rem" } }, [
	// 					new bs.card.img({
	// 						location: "top",
	// 						src: "https://picsum.photos/seed/1231/200/200",
	// 					}),

	// 					new bs.card.body([
	// 						new bs.card.title("Card title"),
	// 						new bs.card.text(
	// 							"Some quick example text to build on the card title and make up the bulk of the card's content."
	// 						),
	// 					]),

	// 					new bs.list.group({ flush: true }, [
	// 						new bs.list.item("An item"),
	// 						new bs.list.item("A second item"),
	// 						new bs.list.item("A third item"),
	// 					]),

	// 					new bs.card.body([
	// 						new bs.card.link({ href: "#" }, "Card link"),
	// 						new bs.card.link({ href: "#" }, "Another link"),
	// 					]),
	// 				])
	// 			)
	// 		),

	// 		new bs.row(
	// 			new bs.col(
	// 				{ col: 6 },
	// 				new bs.card.container(
	// 					{ textAlign: "center", style: { width: "18rem" } },
	// 					[
	// 						new bs.card.header("Featured"),
	// 						new bs.card.body([
	// 							new bs.card.title("Special title treatment"),
	// 							new bs.card.text(
	// 								"With supporting text below as a natural lead-in to additional content."
	// 							),
	// 							new bs.button({ href: "#" }, "Go somewhere"),
	// 						]),
	// 						new bs.card.footer(
	// 							{ textColor: "muted" },
	// 							"2 days ago"
	// 						),
	// 					]
	// 				)
	// 			)
	// 		),

	// 		new bs.row(
	// 			new bs.col(
	// 				{ col: 6 },
	// 				new bs.card.container([
	// 					new bs.card.img({
	// 						rounded: true,
	// 						src: "https://picsum.photos/seed/1231/400/220",
	// 					}),
	// 					new bs.card.imgoverlay([
	// 						new bs.card.title("Card title"),
	// 						new bs.card.text(
	// 							"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
	// 						),
	// 						new bs.card.text(
	// 							new ht.small("Last updated 3 mins ago")
	// 						),
	// 					]),
	// 				])
	// 			)
	// 		),

	// 		new bs.row(
	// 			new bs.col(
	// 				{ col: 6 },
	// 				new bs.card.container([
	// 					new bs.row({ gap: 0 }, [
	// 						new bs.col(
	// 							{ col: "md-4" },
	// 							new bs.card.img({
	// 								fluid: true,
	// 								rounded: "start",
	// 								src: "https://picsum.photos/seed/1231/100/280",
	// 							})
	// 						),
	// 						new bs.col(
	// 							{
	// 								col: "md-8",
	// 							},
	// 							new bs.card.body([
	// 								new bs.card.title("Card title"),
	// 								new bs.card.text(
	// 									"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
	// 								),
	// 								new bs.card.text(
	// 									new ht.small("Last updated 3 mins ago")
	// 								),
	// 							])
	// 						),
	// 					]),
	// 				])
	// 			)
	// 		),

	// 		new bs.row(
	// 			new bs.col(
	// 				{ col: 4 },
	// 				new bs.card.container({ borderColor: "success" }, [
	// 					new bs.card.header("Header"),
	// 					new bs.card.body([
	// 						new bs.card.title("Card title"),
	// 						new bs.card.text(
	// 							"Some quick example text to build on the card title and make up the bulk of the card's content."
	// 						),
	// 					]),
	// 				])
	// 			)
	// 		),

	// 		new bs.row(
	// 			new bs.col(
	// 				new bs.card.group([
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

	// 		new bs.row(
	// 			new bs.col(
	// 				new bs.card.group([
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

	// 		new bs.row(
	// 			new bs.col({ col: 6 }, [
	// 				new ht.p({ display: "flex", gap: 1 }, [
	// 					new bs.collapse.toggle(
	// 						{
	// 							link: true,
	// 							target: "#cE1",
	// 							control: "cE1",
	// 						},
	// 						"First"
	// 					),
	// 					new bs.collapse.toggle(
	// 						{
	// 							target: "#cE2",
	// 							control: "cE2",
	// 						},
	// 						"Second"
	// 					),
	// 					new bs.collapse.toggle(
	// 						{
	// 							target: ".multi-collapse",
	// 							control: "cE1 cE2",
	// 						},
	// 						"Both"
	// 					),
	// 				]),
	// 				new bs.collapse.container(
	// 					{ id: "cE1", class: "multi-collapse" },
	// 					new bs.card.container(new bs.card.body("1"))
	// 				),
	// 				new bs.collapse.container(
	// 					{ id: "cE2", class: "multi-collapse" },
	// 					new bs.card.container(new bs.card.body("2"))
	// 				),
	// 			])
	// 		),
	// 	])
	// );

	// core.replaceChild(
	// 	body,
	// 	new bs.row({ gap: 3 }, [
	// 		new bs.row(new bs.col({ padding: 3 }, "")),

	// 		new bs.row(
	// 			new bs.col([
	// 				new bs.select(
	// 					{ weight: "sm" },
	// 					select_option.map((i) => new ht.option(i))
	// 				),
	// 			])
	// 		),

	// 		new bs.row(
	// 			new bs.col([
	// 				new bs.alert.container(
	// 					{ color: "success", dismissible: true },
	// 					[
	// 						new bs.alert.header(4, "Well done"),
	// 						new ht.p(
	// 							"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
	// 						),
	// 						new ht.hr(),
	// 						new ht.p(
	// 							"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."
	// 						),
	// 					]
	// 				),
	// 			])
	// 		),

	// 		new bs.row(
	// 			new bs.col({ theme: "light", padding: 3, bgColor: "body" }, [
	// 				new bs.btnclose(),
	// 				new bs.btnclose({ disabled: true }),
	// 			])
	// 		),
	// 		new bs.row(
	// 			new bs.col({ theme: "dark", padding: 3, bgColor: "body" }, [
	// 				new bs.btnclose(),
	// 				new bs.btnclose({ disabled: true }),
	// 			])
	// 		),

	// 		new ht.ul(new ht.li("hello")),
	// 		new ht.ol([new ht.li("hello"), new ht.li("world")]),
	// 		new ht.ul(
	// 			["AAAAA", "AAAAA2", "AAAAA3", "AAAAA4"].map((i) => new ht.li(i))
	// 		),
	// 		new ht.hr({ id: "aaaa" }),
	// 		new bs.button({ color: "danger", elem: "Hello World" }),
	// 		new tag("h1", "Hello World"),
	// 		new ht.p(loream),

	// 		new bs.container(
	// 			new bs.row(
	// 				new bs.col({ display: "flex", gap: 3 }, [
	// 					...[
	// 						{ id: "a", elem: "1" },
	// 						{ id: "b", elem: "2" },
	// 						{ id: "c", elem: "3" },
	// 						{ id: "d", elem: "4" },
	// 					].map((i) => new ht.a(i)),
	// 					...[
	// 						{ color: "primary", elem: new bs.label("Primary") },
	// 						{
	// 							color: "secondary",
	// 							elem: new bs.label("Secondary"),
	// 						},
	// 						{ color: "success", elem: new bs.label("Success") },
	// 						{ color: "warning", elem: new bs.label("Warning") },
	// 						{ color: "danger", elem: new bs.label("Danger") },
	// 						{ color: "info", elem: new bs.label("Info") },
	// 					].map((i) => new bs.button(i as IAttrBSButton)),
	// 				])
	// 			)
	// 		),
	// 		new bs.container([
	// 			new bs.row(
	// 				new bs.col(
	// 					new ht.div({ display: "flex", gap: 3 }, [
	// 						new bs.input({
	// 							type: "checkbox",
	// 							id: "chk1",
	// 							toggle: true,
	// 						}),
	// 						new bs.label({
	// 							color: "primary",
	// 							outline: true,
	// 							for: "chk1",
	// 							elem: "Single toggle",
	// 						}),
	// 						new bs.input({
	// 							type: "checkbox",
	// 							id: "chk2",
	// 							toggle: true,
	// 							checked: true,
	// 						}),
	// 						new bs.label(
	// 							{
	// 								color: "secondary",
	// 								outline: true,
	// 								for: "chk2",
	// 							},
	// 							"Checked"
	// 						),
	// 						new bs.input({
	// 							type: "radio",
	// 							id: "rad1",
	// 							name: "radGroup1",
	// 							toggle: true,
	// 							checked: true,
	// 						}),
	// 						new bs.label({
	// 							color: "success",
	// 							outline: true,
	// 							for: "rad1",
	// 							elem: "Checked success radio",
	// 						}),
	// 						new bs.input({
	// 							type: "radio",
	// 							id: "rad2",
	// 							name: "radGroup1",
	// 							toggle: true,
	// 						}),
	// 						new bs.label(
	// 							{ color: "danger", outline: true, for: "rad2" },
	// 							"Danger radio"
	// 						),
	// 					])
	// 				)
	// 			),
	// 			new bs.row(
	// 				new bs.col([
	// 					new ht.div({ class: "form-check" }, [
	// 						new bs.input({ type: "checkbox", id: "chk1a" }),
	// 						new bs.label(
	// 							{ class: "form-check-label", for: "chk1a" },
	// 							"Chk1"
	// 						),
	// 					]),
	// 					new ht.div({ class: "form-check" }, [
	// 						new bs.input({
	// 							type: "checkbox",
	// 							id: "chk2a",
	// 							checked: true,
	// 						}),
	// 						new bs.label(
	// 							{
	// 								class: "form-check-label",
	// 								for: "chk2a",
	// 							},
	// 							"Chk2"
	// 						),
	// 					]),
	// 				])
	// 			),
	// 			new bs.row(
	// 				new bs.col([
	// 					new ht.div({ class: "form-check" }, [
	// 						new bs.input({
	// 							type: "radio",
	// 							id: "chk12",
	// 							name: "aaa",
	// 						}),
	// 						new bs.label(
	// 							{ class: "form-check-label", for: "chk12" },
	// 							"Chk12"
	// 						),
	// 					]),
	// 					new ht.div({ class: "form-check" }, [
	// 						new bs.input({
	// 							type: "radio",
	// 							id: "chk22",
	// 							checked: true,
	// 							name: "aaa",
	// 						}),
	// 						new bs.label(
	// 							{
	// 								class: "form-check-label",
	// 								for: "chk22",
	// 							},
	// 							"Chk22"
	// 						),
	// 					]),
	// 				])
	// 			),
	// 			new bs.row(
	// 				new bs.col([
	// 					new ht.div({ class: ["form-check", "form-switch"] }, [
	// 						new bs.input({ switch: true, id: "chk123" }),
	// 						new bs.label(
	// 							{ class: "form-check-label", for: "chk123" },
	// 							"Chk123"
	// 						),
	// 					]),
	// 					new ht.div({ class: ["form-check", "form-switch"] }, [
	// 						new bs.input({
	// 							switch: true,
	// 							id: "chk223",
	// 							checked: true,
	// 						}),
	// 						new bs.label(
	// 							{
	// 								class: "form-check-label",
	// 								for: "chk223",
	// 							},
	// 							"Chk223"
	// 						),
	// 					]),
	// 				])
	// 			),
	// 			new bs.row(
	// 				new bs.col([
	// 					new ht.div(
	// 						{
	// 							class: [
	// 								"form-check",
	// 								"form-switch",
	// 								"form-check-inline",
	// 							],
	// 						},
	// 						[
	// 							new bs.input({ switch: true, id: "chk1234" }),
	// 							new bs.label(
	// 								{
	// 									class: "form-check-label",
	// 									for: "chk1234",
	// 								},
	// 								"Chk123"
	// 							),
	// 						]
	// 					),
	// 					new ht.div(
	// 						{
	// 							class: [
	// 								"form-check",
	// 								"form-switch",
	// 								"form-check-inline",
	// 							],
	// 						},
	// 						[
	// 							new bs.input({
	// 								switch: true,
	// 								id: "chk2234",
	// 								checked: true,
	// 							}),
	// 							new bs.label(
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
	// 			new bs.row(
	// 				new bs.col([
	// 					new ht.div(
	// 						{
	// 							class: [
	// 								"form-check",
	// 								"form-switch",
	// 								"form-check-reverse",
	// 							],
	// 						},
	// 						[
	// 							new bs.input({ switch: true, id: "chk12345" }),
	// 							new bs.label(
	// 								{
	// 									class: "form-check-label",
	// 									for: "chk12345",
	// 								},
	// 								"Chk123"
	// 							),
	// 						]
	// 					),
	// 					new ht.div(
	// 						{
	// 							class: [
	// 								"form-check",
	// 								"form-switch",
	// 								"form-check-reverse",
	// 							],
	// 						},
	// 						[
	// 							new bs.input({
	// 								switch: true,
	// 								id: "chk22345",
	// 								checked: true,
	// 							}),
	// 							new bs.label(
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
	// 			new bs.row(
	// 				new bs.col(
	// 					{ col: "auto" },
	// 					new ht.option(
	// 						{ value: "axddd", textColor: "primary" },
	// 						"a"
	// 					)
	// 				)
	// 			),
	// 		]),
	// 		new bs.container(
	// 			new bs.grid({}, [
	// 				new bs.row(new bs.col([new bs.input({ type: "file" })])),
	// 				new bs.row(
	// 					{
	// 						style: {
	// 							height: "60px !important",
	// 						},
	// 					},
	// 					[
	// 						new bs.col(
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
	// 						new ht.h(
	// 							1,
	// 							{
	// 								col: 3,
	// 								on: {
	// 									click: (e: Event) => {
	// 										alert("click");
	// 										core.removeElement(
	// 											e.target as HTMLElement
	// 										);
	// 									},
	// 								},
	// 							},
	// 							"world"
	// 						),
	// 						new ht.h(
	// 							2,
	// 							{
	// 								col: 3,
	// 								textColor: "primary",
	// 								class: ["hello", "world"],
	// 							},
	// 							"2"
	// 						),
	// 						new ht.h(
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
	// 				new bs.row(
	// 					new bs.col(
	// 						new ht.hr({
	// 							title: "test",
	// 							style: { backgroundColor: "red" },
	// 						})
	// 					)
	// 				),
	// 				new bs.row(
	// 					new bs.col(
	// 						new ht.a(
	// 							{ href: "#", linkColor: "danger" },
	// 							"this is link"
	// 						)
	// 					)
	// 				),
	// 				new bs.row(
	// 					new bs.col(
	// 						new bs.input({
	// 							type: "range",
	// 							min: 30,
	// 							max: 130,
	// 							value: 50,
	// 						})
	// 					)
	// 				),
	// 				new bs.row([
	// 					new bs.col(
	// 						new bs.label(
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
	// 					new bs.col(
	// 						new bs.label(
	// 							{ for: "txtTest", textColor: "success" },
	// 							"home",
	// 							"Home"
	// 						)
	// 					),
	// 					new bs.col(
	// 						new bs.label({ for: "txtTest" }, "hello bs label")
	// 					),
	// 				]),
	// 				new bs.row([
	// 					new bs.col(
	// 						new bs.button(
	// 							{ color: "danger" },
	// 							new bs.label(
	// 								{
	// 									iconPosition: "top",
	// 									labelDisplay: ["sm-none", "md-flex"],
	// 									iconDisplay: ["sm-flex", "md-none"],
	// 								},
	// 								"home",
	// 								"Home"
	// 							)
	// 						)
	// 					),
	// 					new bs.col(
	// 						new bs.button(
	// 							{ color: "success" },
	// 							new bs.label({ for: "txtTest" }, "home", loream)
	// 						)
	// 					),
	// 				]),
	// 				new bs.row(
	// 					new bs.col([
	// 						new bs.input({
	// 							id: "txtTest",
	// 							type: "text",
	// 							weight: "lg",
	// 							list: "txtTest_list",
	// 						}),
	// 						new ht.datalist({
	// 							id: "txtTest_list",
	// 							options: loream.split(" "),
	// 						}),
	// 					])
	// 				),
	// 				new bs.row(
	// 					new bs.col([
	// 						new bs.alert.container(
	// 							{ color: "danger", dismissible: true },
	// 							new bs.msg("star", [
	// 								"A simple primary alert with ",
	// 								new bs.alert.link(
	// 									{ href: "#" },
	// 									"an example link"
	// 								),
	// 								". Give it a click if you like.",
	// 							])
	// 						),
	// 					])
	// 				),
	// 				new bs.row(
	// 					new bs.col(
	// 						new bs.img({
	// 							fluid: true,
	// 							thumbnail: true,
	// 							rounded: true,
	// 							src: "https://picsum.photos/seed/1231/800/400",
	// 						})
	// 					)
	// 				),
	// 				new bs.row(new bs.col(new ht.a("this is link 2"))),
	// 				new bs.row(
	// 					new bs.col(new ht.b({ title: "test" }, "this is bold"))
	// 				),
	// 				new bs.row(new bs.col(new ht.i("nothing even happen"))),
	// 				new bs.row(
	// 					new bs.col(new ht.i({ id: "hhhhh" }, "test i 2"))
	// 				),
	// 				new bs.row(
	// 					new bs.col(
	// 						new ht.progress({ max: 100, value: 55 }, "test")
	// 					)
	// 				),
	// 				new bs.row(
	// 					new bs.col([
	// 						new bs.icon("star"),
	// 						new bs.icon({
	// 							icon: "star",
	// 							color: "primary",
	// 							weight: "xl",
	// 						}),
	// 						new bs.icon({
	// 							type: "fab",
	// 							icon: "bootstrap",
	// 							color: "danger",
	// 						}),
	// 					])
	// 				),

	// 				new bs.row(
	// 					new bs.col([
	// 						new bs.grid([
	// 							new bs.button(),
	// 							new bs.button(
	// 								new bs.label("home", "Hello World")
	// 							),
	// 							new bs.button(
	// 								{
	// 									color: "danger",
	// 									on: {
	// 										click: () => {
	// 											alert("hi");
	// 										},
	// 									},
	// 								},
	// 								new bs.label("star", "Test ON")
	// 							),
	// 							new bs.button(
	// 								{
	// 									color: "warning",
	// 									outline: true,
	// 									weight: "lg",
	// 								},
	// 								"Hello World"
	// 							),
	// 							new bs.button(
	// 								{
	// 									color: "warning",
	// 									disabled: true,
	// 									weight: "sm",
	// 									type: "reset",
	// 								},
	// 								"Hello World (DIS)"
	// 							),
	// 							new bs.button(
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
	// 							new bs.button(
	// 								{
	// 									color: "success",
	// 									outline: true,
	// 									toggle: true,
	// 									disabled: true,
	// 								},
	// 								"Hello World (Dis)"
	// 							),
	// 							new bs.button(
	// 								{
	// 									color: "success",
	// 									outline: true,
	// 									toggle: true,
	// 									href: "#",
	// 								},
	// 								"Hello World"
	// 							),
	// 							new bs.button(
	// 								{
	// 									color: "success",
	// 									outline: true,
	// 									toggle: true,
	// 									disabled: true,
	// 									href: "#",
	// 								},
	// 								"Hello World (Dis)"
	// 							),
	// 						]),
	// 					])
	// 				),
	// 				new bs.row(
	// 					new bs.col(
	// 						new bs.grid([
	// 							new bs.msg("home", "Home"),
	// 							new bs.msg("star", loream),
	// 							new bs.msg({
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
});
