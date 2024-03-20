import HeroDecorator from "../heroes/HeroDecorator.js";
export default class ArmorDecorator extends HeroDecorator {
    equip(item) {
        super.equip(`Armor: ${item}`);
    }
}
//# sourceMappingURL=ArmorDecorator.js.map