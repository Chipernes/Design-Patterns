import Renderer from "./Renderer.js";

export default class VectorRenderer implements Renderer {
    renderShape(shape: string): void {
        console.log(`Drawing ${shape} as vector`);
    }
}