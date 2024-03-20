import Shape from "./Shape.js";
export default class Square extends Shape {
    constructor(renderer) {
        super(renderer);
    }
    draw() {
        this.renderer.renderShape("Square");
    }
}
//# sourceMappingURL=Square.js.map