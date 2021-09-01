/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2021 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Page from "../../app/Page.js";
import { List } from "@lightningjs/ui";
import { Item, ImageCell } from '../itemComponents';

export default class ListCombo extends Page {
    static _template() {
        return {
            ...super._template(),
            Content: {
                ColumnList: {type: List, x: 90, h: 800, y: 195, direction: 'column'},
                RowList: {x: 350, y: 200, w: 1740, type: List, direction: 'row'},
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
        this.setSmooth('alpha', 1);
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

    static get icon() {
        return 'images/list.png';
    }
}