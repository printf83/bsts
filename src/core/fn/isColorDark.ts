export const isColorDark = (color: string): boolean => {
	if (!color) {
		return false;
	}

	// Variables for red, green, blue values
	let r: number, g: number, b: number;

	// Check the format of the color, HEX or RGB?
	if (color.match(/^rgb/)) {
		// If RGB --> store the red, green, blue values in separate variables
		let regColor = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
		if (regColor) {
			r = Number(regColor[1]);
			g = Number(regColor[2]);
			b = Number(regColor[3]);
		} else {
			r = Number(0);
			g = Number(0);
			b = Number(0);
		}
	} else {
		// let numColor = +("0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&"));
		let numColor = color.length < 5 ? +("0x" + color.slice(1).replace(/./g, "$&$&")) : +color;

		r = numColor >> 16;
		g = (numColor >> 8) & 255;
		b = numColor & 255;
	}

	// from : https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black
	let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

	if (luma < 48) {
		return true;
	} else {
		return false;
	}
};
