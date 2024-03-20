export default class SmartTextChecker {
    constructor(realReader) {
        this.realReader = realReader;
    }
    readFile(filePath) {
        console.log("Opening file...");
        const result = this.realReader.readFile(filePath);
        console.log("File read successfully.");
        console.log(`Total lines: ${result.length}`);
        console.log(`Total characters: ${result.reduce((acc, cur) => acc + cur.length, 0)}`);
        console.log("Closing file...");
        return result;
    }
}
//# sourceMappingURL=SmartTextChecker.js.map