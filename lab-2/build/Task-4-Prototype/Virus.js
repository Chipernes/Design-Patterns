export default class Virus {
    constructor(weight, age, name, species, children = []) {
        this.weight = weight;
        this.age = age;
        this.name = name;
        this.species = species;
        this.children = children;
    }
    clone() {
        const clonedChildren = [];
        this.children.forEach(child => {
            clonedChildren.push(child.clone());
        });
        return new Virus(this.weight, this.age, this.name, this.species, clonedChildren);
    }
}
//# sourceMappingURL=Virus.js.map