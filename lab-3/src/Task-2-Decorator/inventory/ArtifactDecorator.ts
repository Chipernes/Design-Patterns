import HeroDecorator from "../heroes/HeroDecorator.js";
import Hero from "../heroes/Hero.js";

export default class ArtifactDecorator extends HeroDecorator {
    equip(item: string): void {
        super.equip(`Artifact: ${item}`);
    }
}