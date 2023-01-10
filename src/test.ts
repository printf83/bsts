import { core, div, divCol, divRow, h } from "./index.js";

// console.log(core.UUID());
// console.log(core.UUID());

let body = document.getElementById("main") as HTMLElement;

// core.replaceChild(body, new tag("h1", [
//     new tag("span", "hello"),
//     new tag("span", " world!")
// ], { id: "test" }));

// core.replaceChild(body, new tag("h2", [
//     new span("hello"),
//     new span(" world", { textColor: "primary" })
// ]));

// core.replaceChild(body, new div([
//     new div("1", { col: 4 }),
//     new div("2", { col: 4 }),
//     new div("3", { col: 4 }),
// ],{row:true}))

core.replaceChild(body, [
	new div(
		[
			new divRow(
				[
					new divCol(3, "0", {
						name: "hahaha",
						textColor: "warning",
						borderColor: "secondary",
						borderWidth: 3,
						rounded: true,
						aria: { wowoww: "what?" },
						data: { mehhh: "yaya" },
					}),
					new h(1, "1", {
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
					style: {
						height: "60px !important",
					},
				}
			),
		],
		{ container: true }
	),
]);
