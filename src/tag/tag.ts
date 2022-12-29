"use strict";

import {tagOption} from "./tag.interface";

export class tag{
    private d: tagOption;
    constructor(opt: tagOption) {
        this.d = opt;
    }

    get data() {
        return this.d;
    }
    set data(opt: tagOption) {
        this.d = opt;
    }
}