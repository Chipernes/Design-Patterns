import LightNode from "./LightNode.js";

export default class LightTextNode extends LightNode {
    text: string;

    constructor(text: string) {
        super();
        this.text = text;
    }

    innerHTML(): string {
        return this.text;
    }

    outerHTML(): string {
        return this.text;
    }

    memorySize(): number {
        return this.text.length + 1;
    }
}