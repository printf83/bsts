// import { IAttrBSButton } from "./bs/button.js";
import { bs, core, ht } from "./index.js";
let loream = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta tincidunt arcu eu dignissim. Suspendisse nunc tortor, semper ut commodo nec, bibendum ut quam. Vivamus porttitor egestas luctus. Morbi tincidunt tortor eu lorem gravida imperdiet. Vestibulum tincidunt hendrerit tempus. Morbi varius est ac euismod tristique. Fusce a tortor suscipit, lacinia arcu nec, aliquet tortor. Maecenas eu lorem nec ante faucibus sollicitudin. Nunc consequat ullamcorper congue. Praesent cursus velit euismod turpis ultrices, sit amet venenatis massa pharetra. Nunc maximus pharetra purus in maximus.`;
// let select_option = [
// 	{ value: "A", elem: "A" },
// 	{ value: "B", elem: "B" },
// 	{ value: "C", elem: "C", selected: true },
// 	{ value: "D", elem: "D" },
// 	{ value: "E", elem: "E" },
// ];

core.documentReady(() => {
	let body = document.getElementById("main") as HTMLElement;

	core.replaceChild(
		body,
		new bs.row({ gap: 3 }, [
			new bs.row(new bs.col({ padding: 3 }, "")),
			new bs.row(
				new bs.col([new bs.textarea({ rows: 3, weight: "lg" }, loream)])
			),
			new bs.row(
				new bs.col(
					new ht.div({ class: "btn-group" }, [
						// new bs.button({ color: "danger" }, "Dropdown button X"),
						new bs.dropdown.toggle({
							// split: true,
							color: "danger",
						}),
						new bs.dropdown.menu(
							{
								dark: true,
								positionView: ["start", "md-center", "lg-end"],
							},
							[
								new bs.dropdown.header("Hello"),
								new bs.dropdown.item("Action"),
								new bs.dropdown.item("Another action"),
								new bs.dropdown.item("Something else here"),
								new bs.dropdown.divider(),
								new bs.dropdown.item("Separated link"),
							]
						),
					])
				)
			),
		])
	);

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
