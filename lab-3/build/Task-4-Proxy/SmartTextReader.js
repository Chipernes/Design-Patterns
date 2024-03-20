import fs from "fs";
export default class SmartTextReader {
    readFile(filePath) {
        const textContent = fs.readFileSync(filePath, "utf-8");
        console.log(textContent);
        const lines = textContent.split("\n");
        return lines.map(line => line.split(""));
    }
}
//# sourceMappingURL=SmartTextReader.js.map