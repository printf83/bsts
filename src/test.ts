import { core, html as $ } from "./index.js";

core.documentReady(() => {
	let body = document.getElementById("main") as HTMLElement;

	core.replaceChild(body, [
		new $.div({ container: true }, [
			new $.div(
				{
					row: true,
					padding: ["lg-2", "md-3", "sm-4", "xl-1"],
					style: {
						height: "60px !important",
					},
				},
				[
					new $.div(
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
					new $.h(
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
					new $.h(2, { col: 3, textColor: "primary", class: ["hello", "world"] }, "2"),
					new $.h(3, { col: 3, textColor: "success", class: "world", borderColor: "danger" }, "3"),
				]
			),
			new $.div(
				{ row: true },
				new $.div({ col: true }, new $.hr({ title: "test", style: { backgroundColor: "red" } }))
			),
			new $.div(
				{ row: true },
				new $.div({ col: true }, new $.a({ href: "#", linkColor: "danger" }, "this is link"))
			),
			new $.div(
				{ row: true },
				new $.div({ col: true }, new $.input({ type: "range", min: 30, max: 130, value: 50 }))
			),
			new $.div(
				{ row: true },
				new $.div(
					{ col: true },
					new $.input({ type: "text", maxlength: 5, placeholderText: "test 5 maxlength" })
				)
			),
			new $.div({ row: true }, new $.div({ col: true }, new $.img("https://picsum.photos/seed/picsum/300/150"))),
			new $.div({ row: true }, new $.div({ col: true }, new $.a("this is link 2"))),
			new $.div({ row: true }, new $.div({ col: true }, new $.b({ title: "test" }, "this is bold"))),
			new $.div({ row: true }, new $.div({ col: true }, new $.i("nothing even happen"))),
			new $.div({ row: true }, new $.div({ col: true }, new $.i({ id: "hhhhh" }, "test i 2"))),
			new $.div({ row: true }, new $.div({ col: true }, new $.progress({ value: 55 }, "test"))),
		]),
	]);
});
