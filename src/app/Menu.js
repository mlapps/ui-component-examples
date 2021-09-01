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

import { Colors, Lightning, Router } from "@lightningjs/sdk";
import { Grid } from "@lightningjs/ui";
import RouteTile from "./RouteTile.js";
import routerConfig from '../lib/routerConfig.js';

export default class Menu extends Lightning.Component {
    static _template() {
        return {
            y: 970,
            Body: {
                y: 79, w: 1920, h: 1050, rect: true
            },
            Button: {
                mountX: 1, x: 1820, w: 300, h: 90, 
                Background: {
                    w: w => w, h: h => h, rect: true, shader: {type: Lightning.shaders.RoundedRectangle, radius: [15, 15, 0, 0]}
                },
                Arrow: {
                    x: 30, y: 2, color: Colors('black').get(), rotation: Math.PI / 2, text: {text: '>', fontFace: 'Londrina', fontSize: 54}
                },
                Label: {
                    x: 80, y: 12, color: Colors('black').get(), text: {text: 'Menu', fontFace: 'Fresca', fontSize: 44}
                }
            },
            Grid: {
                alpha: 1, rows: 4, x: 100, y: 170, type: Grid, w: 1720,
            }
        }
    }

    _focus() {
        this._focusAnimation = this.animation({duration: 0.5, actions: [
            {p: 'y', v: {0: 970, 1: 30}},
            {t: 'Button', p: 'mountX', v: {0: 1, 1: 0}},
            {t: 'Button', p: 'x', v: {0: 1820, 1: 100}},
            {t: 'Button.Background', p: 'color', v: {0: Colors('white').get(), 1: Colors(this.fireAncestors('$getThemeColor')).get()}},
            {t: 'Button.Background', p: 'shader.topLeft', v: {0: 15, 1: 0}},
            {t: 'Button.Background', p: 'shader.topRight', v: {0: 15, 1: 0}},
            {t: 'Button.Background', p: 'shader.bottomLeft', v: {0: 0, 1: 15}},
            {t: 'Button.Background', p: 'shader.bottomRight', v: {0: 0, 1: 15}},
            {t: 'Button.Arrow', p: 'color', v: {0: Colors('black').get(), 1: Colors('white').get()}},
            {t: 'Button.Arrow', p: 'rotation', v: {0: Math.PI / 2, 1: (Math.PI / 2) * 3}},
            {t: 'Button.Label', p: 'color', v: {0: Colors('black').get(), 1: Colors('white').get()}},
            {t: 'Button.Label', p: 'text.text', v: {0.49: 'Menu', 0.51: 'Example'}},
            {t: 'Button.Label', p: 'alpha', v: {0: 1, 0.4: 0, 0.6: 0, 1: 1}},
            {t: 'Body', p: 'y', v: {0: 79, 1: 1}},
            {t: 'Grid', p: 'alpha', v: {0.8: 0, 1: 1}}
        ]});

        this._focusAnimation.start();
    }

    _setup() {
        const routes = routerConfig.routes.map((route) => {
            return {routePath: route.path, label: route.component.header, icon: route.component.icon, type: RouteTile}
        });
        this.tag('Grid').add(routes);
    }

    _unfocus() {
        this._focusAnimation.stop();
    }

    _handleUp() {
        Router.focusPage();
    }

    _handleLeft() {

    }

    _handleRight() {

    }

    _handleDown() {

    }

    _getFocused() {
        return this.tag('Grid');
    }
}
