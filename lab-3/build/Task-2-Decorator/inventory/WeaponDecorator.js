import HeroDecorator from "../heroes/HeroDecorator.js";
export default class WeaponDecorator extends HeroDecorator {
    equip(item) {
        super.equip(`Weapon: ${item}`);
    }
}
//# sourceMappingURL=WeaponDecorator.js.map