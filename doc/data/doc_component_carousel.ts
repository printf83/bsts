import { example as e } from "../ctl/example/_index.js";
import { b, h } from "../../src/index.js";
import { IAttrContent } from "../ctl/main/container.js";
import { bootstrapType } from "../../src/core/base/bootstrap.js";

export const doc_component_carousel: IAttrContent = {
	title: "Carousel",
	description: "A slideshow component for cycling through elements—images or slides of text—like a carousel.",
	item: [
		new e.title("How it works"),
		new e.item(
			new h.ul([
				new h.li(
					new h.p(
						"The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators."
					)
				),
				new h.li([
					new h.p(
						"For performance reasons, {{b::carousels must be manually initialized}} using the {{https://getbootstrap.com/docs/5.3/components/carousel/#methods::carousel constructor method}}. Without initialization, some of the event listeners (specifically, the events needed touch/swipe support) will not be registered until a user has explicitly activated a control or indicator."
					),
					new h.p(
						"The only exception are {{https://getbootstrap.com/docs/5.3/components/carousel/#autoplaying-carousels::autoplaying carousels}} with the {{data-bs-ride='carousel'}} attribute as these are initialized automatically on page load. If you’re using autoplaying carousels with the data attribute, {{b::don’t explicitly initialize the same carousels with the constructor method}}."
					),
				]),
				new h.li(
					new h.p(
						"Nested carousels are not supported. You should also be aware that carousels in general can often cause usability and accessibility challenges."
					)
				),
			])
		),
		new e.item(
			new b.alert.container(
				{ color: "info", callout: true },
				"The animation effect of this component is dependent on the {{prefers-reduced-motion}} media query. See the {{https://getbootstrap.com/docs/5.3/getting-started/accessibility/#reduced-motion::reduced motion section of our accessibility documentation}}."
			)
		),

		//-----------------------

		new e.title("Basic examples"),
		new e.text(
			"Here is a basic example of a carousel with three slides. Note the previous/next controls. We recommend using {{<button>}} elements, but you can also use {{<a>}} elements with {{role='button'}}."
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.carousel.container({ id: "carouselExample" }, [
					new b.carousel.indicators.container(
						[0, 1, 2, 3, 4, 5, 6].map((_i, ix) => {
							return new b.carousel.indicators.button({
								target: "#carouselExample",
								slide: ix,
								active: ix === 0 ? true : undefined,
							});
						})
					),
					new b.carousel.inner.container(
						[0, 1, 2, 3, 4, 5, 6].map((i, ix) => {
							return new b.carousel.inner.item.container({ active: ix === 0 ? true : undefined }, [
								new b.carousel.inner.item.img({ src: `https://picsum.photos/seed/bsts_${i}/710/400` }),
								new b.carousel.inner.item.caption([
									new h.h(5, `Slide #${ix + 1}`),
									new h.p(`Some representative placeholder content for the slide #${ix + 1}.`),
								]),
							]);
						})
					),
					new b.carousel.inner.control.prev({ target: "#carouselExample" }),
					new b.carousel.inner.control.next({ target: "#carouselExample" }),
				]);
			},
		}),

		new e.text(
			"Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit."
		),
		new e.text(
			"{{b::You must add the}} {{.active}} {{b::class to one of the slides}}, otherwise the carousel will not be visible. Also be sure to set a unique {{id}} on the {{.carousel}} for optional controls, especially if you’re using multiple carousels on a single page. Control and indicator elements must have a {{data-bs-target}} attribute (or {{href}} for links) that matches the {{id}} of the {{.carousel}} element."
		),

		//-----------------------

		new e.subtitle("Using item"),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.carousel.container({
					itemControl: true,
					itemIndicator: true,
					item: [0, 1, 2, 3, 4, 5, 6].map((i) => {
						return {
							src: `https://picsum.photos/seed/bsts_${i}/710/400`,
							caption: [
								new h.h(5, `Slide #${i + 1}`),
								new h.p(`Some representative placeholder content for the slide #${i + 1}.`),
							],
						};
					}),
				});
			},
		}),

		//-----------------------

		new e.subtitle("Indicators"),
		new e.text(
			"You can add indicators to the carousel, alongside the previous/next controls. The indicators let users jump directly to a particular slide."
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.carousel.container({
					itemControl: true,
					itemIndicator: true,
					item: [0, 1, 2, 3, 4, 5, 6].map((i) => {
						return {
							src: `https://picsum.photos/seed/bsts_${i}/710/400`,
						};
					}),
				});
			},
		}),

		//-----------------------

		new e.subtitle("Captions"),
		new e.text(
			"You can add captions to your slides with the {{.carousel-caption}} element within any {{.carousel-item}}. They can be easily hidden on smaller viewports, as shown below, with optional {{https://getbootstrap.com/docs/5.3/utilities/display/::display utilities}}. We hide them initially with {{.d-none}} and bring them back on medium-sized devices with {{.d-md-block}}."
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.carousel.container({
					itemControl: true,
					itemIndicator: true,
					item: [0, 1, 2, 3, 4, 5, 6].map((i) => {
						return {
							src: `https://picsum.photos/seed/bsts_${i}/710/400`,
							caption: [
								new h.h(5, `Slide #${i + 1}`),
								new h.p(`Some representative placeholder content for the slide #${i + 1}.`),
							],
						};
					}),
				});
			},
		}),

		//-----------------------

		new e.subtitle("Crossfade"),
		new e.text(
			"Add {{.carousel-fade}} to your carousel to animate slides with a fade transition instead of a slide. Depending on your carousel content (e.g., text only slides), you may want to add {{.bg-body}} or some custom CSS to the {{.carousel-items}} for proper crossfading."
		),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.carousel.container({
					fade: true,
					itemControl: true,
					item: [0, 1, 2, 3, 4, 5, 6].map((i) => {
						return {
							src: `https://picsum.photos/seed/bsts_${i}/710/400`,
						};
					}),
				});
			},
		}),

		//-----------------------

		new e.subtitle("Positioned"),
		new e.text("Use utilities to modify a {{.badge}} and position it in the corner of a link or button."),
		new e.code({
			previewTemplate: "row",
			output: () => {
				return new b.button({ position: "relative" }, [
					"Inbox ",
					new b.badge(
						{
							bgColor: "danger",
							position: "absolute",
							top: 0,
							start: 100,
							tMiddle: true,
							rounded: "pill",
						},
						["99+", new b.visuallyhidden("unread messages")]
					),
				]);
			},
		}),
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
		new e.item(
			new b.alert.container({ color: "info", callout: true }, [
				new h.h(5, "Conveying meaning to assistive technologies"),
				new h.p(
					"Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the {{.visually-hidden}} class."
				),
			])
		),

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
