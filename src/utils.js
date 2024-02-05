
export function columns(content, styles) {
    return `<div class="columns" style="${styles}">${content}</div>`
}


export function column(content) {
    return `
    <div class="column">${content}</div>
    `
}

export function title(content, styles) {
    return `
    <div class="title" style="${styles}">${content}</div>
    `
}

export function text(content, styles) {
    return `
    <div class="text" style="${styles}">${content}</div>
    `
}

export function toCss(model) {
    let style = '';
    const { options } = model;
    if (options && options.styles) {
        for (let key in options.styles) {
            style += `${key}: ${options.styles[key]};`;
        }
        return style;
    } else return ``
}

export function image(src, styles) {
    return `
        <img src="${src}" style="${styles}">
    `
}
