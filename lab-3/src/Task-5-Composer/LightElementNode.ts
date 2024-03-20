import LightNode from "./LightNode.js";

export default class LightElementNode extends LightNode {
    tagName: string;
    displayType: 'block' | 'inline';
    closingType: 'single' | 'double';
    classes: string[];
    children: LightNode[];

    constructor(tagName: string, displayType: 'block' | 'inline', closingType: 'single' | 'double', classes: string[], children: LightNode[]) {
        super();
        this.tagName = tagName;
        this.displayType = displayType;
        this.closingType = closingType;
        this.classes = classes;
        this.children = children;
    }

    innerHTML(): string {
        return this.children.map(child => child.outerHTML()).join('');
    }

    outerHTML(): string {
        const classAttr = this.classes.length > 0 ? ` class="${this.classes.join(' ')}"` : '';
        const openTag = `<${this.tagName}${classAttr}>`;
        const closeTag = this.closingType === 'double' ? `</${this.tagName}>` : '';
        return `${openTag}${this.innerHTML()}${closeTag}`;
    }
}
