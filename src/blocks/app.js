
import { getRandomImage } from "../image";
import { images } from "../model";
import {ImageBlock, ColumnsBlock, TextBlock, TitleBlock } from "./block";
const $site = document.querySelector('.site');
const $panel = document.querySelector('.panel');
const $titleForm = document.querySelector('#title-form');
const $textForm = document.querySelector('#text-form');
const $columnsForm = document.querySelector('#columns-form');
const $imageForm = document.querySelector('#image-form');
const $deleteForm = document.querySelector('#delete-form')

export class App {
    constructor(model) {
        this.model = model;
    }

    init() {
        $site.innerHTML = '';
        this.model.forEach(item => {
            if(item.type === 'title') {
                let newMas = [];
                newMas.push(item);
                this.model = newMas;
                this.render($site);
            }
        })
        $titleForm.addEventListener('submit', (e) => this.addTitle(e));
        $textForm.addEventListener('submit', (e) => this.addText(e));
        $columnsForm.addEventListener('submit', (e) => this.addColumns(e))
        $imageForm.addEventListener('submit', (e) => this.addImage(e))
        $deleteForm.addEventListener('submit', (e) => this.deleteSite(e))
    }

    render(site) {
        this.model.forEach(block => {
            site.insertAdjacentHTML('beforeend', block.toHTML());
        })
        this.model = [];

    }

    addText(e) {
        e.preventDefault();
        const $text = document.querySelector('#text-input');
        this.model.push(new TextBlock($text.value))
        this.render($site);
        }

    addTitle(e) {
        e.preventDefault();
        const $title = document.querySelector('#title-input');
        this.model.push(new TitleBlock($title.value))
        this.render($site);
    }

    // addColumns(e) {
    //     e.preventDefault();
    //     const $columns = document.querySelector('#columns-input');
    //     console.log($columns.value)
    //     this.model.push(new ColumnsBlock($columns.value))
    //     this.render($site);
    // }

    async addImage(e) {
        e.preventDefault();
        await getRandomImage();
        console.log(this.model);
        this.model.push(new ImageBlock())
        this.render($site);
    }

    deleteSite(e) {
        e.preventDefault();
        $site.innerHTML = '';
    }
}