import Shape from "./Shape.js";
import Renderer from "../renders/Renderer.js";

export default class Triangle extends Shape {
    constructor(renderer: Renderer) {
        super(renderer);
    }

    draw(): void {
        this.renderer.renderShape("Triangle");
    }
}