import Hero from "./Hero.js";

export default class Mage implements Hero {
    constructor(public name: string) {}

    equip(item: string): void {
        console.log(`${this.name} equipped ${item}`);
    }
}