import { Lightning, Utils } from "@lightningjs/sdk";
import { List } from "@lightningjs/ui";

export default class Legend extends Lightning.Component {
    static _template() {
        return {
            LegendList: {alpha: 0.0001, type: List, itemType: LegendItem, autoResize: true, mountX: 1, mountY: 1, spacing: 30, signals: {onItemsRepositioned: true}}
        }
    }

    onItemsRepositioned() {
        this.tag('LegendList').alpha = 1;
    }

    setLegend(array) {
        this.tag('LegendList').alpha = 0.0001;
        this.tag('LegendList').reload(array)
    }
}

class LegendItem extends Lightning.Component {
    static _template() {
        return {
            h: 50,
            Icon: {mountY: 0.5, y: h => h / 2},
            Label: {mountY: 0.5, y: h => h / 2, text: {text: '', fontFace: 'Fresca', fontSize: 36}}
        }
    }

    _update() {
        console.log('t', this)
        this.patch({
            Icon: {src: Utils.asset(`images/${this.label}.png`)},
            Label: {text: {text: this.label}}
        });
    }

    _firstActive(){
        this._update();
    }

    _init() {
        const icon = this.tag('Icon');
        const label = this.tag('Label');

        icon.on('txLoaded', () => {
            this._reposition()
        });

        label.on('txLoaded', () => {
            this._reposition()
        });
    }

    _reposition() {
        const icon = this.tag('Icon');
        const label = this.tag('Label');

        if(icon.displayedTexture === null || label.displayedTexture === null) {
            return;
        }
        this.patch({
            Label: {x: icon.renderWidth + 15}
        });
        this.w = label.x + label.renderWidth;
        if(this.collectionWrapper) {
            this.collectionWrapper.reposition();
        }
    }
}
