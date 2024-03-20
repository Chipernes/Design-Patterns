import LightNode from "./LightNode.js";

export default class LightElementNode extends LightNode {
    tagName: string;
    children: LightNode[];

    constructor(tagName: string, children: LightNode[]) {
        super();
        this.tagName = tagName;
        this.children = children;
    }

    innerHTML(): string {
        return this.children.map(child => child.outerHTML()).join('');
    }

    outerHTML(): string {
        return `<${this.tagName}>${this.innerHTML()}</${this.tagName}>`;
    }

    memorySize(): number {
        return `<${this.tagName}>`.length + `</${this.tagName}>`.length +
            this.children.reduce((acc, child) => acc + child.memorySize(), 0) +
            this.children.length * 4;
    }
}
