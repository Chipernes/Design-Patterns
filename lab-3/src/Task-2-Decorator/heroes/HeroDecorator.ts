import Hero from "./Hero.js";

export default abstract class HeroDecorator implements Hero {
    constructor(protected hero: Hero) {}

    equip(item: string): void {
        this.hero.equip(item);
    }
}