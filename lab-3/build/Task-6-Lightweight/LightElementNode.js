import LightNode from "./LightNode.js";
export default class LightElementNode extends LightNode {
    constructor(tagName, children) {
        super();
        this.tagName = tagName;
        this.children = children;
    }
    innerHTML() {
        return this.children.map(child => child.outerHTML()).join('');
    }
    outerHTML() {
        return `<${this.tagName}>${this.innerHTML()}</${this.tagName}>`;
    }
    memorySize() {
        return `<${this.tagName}>`.length + `</${this.tagName}>`.length +
            this.children.reduce((acc, child) => acc + child.memorySize(), 0) +
            this.children.length * 4;
    }
}
//# sourceMappingURL=LightElementNode.js.map