import { example as e } from "../ctl/example/_index.js";
import { b, core } from "@printf83/bsts/lib/index";
import { IAttrContent } from "../ctl/main/container.js";

export const doc_component_accordion: IAttrContent = {
	title: "Accordion",
	description: "Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.",
	item: [
		new e.title("How it works"),
		new e.text(
			"The accordion uses {{?q=doc_component_collapse::collapse}} internally to make it collapsible. To render an accordion that’s expanded, add the {{.open}} class on the {{.accordion}}."
		),
		new e.text(
			new b.alert.container(
				{ color: "info", callout: true },
				"The animation effect of this component is dependent on the {{prefers-reduced-motion}} media query. See the {{?q=doc_gettingstarted_accessibility#reduce_motion::reduced motion section of our accessibility documentation}}. "
			)
		),

		//-----------------------

		new e.title("Example"),
		new e.text("Click the accordions below to expand/collapse the accordion content."),
		new e.code({
			previewTemplate: "row",
			output: () => {
				let mainID = core.UUID();

				return new b.accordion.container(
					{ id: mainID },
					[
						{
							title: "Accordion Item #1",
							elem: "{{b::This is the first item's accordion body}}. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the {{.accordion-body}}, though the transition does limit overflow.",
							show: true,
						},
						{
							title: "Accordion Item #2",
							elem: "{{b::This is the second item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the {{.accordion-body}}, though the transition does limit overflow.",
						},
						{
							title: "Accordion Item #3",
							elem: "{{b::This is the third item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the {{.accordion-body}}, though the transition does limit overflow.",
						},
					].map((i) => {
						let itemID = core.UUID();

						return new b.accordion.item([
							new b.accordion.header(
								{
									id: `heading-${itemID}`,
									target: `#collapse-${itemID}`,
									control: `collapse-${itemID}`,
									expanded: i.show,
								},
								i.title
							),
							new b.accordion.body(
								{ id: `collapse-${itemID}`, parent: `#${mainID}`, show: i.show },
								i.elem
							),
						]);
					})
				);
			},
		}),

		//-----------------------

		new e.subtitle("Using item"),
		new e.text("Same as above but more easy."),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.accordion.container({
					item: [
						{
							title: "Accordion Item #1",
							elem: "{{b::This is the first item's accordion body}}. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the {{.accordion-body}}, though the transition does limit overflow.",
							show: true,
						},
						{
							title: "Accordion Item #2",
							elem: "{{b::This is the second item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the {{.accordion-body}}, though the transition does limit overflow.",
						},
						{
							title: "Accordion Item #3",
							elem: "{{b::This is the third item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the {{.accordion-body}}, though the transition does limit overflow.",
						},
					],
				});
			},
		}),

		//-----------------------

		new e.subtitle("Flush"),
		new e.text(
			"Add {{.accordion-flush}} to remove the default {{background-color}}, some borders, and some rounded corners to render accordions edge-to-edge with their parent container."
		),
		new e.code({
			previewTemplate: "none",
			previewAttr: { padding: 4, bgColor: "body-tertiary" },
			output: () => {
				return new b.accordion.container({
					flush: true,
					item: [
						{
							title: "Accordion Item #1",
							elem: "{{b::This is the first item's accordion body}}. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the {{.accordion-body}}, though the transition does limit overflow.",
							show: true,
						},
						{
							title: "Accordion Item #2",
							elem: "{{b::This is the second item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the {{.accordion-body}}, though the transition does limit overflow.",
						},
						{
							title: "Accordion Item #3",
							elem: "{{b::This is the third item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the {{.accordion-body}}, though the transition does limit overflow.",
						},
					],
				});
			},
		}),

		//-----------------------

		new e.subtitle("Always open"),
		new e.text(
			"Omit the {{data-bs-parent}} attribute on each {{.accordion-collapse}} to make accordion items stay open when another item is opened."
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.accordion.container({
					alwaysOpen: true,
					item: [
						{
							title: "Accordion Item #1",
							elem: "{{b::This is the first item's accordion body}}. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the {{.accordion-body}}, though the transition does limit overflow.",
							show: true,
						},
						{
							title: "Accordion Item #2",
							elem: "{{b::This is the second item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the {{.accordion-body}}, though the transition does limit overflow.",
						},
						{
							title: "Accordion Item #3",
							elem: "{{b::This is the third item's accordion body}}. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the {{.accordion-body}}, though the transition does limit overflow.",
						},
					],
				});
			},
		}),

		//-----------------------

		new e.title("Accessibility"),
		new e.text(
			"Please read the {{?q=doc_components_collapse#accessibility::collapse accessibility section}} for more information."
		),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Variables"),
		new e.text(
			"As part of Bootstrap’s evolving CSS variables approach, accordions now use local CSS variables on {{.accordion}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),

		new e.codepreview({
			type: "css",
			code: `
				--#{$prefix}accordion-color: #{$accordion-color};
				--#{$prefix}accordion-bg: #{$accordion-bg};
				--#{$prefix}accordion-transition: #{$accordion-transition};
				--#{$prefix}accordion-border-color: #{$accordion-border-color};
				--#{$prefix}accordion-border-width: #{$accordion-border-width};
				--#{$prefix}accordion-border-radius: #{$accordion-border-radius};
				--#{$prefix}accordion-inner-border-radius: #{$accordion-inner-border-radius};
				--#{$prefix}accordion-btn-padding-x: #{$accordion-button-padding-x};
				--#{$prefix}accordion-btn-padding-y: #{$accordion-button-padding-y};
				--#{$prefix}accordion-btn-color: #{$accordion-button-color};
				--#{$prefix}accordion-btn-bg: #{$accordion-button-bg};
				--#{$prefix}accordion-btn-icon: #{escape-svg($accordion-button-icon)};
				--#{$prefix}accordion-btn-icon-width: #{$accordion-icon-width};
				--#{$prefix}accordion-btn-icon-transform: #{$accordion-icon-transform};
				--#{$prefix}accordion-btn-icon-transition: #{$accordion-icon-transition};
				--#{$prefix}accordion-btn-active-icon: #{escape-svg($accordion-button-active-icon)};
				--#{$prefix}accordion-btn-focus-border-color: #{$accordion-button-focus-border-color};
				--#{$prefix}accordion-btn-focus-box-shadow: #{$accordion-button-focus-box-shadow};
				--#{$prefix}accordion-body-padding-x: #{$accordion-body-padding-x};
				--#{$prefix}accordion-body-padding-y: #{$accordion-body-padding-y};
				--#{$prefix}accordion-active-color: #{$accordion-button-active-color};
				--#{$prefix}accordion-active-bg: #{$accordion-button-active-bg};
			`,
		}),

		new e.subtitle("Sass variables"),

		new e.codepreview({
			type: "css",
			code: `
				$accordion-padding-y:                     1rem;
				$accordion-padding-x:                     1.25rem;
				$accordion-color:                         var(--#{$prefix}body-color); // Sass variable because of $accordion-button-icon
				$accordion-bg:                            var(--#{$prefix}body-bg);
				$accordion-border-width:                  var(--#{$prefix}border-width);
				$accordion-border-color:                  var(--#{$prefix}border-color);
				$accordion-border-radius:                 var(--#{$prefix}border-radius);
				$accordion-inner-border-radius:           subtract($accordion-border-radius, $accordion-border-width);

				$accordion-body-padding-y:                $accordion-padding-y;
				$accordion-body-padding-x:                $accordion-padding-x;

				$accordion-button-padding-y:              $accordion-padding-y;
				$accordion-button-padding-x:              $accordion-padding-x;
				$accordion-button-color:                  var(--#{$prefix}body-color);
				$accordion-button-bg:                     var(--#{$prefix}accordion-bg);
				$accordion-transition:                    $btn-transition, border-radius .15s ease;
				$accordion-button-active-bg:              var(--#{$prefix}primary-bg-subtle);
				$accordion-button-active-color:           var(--#{$prefix}primary-text);

				$accordion-button-focus-border-color:     $input-focus-border-color;
				$accordion-button-focus-box-shadow:       $btn-focus-box-shadow;

				$accordion-icon-width:                    1.25rem;
				$accordion-icon-color:                    $body-color;
				$accordion-icon-active-color:             $primary-text;
				$accordion-icon-transition:               transform .2s ease-in-out;
				$accordion-icon-transform:                rotate(-180deg);

				$accordion-button-icon:         url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>");
				$accordion-button-active-icon:  url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-active-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>");
			`,
		}),
	],
};
