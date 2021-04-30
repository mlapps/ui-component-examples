import { Carousel } from "@lightningjs/ui";
import {ImageCell} from '../itemComponents';
import Page from "../../app/Page.js";

export default class CarouselAsColumn extends Page {
    static _template() {
        return {
            ...super._template(),
            Content: {
                Carousel: {x: 90, y: 220, w: 400, h: 780, type: Carousel, direction: 'column'}
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
        return 'Carousel displayed as Column';
    }
}