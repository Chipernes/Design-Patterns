export default class SmartTextReaderLocker {
    constructor(realReader, restrictedFilesRegex) {
        this.realReader = realReader;
        this.restrictedFilesRegex = restrictedFilesRegex;
    }
    readFile(filePath) {
        if (this.restrictedFilesRegex.test(filePath)) {
            console.log("Access denied!");
            return [];
        }
        else {
            return this.realReader.readFile(filePath);
        }
    }
}
//# sourceMappingURL=SmartTextReaderLocker.js.map