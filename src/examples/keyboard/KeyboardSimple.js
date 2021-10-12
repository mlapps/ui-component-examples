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

import Page from "../../app/Page";
import { Keyboard, Key as BaseKey, InputField} from "@lightningjs/ui";
import { Colors, Utils } from "@lightningjs/sdk";

export default class KeyboardSimple extends Page {
    static _template() {
        return {
            ...super._template(),
            Content: {
                InputField: {x: 480, y: 230, type: InputField},
                Keyboard: {
                    y: 380, w: 1920, type: Keyboard, layout: 'ABC', config: keyboardConfig
                },
            }
        }
    }

    _setup() {
        const inputField = this.tag('InputField');
        this.tag('Keyboard').inputField(inputField);
    }

    _getFocused() {
        return this.tag('Keyboard');
    }

    static get header() {
        return 'Simple Keyboard';
    }

    static get icon() {
        return 'images/keyboard.png';
    }
}

class Key extends BaseKey {
    _firstActive() {
        this.labelText = {
            lineHeight: 22,
        }
        this.labelColors = {
            unfocused: Colors('white').get()
        };
        this.backgroundColors = {
            unfocused: Colors('white').alpha(0).get(),
            focused: Colors(this.fireAncestors('$getThemeColor')).darker(0.5).get()
        };
        if(this.hasFocus()) {
            this._focus();
        }
    }

    static get width() {
        return 60;
    }
    static get height() {
        return 60;
    }
}

class ActionKey extends BaseKey {
    _active() {
        this.labelColors = {
            unfocused: Colors('black').get(),
            focused: Colors('white').get()
        };
        this.backgroundColors = {
            unfocused: Colors('white').get(),
            focused: Colors(this.fireAncestors('$getThemeColor')).darker(0.5).get()
        };
        if(this.hasFocus()) {
            this._focus();
        }
    }

    static get height() {
        return 60;
    }

    static get width() {
        return 160;
    }
}

class IconKey extends ActionKey {
    set icon(src) {
        this._icon = src;
        //call for _update
        this._update();
    }

    get icon() {
        return this._icon;
    }

    _update() {
        if(!this.active) {
            //blocking update if not active.
            return;
        }
        const hasFocus = this.hasFocus();
        let {focused, unfocused = 0xff000000} = this.backgroundColors;
        //Use labelColors and label to color the icon.
        let {focused: labelFocused, unfocused: labelUnfocused = 0xffffffff} = this.labelColors;
        this.patch({
            Background: {color: hasFocus && focused ? focused : unfocused},
            Label: {src: Utils.asset(this.icon), color: hasFocus && labelFocused ? labelFocused : labelUnfocused}
        });
    }
}

const keyboardConfig = {
    layouts: {
        'ABC': [
            ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
            ['Layout:123', 'Space', 'Clear', 'Backspace']
        ],
        '123': [
            ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
            ['Layout:ABC', 'Space', 'Clear', 'Backspace']
        ]
    },
    styling: {
        align: 'center',
        horizontalSpacing: 5,
        verticalSpacing: 20,
        Row2: {
            spacing: 10
        }
    },
    buttonTypes: {
        default: {
            type: Key,
        },
        Backspace: {
            type: IconKey, w: 90, icon: 'images/backspace.png'
        },
        Layout: {
            type: ActionKey
        },
        Space: {
            type: ActionKey, w: 360, label: 'space',
        },
        Clear: {
            type: ActionKey, label: 'clear'
        }
    }
};