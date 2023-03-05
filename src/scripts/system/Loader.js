import * as PIXI from "pixi.js";
import { Config } from "../game/Config";

export class Loader {
    constructor(config) {
        this.config = config;
        this.resources = {};
    }

    preload() {
        for (const asset of Config.sourcePreload) {
            let key = asset.key.substr(asset.key.lastIndexOf("/") + 1);
            key = key.substring(0, key.indexOf("."));
            if (
                asset.key.indexOf(".png") !== -1 ||
                asset.key.indexOf(".jpg") !== -1
            ) {
                PIXI.Assets.add(key, asset.data.default);
            }
        }
    }
}
