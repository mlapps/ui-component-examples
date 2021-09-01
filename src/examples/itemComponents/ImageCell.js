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

import {Lightning, Colors, Utils} from '@lightningjs/sdk';

export default class ImageCell extends Lightning.Component {
    static _template() {
        return {
            Shadow: {alpha: 0, mount: 0.5, x: w => w / 2, y: h => h / 2, w: w => w + 32, h: h => h + 32, color: Colors('shadow').get(), rect: true, shader: {type: Lightning.shaders.FadeOut, fade: 32}},
            ImageWrapper: {w: w => w, h: h => h, rtt: true, shader: {type: Lightning.shaders.RoundedRectangle, radius: 4},
                Fill: {w: w => w, h: h => h, color: Colors('white').get(), rect: true},
                Image: {alpha: 0.0001, mount: 0.5, y: w => w / 2, x: h => h / 2, src: Utils.asset('images/missing-img.png')},
            },
            Focus: {alpha: 0, x: 4, y: 4, w: w => w - 8, h: h => h - 8, rect: true, shader: {type: Lightning.shaders.RoundedRectangle, radius: 3, stroke: 5, strokeColor: 0xffffffff, blend: 1, fillColor: 0x00ffffff}},
            Label: {mountX: 1, mountY: 1, y: h => h - 5, x: w => w - 30, color: Colors('black').get(), text: {text: this.bindProp('number'), fontFace: 'Londrina', fontSize: 50}}
        }
    }

    _init() {
        const image = this.tag('Image');
        image.on('txLoaded', () => {
            image.setSmooth('alpha', 1);
        });

        this._focusAnimation = this.animation({duration: 0.2, actions: [
            {p: 'scale', v: {0: 1, 1: 1.075}},
            {t: "Shadow", p: 'alpha', v: {0: 0, 1: 1}},
            {t: "Label", p: 'scale', v: {0: 1, 1: 1.1}},
            {t: "Label", p: 'color', v: {0: Colors('black').alpha(0.7).get(), 1: Colors(this.fireAncestors('$getThemeColor')).darker(0.5).get()}},
            {t: "Focus", p: 'alpha', v: {0: 0, 1: 1}}
        ]});
    }

    _update() {
        this.patch({
            ImageWrapper: {
                Image: {
                    color: Colors(`color${Math.floor(Math.random() * 7) + 1}`).get(),
                    h: this.h * 0.7,
                    w: this.h * 0.7
                }
            },
            Focus: {
                color: Colors(this.fireAncestors('$getThemeColor')).darker(0.5).get()
            }      
        });
    }

    _firstActive() {
        this._update();
    }

    _focus() {
        if(this._focusAnimation) {
            this._focusAnimation.start();
        }
    }

    _unfocus() {
        this._focusAnimation.stop();
    }

    static get width() {
        return 400;
    }

    static get height() {
        return 300;
    }
}