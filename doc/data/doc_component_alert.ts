import { example as e } from "../ctl/example/_index.js";
import { b, core, h } from "../../src/index.js";
import { IAttrContent } from "../ctl/main/container.js";
import { bootstrapType } from "../../src/core/base/bootstrap.js";

export const doc_component_alert: IAttrContent = {
	title: "Alert",
	description:
		"Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.",
	item: [
		new e.title("Examples"),
		new e.text(
			"Alerts are available for any length of text, as well as an optional close button. For proper styling, use one of the eight required contextual classes (e.g., {{.alert-success}}). For inline dismissal, use the {{?q=doc_component_alert#dismissing::alerts JavaScript plugin}}."
		),
		new e.item(
			new b.alert.container(
				{ color: "info", callout: true },
				"{{b::Heads up!}} As of v5.3.0, the {{alert-variant()}} Sass mixin is deprecated. Alert variants now have their CSS variables overridden in the {{?q=doc_component_alert_#sass-loop::Sass loop}}."
			)
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
					return new b.alert.container(
						{ color: i as bootstrapType.color[number] },
						`A simple ${i} alert—check it out!`
					);
				});
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

		new e.subtitle("Callout"),
		new e.text("Just set {{callout:true}} to change the {{alert}} to {{callout}}"),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
					return new b.alert.container(
						{ color: i as bootstrapType.color[number], callout: true },
						`A simple ${i} callout—check it out!`
					);
				});
			},
		}),

		//-----------------------

		new e.subtitle("Live example"),
		new e.text(
			"Click the button below to show an alert (hidden with inline styles to start), then dismiss (and destroy) it with the built-in close button."
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return [
					new h.div({ id: "liveAlertPlaceholder" }),
					new b.button(
						{
							color: "primary",
							on: {
								click: (_e) => {
									let container = document.getElementById("liveAlertPlaceholder") as HTMLElement;
									core.appendChild(
										container,
										new b.alert.container(
											{ color: "success", dismissible: true },
											"Nice, you triggered this alert message!"
										)
									);
								},
							},
						},
						"Show live alert"
					),
				];
			},
		}),

		//-----------------------

		new e.subtitle("Link color"),
		new e.text("Use the {{.alert-link}} utility class to quickly provide matching colored links within any alert."),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].map((i) => {
					return new b.alert.container({ color: i as bootstrapType.color[number] }, [
						`A simple ${i} alert with `,
						new b.alert.link({ href: "#" }, "an example link"),
						".",
					]);
				});
			},
		}),

		//-----------------------

		new e.subtitle("Additional content"),
		new e.text("Alerts can also contain additional HTML elements like headings, paragraphs and dividers."),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.alert.container({ color: "success" }, [
					new b.alert.header(4, "Well done!"),
					new h.p(
						"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
					),
					new h.hr(),
					new h.p(
						{ marginBottom: 0 },
						"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."
					),
				]);
			},
		}),

		//-----------------------

		new e.subtitle("Icons"),
		new e.text(
			"Similarly, you can use {{https://getbootstrap.com/docs/5.3/utilities/flex/::flexbox utilities}} and {{https://icons.getbootstrap.com/::Bootstrap Icons}} to create alerts with icons. Depending on your icons and content, you may want to add more utilities or custom styles."
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.alert.container(
					{ color: "info" },
					new b.label({ icon: b.icon.solid("circle-info") }, " An example alert with an icon")
				);
			},
		}),

		//-----------------------

		new e.text(
			"Need more than one icon for your alerts? Consider using more Bootstrap Icons and making a local SVG sprite like so to easily reference the same icons repeatedly."
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return [
					{ color: "info", icon: b.icon.solid("circle-info") },
					{ color: "success", icon: b.icon.reg("circle-check") },
					{ color: "warning", icon: b.icon.solid("triangle-exclamation") },
					{ color: "danger", icon: b.icon.reg("circle-xmark") },
				].map((i) => {
					return new b.alert.container({ color: i.color as bootstrapType.color[number] }, [
						new b.label({ icon: i.icon }, `An example ${i.color} alert with an icon`),
					]);
				});
			},
		}),

		//-----------------------

		new e.subtitle("Dismissing"),
		new e.text("Using the alert JavaScript plugin, it’s possible to dismiss any alert inline. Here’s how:"),
		new e.item(
			new h.ul([
				new h.li("Be sure you’ve loaded the alert plugin, or the compiled Bootstrap JavaScript."),
				new h.li(
					"Add a {{https://getbootstrap.com/docs/5.3/components/close-button/::close button}} and the {{.alert-dismissible}} class, which adds extra padding to the right of the alert and positions the close button."
				),
				new h.li(
					"On the close button, add the {{data-bs-dismiss='alert'}} attribute, which triggers the JavaScript functionality. Be sure to use the {{<button>}} element with it for proper behavior across all devices."
				),
				new h.li("To animate alerts when dismissing them, be sure to add the {{.fade}} and {{.show}} classes."),
			])
		),
		new e.text("You can see this in action with a live demo:"),

		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.alert.container(
					{ color: "warning", dismissible: true },
					"{{b::Holy guacamole!}} You should check in on some of those fields below."
				);
			},
		}),

		new e.item(
			new b.alert.container(
				{ color: "warning", callout: true },
				"When an alert is dismissed, the element is completely removed from the page structure. If a keyboard user dismisses the alert using the close button, their focus will suddenly be lost and, depending on the browser, reset to the start of the page/document. For this reason, we recommend including additional JavaScript that listens for the {{closed.bs.alert}} event and programmatically sets {{focus()}} to the most appropriate location in the page. If you’re planning to move focus to a non-interactive element that normally does not receive focus, make sure to add {{tabindex='-1'}} to the element."
			)
		),
		//-----------------------

		new e.title("CSS"),
		new e.subtitle("Variables"),
		new e.text(
			"As part of Bootstrap’s evolving CSS variables approach, alerts now use local CSS variables on {{.alert}} for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too."
		),

		new e.codepreview({
			type: "css",
			code: `
				--#{$prefix}alert-bg: transparent;
				--#{$prefix}alert-padding-x: #{$alert-padding-x};
				--#{$prefix}alert-padding-y: #{$alert-padding-y};
				--#{$prefix}alert-margin-bottom: #{$alert-margin-bottom};
				--#{$prefix}alert-color: inherit;
				--#{$prefix}alert-border-color: transparent;
				--#{$prefix}alert-border: #{$alert-border-width} solid var(--#{$prefix}alert-border-color);
				--#{$prefix}alert-border-radius: #{$alert-border-radius};
				--#{$prefix}alert-link-color: inherit;
			`,
		}),

		new e.subtitle("Sass variables"),

		new e.codepreview({
			type: "css",
			code: `
				$alert-padding-y:               $spacer;
				$alert-padding-x:               $spacer;
				$alert-margin-bottom:           1rem;
				$alert-border-radius:           $border-radius;
				$alert-link-font-weight:        $font-weight-bold;
				$alert-border-width:            var(--#{$prefix}border-width);
				$alert-bg-scale:                -80%;
				$alert-border-scale:            -70%;
				$alert-color-scale:             40%;
				$alert-dismissible-padding-r:   $alert-padding-x * 3; // 3x covers width of x plus defau
			`,
		}),

		new e.subtitle("Sass loop"),
		new e.text("Loop that generates the modifier classes with the {{alert-variant()}} mixin."),
		new e.codepreview({
			type: "css",
			code: `
				// Generate contextual modifier classes for colorizing the alert
				@each $state in map-keys($theme-colors) {
					.alert-#{$state} {
						--#{$prefix}alert-color: var(--#{$prefix}#{$state}-text);
						--#{$prefix}alert-bg: var(--#{$prefix}#{$state}-bg-subtle);
						--#{$prefix}alert-border-color: var(--#{$prefix}#{$state}-border-subtle);
						--#{$prefix}alert-link-color: var(--#{$prefix}#{$state}-text);
					}
				}

			`,
		}),

		//-----------------------

		new e.title("JavaScript behavior"),
		new e.subtitle("Initialize"),
		new e.text("Initialize elements as alerts"),

		new e.codepreview({
			type: "js",
			code: `
				const alertList = document.querySelectorAll('.alert')
				const alerts = [...alertList].map(element => new bootstrap.Alert(element))
			`,
		}),

		new e.item(
			new b.alert.container({ color: "warning", callout: true }, [
				new h.p(
					"For the sole purpose of dismissing an alert, it isn’t necessary to initialize the component manually via the JS API. By making use of {{data-bs-dismiss='alert'}}, the component will be initialized automatically and properly dismissed."
				),
				new h.p(
					"See the {{https://getbootstrap.com/docs/5.3/components/alerts/#triggers::triggers}} section for more details."
				),
			])
		),

		//-----------------------

		new e.subtitle("Triggers"),

		new e.text(
			"Dismissal can be achieved with the {{data}} attribute on a button within the alert as demonstrated below:"
		),
		new e.codepreview({
			type: "html",
			code: `
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
			`,
		}),

		new e.text("or on a button outside the alert using the {{data-bs-target}} as demonstrated below:"),
		new e.codepreview({
			type: "html",
			code: `
				<button type="button" class="btn-close" data-bs-dismiss="alert" data-bs-target="#my-alert" aria-label="Close"></button>
			`,
		}),

		new e.text("{{b::Note :}} that closing an alert will remove it from the DOM."),

		//-----------------------

		new e.subtitle("Methods"),
		new e.text("You can create an alert instance with the alert constructor, for example:"),
		new e.codepreview({
			type: "js",
			code: `
				const bsAlert = new bootstrap.Alert('#myAlert')
			`,
		}),
		new e.text(
			"This makes an alert listen for click events on descendant elements which have the {{data-bs-dismiss='alert'}} attribute. (Not necessary when using the data-api’s auto-initialization.)"
		),
		new e.item(
			new b.table.container({
				small: true,
				item: [
					["Method", "Description"],
					[
						"{{close}}",
						"Closes an alert by removing it from the DOM. If the {{.fade}} and {{.show}} classes are present on the element, the alert will fade out before it is removed.",
					],
					["{{dispose}}", "Destroys an element’s alert. (Removes stored data on the DOM element)"],
					[
						"{{getInstance}}",
						"Static method which allows you to get the alert instance associated to a DOM element. For example: {{bootstrap.Alert.getInstance(alert)}}.",
					],
					[
						"{{getOrCreateInstance}}",
						"Static method which returns an alert instance associated to a DOM element or create a new one in case it wasn’t initialized. You can use it like this: {{bootstrap.Alert.getOrCreateInstance(element)}}.",
					],
				],
			})
		),
		new e.text("Basic usage:"),
		new e.codepreview({
			type: "js",
			code: `
				const alert = bootstrap.Alert.getOrCreateInstance('#myAlert')
				alert.close()
			`,
		}),

		//-----------------------

		new e.subtitle("Events"),
		new e.text("Bootstrap’s alert plugin exposes a few events for hooking into alert functionality."),
		new e.item(
			new b.table.container({
				small: true,
				item: [
					["Event", "Description"],
					["{{close.bs.alert}}", "Fires immediately when the {{close}} instance method is called."],
					["{{closed.bs.alert}}", "Fired when the alert has been closed and CSS transitions have completed."],
				],
			})
		),
		new e.codepreview({
			type: "js",
			code: `
				const myAlert = document.getElementById('myAlert')
				myAlert.addEventListener('closed.bs.alert', event => {
					// do something, for instance, explicitly move focus to the most appropriate element,
					// so it doesn't get lost/reset to the start of the page
					// document.getElementById('...').focus()
				})

			`,
		}),

		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.alert.container(
					{
						color: "info",
						dismissible: true,
						on: {
							"close.bs.alert": (_e) => {
								console.log("close.bs.alert trigged");
							},
							"closed.bs.alert": (_e) => {
								console.log("closed.bs.alert trigged");
							},
						},
					},
					"Check console to check event trigged"
				);
			},
		}),
	],
};
