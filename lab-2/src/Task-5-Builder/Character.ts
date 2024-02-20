export default class Character {
    constructor(
        public height: number,
        public build: string,
        public hairColor: string,
        public eyeColor: string,
        public clothing: string,
        public inventory: string[],
        public evil: string,
        public evilDeeds: string[],
    ) {}
}