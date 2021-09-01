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

import { Carousel } from "@lightningjs/ui";
import {ImageCell} from '../itemComponents';
import Page from "../../app/Page.js";
import { Router } from "@lightningjs/sdk";

export default class CarouselAsColumn extends Page {
    static _template() {
        return {
            ...super._template(),
            Content: {
                Carousel: {x: 90, y: 200, w: 400, h: 780, type: Carousel, direction: 'column'}
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

    _handleRight() {
        Router.focusWidget('Menu');
    }

    static get header() {
        return 'Carousel displayed as Column';
    }
    
    static get icon() {
        return 'images/list.png';
    }
}