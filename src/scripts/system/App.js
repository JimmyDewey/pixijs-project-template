import * as PIXI from "pixi.js";
import { Loader } from "./Loader";

class Application {
    run(config) {
        this.config = config;
        this.app = new PIXI.Application({ resizeTo: window });
        document.body.appendChild(this.app.view);

        this.loader = new Loader(this.app.loader, this.config);
        this.loader.preload();

        let names = [];
        for (const item of this.config.sourcePreload) {
            let key = item.key.substr(item.key.lastIndexOf("/") + 1);
            key = key.substring(0, key.indexOf("."));
            names.push(key);
        }
        this.app.texturesPromise = PIXI.Assets.load(names);
        this.app.texturesPromise.then((textures) => {
            this.start(textures);
        });
    }

    start(textures) {
        this.scene = new this.config["startScene"](textures);
        this.app.stage.addChild(this.scene.container);
    }
}

export const App = new Application();
