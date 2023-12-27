/**
 * Generates CSS classes for rotating and flipping elements.
 *
 * Creates CSS classes for rotating elements by 45 degree increments.
 * Also creates classes for flipping elements horizontally, vertically, or both.
 * Combines the rotate and flip classes to support rotating and flipping together.
 *
 * The generated CSS is returned as a string to be used in style sheets.
 */
export const transform = () => {
	const rotate = [45, 90, 135, 180, 225, 270, 315]
		.map((i) => {
			return `
            .rotate-${i} {
                transform: rotate(${i}deg);
            }`;
		})
		.join("\n");

	const flip = [
		{ name: "horizontal", value: "scaleX(-1)" },
		{ name: "vertical", value: "scaleY(-1)" },
		{ name: "both", value: "scale(-1)" },
	]
		.map((i) => {
			return `
            .flip-${i.name} {
                transform: ${i.value};
            }`;
		})
		.join("\n");

	const rotateFlip = [
		{ name: "horizontal", value: "scaleX(-1)" },
		{ name: "vertical", value: "scaleY(-1)" },
		{ name: "both", value: "scale(-1)" },
	]
		.map((i) => {
			return [45, 90, 135, 180, 225, 270, 315]
				.map((j) => {
					return `
					.rotate-${j}.flip-${i.name} {
						transform: rotate(${j}deg) ${i.value};
					}`;
				})
				.join("\n");
		})
		.join("\n");

	return `
    /* 
    src/core/css/transform.ts 
    ------------------------- */
    ${rotate}
    ${flip}
	${rotateFlip}
    `;
};
