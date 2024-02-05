import { TitleBlock, TextBlock, ColumnsBlock, ImageBlock } from "./blocks/block";
export const images = {
    imageUrl: ''
}

export const model = [
    new TitleBlock('Конструктор сайта на чистом JS', {
        tag: 'h1',
        styles: {
        }
    }),
    new ColumnsBlock([
        '111', '222', '333','444'
    ],{
        styles: {

        }
    }),
    new TextBlock('', {
        styles: {

        }
    }),
    new ImageBlock()
]

