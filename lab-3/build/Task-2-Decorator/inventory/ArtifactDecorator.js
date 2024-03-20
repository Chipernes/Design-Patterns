import HeroDecorator from "../heroes/HeroDecorator.js";
export default class ArtifactDecorator extends HeroDecorator {
    equip(item) {
        super.equip(`Artifact: ${item}`);
    }
}
//# sourceMappingURL=ArtifactDecorator.js.map