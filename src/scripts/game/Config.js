import { Game } from "./Game";
import { Tools } from "../system/Tools";

const sourcePreload = {
    // default: [{ name: "background", url: prefix + "sample.png" }],
};

export const Config = {
    sourcePreload: Tools.massiveRequire(
        require["context"]("./../../assets/", true, /\.(mp3|png|jpe?g)$/)
    ),

    startScene: Game,
};
