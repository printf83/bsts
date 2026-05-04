import { core, b, h } from "@printf83/bsts";

export const navbar = () => {
	const navbarItem = () => {
		const id = core.UUID();
		return new b.navbar.innercontainer({ container: "fluid" }, [
			new b.navbar.brand({ href: "#" }, "Navbar"),
			new b.navbar.toggle.collapse({
				target: `#${id}`,
				controlfor: id,
				label: "Toggle navigation",
			}),
			new b.navbar.collapse({ id: id }, [
				new b.navbar.itemcontainer(
					{
						marginEnd: "auto",
						marginBottom: [2, "lg-0"],
					},
					[
						new b.navbar.item(new b.navbar.link({ href: "#", active: true }, "Home")),
						new b.navbar.item(new b.navbar.link({ href: "#" }, "Features")),
						new b.navbar.item(new b.navbar.link({ href: "#" }, "Pricing")),
						new b.navbar.item(new b.navbar.link({ href: "#" }, "About")),
						new b.navbar.item({ dropdown: true }, [
							new b.dropdown.button({ navItem: true }, "Dropdown"),
							new b.dropdown.menu([
								new b.dropdown.item({ href: "#" }, "Action"),
								new b.dropdown.item({ href: "#" }, "Another action"),
								new b.dropdown.divider(),
								new b.dropdown.item({ href: "#" }, "Something else here"),
							]),
						]),
					]
				),
				new h.form({ display: "flex", role: "search" }, [
					new b.input({
						type: "search",
						marginEnd: 2,
						placeholder: "Search",
						label: "Search",
					}),
					new b.button(
						{
							type: "submit",
							// outline: true
						},
						"Search"
					),
				]),
			]),
		]);
	};

	const bsWhiteRGB = core.getCSSVar("--bs-white-rgb");
	return [
		new b.navbar.container(
			{
				bgColor: "primary",
				textColorRGB: bsWhiteRGB,
			},
			navbarItem()
		),
		new b.navbar.container(
			{
				bgColor: "dark",
				textColorRGB: bsWhiteRGB,
			},
			navbarItem()
		),
		new b.navbar.container({ bgColor: "body-tertiary" }, navbarItem()),
	];
};
