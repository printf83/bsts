import { example as e } from "../ctl/example/_index.js";
import { b, h } from "../../src/index.js";
import { IAttrContent } from "../ctl/main/container.js";

export const doc_component_breadcrumb: IAttrContent = {
	title: "Breadcrumb",
	description:
		"Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.",
	item: [
		new e.title("Example"),
		new e.text(
			"Use an ordered or unordered list with linked list items to create a minimally styled breadcrumb. Use our utilities to add additional styles as desired."
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return [["Home"], ["Home", "Library"], ["Home", "Library", "Data"]].map((i) => {
					return new b.breadcrumb.container(
						{ label: "breadcrumb" },
						i.map((j, jx) => {
							return new b.breadcrumb.item({ active: jx === i.length - 1, href: "#" }, j);
						})
					);
				});
			},
		}),

		//-----------------------

		new e.subtitle("Using item"),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.breadcrumb.container({
					label: "breadcrumb",
					item: [
						{ href: "#", elem: "Home" },
						{ href: "#", elem: "Library" },
						{ href: "#", elem: "Data" },
					],
				});
			},
		}),

		//-----------------------

		new e.title("Dividers"),
		new e.text(
			"Dividers are automatically added in CSS through {{https://developer.mozilla.org/en-US/docs/Web/CSS/::before}} and {{https://developer.mozilla.org/en-US/docs/Web/CSS/content::content}}. They can be changed by modifying a local CSS custom property {{--bs-breadcrumb-divider}}, or through the {{$breadcrumb-divider}} Sass variable — and {{$breadcrumb-divider-flipped}} for its RTL counterpart, if needed. We default to our Sass variable, which is set as a fallback to the custom property. This way, you get a global divider that you can override without recompiling CSS at any time."
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.breadcrumb.container({
					label: "breadcrumb",
					divider: "'>'",
					item: [
						{ href: "#", elem: "Home" },
						{ href: "#", elem: "Library" },
						{ href: "#", elem: "Data" },
					],
				});
			},
		}),
		new e.text(
			"When modifying via Sass, the {{https://sass-lang.com/documentation/modules/string#quote::quote}} function is required to generate the quotes around a string. For example, using {{>}} as the divider, you can use this:"
		),
		new e.codepreview({
			type: "css",
			code: `
				$breadcrumb-divider: quote(">");
				`,
		}),
		new e.text(
			"It’s also possible to use an {{b::embedded SVG icon}}. Apply it via our CSS custom property, or use the Sass variable."
		),
		new e.item(
			new b.alert.container({ color: "info", callout: true }, [
				new h.h(5, "Using embedded SVG"),
				new h.p(
					"Inlining SVG as data URI requires to URL escape a few characters, most notably {{<}}, {{>}} and {{#}}. That’s why the {{$breadcrumb-divider}} variable is passed through our {{https://getbootstrap.com/docs/5.3/customize/sass/#escape-svg::escape-svg() Sass function}}. When using the CSS custom property, you need to URL escape your SVG on your own. Read {{https://codepen.io/kevinweber/pen/dXWoRw::Kevin Weber’s explanations on CodePen}} for detailed information on what to escape. "
				),
			])
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.breadcrumb.container({
					label: "breadcrumb",
					divider:
						"url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);",
					item: [
						{ href: "#", elem: "Home" },
						{ href: "#", elem: "Library" },
						{ href: "#", elem: "Data" },
					],
				});
			},
		}),
		new e.codepreview({
			type: "css",
			code: `
				$breadcrumb-divider: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8'><path d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='#{$breadcrumb-divider-color}'/></svg>");
				`,
		}),
		new e.text(
			"You can also remove the divider setting {{--bs-breadcrumb-divider: '';}} (empty strings in CSS custom properties counts as a value), or setting the Sass variable to {{$breadcrumb-divider: none;}}."
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.breadcrumb.container({
					label: "breadcrumb",
					divider: "''",
					item: [
						{ href: "#", elem: "Home" },
						{ href: "#", elem: "Library" },
						{ href: "#", elem: "Data" },
					],
				});
			},
		}),
		new e.codepreview({
			type: "css",
			code: `
				$breadcrumb-divider: none;
				`,
		}),
		//-----------------------

		new e.title("Accessibility"),
		new e.text(
			"Since breadcrumbs provide a navigation, it’s a good idea to add a meaningful label such as {{aria-label='breadcrumb'}} to describe the type of navigation provided in the {{<nav>}} element, as well as applying an {{aria-current='page'}} to the last item of the set to indicate that it represents the current page."
		),
		new e.text(
			"For more information, see the {{https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/::ARIA Authoring Practices Guide breadcrumb pattern}}."
		),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Variables"),
		new e.text(
			"As part of Bootstrap’s evolving CSS variables approach, breadcrumbs now use local CSS variables on {{.breadcrumb}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),

		new e.codepreview({
			type: "css",
			code: `
		        --#{$prefix}breadcrumb-padding-x: #{$breadcrumb-padding-x};
				--#{$prefix}breadcrumb-padding-y: #{$breadcrumb-padding-y};
				--#{$prefix}breadcrumb-margin-bottom: #{$breadcrumb-margin-bottom};
				@include rfs($breadcrumb-font-size, --#{$prefix}breadcrumb-font-size);
				--#{$prefix}breadcrumb-bg: #{$breadcrumb-bg};
				--#{$prefix}breadcrumb-border-radius: #{$breadcrumb-border-radius};
				--#{$prefix}breadcrumb-divider-color: #{$breadcrumb-divider-color};
				--#{$prefix}breadcrumb-item-padding-x: #{$breadcrumb-item-padding-x};
				--#{$prefix}breadcrumb-item-active-color: #{$breadcrumb-active-color};
			`,
		}),

		new e.subtitle("Sass variables"),

		new e.codepreview({
			type: "css",
			code: `
				$breadcrumb-font-size:              null;
				$breadcrumb-padding-y:              0;
				$breadcrumb-padding-x:              0;
				$breadcrumb-item-padding-x:         .5rem;
				$breadcrumb-margin-bottom:          1rem;
				$breadcrumb-bg:                     null;
				$breadcrumb-divider-color:          var(--#{$prefix}secondary-color);
				$breadcrumb-active-color:           var(--#{$prefix}secondary-color);
				$breadcrumb-divider:                quote("/");
				$breadcrumb-divider-flipped:        $breadcrumb-divider;
				$breadcrumb-border-radius:          null;
			`,
		}),
	],
};
