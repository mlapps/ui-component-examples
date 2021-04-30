import Page from "../../app/Page.js";
import { List } from "@lightningjs/ui";
import { Item, ImageCell } from '../itemComponents';

export default class ListCombo extends Page {
    static _template() {
        return {
            ...super._template(),
            Content: {
                ColumnList: {type: List, x: 90, h: 800, y: 220, direction: 'column'},
                RowList: {x: 350, y: 220, w: 1740, type: List, direction: 'row'},
            }
        }
    }

    _setup() {
        this.tag('ColumnList').add([
            {type: Item, item: {label: 'Search'}},
            {type: Item, item: {label: 'Home'}},
            {type: Item, item: {label: 'Movies'}},
            {type: Item, item: {label: 'Pictures'}},
            {type: Item, item: {label: 'Settings'}}
        ]);

        const rowItems = [];
        for(let i = 0; i < 3; i++) {
            rowItems.push({margin: 15, type: ImageCell, number: i + 1});
        }
        this.tag('RowList').add(rowItems);
    }

    _focus() {
        this._setState('ColumnList');
    }

    static _states() {
        return [
            class ColumnList extends this {
                _getFocused() {
                    return this.tag('ColumnList');
                }

                _handleRight() {
                    this._setState('RowList');
                }
            },
            class RowList extends this {
                _getFocused() {
                    return this.tag('RowList');
                }

                _handleLeft() {
                    this._setState('ColumnList');
                }
            }
        ]
    }

    static get header() {
        return 'Two types of List(s) on one Page';
    }
}