import {ImageCell} from '../itemComponents';
import { Grid } from '@lightningjs/ui';
import Page from '../../app/Page.js';

export default class GridAsRowsMosiac extends Page {
    static _template() {
        return {
            ...super._template(),
            Content: {
                Grid: {x: 90, y: 220, w: 1740, h: 850, spacing: 30, direction: 'row', itemType: ImageCell, type: Grid},
            }
        }
    }

    _setup() {
        this.tag('Grid').add([
            {type: ImageCell, h: 730, w: 700, number: 1},
            {type: ImageCell, h: 350, w: 500, number: 2},
            {type: ImageCell, h: 350, w: 500, number: 3},
            {type: ImageCell, h: 223, w: 300, number: 4},
            {type: ImageCell, h: 223, w: 300, number: 5},
            {type: ImageCell, h: 222, w: 300, number: 6},
            {type: ImageCell, h: 730, w: 700, number: 7},
            {type: ImageCell, h: 350, w: 500, number: 8},
            {type: ImageCell, h: 350, w: 500, number: 9},
            {type: ImageCell, h: 223, w: 300, number: 10},
            {type: ImageCell, h: 223, w: 300, number: 11},
            {type: ImageCell, h: 223, w: 300, number: 12},
        ]);
    }

    _getFocused() {
        return this.tag('Grid');
    }

    static get header() {
        return 'Grid displayed as pseudo Mosiac in a Row direction';
    }
}