import CharacterBuilder from "./CharacterBuilder.js";
import Character from "./Character.js";

export default class EnemyBuilder implements CharacterBuilder {
    private readonly character: Character;

    constructor() {
        this.character = new Character(0, '', '', '', '', [], '', []);
    }

    setHeight(height: number): CharacterBuilder {
        this.character.height = height;
        return this;
    }

    setBuild(build: string): CharacterBuilder {
        this.character.build = build;
        return this;
    }

    setHairColor(color: string): CharacterBuilder {
        this.character.hairColor = color;
        return this;
    }

    setEyeColor(color: string): CharacterBuilder {
        this.character.eyeColor = color;
        return this;
    }

    setClothing(clothing: string): CharacterBuilder {
        this.character.clothing = clothing;
        return this;
    }

    addInventory(item: string): CharacterBuilder {
        this.character.inventory.push(item);
        return this;
    }

    setEvil(evil: string): EnemyBuilder {
        this.character.evil = evil;
        return this;
    }

    addEvilDeeds(deeds: string[]): EnemyBuilder {
        this.character.evilDeeds = deeds;
        return this;
    }

    build(): Character {
        return this.character;
    }
}
