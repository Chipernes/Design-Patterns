import LightNode from "./LightNode.js";
export default class LightElementNode extends LightNode {
    constructor(tagName, displayType, closingType, classes, children) {
        super();
        this.tagName = tagName;
        this.displayType = displayType;
        this.closingType = closingType;
        this.classes = classes;
        this.children = children;
    }
    innerHTML() {
        return this.children.map(child => child.outerHTML()).join('');
    }
    outerHTML() {
        const classAttr = this.classes.length > 0 ? ` class="${this.classes.join(' ')}"` : '';
        const openTag = `<${this.tagName}${classAttr}>`;
        const closeTag = this.closingType === 'double' ? `</${this.tagName}>` : '';
        return `${openTag}${this.innerHTML()}${closeTag}`;
    }
}
//# sourceMappingURL=LightElementNode.js.map