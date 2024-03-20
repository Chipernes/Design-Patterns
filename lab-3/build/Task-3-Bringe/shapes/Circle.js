import Shape from "./Shape.js";
export default class Circle extends Shape {
    constructor(renderer) {
        super(renderer);
    }
    draw() {
        this.renderer.renderShape("Circle");
    }
}
//# sourceMappingURL=Circle.js.map