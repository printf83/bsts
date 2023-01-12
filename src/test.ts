import { core, $h, $b } from "./index.js";

core.documentReady(() => {
	let body = document.getElementById("main") as HTMLElement;

	core.replaceChild(body, [
		new $h.div({ container: true }, [
			new $h.div(
				{
					row: true,
					padding: ["lg-2", "md-3", "sm-4", "xl-1"],
					style: {
						height: "60px !important",
					},
				},
				[
					new $h.div(
						{
							col: 3,
							textColor: "warning",
							borderColor: "secondary",
							borderWidth: 3,
							rounded: true,
							aria: { wowoww: "what?" },
							data: { mehhh: "yaya" },
						},
						"hello"
					),
					new $h.h(
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
					new $h.h(2, { col: 3, textColor: "primary", class: ["hello", "world"] }, "2"),
					new $h.h(3, { col: 3, textColor: "success", class: "world", borderColor: "danger" }, "3"),
				]
			),
			new $h.div(
				{ row: true },
				new $h.div({ col: true }, new $h.hr({ title: "test", style: { backgroundColor: "red" } }))
			),
			new $h.div(
				{ row: true },
				new $h.div({ col: true }, new $h.a({ href: "#", linkColor: "danger" }, "this is link"))
			),
			new $h.div(
				{ row: true },
				new $h.div({ col: true }, new $h.input({ type: "range", min: 30, max: 130, value: 50 }))
			),
			new $h.div(
				{ row: true },
				new $h.div(
					{ col: true },
					new $h.input({ type: "text", maxlength: 5, placeholderText: "test 5 maxlength" })
				)
			),
			new $h.div(
				{ row: true },
				new $h.div({ col: true }, new $h.img("https://picsum.photos/seed/picsum/300/150"))
			),
			new $h.div({ row: true }, new $h.div({ col: true }, new $h.a("this is link 2"))),
			new $h.div({ row: true }, new $h.div({ col: true }, new $h.b({ title: "test" }, "this is bold"))),
			new $h.div({ row: true }, new $h.div({ col: true }, new $h.i("nothing even happen"))),
			new $h.div({ row: true }, new $h.div({ col: true }, new $h.i({ id: "hhhhh" }, "test i 2"))),
			new $h.div({ row: true }, new $h.div({ col: true }, new $h.progress({ max: 100, value: 55 }, "test"))),
			new $h.div(
				{ row: true },
				new $h.div({ col: true }, [
					new $b.icon("star"),
					new $b.icon({ icon: "star", spin: true, color: "primary", weight: "xl" }),
					new $b.icon({ type: "fab", icon: "bootstrap", shake: true, color: "danger" }),
				])
			),
			new $h.div(
				{ row: true },
				new $h.div({ col: true }, [
					new $b.icon({ stack: true, weight: "2xl" }, [
						new $b.icon({ icon: "square", stack: 2, color: "primary" }),
						new $b.icon({ type: "fab", icon: "twitter", stack: 1, inverse: true }),
					]),
				])
			),
			new $h.div(
				{ row: true },
				new $h.div({ col: true }, [
					new $h.div({ display: "grid", gap: 2, marginX: ["auto", "sm-5"] }, [
						new $b.button(),
						new $b.button([new $b.icon({ marginEnd: 3, icon: "home" }), "Hello World"]),
						new $b.button(
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
						new $b.button({ color: "warning", outline: true, weight: "lg" }, "Hello World"),
						new $b.button({ color: "warning", disabled: true, weight: "sm" }, "Hello World (DIS)"),
						new $b.button(
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
						new $b.button(
							{ color: "success", outline: true, toggle: true, disabled: true },
							"Hello World (Dis)"
						),
						new $b.button({ color: "success", outline: true, toggle: true, href: "#" }, "Hello World"),
						new $b.button(
							{ color: "success", outline: true, toggle: true, disabled: true, href: "#" },
							"Hello World (Dis)"
						),
					]),
				])
			),
		]),
	]);
});
