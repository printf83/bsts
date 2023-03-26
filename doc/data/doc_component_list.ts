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

		new e.text(
			"You can also replace the {{.badge}} class with a few more utilities without a count for a more generic indicator."
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.button({ position: "relative" }, [
					"Profile ",
					new b.badge(
						{
							bgColor: "danger",
							position: "absolute",
							top: 0,
							start: 100,
							tMiddle: true,
							rounded: "circle",
							border: true,
							borderColor: "light",
							padding: 2,
						},
						new b.visuallyhidden("New alerts")
					),
				]);
			},
		}),

		//-----------------------

		new e.title("Background colors"),
		new e.text(
			"Set a {{background-color}} with contrasting foreground {{color}} with {{https://getbootstrap.com/docs/5.3/helpers/color-background/::our .text-bg-{color} helpers}}. Previously it was required to manually pair your choice of {{https://getbootstrap.com/docs/5.3/utilities/colors/::.text-{color}}} and {{https://getbootstrap.com/docs/5.3/utilities/background/::.bg-{color}}} utilities for styling, which you still may use if you prefer."
		),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
					return new b.badge(
						{ textBgColor: i as bootstrapType.textBgColor[number] },
						i.charAt(0).toUpperCase() + i.slice(1)
					);
				});
			},
		}),

		//-----------------------

		new e.title("Pill badges"),
		new e.text(
			"Use the {{.rounded-pill}} utility class to make badges more rounded with a larger {{border-radius}}."
		),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
					return new b.badge(
						{ textBgColor: i as bootstrapType.textBgColor[number], rounded: "pill" },
						i.charAt(0).toUpperCase() + i.slice(1)
					);
				});
			},
		}),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Variables"),
		new e.text(
			"As part of Bootstrap’s evolving CSS variables approach, badges now use local CSS variables on {{.badge}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),

		new e.codepreview({
			type: "css",
			code: `
			    --#{$prefix}badge-padding-x: #{$badge-padding-x};
				--#{$prefix}badge-padding-y: #{$badge-padding-y};
				@include rfs($badge-font-size, --#{$prefix}badge-font-size);
				--#{$prefix}badge-font-weight: #{$badge-font-weight};
				--#{$prefix}badge-color: #{$badge-color};
				--#{$prefix}badge-border-radius: #{$badge-border-radius};
			`,
		}),

		new e.subtitle("Sass variables"),

		new e.codepreview({
			type: "css",
			code: `
				$badge-font-size:                   .75em;
				$badge-font-weight:                 $font-weight-bold;
				$badge-color:                       $white;
				$badge-padding-y:                   .35em;
				$badge-padding-x:                   .65em;
				$badge-border-radius:               $border-radius;
			`,
		}),
	],
};
