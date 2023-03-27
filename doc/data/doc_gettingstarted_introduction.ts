import { b, h } from "@printf83/bsts/lib/index";
import { example as e } from "../ctl/example/_index.js";
import { IAttrContent } from "../ctl/main/container.js";

export const doc_gettingstarted_introduction: IAttrContent = {
	title: "Get started with Bootstrap",
	description:
		"Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.",
	item: [
		new e.title("Quick start"),
		new e.text(
			"Get started by including Bootstrap’s production-ready CSS and JavaScript via CDN without the need for any build steps. See it in practice with this {{https://codepen.io/team/bootstrap/pen/qBamdLj::Bootstrap CodePen demo}}."
		),
		new e.item(
			new h.ol({ paddingStart: [0, "md-4"] }, [
				new h.li([
					'{{b::Create a new}} {{index.html}} file in your project root. Include the {{<meta name="viewport">}} tag as well for {{https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag::proper responsive behavior}} in mobile devices.',
					new e.codepreview({
						type: "html",
						code: `
							<!doctype html>
							<html lang="en">
							<head>
								<meta charset="utf-8">
								<meta name="viewport" content="width=device-width, initial-scale=1">
								<title>Bootstrap demo</title>
							</head>
							<body>
								<h1>Hello, world!</h1>
							</body>
							</html>
							`,
					}),
				]),
				new h.li([
					"{{b::Include Bootstrap’s CSS and JS}}. Place the {{<link>}} tag in the {{<head>}} for our CSS, and the {{<script>}} tag for our JavaScript bundle (including Popper for positioning dropdowns, poppers, and tooltips) before the closing {{</body>}}. Learn more about our {{https://getbootstrap.com/docs/5.3/getting-started/introduction/#cdn-links::CDN links}}.",
					new e.codepreview({
						type: "html",
						code: `
							<!doctype html>
							<html lang="en">
							<head>
								<meta charset="utf-8">
								<meta name="viewport" content="width=device-width, initial-scale=1">
								<title>Bootstrap demo</title>
								<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
							</head>
							<body>
								<h1>Hello, world!</h1>
								<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
							</body>
							</html>

							`,
					}),
					"You can also include {{https://popper.js.org/::Popper}} and our JS separately. If you don’t plan to use dropdowns, popovers, or tooltips, save some kilobytes by not including Popper.",
					new e.codepreview({
						type: "html",
						code: `
							<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
							<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
							`,
					}),
				]),
				new h.li([
					"{{b::Hello, world!}} Open the page in your browser of choice to see your Bootstrapped page. Now you can start building with Bootstrap by creating your own {{?q=doc_layout_grid::layout}}, adding dozens of {{?q=doc_component_button::components}}, and utilizing {{https://getbootstrap.com/docs/5.3/examples/::our official examples}}.",
				]),
			])
		),
		new e.title("CDN links"),
		new e.text("As reference, here are our primary CDN links."),
		new e.item([
			new b.table.container({
				class: "small",
				small: true,
				item: [
					["Description", "URLs"],
					["CSS", "{{https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css}}"],
					["JS", "{{https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js}}"],
				],
			}),
		]),
		new e.text(
			"You can also use the CDN to fetch any of our {{?q=doc_gettingstarted_content::additional builds listed in the Contents page}}."
		),
	],
};
