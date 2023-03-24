import { example as e } from "../ctl/example/_index.js";
import { b, h } from "../../src/index.js";
import { IAttrContent } from "../ctl/main/container.js";
// import { IElem } from "../../src/core/base/tag.js";

export const doc_component_btngroup: IAttrContent = {
	title: "Button group",
	description:
		"Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.",
	item: [
		new e.title("Basic example"),
		new e.text("Wrap a series of buttons with {{.btn}} in {{.btn-group}}."),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return new b.btngroup({ label: "Basic example", role: "group" }, [
					new b.button("Left"),
					new b.button("Middle"),
					new b.button("Right"),
				]);
			},
		}),
		new e.item(
			new b.alert.container({ color: "warning", callout: true }, [
				new h.h(5, "Ensure correct {{role}} and provide a label"),
				new h.p(
					"In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate {{role}} attribute needs to be provided. For button groups, this would be {{role='group'}}, while toolbars should have a {{role='toolbar'}}."
				),
				new h.p(
					"In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not announce them, despite the presence of the correct role attribute. In the examples provided here, we use {{aria-label}}, but alternatives such as {{aria-labelledby}} can also be used."
				),
			])
		),

		new e.text(
			"These classes can also be added to groups of links, as an alternative to the {{https://getbootstrap.com/docs/5.3/components/navs-tabs/::.nav navigation components}}."
		),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return new b.btngroup([
					new b.button({ href: "#", active: true }, "Left"),
					new b.button({ href: "#" }, "Middle"),
					new b.button({ href: "#" }, "Right"),
				]);
			},
		}),

		//-----------------------

		new e.title("Mixed styles"),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return new b.btngroup({ label: "Basic mixed styles example", role: "group" }, [
					new b.button({ color: "danger" }, "Left"),
					new b.button({ color: "warning" }, "Middle"),
					new b.button({ color: "success" }, "Right"),
				]);
			},
		}),

		//-----------------------

		new e.title("Outlined styles"),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return new b.btngroup({ label: "Basic outlined example", role: "group" }, [
					new b.button({ outline: true }, "Left"),
					new b.button({ outline: true }, "Middle"),
					new b.button({ outline: true }, "Right"),
				]);
			},
		}),

		//-----------------------

		new e.title("Checkbox and radio button groups"),
		new e.text(
			"Combine button-like checkbox and radio {{https://getbootstrap.com/docs/5.3/forms/checks-radios/::toggle buttons}} into a seamless looking button group."
		),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return new b.btngroup({ label: "Basic checkbox toggle button group", role: "group" }, [
					new b.input({ type: "checkbox", toggle: true, id: "btncheck1" }),
					new b.label({ for: "btncheck1", color: "primary", outline: true }, "Checkbox 1"),

					new b.input({ type: "checkbox", toggle: true, id: "btncheck2" }),
					new b.label({ for: "btncheck2", color: "primary", outline: true }, "Checkbox 2"),

					new b.input({ type: "checkbox", toggle: true, id: "btncheck3" }),
					new b.label({ for: "btncheck3", color: "primary", outline: true }, "Checkbox 3"),
				]);
			},
		}),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return new b.btngroup({ label: "Basic checkbox toggle button group", role: "group" }, [
					new b.input({ type: "radio", toggle: true, id: "btnradio1", name: "btnradio", checked: true }),
					new b.label({ for: "btnradio1", color: "primary", outline: true }, "Radio 1"),

					new b.input({ type: "radio", toggle: true, id: "btnradio2", name: "btnradio" }),
					new b.label({ for: "btnradio2", color: "primary", outline: true }, "Radio 2"),

					new b.input({ type: "radio", toggle: true, id: "btnradio3", name: "btnradio" }),
					new b.label({ for: "btnradio3", color: "primary", outline: true }, "Radio 3"),
				]);
			},
		}),

		//-----------------------

		new e.title("Button toolbar"),
		new e.text(
			"Combine sets of button groups into button toolbars for more complex components. Use utility classes as needed to space out groups, buttons, and more."
		),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return new b.btngroup({ label: "Toolbar with button groups", role: "toolbar" }, [
					new b.btngroup(
						{ label: "First group", marginEnd: 2 },
						["1", "2", "3", "4"].map((i) => new b.button(i))
					),
					new b.btngroup(
						{ label: "Second group", marginEnd: 2 },
						["5", "6", "7"].map((i) => new b.button({ color: "secondary" }, i))
					),
					new b.btngroup(
						{ label: "Third group" },
						["8"].map((i) => new b.button({ color: "info" }, i))
					),
				]);
			},
		}),

		new e.text(
			"Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you’ll likely need some utilities though to space things properly."
		),

		new e.code({
			previewTemplate: "row",
			output: () => {
				return [
					new b.btngroup({ label: "Toolbar with button groups", role: "toolbar", marginBottom: 3 }, [
						new b.btngroup(
							{ label: "First group", marginEnd: 2 },
							["1", "2", "3", "4"].map((i) => new b.button({ color: "secondary", outline: true }, i))
						),
						new b.inputgroup.container([
							new b.inputgroup.text({ id: "btnGroupAddon" }, "@"),
							new b.input({
								type: "text",
								placeholderText: "Input group example",
								label: "Input group example",
								describedby: "btnGroupAddon",
							}),
						]),
					]),
					new b.btngroup(
						{ label: "Toolbar with button groups", role: "toolbar", justifyContent: "between" },
						[
							new b.btngroup(
								{ label: "First group", marginEnd: 2 },
								["1", "2", "3", "4"].map((i) => new b.button({ color: "secondary", outline: true }, i))
							),
							new b.inputgroup.container([
								new b.inputgroup.text({ id: "btnGroupAddon2" }, "@"),
								new b.input({
									type: "text",
									placeholderText: "Input group example",
									label: "Input group example",
									describedby: "btnGroupAddon2",
								}),
							]),
						]
					),
				];
			},
		}),

		//-----------------------

		new e.title("Sizing"),
		new e.text(
			"Instead of applying button sizing classes to every button in a group, just add {{.btn-group-*}} to each {{.btn-group}}, including each one when nesting multiple groups."
		),
		new e.code({
			previewTemplate: "grid",
			output: () => {
				return [
					new b.btngroup(
						{ label: "Large button group", weight: "lg", display: "block" },
						["Left", "Middle", "Right"].map((i) => new b.button({ color: "dark", outline: true }, i))
					),
					new b.btngroup(
						{ label: "Default button group", display: "block" },
						["Left", "Middle", "Right"].map((i) => new b.button({ color: "dark", outline: true }, i))
					),
					new b.btngroup(
						{ label: "Small button group", weight: "sm", display: "block" },
						["Left", "Middle", "Right"].map((i) => new b.button({ color: "dark", outline: true }, i))
					),
				];
			},
		}),

		//-----------------------

		new e.title("Nesting"),
		new e.text(
			"Place a {{.btn-group}} within another {{.btn-group}} when you want dropdown menus mixed with a series of buttons."
		),
		new e.code({
			previewTemplate: "none",
			previewAttr: { padding: 4 },
			output: () => {
				return new b.btngroup({ label: "Button group with nested dropdown" }, [
					new b.button("1"),
					new b.button("2"),

					new b.btngroup([
						new b.dropdown.toggle({}, "Dropdown"),
						new b.dropdown.menu([
							new b.dropdown.item({ href: "#" }, "Dropdown link 1"),
							new b.dropdown.item({ href: "#" }, "Dropdown link 3"),
						]),
					]),
				]);
			},
		}),

		//-----------------------

		new e.title("Vertical variation"),
		new e.text(
			"Make a set of buttons appear vertically stacked rather than horizontally. {{b::Split button dropdowns are not supported here.}}"
		),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return new b.btngroup(
					{ label: "Vertical button group", vertical: true },
					[1, 2, 3, 4, 5, 6].map((i) => new b.button({ color: "dark" }, "Button"))
				);
			},
		}),
		new e.code({
			previewTemplate: "none",
			previewAttr: { padding: 4 },
			output: () => {
				return new b.btngroup({ label: "Vertical button group", vertical: true }, [
					new b.button("Button"),
					new b.button("Button"),
					new b.btngroup([
						new b.dropdown.toggle({}, "Dropdown"),
						new b.dropdown.menu([
							new b.dropdown.item({ href: "#" }, "Dropdown link 1"),
							new b.dropdown.item({ href: "#" }, "Dropdown link 3"),
						]),
					]),
					new b.button("Button"),
					new b.button("Button"),
					new b.btngroup([
						new b.dropdown.toggle({}, "Dropdown"),
						new b.dropdown.menu([
							new b.dropdown.item({ href: "#" }, "Dropdown link 1"),
							new b.dropdown.item({ href: "#" }, "Dropdown link 3"),
						]),
					]),
					new b.btngroup([
						new b.dropdown.toggle({}, "Dropdown"),
						new b.dropdown.menu([
							new b.dropdown.item({ href: "#" }, "Dropdown link 1"),
							new b.dropdown.item({ href: "#" }, "Dropdown link 2"),
						]),
					]),
					new b.btngroup([
						new b.dropdown.toggle({}, "Dropdown"),
						new b.dropdown.menu([
							new b.dropdown.item({ href: "#" }, "Dropdown link 1"),
							new b.dropdown.item({ href: "#" }, "Dropdown link 2"),
						]),
					]),
				]);
			},
		}),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return new b.btngroup({ label: "Vertical radio toggle button group", vertical: true }, [
					new b.input({ type: "radio", toggle: true, id: "vbtnradio1", name: "vbtnradio", checked: true }),
					new b.label({ for: "vbtnradio1", color: "danger", outline: true }, "Radio 1"),

					new b.input({ type: "radio", toggle: true, id: "vbtnradio2", name: "vbtnradio" }),
					new b.label({ for: "vbtnradio2", color: "danger", outline: true }, "Radio 2"),

					new b.input({ type: "radio", toggle: true, id: "vbtnradio3", name: "vbtnradio" }),
					new b.label({ for: "vbtnradio3", color: "danger", outline: true }, "Radio 3"),
				]);
			},
		}),
	],
};
