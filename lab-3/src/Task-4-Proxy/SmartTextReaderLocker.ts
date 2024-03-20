import SmartTextReader from "./SmartTextReader.js";

export default class SmartTextReaderLocker implements SmartTextReader {
    private realReader: SmartTextReader;
    private restrictedFilesRegex: RegExp;

    constructor(realReader: SmartTextReader, restrictedFilesRegex: RegExp) {
        this.realReader = realReader;
        this.restrictedFilesRegex = restrictedFilesRegex;
    }

    readFile(filePath: string): string[][] {
        if (this.restrictedFilesRegex.test(filePath)) {
            console.log("Access denied!");
            return [];
        } else {
            return this.realReader.readFile(filePath);
        }
    }
}
