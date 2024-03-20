import LightNode from "./LightNode.js";
export default class LightTextNode extends LightNode {
    constructor(text) {
        super();
        this.text = text;
    }
    innerHTML() {
        return this.text;
    }
    outerHTML() {
        return this.text;
    }
}
//# sourceMappingURL=LightTextNode.js.map