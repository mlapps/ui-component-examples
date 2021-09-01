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

import { Colors, Lightning, Router, Utils } from "@lightningjs/sdk";

export default class RouteTile extends Lightning.Component {
    static _template() {
        return {
            Focus: {
                color: Colors('black').get(), rect: true, w: w => w, h: h => h, shader: {type: Lightning.shaders.RoundedRectangle,  radius: 8, stroke: 5, strokeColor: 0xffffffff, blend: 1, fillColor: 0x00ffffff}
            },
            Label: {
                x: 140, y: h => h / 2, mountY: 0.5, color: Colors('black').get(), text: {text: '', wordWrap: true, wordWrapWidth: 360}
            },
            Icon: {
                x: 20, y: h => h / 2, mountY: 0.5, color: Colors('black').get(),
            }
        }
    }

    _init() {
        this._focusAnimation = this.animation({duration: 0.2, actions: [
            {t: 'Focus', p: 'shader.fillColor', v: {0: Colors('white').alpha(0).get(), 1: Colors('white').get()}},
            {t: 'Label', p: 'color', v: {0: Colors('black').get(), 1: Colors('white').get()}},
            {t: 'Icon', p: 'color', v: {0: Colors('black').get(), 1: Colors('white').get()}},
        ]});
    }

    _firstActive() {
        this.patch({
            Label: {text: this.label},
            Icon: {src: Utils.asset(this.icon)}
        })
    }

    _focus() {
        if(this._focusAnimation) {
            this._focusAnimation.start();
        }
    }

    _unfocus() {
        this._focusAnimation.stop();
    }

    _handleEnter() {
        Router.navigate(this.routePath);
        Router.focusPage();
    }

    static get marginRight() {
        return 30;
    }

    static get marginBottom() {
        return 30;
    }

    static get height() {
        return 150;
    }

    static get width() {
        return 530;
    }
}