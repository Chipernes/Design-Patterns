import Renderer from "../renders/Renderer.js";

export default abstract class Shape {
    protected renderer: Renderer;

    protected constructor(renderer: Renderer) {
        this.renderer = renderer;
    }

    abstract draw(): void;
}