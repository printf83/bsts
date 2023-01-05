import { bs } from "./attachBootstrap.js";

export interface baseAttr{
    id?: string,
    name?: string,
    class?: string | string[],
    
    //bootstrap [start]
    userSelect?: bs.userSelect[number],
    pointerEvent?: bs.pointerEvent[number],
    position?: bs.position[number],
    overflow?: bs.overflow[number],

    textAlign?: bs.textAlign[number],
    verticalAlign?: bs.verticalAlign[number],

    opacity?: bs.opacity[number],
    bgOpacity?: bs.bgOpacity[number],
    textOpacity?: bs.textOpacity[number],

    btnColor?: bs.btnColor[number],
    btnOutlineColor?: bs.btnOutlineColor[number],
    alertColor?: bs.alertColor[number],

    textBgColor?: bs.textBgColor[number],
    textColor?: bs.textColor[number],
    linkColor?: bs.linkColor[number],
    bgColor?: bs.bgColor[number],

    textTransform?: bs.textTransform[number],
    textDecoration?: bs.textDecoration[number],
    lineHeight?: bs.lineHeight[number],

    fontSize?: bs.fontSize[number],
    fontWeight?: bs.fontWeight[number],

    top?: bs.top[number],
    bottom?: bs.bottom[number],
    start?: bs.start[number],
    end?: bs.end[number],
    tMiddle?: bs.tMiddle[number],

    height?: bs.height[number],
    width?: bs.width[number],
    maxHeight?: bs.maxHeight[number],
    maxWidth?: bs.maxWidth[number],
    minViewHeight?: bs.minViewHeight[number],
    minViewWidth?: bs.minViewWidth[number],
    viewHeight?: bs.viewHeight[number],
    viewWidth?: bs.viewWidth[number],

    placeholder?: bs.placeholder[number],
    placeholderAnimation?: bs.placeholderAnimation[number],
    placeholderWeight?: bs.placeholderWeight[number],

    shadow?: bs.shadow[number],

    border?: bs.border[number],
    borderNone?: bs.borderNone[number],
    borderColor?: bs.borderColor[number],
    borderOpacity?: bs.borderOpacity[number],
    borderWidth?: bs.borderWidth[number],

    rounded?: bs.rounded[number],
    roundedNone?: bs.roundedNone[number],
    roundedSize?: bs.roundedSize[number],

    padding?: bs.padding[number],
    paddingX?: bs.paddingX[number],
    paddingY?: bs.paddingY[number],
    paddingTop?: bs.paddingTop[number],
    paddingBottom?: bs.paddingBottom[number],
    paddingStart?: bs.paddingStart[number],
    paddingEnd?: bs.paddingEnd[number],

    margin?: bs.margin[number],
    marginX?: bs.marginX[number],
    marginY?: bs.marginY[number],
    marginTop?: bs.marginTop[number],
    marginBottom?: bs.marginBottom[number],
    marginStart?: bs.marginStart[number],
    marginEnd?: bs.marginEnd[number],

    gap?: bs.gap[number],
    gutter?: bs.gutter[number],
    gutterX?: bs.gutterX[number],
    gutterY?: bs.gutterY[number],

    display?: bs.display[number],
    print?: bs.print[number],
    container?: bs.container[number],

    flex?: bs.flex[number],
    float?: bs.float[number],
    order?: bs.order[number],
    offset?: bs.offset[number],

    alignContent?: bs.alignContent[number],
    justifyContent?: bs.justifyContent[number],
    alignItem?: bs.alignItem[number],
    alignSelf?: bs.alignSelf[number],

    visible?: bs.visible[number],
    textWrap?: bs.textWrap[number],
    fontItalic?: bs.fontItalic[number],
    bgGradient?: bs.bgGradient[number],
    wordBreak?: bs.wordBreak[number],
    monospace?: bs.monospace[number],
    row?: bs.row[number],
    col?: bs.col[number],
    rowCol?: bs.rowCol[number],
    //bootstrap [end]

    

    [key: string]: string | number | boolean | Function | (string | number | boolean)[]| undefined,
}

export interface baseTag{
    tag: string,
    elem?: string | tag | (string | tag)[],
    attr?: baseAttr,
}

export class tag implements baseTag{
    constructor(
        public tag: string,
        public elem?: string | tag | (string | tag)[],
        public attr?: baseAttr) {
    }
}

export const isTag = (obj: any): boolean => {
    return typeof obj === "object" && "tag" in obj;
}

export type attachFn = (key: string, elem: HTMLElement, attr: baseAttr) => {
    elem: HTMLElement,
    attr: baseAttr,
};


