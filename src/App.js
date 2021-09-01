/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
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

import { Router, Utils } from '@lightningjs/sdk';
import Menu from './app/Menu.js';
import routerConfig from './lib/routerConfig.js';

export default class App extends Router.App {
  static _template() {
    return {
      Background: { w: 1920, h: 1080, rect: true, color: this.bindProp('background') },
      ...super._template(),
      Widgets: {
        Menu: {type: Menu, visible: true}
      }
    }
  }

  static getFonts() {
    return [
      { family: 'Fresca', url: Utils.asset('fonts/Fresca-Regular.ttf') },
      { family: 'Londrina', url: Utils.asset('fonts/LondrinaSolid-Regular.ttf') }
    ];
  }

  static colors() {
    return true;
  }

  _setup() {
    Router.startRouter(routerConfig, this);
  }

  set themeColor(str) {
    this._themeColor = str;
  }

  get themeColor() {
    return this._themeColor;
  }

  $getThemeColor() {
    return this.themeColor;
  }
}
