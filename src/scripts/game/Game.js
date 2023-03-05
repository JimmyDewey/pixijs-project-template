import * as PIXI from "pixi.js";
import { App } from "../system/App";

export class Game {
    constructor(texture) {
        this.container = new PIXI.Container();
        this.texture = texture;
        this.createBackground(this.texture);
    }
    createBackground(texture) {
        this.background = PIXI.Sprite.from(texture.sample);
        this.background.width = window.innerWidth;
        this.background.height = window.innerHeight;
        this.container.addChild(this.background);
    }
}
