import { core, html, bs } from "./index.js";

core.documentReady(() => {
	let body = document.getElementById("main") as HTMLElement;

	core.replaceChild(body, [
		new html.div({ container: true, gap: 3 }, [
			new html.div(
				{
					row: true,
					padding: ["lg-2", "md-3", "sm-4", "xl-1"],
					style: {
						height: "60px !important",
					},
				},
				[
					new html.div(
						{
							col: 3,
							textColor: "warning",
							borderColor: "secondary",
							borderWidth: 3,
							rounded: true,
							aria: { wowoww: "what?" },
							data: { mehhh: "yaya" },
							style: { backgroundColor: "red" },
						},
						"hello"
					),
					new html.h(
						1,
						{
							col: 3,
							on: {
								click: (e: Event) => {
									alert("click");
									core.removeElement(e.target as HTMLElement);
								},
							},
						},
						"world"
					),
					new html.h(2, { col: 3, textColor: "primary", class: ["hello", "world"] }, "2"),
					new html.h(3, { col: 3, textColor: "success", class: "world", borderColor: "danger" }, "3"),
				]
			),
			new html.div(
				{ row: true },
				new html.div({ col: true }, new html.hr({ title: "test", style: { backgroundColor: "red" } }))
			),
			new html.div(
				{ row: true },
				new html.div({ col: true }, new html.a({ href: "#", linkColor: "danger" }, "this is link"))
			),
			new html.div(
				{ row: true },
				new html.div({ col: true }, new html.input({ type: "range", min: 30, max: 130, value: 50 }))
			),
			new html.div({ row: true }, [
				new html.div(
					{ col: true },
					new bs.label({ for: "txtTest", iconPosition: "top", textColor: "danger" }, "home", "Home")
				),
				new html.div({ col: true }, new bs.label({ for: "txtTest", textColor: "success" }, "home", "Home")),
				new html.div({ col: true }, new bs.label({ for: "txtTest" }, "hello bs label")),
			]),
			new html.div({ row: true }, [
				new html.div(
					{ col: true },
					new bs.button({ color: "danger" }, new bs.label({ iconPosition: "top" }, "home", "Home"))
				),
				new html.div(
					{ col: true },
					new bs.button(
						{ color: "success" },
						new bs.label(
							{ for: "txtTest" },
							"home",
							"Use align-items utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if flex-direction: column). Choose from start, end, center, baseline, or stretch (browser default)."
						)
					)
				),
			]),
			new html.div(
				{ row: true },
				new html.div(
					{ col: true },
					new html.input({
						id: "txtTest",
						type: "text",
						maxlength: 5,
						placeholderText: "test 5 maxlength",
						width: 100,
					})
				)
			),
			new html.div(
				{ row: true },
				new html.div({ col: true }, new html.img("https://picsum.photos/seed/picsum/300/150"))
			),
			new html.div({ row: true }, new html.div({ col: true }, new html.a("this is link 2"))),
			new html.div({ row: true }, new html.div({ col: true }, new html.b({ title: "test" }, "this is bold"))),
			new html.div({ row: true }, new html.div({ col: true }, new html.i("nothing even happen"))),
			new html.div({ row: true }, new html.div({ col: true }, new html.i({ id: "hhhhh" }, "test i 2"))),
			new html.div(
				{ row: true },
				new html.div({ col: true }, new html.progress({ max: 100, value: 55 }, "test"))
			),
			new html.div(
				{ row: true },
				new html.div({ col: true }, [
					new bs.icon("star"),
					new bs.icon({ icon: "star", spin: true, color: "primary", weight: "xl" }),
					new bs.icon({ type: "fab", icon: "bootstrap", shake: true, color: "danger" }),
				])
			),
			new html.div(
				{ row: true },
				new html.div({ col: true }, [
					new bs.icon({ stack: true, weight: "2xl" }, [
						new bs.icon({ icon: "square", stack: 2, color: "primary" }),
						new bs.icon({ type: "fab", icon: "twitter", stack: 1, inverse: true }),
					]),
				])
			),
			new html.div(
				{ row: true },
				new html.div({ col: true }, [
					new html.div({ display: "grid", gap: 2, marginX: ["auto", "sm-5"] }, [
						new bs.button(),
						new bs.button([new bs.icon({ marginEnd: 3, icon: "home" }), "Hello World"]),
						new bs.button(
							{
								color: "danger",
								on: {
									click: () => {
										alert("hi");
									},
								},
							},
							"Hello World"
						),
						new bs.button({ color: "warning", outline: true, weight: "lg" }, "Hello World"),
						new bs.button(
							{ color: "warning", disabled: true, weight: "sm", type: "reset" },
							"Hello World (DIS)"
						),
						new bs.button(
							{
								color: "success",
								style: {
									"--bs-btn-padding-y": ".25rem",
									"--bs-btn-padding-x": ".5rem",
									"--bs-btn-font-size": ".75rem",
								},
							},
							"Custom"
						),
						new bs.button(
							{ color: "success", outline: true, toggle: true, disabled: true },
							"Hello World (Dis)"
						),
						new bs.button({ color: "success", outline: true, toggle: true, href: "#" }, "Hello World"),
						new bs.button(
							{ color: "success", outline: true, toggle: true, disabled: true, href: "#" },
							"Hello World (Dis)"
						),
					]),
				])
			),
		]),
	]);
});
