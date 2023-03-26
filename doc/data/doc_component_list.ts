import { example as e } from "../ctl/example/_index.js";
import { b, h } from "../../src/index.js";
import { IAttrContent } from "../ctl/main/container.js";
import { bootstrapType } from "../../src/core/base/bootstrap.js";

export const doc_component_list: IAttrContent = {
	title: "List group",
	description:
		"List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.",
	item: [
		new e.title("Basic example"),
		new e.text(
			"The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed."
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.list.container([
					new b.list.item("An item"),
					new b.list.item("A second item"),
					new b.list.item("A third item"),
					new b.list.item("A fourth item"),
					new b.list.item("And a fifth one"),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Active items"),
		new e.text("Add {{.active}} to a {{.list-group-item}} to indicate the current active selection."),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.list.container([
					new b.list.item({ active: true }, "An active item"),
					new b.list.item("A second item"),
					new b.list.item("A third item"),
					new b.list.item("A fourth item"),
					new b.list.item("And a fifth one"),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Disabled items"),
		new e.text(
			"Add {{.disabled}} to a {{.list-group-item}} to make it appear disabled. Note that some elements with {{.disabled}} will also require custom JavaScript to fully disable their click events (e.g., links)."
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.list.container([
					new b.list.item({ disabled: true }, "A disabled item"),
					new b.list.item("A second item"),
					new b.list.item("A third item"),
					new b.list.item("A fourth item"),
					new b.list.item("And a fifth one"),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Links and buttons"),
		new e.text(
			"Use {{<a>}}s or {{<button>}}s to create actionable list group items with hover, disabled, and active states by adding {{.list-group-item-action}}. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like {{<li>}}s or {{<div>}}s) don’t provide a click or tap affordance."
		),
		new e.text("Be sure to not {{b::use the standard}} {{cb::.btn}}{{b:: classes here}}."),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new h.div({ class: "list-group" }, [
					new h.a(
						{
							href: "#",
							class: "list-group-item list-group-item-action active",
							aria: { current: "true" },
						},
						"The current link item"
					),

					new h.a(
						{
							href: "#",
							class: "list-group-item list-group-item-action",
						},
						"A second item"
					),

					new h.a(
						{
							href: "#",
							class: "list-group-item list-group-item-action",
						},
						"A third item"
					),

					new h.a(
						{
							href: "#",
							class: "list-group-item list-group-item-action",
						},
						"A fourth item"
					),

					new h.a(
						{
							class: "list-group-item list-group-item-action disabled",
						},
						"A disabled link item"
					),
				]);
			},
		}),

		new e.text(
			"With {{<button>}}s, you can also make use of the {{disabled}} attribute instead of the {{.disabled}} class. Sadly, {{<a>}}s don’t support the disabled attribute."
		),

		new e.code({
			previewTemplate: "row",
			output: () => {
				return new h.div({ class: "list-group" }, [
					new h.button(
						{
							class: "list-group-item list-group-item-action active",
							aria: { current: "true" },
						},
						"The current button"
					),

					new h.button(
						{
							class: "list-group-item list-group-item-action",
						},
						"A second button item"
					),

					new h.button(
						{
							class: "list-group-item list-group-item-action",
						},
						"A third button item"
					),

					new h.button(
						{
							class: "list-group-item list-group-item-action",
						},
						"A fourth button item"
					),

					new h.button(
						{
							class: "list-group-item list-group-item-action",
							disabled: true,
						},
						"A disabled button item"
					),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Flush"),
		new e.text(
			"Add {{.list-group-flush}} to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards)."
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.list.container({ flush: true }, [
					new b.list.item("An item"),
					new b.list.item("A second item"),
					new b.list.item("A third item"),
					new b.list.item("A fourth item"),
					new b.list.item("And a fifth one"),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Numbered"),
		new e.text(
			"Add the {{.list-group-numbered}} modifier class (and optionally use an {{<ol>}} element) to opt into numbered list group items. Numbers are generated via CSS (as opposed to a {{<ol>}}s default browser styling) for better placement inside list group items and to allow for better customization."
		),
		new e.text(
			"Numbers are generated by {{counter-reset}} on the {{<ol>}}, and then styled and placed with a {{c::::before}} pseudo-element on the {{<li>}} with counter-increment and content."
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.list.container({ numbered: true }, [
					new b.list.item("A list item"),
					new b.list.item("A list item"),
					new b.list.item("A list item"),
				]);
			},
		}),

		new e.text("These work great with custom content as well."),

		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.list.container(
					{ numbered: true },
					[1, 2, 3].map((_i) => {
						return new b.list.item({ display: "flex", justifyContent: "between", alignItem: "start" }, [
							new h.div({ marginStart: 2, marginEnd: "auto" }, [
								new h.div({ fontWeight: "bold" }, "Subheading"),
								"Content for list item",
							]),
							new b.badge({ bgColor: "primary", rounded: "pill" }, "14"),
						]);
					})
				);
			},
		}),

		//-----------------------

		new e.subtitle("Horizontal"),
		new e.text(
			"Add {{.list-group-horizontal}} to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant {{.list-group-horizontal-{sm|md|lg|xl|xxl}}} to make a list group horizontal starting at that breakpoint’s {{min-width}}. Currently {{b::horizontal list groups cannot be combined with flush list groups}}."
		),
		new e.text(
			"{{b::ProTip:}} Want equal-width list group items when horizontal? Add {{.flex-fill}} to each list group item."
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				let items = [
					new b.list.item("An item"),
					new b.list.item("A second item"),
					new b.list.item("A third item"),
				];

				return [
					new b.list.container({ horizontal: true }, items),
					new b.list.container({ horizontal: "sm" }, items),
					new b.list.container({ horizontal: "md" }, items),
					new b.list.container({ horizontal: "lg" }, items),
					new b.list.container({ horizontal: "xl" }, items),
					new b.list.container({ horizontal: "xxl" }, items),
					,
				];
			},
		}),

		//-----------------------

		new e.subtitle("Variants"),

		new e.item(
			new b.alert.container(
				{ color: "info", callout: true },
				"{{b::Heads up!}} As of v5.3.0, the {{list-group-item-variant()}} Sass mixin is deprecated. List group item variants now have their CSS variables overridden in {{https://getbootstrap.com/docs/5.3/components/list-group/#sass-loop::the Sass loop}}."
			)
		),
		new e.text("Use contextual classes to style list items with a stateful background and color."),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.list.container(
					[undefined, "primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map(
						(i) => {
							return new b.list.item(
								{ color: i as bootstrapType.color[number] },
								`A simple ${i ? i : "default"} list group item`
							);
						}
					)
				);
			},
		}),

		//-----------------------

		new e.subtitle("For links and buttons"),
		new e.text(
			"Contextual classes also work with {{.list-group-item-action}} for {{<a>}} and {{<button>}} elements. Note the addition of the hover styles here not present in the previous example. Also supported is the {{.active}} state; apply it to indicate an active selection on a contextual list group item."
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new h.div(
					{ class: "list-group" },
					[undefined, "primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map(
						(i) => {
							return new h.a(
								{
									href: "#",
									class: `list-group-item list-group-item-action${i ? ` list-group-item-${i}` : ""}`,
								},
								`A simple ${i ? i : "default"} list group item`
							);
						}
					)
				);
			},
		}),

		new e.item(
			new b.alert.container(
				{ color: "info", callout: true },
				"{{b::Accessibility tip:}} Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies like screen readers. Please ensure the meaning is obvious from the content itself (e.g., the visible text) or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class."
			)
		),

		//-----------------------

		new e.subtitle("With badges"),
		new e.text(
			"Add badges to any list group item to show unread counts, activity, and more with the help of some {{https://getbootstrap.com/docs/5.3/utilities/flex/::utilities}}."
		),

		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.list.container(
					[
						{ label: "A list item", counter: 14 },
						{ label: "A second list item", counter: 2 },
						{ label: "A third list item", counter: 1 },
					].map((i) => {
						return new b.list.item({ display: "flex", justifyContent: "between", alignItem: "center" }, [
							i.label,
							new b.badge({ bgColor: "primary", rounded: "pill" }, i.counter.toString()),
						]);
					})
				);
			},
		}),

		//-----------------------

		new e.subtitle("Custom content"),
		new e.text(
			"Add nearly any HTML within, even for linked list groups like the one below, with the help of {{https://getbootstrap.com/docs/5.3/utilities/flex/::flexbox utilities}}."
		),

		new e.code({
			previewTemplate: "row",
			output: () => {
				return new h.div(
					{ class: "list-group", style: { maxWidth: "400px" } },
					[
						{ label: "And some small print", active: true },
						{ label: "And some muted small print" },
						{ label: "And some muted small print" },
					].map((i) => {
						return new h.a(
							{
								href: "#",
								class: ["list-group-item", "list-group-item-action", i.active ? "active" : undefined],
								aria: { current: i.active ? "true" : undefined },
							},
							[
								new h.div({ display: "flex", width: 100, justifyContent: "between" }, [
									new h.h(5, { marginBottom: 1 }, "List group item heading"),
									new h.small({ textColor: !i.active ? "body-secondary" : undefined }, "3 days ago"),
								]),
								new h.p({ marginBottom: 1 }, "Some placeholder content in a paragraph."),
								new h.small({ textColor: !i.active ? "body-secondary" : undefined }, i.label),
							]
						);
					})
				);
			},
		}),

		//-----------------------

		new e.subtitle("Checkboxes and radios"),
		new e.text(
			"Place Bootstrap’s checkboxes and radios within list group items and customize as needed. You can use them without {{<label>}}s, but please remember to include an {{aria-label}} attribute and value for accessibility."
		),

		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.list.container(
					["first", "second", "third"].map((i) => {
						return new b.list.item([
							new b.input({ type: "checkbox", id: `${i}Checkbox`, marginEnd: 2 }),
							new b.label(
								{ for: `${i}Checkbox`, formCheck: true },
								`${i.charAt(0).toUpperCase() + i.slice(1)} checkbox`
							),
						]);
					})
				);
			},
		}),

		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.list.container(
					["first", "second", "third"].map((i) => {
						return new b.list.item([
							new b.input({ type: "radio", id: `${i}Radio`, name: "listGroupRadio", marginEnd: 2 }),
							new b.label(
								{ for: `${i}Radio`, formCheck: true },
								`${i.charAt(0).toUpperCase() + i.slice(1)} radio`
							),
						]);
					})
				);
			},
		}),

		new e.text("You can use {{.stretched-link}} on {{<label>}}s to make the whole list group item clickable."),

		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.list.container(
					["first", "second", "third"].map((i) => {
						return new b.list.item([
							new b.input({ type: "checkbox", id: `${i}CheckboxStretched`, marginEnd: 2 }),
							new b.label(
								{ for: `${i}CheckboxStretched`, formCheck: true, stretched: true },
								`${i.charAt(0).toUpperCase() + i.slice(1)} checkbox`
							),
						]);
					})
				);
			},
		}),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Variables"),
		new e.text(
			"As part of Bootstrap’s evolving CSS variables approach, list groups now use local CSS variables on {{.list-group}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),

		new e.codepreview({
			type: "css",
			code: `
				--#{$prefix}list-group-color: #{$list-group-color};
				--#{$prefix}list-group-bg: #{$list-group-bg};
				--#{$prefix}list-group-border-color: #{$list-group-border-color};
				--#{$prefix}list-group-border-width: #{$list-group-border-width};
				--#{$prefix}list-group-border-radius: #{$list-group-border-radius};
				--#{$prefix}list-group-item-padding-x: #{$list-group-item-padding-x};
				--#{$prefix}list-group-item-padding-y: #{$list-group-item-padding-y};
				--#{$prefix}list-group-action-color: #{$list-group-action-color};
				--#{$prefix}list-group-action-hover-color: #{$list-group-action-hover-color};
				--#{$prefix}list-group-action-hover-bg: #{$list-group-hover-bg};
				--#{$prefix}list-group-action-active-color: #{$list-group-action-active-color};
				--#{$prefix}list-group-action-active-bg: #{$list-group-action-active-bg};
				--#{$prefix}list-group-disabled-color: #{$list-group-disabled-color};
				--#{$prefix}list-group-disabled-bg: #{$list-group-disabled-bg};
				--#{$prefix}list-group-active-color: #{$list-group-active-color};
				--#{$prefix}list-group-active-bg: #{$list-group-active-bg};
				--#{$prefix}list-group-active-border-color: #{$list-group-active-border-color};
			`,
		}),

		new e.subtitle("Sass variables"),

		new e.codepreview({
			type: "css",
			code: `
				$list-group-color:                  var(--#{$prefix}body-color);
				$list-group-bg:                     var(--#{$prefix}body-bg);
				$list-group-border-color:           var(--#{$prefix}border-color);
				$list-group-border-width:           var(--#{$prefix}border-width);
				$list-group-border-radius:          var(--#{$prefix}border-radius);

				$list-group-item-padding-y:         $spacer * .5;
				$list-group-item-padding-x:         $spacer;
				// fusv-disable
				$list-group-item-bg-scale:          -80%; // Deprecated in v5.3.0
				$list-group-item-color-scale:       40%; // Deprecated in v5.3.0
				// fusv-enable

				$list-group-hover-bg:               var(--#{$prefix}tertiary-bg);
				$list-group-active-color:           $component-active-color;
				$list-group-active-bg:              $component-active-bg;
				$list-group-active-border-color:    $list-group-active-bg;

				$list-group-disabled-color:         var(--#{$prefix}secondary-color);
				$list-group-disabled-bg:            $list-group-bg;

				$list-group-action-color:           var(--#{$prefix}secondary-color);
				$list-group-action-hover-color:     var(--#{$prefix}emphasis-color);

				$list-group-action-active-color:    var(--#{$prefix}body-color);
				$list-group-action-active-bg:       var(--#{$prefix}secondary-bg);
			`,
		}),

		new e.subtitle("Sass mixins"),
		new e.text(
			"Used in combination with {{$theme-colors}} to generate the {{https://getbootstrap.com/docs/5.3/components/list-group/#variants::contextual variant classes}} for {{.list-group-items}}."
		),

		new e.codepreview({
			type: "css",
			code: `
				@mixin list-group-item-variant($state, $background, $color) {
				.list-group-item-#{$state} {
					color: $color;
					background-color: $background;

					&.list-group-item-action {
					&:hover,
					&:focus {
						color: $color;
						background-color: shade-color($background, 10%);
					}

					&.active {
						color: $white;
						background-color: $color;
						border-color: $color;
					}
					}
				}
				}
			`,
		}),

		new e.subtitle("Sass loop"),
		new e.text("Loop that generates the modifier classes with an overriding of CSS variables."),

		new e.codepreview({
			type: "css",
			code: `
				// List group contextual variants
				//
				// Add modifier classes to change text and background color on individual items.
				// Organizationally, this must come after the ":hover" states.

				@each $state in map-keys($theme-colors) {
				.list-group-item-#{$state} {
					--#{$prefix}list-group-color: var(--#{$prefix}#{$state}-text-emphasis);
					--#{$prefix}list-group-bg: var(--#{$prefix}#{$state}-bg-subtle);
					--#{$prefix}list-group-border-color: var(--#{$prefix}#{$state}-border-subtle);
					--#{$prefix}list-group-action-hover-color: var(--#{$prefix}emphasis-color);
					--#{$prefix}list-group-action-hover-bg: var(--#{$prefix}#{$state}-border-subtle);
					--#{$prefix}list-group-action-active-color: var(--#{$prefix}emphasis-color);
					--#{$prefix}list-group-action-active-bg: var(--#{$prefix}#{$state}-border-subtle);
					--#{$prefix}list-group-active-color: var(--#{$prefix}#{$state}-bg-subtle);
					--#{$prefix}list-group-active-bg: var(--#{$prefix}#{$state}-text-emphasis);
					--#{$prefix}list-group-active-border-color: var(--#{$prefix}#{$state}-text-emphasis);
				}
				}
			`,
		}),

		//-----------------------

		new e.title("JavaScript behavior"),
		new e.text(
			"Use the tab JavaScript plugin—include it individually or through the compiled {{bootstrap.js}} file—to extend our list group to create tabbable panes of local content."
		),

		new e.code({
			previewTemplate: "row",
			output: () => {
				let data = ["home", "profile", "Messages", "Settings"];

				return new h.div({ row: true }, [
					new h.div(
						{ col: 4 }
						// new h.div(
						// 	{ class: "list-group", id: "list-tab", role: "tablist" },
						// 	data.map((i, ix) => {
						// 		return new h.a(
						// 			{
						// 				class: [
						// 					"list-group-item",
						// 					"list-group-action",
						// 					ix === 0 ? "active" : undefined,
						// 				],
						// 				id: `list-${i}-list`,
						// 				data: { "bs-toggle": "list" },
						// 				control: `list-${i}`,
						// 				href: `#list-${i}`,
						// 				role: "tab",
						// 			},
						// 			i.charAt(0).toUpperCase() + i.slice(1)
						// 		);
						// 	})
						// )
					),
					new h.div(
						{ col: 8 }
						// new h.div(
						// 	{ class: "tab-content", id: "nav-tabContent" },
						// 	data.map((i, ix) => {
						// 		return new h.div(
						// 			{
						// 				class: [
						// 					"tab-pane",
						// 					"fade",
						// 					ix === 0 ? "show" : undefined,
						// 					ix === 0 ? "active" : undefined,
						// 				],
						// 				role: "tabpanel",
						// 				labelledby: `list-${i}-list`,
						// 			},
						// 			`Some placeholder content in a paragraph relating to "${
						// 				i.charAt(0).toUpperCase() + i.slice(1)
						// 			}". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.`
						// 		);
						// 	})
						// )
					),
				]);
			},
		}),

		//-----------------------

		new e.title("Using data attributes"),
		new e.text(
			"You can activate a list group navigation without writing any JavaScript by simply specifying {{data-bs-toggle='list'}} or on an element. Use these data attributes on {{.list-group-item}}."
		),

		new e.code({
			previewTemplate: "row",
			output: () => {
				let data = ["home", "profile", "Messages", "Settings"];

				return new h.div({ row: true }, [
					new h.div(
						{ col: 4 }
						// new h.div(
						// 	{ class: "list-group", id: "list-tab", role: "tablist" },
						// 	data.map((i, ix) => {
						// 		return new h.a(
						// 			{
						// 				class: [
						// 					"list-group-item",
						// 					"list-group-action",
						// 					ix === 0 ? "active" : undefined,
						// 				],
						// 				id: `list-${i}-list`,
						// 				data: { "bs-toggle": "list" },
						// 				control: `list-${i}`,
						// 				href: `#list-${i}`,
						// 				role: "tab",
						// 			},
						// 			i.charAt(0).toUpperCase() + i.slice(1)
						// 		);
						// 	})
						// )
					),
					new h.div(
						{ col: 8 }
						// new h.div(
						// 	{ class: "tab-content", id: "nav-tabContent" },
						// 	data.map((i, ix) => {
						// 		return new h.div(
						// 			{
						// 				class: [
						// 					"tab-pane",
						// 					"fade",
						// 					ix === 0 ? "show" : undefined,
						// 					ix === 0 ? "active" : undefined,
						// 				],
						// 				role: "tabpanel",
						// 				labelledby: `list-${i}-list`,
						// 			},
						// 			`Some placeholder content in a paragraph relating to "${
						// 				i.charAt(0).toUpperCase() + i.slice(1)
						// 			}". And some more content, used here just to pad out and fill this tab panel. In production, you would obviously have more real content here. And not just text. It could be anything, really. Text, images, forms.`
						// 		);
						// 	})
						// )
					),
				]);
			},
		}),
	],
};
