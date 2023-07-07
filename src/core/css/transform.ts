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

	return `
    /* 
    src/core/css/transform.ts 
    ------------------------- */
    ${rotate}
    ${flip}
    `;
};
