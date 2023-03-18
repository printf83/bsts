import { b, core, h } from "../lib/index.js";

core.documentReady(() => {
	let body = document.getElementById("main") as HTMLElement;
	core.replaceChild(body, [
		new b.navbar.container({ expand: "lg", sticky: "top" }, [
			new h.nav({ container: "xxl", flex: ["wrap", "lg-nowrap"], aria: { label: "Main navigation" } }, [
				new b.navbar.toggle.offcanvas({
					target: "#bsSidebar",
					control: "bsSidebar",
					aria: { label: "Toggle docs navigation" },
				}),
				new b.navbar.brand(),
			]),
		]),
	]);
});
