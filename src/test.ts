import { core, div, divCol, divRow, h, hr } from "./index.js";

core.documentReady(() => {
	let body = document.getElementById("main") as HTMLElement;

	core.replaceChild(body, [
		new div(
			[
				new divRow(
					[
						new divCol(3, "hello", {
							name: "hahaha",
							textColor: "warning",
							borderColor: "secondary",
							borderWidth: 3,
							rounded: true,
							aria: { wowoww: "what?" },
							data: { mehhh: "yaya" },
						}),
						new h(1, "world", {
							col: 3,
							on: {
								click: (e: Event) => {
									alert("click");
									core.removeElement(e.target as HTMLElement);
								},
							},
						}),
						new h(2, "2", { col: 3, textColor: "primary", class: ["hello", "world"] }),
						new h(3, "3", { col: 3, textColor: "success", class: "world", borderColor: "danger" }),
					],
					{
						padding: ["lg-2", "md-3", "sm-4", "xl-1"],
						style: {
							height: "60px !important",
						},
					}
				),
				new divRow([new hr({ style: { borderWidth: "3px" } })]),
			],
			{ container: true }
		),
	]);
});
