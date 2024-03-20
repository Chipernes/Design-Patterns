import Renderer from "./Renderer.js";

export default class RasterRenderer implements Renderer {
    renderShape(shape: string): void {
        console.log(`Drawing ${shape} as pixels`);
    }
}