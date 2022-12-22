export const isdarkcolor =(color: string):boolean => {
    if (!color)    {
        return false;
    }
        
	// Variables for red, green, blue values
    let r:number, g:number, b:number;

    // Check the format of the color, HEX or RGB?
    if (color.match(/^rgb/)) {
        // If RGB --> store the red, green, blue values in separate variables
        let regColor = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

        r = Number(regColor[1]);
        g = Number(regColor[2]);
        b = Number(regColor[3]);
    } else {
        let numColor = +("0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&"));

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