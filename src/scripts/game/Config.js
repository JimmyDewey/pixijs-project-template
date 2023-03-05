import { Game } from "./Game";
import { Tools } from "../system/Tools";

export const Config = {
    sourcePreload: Tools.massiveRequire(
        require["context"]("./../../assets/", true, /\.(ogg|mp3|png|jpe?g)$/)
    ),

    startScene: Game,
};
