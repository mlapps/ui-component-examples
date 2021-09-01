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

import {ImageCell} from '../itemComponents';
import { Grid } from '@lightningjs/ui';
import Page from '../../app/Page.js';

export default class GridAsColumnsMosiac extends Page {
    static _template() {
        return {
            ...super._template(),
            Content: {
                Grid: {x: 90, y: 200, w: 730, h: 780, spacing: 20, direction: 'column', itemType: ImageCell, type: Grid},
            }
        }
    }

    _setup() {
        this.tag('Grid').add([
            {type: ImageCell, h: 300, w: 730, number: 1},
            {type: ImageCell, marginRight: 30, h: 295, w: 350, number: 2},
            {type: ImageCell, h: 295, w: 350, number: 3},
            {type: ImageCell, h: 193, w: 230, number: 4},
            {type: ImageCell, h: 193, w: 230, number: 5},
            {type: ImageCell, h: 193, w: 230, number: 6},
            {type: ImageCell, h: 300, w: 730, number: 7},
            {type: ImageCell, marginRight: 30, h: 295, w: 350, number: 8},
            {type: ImageCell, h: 295, w: 350, number: 9},
            {type: ImageCell, h: 193, w: 230, number: 10},
            {type: ImageCell, h: 193, w: 230, number: 11},
            {type: ImageCell, h: 193, w: 230, number: 12},
            {type: ImageCell, h: 300, w: 730, number: 13},
            {type: ImageCell, marginRight: 30, h: 295, w: 350, number: 14},
            {type: ImageCell, h: 295, w: 350, number: 15},
            {type: ImageCell, h: 193, w: 230, number: 16},
            {type: ImageCell, h: 193, w: 230, number: 17},
            {type: ImageCell, h: 193, w: 230, number: 18}
        ]);
    }

    _getFocused() {
        return this.tag('Grid');
    }

    static get header() {
        return 'Grid displayed as pseudo Mosiac in a Column direction';
    }

    static get icon() {
        return 'images/grid.png';
    }
}