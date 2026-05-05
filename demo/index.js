import { core, b, h, t, c } from "@printf83/bsts";
import { title, container } from "./container.js";
import { navbar } from "./component/navbar.js";
import {
	button,
	buttonDisabled,
	buttonOutline,
	buttonIcon,
	buttonSizing,
	buttonBlock,
	buttonGroup,
	buttonCheckbox,
	buttonRadio,
	buttonToolbar,
	buttonVertical,
	buttonDropdown,
	buttonSplit,
} from "./component/button.js";
import { typography, typographySecondary, leadParagraph, bodyText, textColor } from "./component/typography.js";
import { blockquote, blockquoteCenter, blockquoteEnd } from "./component/blockquote.js";
import { table } from "./component/table.js";
import {
	form,
	select,
	textarea,
	fileInput,
	formRadio,
	formCheckbox,
	formSwitch,
	formRange,
	formButton,
	formDisabled,
	formValidation,
	formWeight,
	formInputAddon,
	formFloatingLabel,
} from "./component/form.js";
import { navTabs, navPills, breadcrumb, pagination } from "./component/nav.js";
import { alert, callout, badge, badgePill } from "./component/indicators.js";
import { progress, progressColor, progressMultibar, progressStriped, progressAnimated } from "./component/progress.js";
import { list, listWithBadges, listColor, listActive, listCustom } from "./component/list.js";
import { card, cardOutline, cardExample1, cardExample2, accordion } from "./component/card.js";
import { modal, offcanvas, popover, tooltip, toast } from "./component/dialog.js";
import { calendar } from "./component/others.js";

import { test } from "./component/test.js";

const main = [
	new h.div({ container: true, display: "flex", flex: "column" }, [
		new b.alert.container(
			{ callout: true, color: "primary" },
			`BSTS Demo. For more details, go to {{https://printf83.github.io/bsts-test::bsts-test}}. This demo source code is available on {{https://github.com/printf83/bsts/blob/main/demo/index.js::Github}}.`
		),

		title("Test"),
		container({ elem: test() }),

		title("Navbars"),
		container({ elem: navbar() }),
		title("Buttons"),
		container({ direction: "row", elem: button(), showConsole: true }),
		container({ direction: "row", title: "Disabled", elem: buttonDisabled(), showConsole: true }),
		container({ direction: "row", title: "Outline", elem: buttonOutline(), showConsole: true }),
		container({ direction: "row", title: "Icon", elem: buttonIcon(), showConsole: true }),
		container({ direction: "row", title: "Sizing", elem: buttonSizing(), showConsole: true }),
		container({ title: "Block", elem: buttonBlock(), showConsole: true }),
		container({ direction: "row", title: "Button group", elem: buttonGroup(), showConsole: true }),
		container({ direction: "row", title: "Checkbox", elem: buttonCheckbox(), showConsole: true }),
		container({ direction: "row", title: "Radio", elem: buttonRadio(), showConsole: true }),
		container({ direction: "row", title: "Toolbar", elem: buttonToolbar(), showConsole: true }),
		container({ direction: "row", title: "Vertical", elem: buttonVertical(), showConsole: true }),
		container({ direction: "row", title: "Dropdown", elem: buttonDropdown(), showConsole: true }),
		container({ direction: "row", title: "Split", elem: buttonSplit(), showConsole: true }),
		title("Typography"),
		container({ elem: typography() }),
		container({
			direction: "column",
			title: "With secondary text",
			elem: typographySecondary(),
			showConsole: true,
		}),
		container({ title: "Lead paragraph", elem: leadParagraph() }),
		container({ title: "Body text", elem: bodyText() }),
		container({ title: "Text color", elem: textColor() }),
		title("Blockquote"),
		container({ elem: blockquote() }),
		container({ elem: blockquoteCenter() }),
		container({ elem: blockquoteEnd() }),
		title("Table"),
		container({ elem: table() }),
		title("Form"),
		container({ elem: form() }),
		container({ title: "Select", elem: select() }),
		container({ title: "Textarea", elem: textarea() }),
		container({ title: "File input", elem: fileInput() }),
		container({ title: "Radio", elem: formRadio() }),
		container({ title: "Checkbox", elem: formCheckbox() }),
		container({ title: "Switch", elem: formSwitch() }),
		container({ title: "Range", elem: formRange() }),
		container({ direction: "row", title: "Button", elem: formButton() }),
		container({ title: "Disabled", elem: formDisabled() }),
		container({ title: "Validation", elem: formValidation() }),
		container({ title: "Weight", elem: formWeight() }),
		container({ title: "Input addon", elem: formInputAddon() }),
		container({ title: "Floating label", elem: formFloatingLabel() }),
		title("Nav"),
		container({ title: "Tabs", elem: navTabs() }),
		container({ title: "Pills", elem: navPills() }),
		container({ title: "Breadcrumb", elem: breadcrumb() }),
		container({ title: "Pagination", elem: pagination() }),
		title("Indicators"),
		container({ title: "Alert", elem: alert() }),
		container({ title: "Callout", elem: callout() }),
		container({ direction: "row", title: "Badge", elem: badge() }),
		container({ direction: "row", title: "Badge pill", elem: badgePill() }),
		title("Progress"),
		container({ title: "Basic", elem: progress() }),
		container({ title: "Color", elem: progressColor() }),
		container({ title: "Multibar", elem: progressMultibar() }),
		container({ title: "Striped", elem: progressStriped() }),
		container({ title: "Animated", elem: progressAnimated() }),
		title("List groups"),
		container({ elem: list() }),
		container({ title: "With badge", elem: listWithBadges() }),
		container({ title: "Color", elem: listColor() }),
		container({ title: "Active action", elem: listActive() }),
		container({ title: "Custom content", elem: listCustom() }),
		title("Containers"),
		container({ title: "Card", elem: card() }),
		container({ title: "Card outline", elem: cardOutline() }),
		container({ title: "Kitchen sink", elem: cardExample1() }),
		container({ elem: cardExample2() }),
		title("Accordion"),
		container({ elem: accordion() }),
		title("Dialog"),
		container({ direction: "row", title: "Modal", elem: modal(), backgroundColor: "#efefef" }),
		container({ direction: "row", title: "Offcanvas", elem: offcanvas() }),
		container({ direction: "row", title: "Popover", elem: popover() }),
		container({ direction: "row", title: "Tooltip", elem: tooltip() }),
		container({ direction: "row", title: "Toast", elem: toast(), backgroundColor: "#efefef" }),

		title("Others"),
		container({ title: "Calendar", elem: calendar(), showConsole: true }),
	]),
];

core.documentReady(() => {
	const body = document.getElementById("main");
	if (!body) return;

	core.replaceChild(body, main);
});
