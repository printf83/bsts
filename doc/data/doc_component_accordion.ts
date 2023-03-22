import { IAttrBSButton } from "../../src/bootstrap/button.js";
import { example } from "../ctl/example/_index.js";
import { b } from "../../src/index.js";
import { IAttrContent } from "../ctl/main/container.js";

export const doc_component_accordion: IAttrContent = {
	title: "Accordion",
	description: "Hello world",
	item: [
		new example.title("Quick start "),
		new example.text(
			"Get started by including Bootstrap’s production-ready CSS and JavaScript via CDN {{without}} the {{need for any}} build steps. See it in practice with this Bootstrap {{http://www.codepane.com::CodePen}} demo."
		),
		new example.code({
			output: () => {
				//make first letter uppercase
				let caps = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
				return ["primary", "secondary", "success", "danger", "info", "warning", "light", "dark", "link"].map(
					(i) => new b.button({ color: i as IAttrBSButton["color"] }, caps(i))
				);
			},
		}),
		new example.title("Quick start 2"),
		new example.text(
			"Get started by including Bootstrap’s production-ready CSS and JavaScript via CDN {{without}} the {{need for any}} build steps. See it in practice with this Bootstrap {{http://www.codepane.com::CodePen}} demo."
		),
		new example.codepreview({
			type: "ts",
			code: `
							() => {
								//sample
								return [
									"primary",
									"secondary",
									"success",
									"danger",
									"info",
									"warning",
									"light",
									"dark",
									"link",
								].map((i) => new b.button({ color: i as IAttrBSButton["color"] }, i));
							}`,
		}),
		new example.codepreview({
			type: "js",
			code: `
							() => {
								//sample
								return 2+2;
							}`,
		}),
		new example.codepreview({
			type: "css",
			code: `
							.button {
								color:#fefefe;
							}
							`,
		}),
		new example.codepreview({
			type: "html",
			code: `
							<div>test</div>
							`,
		}),
	],
};
