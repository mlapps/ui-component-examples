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

import {Lightning, Colors} from '@lightningjs/sdk';

export default class Item extends Lightning.Component {
    static _template() {
        return {
            w: w => w, h: 70,
            Background: {w: w => w, h: h=> h, rect: true, color: Colors('white').get(), shader: {type: Lightning.shaders.RoundedRectangle, radius: 8}},
            Label: {x: w => w / 2, y: h => h / 2, color: Colors('black').get(), mountX: 0.5, mountY: 0.4, text: {fontFace: 'Fresca', text: this.bindProp('label'), fontSize: 32}}
        }
    }

    set item(obj) {
        this._item = obj;
        this._update();
    }

    _update() {
        if(!this.active || !this._item) {
            return;
        }
        const {label = 'X'} = this._item || {};
        this.patch({
            Label: {text: {text: label}}
        });
    }

    _firstActive() {
        this._update();
    }

    _focus() {
        this.patch({
            Background: {smooth: {color: Colors(this.fireAncestors('$getThemeColor')).darker(0.5).get()}},
            Label: {smooth: {color: Colors('white').get()}}
        });
    }

    _unfocus() {
        this.patch({
            Background: {smooth: {color: Colors('white').get()}},
            Label: {smooth: {color: Colors('black').get()}}
        });
    }

    static get width() {
        return 200;
    }

    static get height() {
        return 70;
    }

    static get margin() {
        return 8;
    }
}