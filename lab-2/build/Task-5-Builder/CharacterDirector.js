export default class CharacterDirector {
    constructor(builder) {
        this.builder = builder;
    }
    buildHero() {
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
    buildEnemy() {
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
//# sourceMappingURL=CharacterDirector.js.map