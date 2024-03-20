import Shape from "./Shape.js";
export default class Triangle extends Shape {
    constructor(renderer) {
        super(renderer);
    }
    draw() {
        this.renderer.renderShape("Triangle");
    }
}
//# sourceMappingURL=Triangle.js.map