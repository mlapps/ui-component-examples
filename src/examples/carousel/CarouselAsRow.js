import { Carousel } from "@lightningjs/ui";
import {ImageCell} from '../itemComponents';
import Page from "../../app/Page.js";

export default class CarouselAsRow extends Page {
    static _template() {
        return {
            ...super._template(),
            Content: {
                Carousel: {y: 220, w: 1920, h: 400, type: Carousel, direction: 'row'}
            }
        }
    }

    _setup() {
        const items = [];
        for(let i = 0; i < 8; i++) {
            items.push({margin: 15, type: ImageCell, number: i + 1});
        }
        this.tag('Carousel').add(items);
    }

    _getFocused() {
        return this.tag('Carousel');
    }

    static get header() {
        return 'Carousel displayed as Row';
    }
}