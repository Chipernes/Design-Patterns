import Character from "./Character.js";
export default class HeroBuilder {
    constructor() {
        this.character = new Character(0, '', '', '', '', [], '', []);
    }
    setHeight(height) {
        this.character.height = height;
        return this;
    }
    setBuild(build) {
        this.character.build = build;
        return this;
    }
    setHairColor(color) {
        this.character.hairColor = color;
        return this;
    }
    setEyeColor(color) {
        this.character.eyeColor = color;
        return this;
    }
    setClothing(clothing) {
        this.character.clothing = clothing;
        return this;
    }
    addInventory(item) {
        this.character.inventory.push(item);
        return this;
    }
    setEvil(evil) {
        return this;
    }
    addEvilDeeds(deeds) {
        return this;
    }
    build() {
        return this.character;
    }
}
//# sourceMappingURL=HeroBuilder.js.map