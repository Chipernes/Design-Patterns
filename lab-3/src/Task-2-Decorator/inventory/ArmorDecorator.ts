import HeroDecorator from "../heroes/HeroDecorator.js";
import Hero from "../heroes/Hero.js";

export default class ArmorDecorator extends HeroDecorator {
    equip(item: string): void {
        super.equip(`Armor: ${item}`);
    }
}
