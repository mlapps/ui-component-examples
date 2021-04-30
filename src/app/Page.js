import { Lightning, Colors } from "@lightningjs/sdk";

export default class Page extends Lightning.Component {
    static _template() {
        return {
            Content: {},
            FadeTop: {w: 1920, h: 230, rect: true, colorTop: Colors('white').alpha(0.7).get(), colorBottom: 0x00000000},
            Header: {x: 90, y: 100, color: Colors('white').get(), text: {text: this.header, fontFace: 'Londrina', fontSize: 50}}
        }
    }

    _active() {
        this.patch({
            FadeTop: {colorTop  : Colors(this.fireAncestors('$getThemeColor')).alpha(0.7).get()}
        })
    }
}