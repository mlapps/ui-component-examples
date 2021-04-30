import { Lightning, Utils, Colors } from '@lightningjs/sdk';

export default class Splash extends Lightning.Component {
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
}