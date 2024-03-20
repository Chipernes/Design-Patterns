import Hero from "./Hero.js";

export default class Paladin implements Hero {
    constructor(public name: string) {}

    equip(item: string): void {
        console.log(`${this.name} equipped ${item}`);
    }
}