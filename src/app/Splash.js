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

import { Lightning, Utils, Colors } from '@lightningjs/sdk';
import Page from './Page';

export default class Splash extends Page {
    static _template() {
        const white = Colors('white').get()
        return {
            Wrapper: {
                x: 440, y: 320,
                WarningIcon: { y: 20, color: white, src: Utils.asset('images/warning_icon.png') },
                Bar: { x: 330, h: 340, w: 6, color: white, rect: true },
                Labels: {
                    x: 380,
                    Splash: { y: 10, color: white, text: { text: 'SPLASH', fontFace: 'Londrina', fontSize: 142 } },
                    Information: { y: 200, color: white, text: { text: 'Components for Lightning;\nFeel free to use or copy any of the used \ncomponents at own risk.', fontFace: 'Fresca', fontSize: 28, lineHeight: 34 } }
                }
            },
            Loader: {
                x: 960, y: 800, mount: 0.5, w: 80, h: 80, rect: true, shader: { type: Lightning.shaders.Spinner2, color: white, backgroundColor: 0x00ffffff }
            }
        }
    }

    _getFocused() {
        return this;
    }

    static get header() {
        return 'Splash';
    }

    static get icon() {
        return 'images/splash.png';
    }
}