import Page from "../../app/Page.js";
import { Item } from '../itemComponents';
import { List } from '@lightningjs/ui';

export default class ListAsColumnWithScroll extends Page {
    static _template() {
        return {
            ...super._template(),
            Content: {
                List: {type: List, direction: 'column', x: 90, y: 220, w: 300, h: 800},
            }
        }
    }

    _setup() {
        const abc = 'abcdefghijklmnopqrstuvwxyz';
        const items = [];

        for(let i = 0; i < abc.length; i++) {
            items.push({type: Item, item: {label: abc.charAt(i).toUpperCase()}})
        }

        this.tag('List').add(items);
    }

    _getFocused() {
        return this.tag('List');
    }

    static get header() {
        return 'List displayed as Column with Scroll';
    }
}