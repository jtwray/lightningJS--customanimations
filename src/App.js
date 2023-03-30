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

import { Lightning, Utils } from '@lightningjs/sdk'

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        color: 0xfffbb03b,
        src: Utils.asset('images/background.png'),
      },
      Loader: {
        w: 120,
        x: 960,
        y: 540,
        mount: 0.5,
        flex: {
          justifyContent: 'space-evenly',
        },
        Dot1: {
          rect: true,
          w: 30,
          h: 30,
          shader: {
            type: Lightning.shaders.RoundedRectangle,
            radius: 15,
          },
        },
        Dot2: {
          rect: true,
          w: 30,
          h: 30,
          shader: {
            type: Lightning.shaders.RoundedRectangle,
            radius: 15,
          },
        },
        Dot3: {
          rect: true,
          w: 30,
          h: 30,
          shader: {
            type: Lightning.shaders.RoundedRectangle,
            radius: 15,
          },
        },
      },
      Reveal: {
        w: 1920,
        flex: {
          justifyContent: 'space-between',
        },
        Left: {
          rect: true,
          w: 940,
          h: 1080,
          color: 0xffa41b16,
        },
        Right: {
          rect: true,
          w: 940,
          h: 1080,
          color: 0xffa41b16,
        },
      },
    }
  }

  _init() {
    let delay = 0
    for (const dot of this.tag('Loader').children) {
      dot
        .animation({
          duration: 1,
          repeat: -1,
          repeatDelay: 0.5,
          delay,
          actions: [
            {
              p: 'y',
              v: { 0: 0, 0.5: -40, 1: 0 },
            },
          ],
        })
        .start()
      delay += 0.2
    }

    this.tag('Reveal')
      .animation({
        duration: 1,
        actions: [
          {
            t: 'Left',
            p: 'x',
            v: { 0: 0, 1: -940 },
          },
          {
            t: 'Right',
            p: 'x',
            v: { 0: 0, 1: 940 },
          },
        ],
      })
      .start()
  }
}
