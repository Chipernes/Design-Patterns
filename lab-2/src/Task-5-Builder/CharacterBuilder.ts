import Character from "./Character.js";

export default interface CharacterBuilder {
    setHeight(height: number): CharacterBuilder;
    setBuild(build: string): CharacterBuilder;
    setHairColor(color: string): CharacterBuilder;
    setEyeColor(color: string): CharacterBuilder;
    setClothing(clothing: string): CharacterBuilder;
    addInventory(item: string): CharacterBuilder;
    setEvil(evil: string): CharacterBuilder;
    addEvilDeeds(deeds: string[]): CharacterBuilder;
    build(): Character;
}