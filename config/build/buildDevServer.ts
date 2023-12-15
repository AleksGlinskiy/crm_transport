import {BuildOptions} from "./types/config";
import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function BuildDevServer({port}: BuildOptions): DevServerConfiguration {
    return {
        port: port,
        open: true,
    }
}