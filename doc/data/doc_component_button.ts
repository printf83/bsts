import { example as e } from "../ctl/example/_index.js";
import { b, h } from "../../src/index.js";
import { IAttrContent } from "../ctl/main/container.js";
import { bootstrapType } from "../../src/core/base/bootstrap.js";
import { UUID } from "../../src/core/fn/uuid.js";

export const doc_component_button: IAttrContent = {
	title: "Buttons",
	description:
		"Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.",
	item: [
		new e.title("Examples"),
		new e.text(
			"Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control."
		),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"].map(
					(i) => {
						return new b.button(
							{ color: i as bootstrapType.color[number] },
							i.charAt(0).toUpperCase() + i.slice(1)
						);
					}
				);
			},
		}),
		new e.item(
			new b.alert.container({ color: "info", callout: true }, [
				new h.h(5, "Conveying meaning to assistive technologies"),
				new h.p(
					"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class."
				),
			])
		),

		//-----------------------

		new e.title("Disable text wrapping"),
		new e.text(
			"If you don’t want the button text to wrap, you can add the {{.text-nowrap}} class to the button. In Sass, you can set {{$btn-white-space: nowrap}} to disable text wrapping for each button."
		),

		//-----------------------

		new e.title("Button tags"),
		new e.text(
			"The {{.btn}} classes are designed to be used with the {{<button>}} element. However, you can also use these classes on {{<a>}} or {{<input>}} elements (though some browsers may apply a slightly different rendering)."
		),
		new e.text(
			"When using button classes on {{<a>}} elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a {{role='button'}} to appropriately convey their purpose to assistive technologies such as screen readers."
		),
		new e.code({
			previewTemplate: "col",
			output: () => {
				let id = UUID();

				return [
					new b.button({ color: "primary", href: "#" }, "Link"),
					new b.button({ color: "primary" }, "Button"),
					new b.button({ color: "primary", type: "submit" }, "Submit"),
					new b.button({ color: "primary", type: "reset" }, "Reset"),

					new b.input({ type: "checkbox", id: `chk${id}`, toggle: true }),
					new b.label({ for: `chk${id}`, color: "primary" }, "Check"),
				];
			},
		}),

		//-----------------------

		new e.title("Outline buttons"),
		new e.text(
			"In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the {{.btn-outline-*}} ones to remove all background images and colors on any button."
		),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"].map(
					(i) => {
						return new b.button(
							{ color: i as bootstrapType.color[number], outline: true },
							i.charAt(0).toUpperCase() + i.slice(1)
						);
					}
				);
			},
		}),
		new e.item(
			new b.alert.container(
				{ color: "info", callout: true },
				" Some of the button styles use a relatively light foreground color, and should only be used on a dark background in order to have sufficient contrast."
			)
		),

		//-----------------------

		new e.title("Sizes"),
		new e.text("Fancy larger or smaller buttons? Add {{.btn-lg}} or {{.btn-sm}} for additional sizes."),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return [
					new b.button({ weight: "lg", color: "primary" }, "Large button"),
					new b.button({ weight: "lg", color: "secondary" }, "Large button"),
				];
			},
		}),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return [
					new b.button({ weight: "sm", color: "primary" }, "Small button"),
					new b.button({ weight: "sm", color: "secondary" }, "Small button"),
				];
			},
		}),
		new e.text("You can even roll your own custom sizing with CSS variables:"),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return new b.button(
					{
						color: "primary",
						style: {
							"--bs-btn-padding-y": ".25rem",
							"--bs-btn-padding-x": ".5rem",
							"--bs-btn-font-size": ".75rem",
						},
					},
					"Custom button"
				);
			},
		}),

		//-----------------------

		new e.title("Disabled state"),
		new e.text(
			"Make buttons look inactive by adding the {{disabled}} boolean attribute to any {{<button>}} element. Disabled buttons have {{pointer-events: none}} applied to, preventing hover and active states from triggering."
		),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return [
					new b.button({ color: "primary", disabled: true }, "Primary button"),
					new b.button({ color: "secondary", disabled: true }, "Button"),
					new b.button({ color: "primary", outline: true, disabled: true }, "Primary button"),
					new b.button({ color: "secondary", outline: true, disabled: true }, "Button"),
				];
			},
		}),
		new e.text("Disabled buttons using the {{<a>}} element behave a bit different:"),
		new e.item(
			new h.ul(
				[
					"{{<a>}}s don’t support the disabled attribute, so you must add the {{.disabled}} class to make it visually appear disabled.",
					"Some future-friendly styles are included to disable all {{pointer-events}} on anchor buttons.",
					"Disabled buttons using {{<a>}} should include the {{aria-disabled='true'}} attribute to indicate the state of the element to assistive technologies.",
					"Disabled buttons using {{<a>}} should not include the {{href}} attribute.",
				].map((i) => {
					return new h.li(i);
				})
			)
		),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return [
					new b.button({ color: "primary", href: "#", disabled: true }, "Primary link"),
					new b.button({ color: "secondary", href: "#", disabled: true }, "Link"),
				];
			},
		}),
		//-----------------------

		new e.subtitle("Link functionality caveat"),
		new e.text(
			"To cover cases where you have to keep the {{href}} attribute on a disabled link, the {{.disabled}} class uses {{pointer-events: none}} to try to disable the link functionality of {{<a>}}s. Note that this CSS property is not yet standardized for HTML, but all modern browsers support it. In addition, even in browsers that do support {{pointer-events: none}}, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, in addition to {{aria-disabled='true'}}, also include a {{tabindex='-1'}} attribute on these links to prevent them from receiving keyboard focus, and use custom JavaScript to disable their functionality altogether."
		),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return [
					new b.button({ color: "primary", href: "#", disabled: true }, "Primary link"),
					new b.button({ color: "secondary", href: "#", disabled: true }, "Link"),
				];
			},
		}),

		//-----------------------

		new e.title("Block buttons"),
		new e.text(
			"Create responsive stacks of full-width, “block buttons” like those in Bootstrap 4 with a mix of our display and gap utilities. By using utilities instead of button specific classes, we have much greater control over spacing, alignment, and responsive behaviors."
		),
		new e.code({
			previewTemplate: "none",
			output: () => {
				return new h.div({ display: "grid", gap: 2 }, [new b.button("Button"), new b.button("Button")]);
			},
		}),
		new e.text(
			"Here we create a responsive variation, starting with vertically stacked buttons until the {{md}} breakpoint, where {{.d-md-block}} replaces the {{.d-grid}} class, thus nullifying the {{gap-2}} utility. Resize your browser to see them change."
		),
		new e.code({
			previewTemplate: "none",
			output: () => {
				return new h.div({ display: ["grid", "md-block"], gap: 2 }, [
					new b.button("Button"),
					new b.button("Button"),
				]);
			},
		}),
		new e.text(
			"You can adjust the width of your block buttons with grid column width classes. For example, for a half-width “block button”, use {{.col-6}}. Center it horizontally with {{.mx-auto}}, too."
		),
		new e.code({
			previewTemplate: "none",
			output: () => {
				return new h.div({ display: "grid", gap: 2, col: 6, marginX: "auto" }, [
					new b.button("Button"),
					new b.button("Button"),
				]);
			},
		}),
		new e.text(
			"Additional utilities can be used to adjust the alignment of buttons when horizontal. Here we’ve taken our previous responsive example and added some flex utilities and a margin utility on the button to right align the buttons when they’re no longer stacked."
		),
		new e.code({
			previewTemplate: "none",
			output: () => {
				return new h.div({ display: ["grid", "md-flex"], gap: 2, justifyContent: "md-end" }, [
					new b.button("Button"),
					new b.button("Button"),
				]);
			},
		}),
		//-----------------------

		new e.title("Button plugin"),
		new e.text("The button plugin allows you to create simple on/off toggle buttons."),
		new e.item(
			new b.alert.container(
				{ color: "info", callout: true },
				" Visually, these toggle buttons are identical to the {{https://getbootstrap.com/docs/5.3/forms/checks-radios/#checkbox-toggle-buttons::checkbox toggle buttons}}. However, they are conveyed differently by assistive technologies: the checkbox toggles will be announced by screen readers as “checked”/“not checked” (since, despite their appearance, they are fundamentally still checkboxes), whereas these toggle buttons will be announced as “button”/“button pressed”. The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button."
			)
		),

		//-----------------------

		new e.subtitle("Toggle states"),
		new e.text(
			"Add {{data-bs-toggle='button'}} to toggle a button’s {{active}} state. If you’re pre-toggling a button, you must manually add the {{.active}} class and {{aria-pressed='true'}} to ensure that it is conveyed appropriately to assistive technologies."
		),
		new e.code({
			previewTemplate: "col",
			output: () => {
				return [
					new b.button({ toggle: true }, "Toggle button"),
					new b.button({ toggle: true, active: true }, "Active toggle button"),
					new b.button({ toggle: true, disabled: true }, "Disabled toggle button"),
				];
			},
		}),

		new e.code({
			previewTemplate: "col",
			output: () => {
				return [
					new b.button({ href: "#", toggle: true }, "Toggle button"),
					new b.button({ href: "#", toggle: true, active: true }, "Active toggle button"),
					new b.button({ href: "#", toggle: true, disabled: true }, "Disabled toggle button"),
				];
			},
		}),

		//-----------------------

		new e.subtitle("Methods"),
		new e.text("You can create a button instance with the button constructor, for example:"),
		new e.codepreview({
			type: "js",
			code: `
			    const bsButton = new bootstrap.Button('#myButton')
			`,
		}),
		new e.item(
			new b.table.container({
				small: true,
				item: [
					["Method", "Description"],
					["{{dispose}}", "Destroys an element’s button. (Removes stored data on the DOM element)"],
					[
						"{{getInstance}}",
						"Static method which allows you to get the button instance associated to a DOM element, you can use it like this: {{bootstrap.Button.getInstance(element)}}.",
					],
					[
						"{{getOrCreateInstance}}",
						"Static method which returns a button instance associated to a DOM element or create a new one in case it wasn’t initialized. You can use it like this: {{bootstrap.Button.getOrCreateInstance(element)}}.",
					],
					["{{toggle}}", "Toggles push state. Gives the button the appearance that it has been activated."],
				],
			})
		),
		new e.text("For example, to toggle all buttons"),
		new e.codepreview({
			type: "js",
			code: `
			    document.querySelectorAll('.btn').forEach(buttonElement => {
					const button = bootstrap.Button.getOrCreateInstance(buttonElement)
					button.toggle()
				})
			`,
		}),

		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Variables"),
		new e.text(
			"As part of Bootstrap’s evolving CSS variables approach, buttons now use local CSS variables on {{.btn}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),

		new e.codepreview({
			type: "css",
			code: `
			    --#{$prefix}btn-padding-x: #{$btn-padding-x};
				--#{$prefix}btn-padding-y: #{$btn-padding-y};
				--#{$prefix}btn-font-family: #{$btn-font-family};
				@include rfs($btn-font-size, --#{$prefix}btn-font-size);
				--#{$prefix}btn-font-weight: #{$btn-font-weight};
				--#{$prefix}btn-line-height: #{$btn-line-height};
				--#{$prefix}btn-color: #{$body-color};
				--#{$prefix}btn-bg: transparent;
				--#{$prefix}btn-border-width: #{$btn-border-width};
				--#{$prefix}btn-border-color: transparent;
				--#{$prefix}btn-border-radius: #{$btn-border-radius};
				--#{$prefix}btn-hover-border-color: transparent;
				--#{$prefix}btn-box-shadow: #{$btn-box-shadow};
				--#{$prefix}btn-disabled-opacity: #{$btn-disabled-opacity};
				--#{$prefix}btn-focus-box-shadow: 0 0 0 #{$btn-focus-width} rgba(var(--#{$prefix}btn-focus-shadow-rgb), .5);
			`,
		}),
		new e.text(
			"Each {{.btn-*}} modifier class updates the appropriate CSS variables to minimize additional CSS rules with our {{button-variant()}}, {{button-outline-variant()}}, and {{button-size()}} mixins."
		),
		new e.text(
			"Here’s an example of building a custom {{.btn-*}} modifier class like we do for the buttons unique to our docs by reassigning Bootstrap’s CSS variables with a mixture of our own CSS and Sass variables."
		),

		new e.code({
			previewTemplate: "col",
			output: () => {
				return new b.button(
					{
						style: {
							"$bd-violet": "#ee82ee",
							"--bd-violet": "#ee82ee",
							"--bd-violet-rgb": "238,130,238",
							"--bs-btn-font-weight": "600",
							"--bs-btn-color": "var(--bs-white)",
							"--bs-btn-bg": "var(--bd-violet)",
							"--bs-btn-border-color": "var(--bd-violet)",
							"--bs-btn-border-radius": ".5rem",
							"--bs-btn-hover-color": "var(--bs-white)",
							"--bs-btn-hover-bg": "#{shade-color($bd-violet, 10%)}",
							"--bs-btn-hover-border-color": "#{shade-color($bd-violet, 10%)}",
							"--bs-btn-focus-shadow-rgb": "var(--bd-violet-rgb)",
							"--bs-btn-active-color": "var(--bs-btn-hover-color)",
							"--bs-btn-active-bg": "#{shade-color($bd-violet, 20%)}",
							"--bs-btn-active-border-color": "#{shade-color($bd-violet, 20%)}",
						},
					},
					"Custom button"
				);
			},
		}),

		new e.subtitle("Sass variables"),

		new e.codepreview({
			type: "css",
			code: `
				$btn-padding-y:               $input-btn-padding-y;
				$btn-padding-x:               $input-btn-padding-x;
				$btn-font-family:             $input-btn-font-family;
				$btn-font-size:               $input-btn-font-size;
				$btn-line-height:             $input-btn-line-height;
				$btn-white-space:             null; // Set to nowrap to prevent text wrapping

				$btn-padding-y-sm:            $input-btn-padding-y-sm;
				$btn-padding-x-sm:            $input-btn-padding-x-sm;
				$btn-font-size-sm:            $input-btn-font-size-sm;

				$btn-padding-y-lg:            $input-btn-padding-y-lg;
				$btn-padding-x-lg:            $input-btn-padding-x-lg;
				$btn-font-size-lg:            $input-btn-font-size-lg;

				$btn-border-width:            $input-btn-border-width;

				$btn-font-weight:             $font-weight-normal;
				$btn-box-shadow:              inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075);
				$btn-focus-width:             $input-btn-focus-width;
				$btn-focus-box-shadow:        $input-btn-focus-box-shadow;
				$btn-disabled-opacity:        .65;
				$btn-active-box-shadow:       inset 0 3px 5px rgba($black, .125);

				$btn-link-color:              var(--#{$prefix}link-color);
				$btn-link-hover-color:        var(--#{$prefix}link-hover-color);
				$btn-link-disabled-color:     $gray-600;

				// Allows for customizing button radius independently from global border radius
				$btn-border-radius:           $border-radius;
				$btn-border-radius-sm:        $border-radius-sm;
				$btn-border-radius-lg:        $border-radius-lg;

				$btn-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

				$btn-hover-bg-shade-amount:       15%;
				$btn-hover-bg-tint-amount:        15%;
				$btn-hover-border-shade-amount:   20%;
				$btn-hover-border-tint-amount:    10%;
				$btn-active-bg-shade-amount:      20%;
				$btn-active-bg-tint-amount:       20%;
				$btn-active-border-shade-amount:  25%;
				$btn-active-border-tint-amount:   10%;

			`,
		}),

		new e.subtitle("Sass mixins"),
		new e.text(
			"There are three mixins for buttons: button and button outline variant mixins (both based on {{$theme-colors}}), plus a button size mixin."
		),
		new e.codepreview({
			type: "css",
			code: `
				@mixin button-variant(
				$background,
				$border,
				$color: color-contrast($background),
				$hover-background: if($color == $color-contrast-light, shade-color($background, $btn-hover-bg-shade-amount), tint-color($background, $btn-hover-bg-tint-amount)),
				$hover-border: if($color == $color-contrast-light, shade-color($border, $btn-hover-border-shade-amount), tint-color($border, $btn-hover-border-tint-amount)),
				$hover-color: color-contrast($hover-background),
				$active-background: if($color == $color-contrast-light, shade-color($background, $btn-active-bg-shade-amount), tint-color($background, $btn-active-bg-tint-amount)),
				$active-border: if($color == $color-contrast-light, shade-color($border, $btn-active-border-shade-amount), tint-color($border, $btn-active-border-tint-amount)),
				$active-color: color-contrast($active-background),
				$disabled-background: $background,
				$disabled-border: $border,
				$disabled-color: color-contrast($disabled-background)
				) {
				--#{$prefix}btn-color: #{$color};
				--#{$prefix}btn-bg: #{$background};
				--#{$prefix}btn-border-color: #{$border};
				--#{$prefix}btn-hover-color: #{$hover-color};
				--#{$prefix}btn-hover-bg: #{$hover-background};
				--#{$prefix}btn-hover-border-color: #{$hover-border};
				--#{$prefix}btn-focus-shadow-rgb: #{to-rgb(mix($color, $border, 15%))};
				--#{$prefix}btn-active-color: #{$active-color};
				--#{$prefix}btn-active-bg: #{$active-background};
				--#{$prefix}btn-active-border-color: #{$active-border};
				--#{$prefix}btn-active-shadow: #{$btn-active-box-shadow};
				--#{$prefix}btn-disabled-color: #{$disabled-color};
				--#{$prefix}btn-disabled-bg: #{$disabled-background};
				--#{$prefix}btn-disabled-border-color: #{$disabled-border};
				}
			`,
		}),
		new e.codepreview({
			type: "css",
			code: `
				@mixin button-outline-variant(
				$color,
				$color-hover: color-contrast($color),
				$active-background: $color,
				$active-border: $color,
				$active-color: color-contrast($active-background)
				) {
				--#{$prefix}btn-color: #{$color};
				--#{$prefix}btn-border-color: #{$color};
				--#{$prefix}btn-hover-color: #{$color-hover};
				--#{$prefix}btn-hover-bg: #{$active-background};
				--#{$prefix}btn-hover-border-color: #{$active-border};
				--#{$prefix}btn-focus-shadow-rgb: #{to-rgb($color)};
				--#{$prefix}btn-active-color: #{$active-color};
				--#{$prefix}btn-active-bg: #{$active-background};
				--#{$prefix}btn-active-border-color: #{$active-border};
				--#{$prefix}btn-active-shadow: #{$btn-active-box-shadow};
				--#{$prefix}btn-disabled-color: #{$color};
				--#{$prefix}btn-disabled-bg: transparent;
				--#{$prefix}btn-disabled-border-color: #{$color};
				--#{$prefix}gradient: none;
				}
			`,
		}),
		new e.codepreview({
			type: "css",
			code: `
				@mixin button-size($padding-y, $padding-x, $font-size, $border-radius) {
				--#{$prefix}btn-padding-y: #{$padding-y};
				--#{$prefix}btn-padding-x: #{$padding-x};
				@include rfs($font-size, --#{$prefix}btn-font-size);
				--#{$prefix}btn-border-radius: #{$border-radius};
				}
			`,
		}),
		new e.subtitle("Sass loops"),
		new e.text(
			"Button variants (for regular and outline buttons) use their respective mixins with our {{$theme-colors}} map to generate the modifier classes in {{scss/_buttons.scss}}."
		),
		new e.codepreview({
			type: "css",
			code: `
				@each $color, $value in $theme-colors {
					.btn-#{$color} {
						@if $color == "light" {
						@include button-variant(
							$value,
							$value,
							$hover-background: shade-color($value, $btn-hover-bg-shade-amount),
							$hover-border: shade-color($value, $btn-hover-border-shade-amount),
							$active-background: shade-color($value, $btn-active-bg-shade-amount),
							$active-border: shade-color($value, $btn-active-border-shade-amount)
						);
						} @else if $color == "dark" {
						@include button-variant(
							$value,
							$value,
							$hover-background: tint-color($value, $btn-hover-bg-tint-amount),
							$hover-border: tint-color($value, $btn-hover-border-tint-amount),
							$active-background: tint-color($value, $btn-active-bg-tint-amount),
							$active-border: tint-color($value, $btn-active-border-tint-amount)
						);
						} @else {
						@include button-variant($value, $value);
						}
					}
					}

					@each $color, $value in $theme-colors {
					.btn-outline-#{$color} {
						@include button-outline-variant($value);
					}
					}

			`,
		}),
	],
};
