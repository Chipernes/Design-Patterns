import CharacterBuilder from "./CharacterBuilder.js";
import Character from "./Character.js";

export default class CharacterDirector {
    private builder: CharacterBuilder;

    constructor(builder: CharacterBuilder) {
        this.builder = builder;
    }

    buildHero(): Character {
        return this.builder
            .setHeight(180)
            .setBuild('Athletic')
            .setHairColor('Blonde')
            .setEyeColor('Blue')
            .setClothing('Armor')
            .addInventory('Sword')
            .addInventory('Shield')
            .build();
    }

    buildEnemy(): Character {
        return this.builder
            .setHeight(200)
            .setBuild('Stocky')
            .setHairColor('Black')
            .setEyeColor('Red')
            .setClothing('Dark Robe')
            .addInventory('Magic Staff')
            .setEvil('Make some demon stuff')
            .addEvilDeeds(['Conquering Kingdoms', 'Summoning Demons'])
            .build();
    }
}