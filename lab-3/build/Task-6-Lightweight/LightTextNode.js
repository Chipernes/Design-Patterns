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
    memorySize() {
        return this.text.length + 1;
    }
}
//# sourceMappingURL=LightTextNode.js.map