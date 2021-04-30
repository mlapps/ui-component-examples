import Page from "../../app/Page.js";
import { List } from "@lightningjs/ui";
import { ImageCell } from '../itemComponents';

export default class ListAsRowWithScroll extends Page {
    static _template() {
        return {
            ...super._template(),
            Content: {
                List: {x: 90, y: 220, w: 1740, type: List, direction: 'row'},
            }
        }
    }

    _setup() {
        const items = [];
        for(let i = 0; i < 14; i++) {
            items.push({margin: 15, type: ImageCell, number: i + 1});
        }
        this.tag('List').add(items);
    }

    _getFocused() {
        return this.tag('List');
    }

    static get header() {
        return 'List displayed as Row with Scroll';
    }
}