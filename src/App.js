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

import { Router, Utils } from '@lightningjs/sdk'
import Legend from './app/Legend.js';
import routerConfig from './lib/routerConfig';

export default class App extends Router.App {
  static _template() {
    return {
      Background: { w: 1920, h: 1080, rect: true, color: this.bindProp('background') },
      ...super._template(),
      Legend: {type: Legend, x: 1860, y: 1000}
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


  handleHashChange() {
    console.log('handleHashChange')
  }

  _setup() {
    Router.startRouter(routerConfig, this);
  }

  _getCurrentRouteIndex() {   
    const currentRoute = Router.getActiveRoute();
    const routes = routerConfig.routes;
    for(let i = 0; i < routes.length; i++) {
        if(currentRoute === routes[i].path) {
            return i;
        }
    }
    return 0;
}

  _navigate(dir) {
    const index = this._getCurrentRouteIndex();
    if((dir === -1 && index === 0) || (dir === 1 && index === routerConfig.routes.length - 1)) {
      return;
    }
    const targetIndex = Math.min(Math.max(index + dir, 0), routerConfig.routes.length - 1);
    Router.navigate(routerConfig.routes[targetIndex].path, { reload: true }, false);
  }

  _handleNextRoute() {
    this._navigate(1);
  }

  _handlePreviousRoute() {
    this._navigate(-1);
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
