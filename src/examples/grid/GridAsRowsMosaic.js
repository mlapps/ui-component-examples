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

export default class GridAsRowsMosiac extends Page {
    static _template() {
        return {
            ...super._template(),
            Content: {
                Grid: {x: 90, y: 200, w: 1740, h: 850, spacing: 30, direction: 'row', itemType: ImageCell, type: Grid},
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

    static get icon() {
        return 'images/grid.png';
    }
}