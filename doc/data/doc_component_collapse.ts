import { example as e } from "../ctl/example/_index.js";
import { b, h } from "@printf83/bsts/lib/index";
import { IAttrContent } from "../ctl/main/container.js";

export const doc_component_collapse: IAttrContent = {
	title: "Collapse",
	description: "Toggle the visibility of content across your project with a few classes and our JavaScript plugins.",
	item: [
		new e.title("How it works"),
		new e.text(
			"The collapse JavaScript plugin is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the {{height}} from its current value to {{0}}. Given how CSS handles animations, you cannot use {{padding}} on a {{.collapse}} element. Instead, use the class as an independent wrapping element."
		),
		new e.text(
			new b.alert.container(
				{ color: "info", callout: true },
				"The animation effect of this component is dependent on the {{prefers-reduced-motion}} media query. See the {{?q=doc_gettingstarted_accessibility#reduce_motion::reduced motion section of our accessibility documentation}}."
			)
		),

		//-----------------------

		new e.title("Example"),
		new e.text("Click the buttons below to show and hide another element via class changes:"),
		new e.item(
			new h.ul([
				new h.li("{{.collapse}} hides content"),
				new h.li("{{.collapsing}} is applied during transitions"),
				new h.li("{{.collapse.show}} shows content"),
			])
		),
		new e.text(
			"Generally, we recommend using a {{<button>}} with the {{data-bs-target}} attribute. While not recommended from a semantic point of view, you can also use an {{<a>}} link with the {{href}} attribute (and a {{role='button'}}). In both cases, the {{data-bs-toggle='collapse'}} is required."
		),
		new e.code({
			previewTemplate: "grid",
			output: () => {
				return [
					new h.div({ display: "flex", gap: 2 }, [
						new b.collapse.toggle(
							{ href: "#collapseExample", control: "collapseExample" },
							"Link with href"
						),
						new b.collapse.toggle(
							{ target: "#collapseExample", control: "collapseExample" },
							"Button with data-bs-target"
						),
					]),
					new b.collapse.container(
						{ id: "collapseExample" },
						new b.card.container(
							new b.card.body(
								"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."
							)
						)
					),
				];
			},
		}),

		//-----------------------

		new e.title("Horizontal"),
		new e.text(
			"The collapse plugin supports horizontal collapsing. Add the {{.collapse-horizontal}} modifier class to transition the {{width}} instead of {{height}} and set a {{width}} on the immediate child element. Feel free to write your own custom Sass, use inline styles, or use our {{https://getbootstrap.com/docs/5.3/utilities/sizing/::width utilities}}."
		),
		new e.text(
			new b.alert.container(
				{ color: "info", callout: true },
				"Please note that while the example below has a {{min-height}} set to avoid excessive repaints in our docs, this is not explicitly required. {{b::Only the}} {{width}} {{b::on the child element is required}}."
			)
		),
		new e.code({
			previewTemplate: "grid",
			output: () => {
				return [
					new h.div({ display: "flex", gap: 2 }, [
						new b.collapse.toggle(
							{ target: "#collapseWidthExample", control: "collapseWidthExample" },
							"Toggle width collapse"
						),
					]),
					new h.div(
						{ style: { minHeight: "120px" } },
						new b.collapse.container(
							{ id: "collapseWidthExample", horizontal: true },
							new b.card.container(
								{ style: { width: "300px" } },
								new b.card.body(
									"This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered."
								)
							)
						)
					),
				];
			},
		}),

		//-----------------------

		new e.title("Multiple toggles and targets"),
		new e.text(
			"A {{<button>}} or {{<a>}} element can show and hide multiple elements by referencing them with a selector in its {{data-bs-target}} or {{href}} attribute. Conversely, multiple {{<button>}} or {{<a>}} elements can show and hide the same element if they each reference it with their {{data-bs-target}} or {{href}} attribute."
		),
		new e.code({
			previewTemplate: "grid",
			output: () => {
				return [
					new h.div({ display: "flex", gap: 2 }, [
						new b.collapse.toggle(
							{ href: "#multiCollapseExample1", control: "multiCollapseExample1" },
							"Toggle first element"
						),
						new b.collapse.toggle(
							{ target: "#multiCollapseExample2", control: "multiCollapseExample2" },
							"Toggle second element"
						),
						new b.collapse.toggle(
							{ target: ".multi-collapse", control: "multiCollapseExample1 multiCollapseExample2" },
							"Toggle both element"
						),
					]),
					new h.div({ row: true }, [
						new h.div(
							{ col: true },
							new b.collapse.container(
								{ id: "multiCollapseExample1", class: "multi-collapse" },
								new b.card.container(
									new b.card.body(
										"Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger."
									)
								)
							)
						),
						new h.div(
							{ col: true },
							new b.collapse.container(
								{ id: "multiCollapseExample2", class: "multi-collapse" },
								new b.card.container(
									new b.card.body(
										"Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger."
									)
								)
							)
						),
					]),
				];
			},
		}),

		//-----------------------

		new e.title("Accessibility"),
		new e.text(
			"Be sure to add {{aria-expanded}} to the control element. This attribute explicitly conveys the current state of the collapsible element tied to the control to screen readers and similar assistive technologies. If the collapsible element is closed by default, the attribute on the control element should have a value of {{aria-expanded='false'}}. If you’ve set the collapsible element to be open by default using the {{show}} class, set {{aria-expanded='true'}} on the control instead. The plugin will automatically toggle this attribute on the control based on whether or not the collapsible element has been opened or closed (via JavaScript, or because the user triggered another control element also tied to the same collapsible element). If the control element’s HTML element is not a button (e.g., an {{<a>}} or {{<div>}}), the attribute {{role='button'}} should be added to the element."
		),
		new e.text(
			"If your control element is targeting a single collapsible element – i.e. the {{data-bs-target}} attribute is pointing to an {{id}} selector – you should add the {{aria-controls}} attribute to the control element, containing the {{id}} of the collapsible element. Modern screen readers and similar assistive technologies make use of this attribute to provide users with additional shortcuts to navigate directly to the collapsible element itself."
		),
		new e.text(
			"Note that Bootstrap’s current implementation does not cover the various optional keyboard interactions described in the {{https://www.w3.org/WAI/ARIA/apg/patterns/accordion/::ARIA Authoring Practices Guide accordion pattern}} - you will need to include these yourself with custom JavaScript."
		),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Sass variables"),
		new e.codepreview({
			type: "css",
			code: `
			    $transition-collapse:         height .35s ease;
				$transition-collapse-width:   width .35s ease;	
			`,
		}),

		new e.subtitle("Classes"),
		new e.text(
			"Collapse transition classes can be found in {{scss/_transitions.scss}} as these are shared across multiple components (collapse and accordion)."
		),
		new e.codepreview({
			type: "css",
			code: `
				.collapse {
				&:not(.show) {
					display: none;
				}
				}

				.collapsing {
				height: 0;
				overflow: hidden;
				@include transition($transition-collapse);

				&.collapse-horizontal {
					width: 0;
					height: auto;
					@include transition($transition-collapse-width);
				}
				}
			`,
		}),

		//-----------------------

		new e.title("Usage"),
		new e.text("The collapse plugin utilizes a few classes to handle the heavy lifting:"),
		new e.item(
			new h.ul([
				new h.li("{{.collapse}} hides the content"),
				new h.li("{{.collapse.show}} shows the content"),
				new h.li("{{.collapsing}} is added when the transition starts, and removed when it finishes"),
			])
		),
		new e.text("These classes can be found in {{_transitions.scss}}."),

		//-----------------------

		new e.subtitle("Via data attributes"),
		new e.text(
			"Just add {{data-bs-toggle='collapse'}} and a {{data-bs-target}} to the element to automatically assign control of one or more collapsible elements. The {{data-bs-target}} attribute accepts a CSS selector to apply the collapse to. Be sure to add the class {{collapse}} to the collapsible element. If you’d like it to default open, add the additional class {{show}}."
		),
		new e.text(
			"To add accordion-like group management to a collapsible area, add the data attribute {{data-bs-parent='#selector'}}. Refer to the {{https://getbootstrap.com/docs/5.3/components/accordion/::accordion page}} for more information."
		),

		//-----------------------

		new e.subtitle("Via JavaScript"),
		new e.text("Enable manually with:"),
		new e.codepreview({
			type: "js",
			code: `
				const collapseElementList = document.querySelectorAll('.collapse')
				const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))
			`,
		}),

		//-----------------------

		new e.subtitle("Options"),
		new e.text(
			"As options can be passed via data attributes or JavaScript, you can append an option name to {{data-bs-}}, as in {{data-bs-animation='{value}'}}. Make sure to change the case type of the option name from “camelCase” to “kebab-case” when passing the options via data attributes. For example, use {{data-bs-custom-class='beautifier'}} instead of {{data-bs-customClass='beautifier'}}."
		),
		new e.text(
			"As of Bootstrap 5.2.0, all components support an experimental reserved data attribute {{data-bs-config}} that can house simple component configuration as a JSON string. When an element has {{data-bs-config='{'delay':0, 'title':123}'}} and {{data-bs-title='456'}} attributes, the final {{title}} value will be {{456}} and the separate data attributes will override values given on {{data-bs-config}}. In addition, existing data attributes are able to house JSON values like {{data-bs-delay='{'show':0,'hide':150}'}}."
		),
		new e.item(
			new b.table.container({
				class: "small",
				small: true,
				item: [
					["Name", "Type", "Default", "Description"],
					[
						"{{parent}}",
						"selector, DOM element",
						"{{null}}",
						"If parent is provided, then all collapsible elements under the specified parent will be closed when this collapsible item is shown. (similar to traditional accordion behavior - this is dependent on the {{card}} class). The attribute has to be set on the target collapsible area.",
					],
					["{{toggle}}", "boolean", "{{true}}", "Toggles the collapsible element on invocation."],
				],
			})
		),

		//-----------------------

		new e.subtitle("Methods"),
		new e.text(
			new b.alert.container(
				{ color: "danger", callout: true },
				"{{b::All API methods are asynchronous and start a transition}}. They return to the caller as soon as the transition is started, but before it ends. In addition, a method call on a transitioning component will be ignored. {{https://getbootstrap.com/docs/5.3/getting-started/javascript/#asynchronous-functions-and-transitions::Learn more in our JavaScript docs}}."
			)
		),
		new e.text("Activates your content as a collapsible element. Accepts an optional options object."),
		new e.text("You can create a collapse instance with the constructor, for example:"),
		new e.codepreview({
			type: "js",
			code: `
				const bsCollapse = new bootstrap.Collapse('#myCollapse', {
					toggle: false
				})
			`,
		}),
		new e.item(
			new b.table.container({
				class: "small",
				small: true,
				item: [
					["Method", "Description"],
					["{{dispose}}", "Destroys an element’s collapse. (Removes stored data on the DOM element)"],
					[
						"{{getInstance}}",
						"Static method which allows you to get the collapse instance associated to a DOM element, you can use it like this: {{bootstrap.Collapse.getInstance(element)}}.",
					],
					[
						"{{getOrCreateInstance}}",
						"Static method which returns a collapse instance associated to a DOM element or create a new one in case it wasn’t initialized. You can use it like this: {{bootstrap.Collapse.getOrCreateInstance(element)}}.",
					],
					[
						"{{hide}}",
						"Hides a collapsible element. {{b::Returns to the caller before the collapsible element has actually been hidden}} (e.g., before the {{hidden.bs.collapse}} event occurs).",
					],
					[
						"{{show}}",
						"Shows a collapsible element. {{b::Returns to the caller before the collapsible element has actually been shown}} (e.g., before the {{shown.bs.collapse}} event occurs).",
					],
					[
						"{{toggle}}",
						"Toggles a collapsible element to shown or hidden. {{b::Returns to the caller before the collapsible element has actually been shown or hidden}} (i.e. before the {{shown.bs.collapse}} or {{hidden.bs.collapse}} event occurs).",
					],
				],
			})
		),

		//-----------------------

		new e.subtitle("Events"),
		new e.text("Bootstrap’s collapse class exposes a few events for hooking into collapse functionality."),
		new e.item(
			new b.table.container({
				class: "small",
				small: true,
				item: [
					["Event type", "Description"],
					[
						"{{hide.bs.collapse}}",
						"This event is fired immediately when the {{hide}} method has been called.",
					],
					[
						"{{hidden.bs.collapse}}",
						"This event is fired when a collapse element has been hidden from the user (will wait for CSS transitions to complete).",
					],
					[
						"{{show.bs.collapse}}",
						"This event fires immediately when the {{show}} instance method is called.",
					],
					[
						"{{shown.bs.collapse}}",
						"This event is fired when a collapse element has been made visible to the user (will wait for CSS transitions to complete).",
					],
				],
			})
		),
		new e.codepreview({
			type: "js",
			code: `
				const myCollapsible = document.getElementById('myCollapsible')
				myCollapsible.addEventListener('hidden.bs.collapse', event => {
					// do something...
				})
			`,
		}),
	],
};
