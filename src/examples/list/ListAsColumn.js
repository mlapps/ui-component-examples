import Page from "../../app/Page.js";
import { Item } from '../itemComponents';
import { List } from '@lightningjs/ui'; 

export default class ListAsColumn extends Page {
    static _template() {
        return {
            ...super._template(),
            Content: {
                List: {
                    x: 90, y: 220,
                    h: 800,
                    direction: 'column',
                    type: List,
                    itemType: Item,
                    items: [
                        {
                            label: 'Search'
                        },
                        'Home',
                        20,
                        'Pictures',
                        'Settings'
                    ]
                }
            }
        }
    }

    _getFocused() {
        return this.tag('List');
    }

    static get header() {
        return 'List displayed as Column';
    }
}