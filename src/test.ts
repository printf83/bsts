import { core, html, bs, tag } from "./index.js";

let loream = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta tincidunt arcu eu dignissim. Suspendisse nunc tortor, semper ut commodo nec, bibendum ut quam. Vivamus porttitor egestas luctus. Morbi tincidunt tortor eu lorem gravida imperdiet. Vestibulum tincidunt hendrerit tempus. Morbi varius est ac euismod tristique. Fusce a tortor suscipit, lacinia arcu nec, aliquet tortor. Maecenas eu lorem nec ante faucibus sollicitudin. Nunc consequat ullamcorper congue. Praesent cursus velit euismod turpis ultrices, sit amet venenatis massa pharetra. Nunc maximus pharetra purus in maximus.`;

core.documentReady(() => {
	let body = document.getElementById("main") as HTMLElement;

	core.replaceChild(body, [
		new html.ul(new html.li("hello")),
		new html.ol([new html.li("hello"), new html.li("world")]),
		new html.hr({ id: "aaaa" }),
		new bs.button({ color: "danger", elem: "Hello World" }),
		new tag("h1", "Hello World"),

		// new bs.container(
		// 	new bs.row(
		// 		new bs.col(
		// 			new html.div({ display: "flex", gap: 3 }, [
		// 				...html.a.gen([
		// 					{ id: "a", elem: "1" },
		// 					{ id: "b", elem: "2" },
		// 					{ id: "c", elem: "3" },
		// 					{ id: "d", elem: "4" },
		// 				]),
		// 				...bs.button.gen([
		// 					{ color: "primary", elem: new bs.label("Primary") },
		// 					{ color: "secondary", elem: new bs.label("Secondary") },
		// 					{ color: "success", elem: new bs.label("Success") },
		// 					{ color: "warning", elem: new bs.label("Warning") },
		// 					{ color: "danger", elem: new bs.label("Danger") },
		// 					{ color: "info", elem: new bs.label("Info") },
		// 				]),
		// 			])
		// 		)
		// 	)
		// ),
		// new bs.container([
		// 	new bs.row(
		// 		new bs.col(
		// 			new html.div({ display: "flex", gap: 3 }, [
		// 				new bs.input({ type: "checkbox", id: "chk1", toggle: true }),
		// 				new bs.label({ color: "primary", outline: true, for: "chk1", elem: "Single toggle" }),
		// 				new bs.input({ type: "checkbox", id: "chk2", toggle: true, checked: true }),
		// 				new bs.label({ color: "secondary", outline: true, for: "chk2" }, "Checked"),
		// 				new bs.input({ type: "radio", id: "rad1", name: "radGroup1", toggle: true, checked: true }),
		// 				new bs.label({ color: "success", outline: true, for: "rad1", elem: "Checked success radio" }),
		// 				new bs.input({ type: "radio", id: "rad2", name: "radGroup1", toggle: true }),
		// 				new bs.label({ color: "danger", outline: true, for: "rad2" }, "Danger radio"),
		// 			])
		// 		)
		// 	),
		// 	new bs.row(new bs.col({ col: "auto" }, new html.option({ value: "axddd", textColor: "primary" }, "a"))),
		// ]),
		// new bs.container(
		// 	new bs.grid([
		// 		new bs.row(new bs.col([new bs.input({ type: "file" })])),
		// 		new bs.row(
		// 			{
		// 				style: {
		// 					height: "60px !important",
		// 				},
		// 			},
		// 			[
		// 				new bs.col(
		// 					{
		// 						col: 3,
		// 						textColor: "warning",
		// 						borderColor: "secondary",
		// 						borderWidth: 3,
		// 						rounded: true,
		// 						aria: { wowoww: "what?" },
		// 						data: { mehhh: "yaya" },
		// 						style: { backgroundColor: "red" },
		// 						fontWeight: "bolder",
		// 					},
		// 					"hello"
		// 				),
		// 				new html.h(
		// 					1,
		// 					{
		// 						col: 3,
		// 						on: {
		// 							click: (e: Event) => {
		// 								alert("click");
		// 								core.removeElement(e.target as HTMLElement);
		// 							},
		// 						},
		// 					},
		// 					"world"
		// 				),
		// 				new html.h(2, { col: 3, textColor: "primary", class: ["hello", "world"] }, "2"),
		// 				new html.h(3, { col: 3, textColor: "success", class: "world", borderColor: "danger" }, "3"),
		// 			]
		// 		),
		// 		new bs.row(new bs.col(new html.hr({ title: "test", style: { backgroundColor: "red" } }))),
		// 		new bs.row(new bs.col(new html.a({ href: "#", linkColor: "danger" }, "this is link"))),
		// 		new bs.row(new bs.col(new bs.input({ type: "range", min: 30, max: 130, value: 50 }))),
		// 		new bs.row([
		// 			new bs.col(
		// 				new bs.label(
		// 					{
		// 						for: "txtTest",
		// 						icon: { icon: "home", weight: "2xl" },
		// 						iconPosition: "top",
		// 						textColor: "danger",
		// 						labelDisplay: ["sm-none", "md-flex"],
		// 						iconDisplay: ["sm-flex", "md-none"],
		// 					},
		// 					"Home"
		// 				)
		// 			),
		// 			new bs.col(new bs.label({ for: "txtTest", textColor: "success" }, "home", "Home")),
		// 			new bs.col(new bs.label({ for: "txtTest" }, "hello bs label")),
		// 		]),
		// 		new bs.row([
		// 			new bs.col(
		// 				new bs.button(
		// 					{ color: "danger" },
		// 					new bs.label(
		// 						{
		// 							iconPosition: "top",
		// 							labelDisplay: ["sm-none", "md-flex"],
		// 							iconDisplay: ["sm-flex", "md-none"],
		// 						},
		// 						"home",
		// 						"Home"
		// 					)
		// 				)
		// 			),
		// 			new bs.col(new bs.button({ color: "success" }, new bs.label({ for: "txtTest" }, "home", loream))),
		// 		]),
		// 		new bs.row(
		// 			new bs.col([
		// 				new bs.input({
		// 					id: "txtTest",
		// 					type: "text",
		// 					weight: "lg",
		// 					list: "txtTest_list",
		// 				}),
		// 				new html.datalist({ id: "txtTest_list", options: loream.split(" ") }),
		// 			])
		// 		),
		// 		new bs.row(new bs.col([new bs.alert({ color: "danger" }, new bs.msg("star", loream))])),
		// 		new bs.row(
		// 			new bs.col(
		// 				new bs.img({
		// 					fluid: true,
		// 					thumbnail: true,
		// 					rounded: true,
		// 					src: "https://picsum.photos/seed/1231/800/400",
		// 				})
		// 			)
		// 		),
		// 		new bs.row(new bs.col(new html.a("this is link 2"))),
		// 		new bs.row(new bs.col(new html.b({ title: "test" }, "this is bold"))),
		// 		new bs.row(new bs.col(new html.i("nothing even happen"))),
		// 		new bs.row(new bs.col(new html.i({ id: "hhhhh" }, "test i 2"))),
		// 		new bs.row(new bs.col(new html.progress({ max: 100, value: 55 }, "test"))),
		// 		new bs.row(
		// 			new bs.col([
		// 				new bs.icon("star"),
		// 				new bs.icon({ icon: "star", color: "primary", weight: "xl" }),
		// 				new bs.icon({ type: "fab", icon: "bootstrap", color: "danger" }),
		// 			])
		// 		),
		// 		new bs.row(
		// 			new bs.col([
		// 				new bs.icon({ stack: true, weight: "2xl" }, [
		// 					new bs.icon({ icon: "square", stack: 2, color: "primary" }),
		// 					new bs.icon({ type: "fab", icon: "twitter", stack: 1, inverse: true }),
		// 				]),
		// 			])
		// 		),
		// 		new bs.row(
		// 			new bs.col([
		// 				new bs.grid([
		// 					new bs.button(),
		// 					new bs.button(new bs.label("home", "Hello World")),
		// 					new bs.button(
		// 						{
		// 							color: "danger",
		// 							on: {
		// 								click: () => {
		// 									alert("hi");
		// 								},
		// 							},
		// 						},
		// 						new bs.label("star", "Test ON")
		// 					),
		// 					new bs.button({ color: "warning", outline: true, weight: "lg" }, "Hello World"),
		// 					new bs.button(
		// 						{ color: "warning", disabled: true, weight: "sm", type: "reset" },
		// 						"Hello World (DIS)"
		// 					),
		// 					new bs.button(
		// 						{
		// 							color: "success",
		// 							style: {
		// 								"--bs-btn-padding-y": ".25rem",
		// 								"--bs-btn-padding-x": ".5rem",
		// 								"--bs-btn-font-size": ".75rem",
		// 							},
		// 						},
		// 						"Custom"
		// 					),
		// 					new bs.button(
		// 						{ color: "success", outline: true, toggle: true, disabled: true },
		// 						"Hello World (Dis)"
		// 					),
		// 					new bs.button({ color: "success", outline: true, toggle: true, href: "#" }, "Hello World"),
		// 					new bs.button(
		// 						{ color: "success", outline: true, toggle: true, disabled: true, href: "#" },
		// 						"Hello World (Dis)"
		// 					),
		// 				]),
		// 			])
		// 		),
		// 		new bs.row(
		// 			new bs.col(
		// 				new bs.grid([
		// 					new bs.msg("home", "Home"),
		// 					new bs.msg("star", loream),
		// 					new bs.msg({
		// 						iconPosition: "top",
		// 						iconContainer: { fontDisplay: 1, margin: 5 },
		// 						icon: { icon: "star", weight: "2xl", color: "primary" },
		// 						elem: loream,
		// 					}),
		// 				])
		// 			)
		// 		),
		// 	])
		// ),
	]);
});
