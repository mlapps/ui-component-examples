import {ImageCell} from '../itemComponents';
import { Grid } from '@lightningjs/ui';
import Page from '../../app/Page.js';

export default class GridAsColumnsWithScroll extends Page {
    static _template() {
        return {
            ...super._template(),
            Content: {
                Grid: {x: 90, y: 220, w: 1740, h: 780, columns: 3, spacing: 30, itemType: ImageCell, type: Grid},
            }
        }
    }

    _setup() {
        this.tag('Grid').add([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((number) => {
            return {h: 225, w: 300, number}
        }));
    }

    _getFocused() {
        return this.tag('Grid');
    }

    static get header() {
        return 'Grid displayed by Columns with Scroll';
    }
}