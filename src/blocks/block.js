
import { title, toCss, text, columns, column, image } from "../utils";
import { images } from "../model";
import { model } from "../model";

class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
        this.type = 'title';
    }

    toHTML() {
        const tag = (this.options && this.options.tag) || 'h1';
        return `${title(`<${tag}>${this.value}</${tag}>`, toCss(this))}`;
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
        this.type = 'text';
    }

    toHTML() {
        return text(this.value, toCss(this))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
        this.type = 'columns';
    }

    toHTML() {
        let columnHTML = '';
        for (let i = 0; i < this.value.length; i++) {
            columnHTML += column(this.value[i]);
        }
        return columns(columnHTML, toCss(this))
    }
}

export class ImageBlock extends Block {
    constructor() {
        super();
        this.type = 'image';
        this.value = images.imageUrl;
    }

    toHTML() {
        console.log(this);
        return image(this.value, toCss(this));
    }
}
