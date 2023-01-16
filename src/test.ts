import { core, html, bs } from "./index.js";

let loream = `<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta tincidunt arcu eu dignissim. Suspendisse nunc tortor, semper ut commodo nec, bibendum ut quam. Vivamus porttitor egestas luctus. Morbi tincidunt tortor eu lorem gravida imperdiet. Vestibulum tincidunt hendrerit tempus. Morbi varius est ac euismod tristique. Fusce a tortor suscipit, lacinia arcu nec, aliquet tortor. Maecenas eu lorem nec ante faucibus sollicitudin. Nunc consequat ullamcorper congue. Praesent cursus velit euismod turpis ultrices, sit amet venenatis massa pharetra. Nunc maximus pharetra purus in maximus.
</p>
<p>
Fusce id ex pretium, mollis velit quis, hendrerit metus. In dapibus convallis turpis at vehicula. Maecenas felis urna, ultrices non urna quis, pulvinar rutrum dolor. Mauris vel pretium nunc. Donec in sapien urna. Praesent et massa in neque ultricies tincidunt. Mauris turpis elit, tempor id sem vel, ultricies tincidunt purus. Nulla efficitur congue tellus quis imperdiet. Vivamus id nibh sit amet diam tristique porta. Proin auctor sagittis neque, eget imperdiet lorem egestas nec. Aenean facilisis mattis erat. Praesent velit tortor, dignissim et turpis quis, fermentum tempus est. Vivamus vitae est malesuada, volutpat ex et, vestibulum purus.
</p>
<p>
Donec vulputate, metus id eleifend pretium, elit metus posuere nisl, sit amet maximus nulla elit sed diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean tincidunt sed leo id pretium. Donec nec felis hendrerit, semper nisl vel, pulvinar est. Mauris at faucibus dolor. Maecenas finibus placerat ligula nec eleifend. Donec diam ante, feugiat dictum urna sed, maximus ullamcorper sapien. Donec vulputate urna turpis, quis placerat lacus condimentum vitae. Etiam sit amet tortor lacus. Nunc ultrices felis arcu. Morbi elit nulla, condimentum nec ante ut, suscipit aliquet elit. Cras commodo mi a rutrum blandit.
</p>
<p>
Curabitur tempus turpis eu rhoncus semper. Integer rhoncus, nisl ac sagittis fringilla, diam massa condimentum sem, sit amet volutpat nisi erat at diam. Proin et risus sed purus sollicitudin laoreet. Proin luctus ac velit sed lacinia. Morbi bibendum semper libero vitae efficitur. Ut sed gravida sem. Aliquam commodo tempus erat, at lobortis ante lobortis eget. Morbi sit amet velit a nulla rutrum posuere. Nulla et dolor nec orci viverra scelerisque sed sit amet augue. Maecenas a mauris porta, suscipit mi ut, semper ante. Aliquam at erat tortor. In hac habitasse platea dictumst. Sed venenatis aliquet turpis a rutrum. Aliquam ultricies ullamcorper interdum. Nullam aliquet massa eu diam semper consequat. Phasellus erat orci, tempor a sagittis in, tempor a massa.
</p>`;

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
							fontWeight: "bolder",
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
					new bs.label(
						{
							for: "txtTest",
							icon: { icon: "home", weight: "2xl" },
							iconPosition: "top",
							textColor: "danger",
							labelDisplay: ["sm-none", "md-flex"],
							iconDisplay: ["sm-flex", "md-none"],
						},
						"Home"
					)
				),
				new html.div({ col: true }, new bs.label({ for: "txtTest", textColor: "success" }, "home", "Home")),
				new html.div({ col: true }, new bs.label({ for: "txtTest" }, "hello bs label")),
			]),
			new html.div({ row: true }, [
				new html.div(
					{ col: true },
					new bs.button(
						{ color: "danger" },
						new bs.label(
							{
								iconPosition: "top",
								labelDisplay: ["sm-none", "md-flex"],
								iconDisplay: ["sm-flex", "md-none"],
							},
							"home",
							"Home"
						)
					)
				),
				new html.div(
					{ col: true },
					new bs.button({ color: "success" }, new bs.label({ for: "txtTest" }, "home", loream))
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
			new html.div(
				{ row: true },
				new html.div({ col: true }, [
					new bs.msg("home", "Home"),
					new bs.msg(
						{
							icon: { icon: "home", weight: "2xl" },
						},
						loream
					),
				])
			),
		]),
	]);
});
