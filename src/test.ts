import { core, html as $ } from "./index.js";

core.documentReady(() => {
	let body = document.getElementById("main") as HTMLElement;

	core.replaceChild(body, [
		new $.div({ container: true }, [
			new $.div(
				{
					padding: ["lg-2", "md-3", "sm-4", "xl-1"],
					style: {
						height: "60px !important",
					},
				},
				[
					new $.div(
						{
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
			new $.div({}, new $.div({}, new $.hr({ style: { borderWidth: "3px" } }))),
			new $.div({}, new $.div({}, new $.a({ href: "#", linkColor: "danger" }, "this is link"))),
			new $.div({}, new $.div({}, new $.input("text", { placeholderText: "Test Placeholder" }))),
		]),
	]);
});
