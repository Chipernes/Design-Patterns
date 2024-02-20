export default class Virus {
    constructor(
        public weight: number,
        public age: number,
        public name: string,
        public species: string,
        public children: Virus[] = []
    ) {}

    clone(): Virus {
        const clonedChildren: Virus[] = [];
        this.children.forEach(child => {
            clonedChildren.push(child.clone());
        });
        return new Virus(this.weight, this.age, this.name, this.species, clonedChildren);
    }
}