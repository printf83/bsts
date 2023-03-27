import { example as e } from "../ctl/example/_index.js";
import { b, h } from "@printf83/bsts/lib/index";
import { IAttrContent } from "../ctl/main/container.js";

export const doc_component_btnclose: IAttrContent = {
	title: "Close button",
	description: "A generic close button for dismissing content like modals and alerts.",
	item: [
		new e.title("Examples"),
		new e.text(
			"Provide an option to dismiss or close a component with {{.btn-close}}. Default styling is limited, but highly customizable. Modify the Sass variables to replace the default {{background-image}}. {{b::Be sure to include text for screen readers}}, as we’ve done with {{aria-label}}."
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.btnclose();
			},
		}),

		//-----------------------

		new e.subtitle("Disabled state"),
		new e.text(
			"Disabled close buttons change their {{opacity}}. We’ve also applied {{pointer-events:}} none and {{user-select: none}} to preventing hover and active states from triggering."
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.btnclose({ disabled: true });
			},
		}),

		//-----------------------

		new e.subtitle("Dark variant"),
		new e.text(
			"Add {{data-bs-theme='dark'}} to the {{.btn-close}}, or to its parent element, to invert the close button. This uses the {{filter}} property to invert the {{background-image}} without overriding its value."
		),
		new e.code({
			previewTemplate: "row",
			previewAttr: { bgColor: "dark" },
			output: () => {
				return new h.div({ theme: "dark" }, [new b.btnclose(), new b.btnclose({ disabled: true })]);
			},
		}),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Variables"),
		new e.text(
			"As part of Bootstrap’s evolving CSS variables approach, badges now use local CSS variables on {{.btn-close}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),

		new e.codepreview({
			type: "css",
			code: `
			    --#{$prefix}btn-close-color: #{$btn-close-color};
				--#{$prefix}btn-close-bg: #{ escape-svg($btn-close-bg) };
				--#{$prefix}btn-close-opacity: #{$btn-close-opacity};
				--#{$prefix}btn-close-hover-opacity: #{$btn-close-hover-opacity};
				--#{$prefix}btn-close-focus-shadow: #{$btn-close-focus-shadow};
				--#{$prefix}btn-close-focus-opacity: #{$btn-close-focus-opacity};
				--#{$prefix}btn-close-disabled-opacity: #{$btn-close-disabled-opacity};
				--#{$prefix}btn-close-white-filter: #{$btn-close-white-filter};
			`,
		}),

		new e.subtitle("Sass variables"),

		new e.codepreview({
			type: "css",
			code: `
				$btn-close-width:            1em;
				$btn-close-height:           $btn-close-width;
				$btn-close-padding-x:        .25em;
				$btn-close-padding-y:        $btn-close-padding-x;
				$btn-close-color:            $black;
				$btn-close-bg:               url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$btn-close-color}'><path d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/></svg>");
				$btn-close-focus-shadow:     $focus-ring-box-shadow;
				$btn-close-opacity:          .5;
				$btn-close-hover-opacity:    .75;
				$btn-close-focus-opacity:    1;
				$btn-close-disabled-opacity: .25;
				$btn-close-white-filter:     invert(1) grayscale(100%) brightness(200%);
			`,
		}),
	],
};
