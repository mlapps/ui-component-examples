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

import { Lightning, Colors, Router } from "@lightningjs/sdk";

export default class Page extends Lightning.Component {
    static _template() {
        return {
            Content: {},
            FadeTop: {w: 1920, h: 230, rect: true, colorTop: Colors('white').alpha(0.7).get(), colorBottom: 0x00000000},
            Header: {x: 90, y: 100, color: Colors('white').get(), text: {text: this.header, fontFace: 'Londrina', fontSize: 50}}
        }
    }

    _active() {
        this.patch({
            FadeTop: {colorTop  : Colors(this.fireAncestors('$getThemeColor')).alpha(0.7).get()}
        })
    }

    _focus() {
        this.setSmooth('alpha', 1);
    }

    _unfocus() {
        this.setSmooth('alpha', 0);
    }

    _handleDown() {
        Router.focusWidget('Menu');
    }

    static get header() {
        return 'Page';
    }

    static get icon() {
        return 'images/splash.png';
    }
}