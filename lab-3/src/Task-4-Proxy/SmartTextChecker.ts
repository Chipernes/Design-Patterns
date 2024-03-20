import SmartTextReader from "./SmartTextReader.js";

export default class SmartTextChecker implements SmartTextReader {
    private realReader: SmartTextReader;

    constructor(realReader: SmartTextReader) {
        this.realReader = realReader;
    }

    readFile(filePath: string): string[][] {
        console.log("Opening file...");
        const result = this.realReader.readFile(filePath);
        console.log("File read successfully.");
        console.log(`Total lines: ${result.length}`);
        console.log(`Total characters: ${result.reduce((acc, cur) => acc + cur.length, 0)}`);
        console.log("Closing file...");
        return result;
    }
}
