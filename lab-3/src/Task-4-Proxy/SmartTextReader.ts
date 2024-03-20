import fs from "fs";

export default class SmartTextReader {
    readFile(filePath: string): string[][] {
        const textContent: string = fs.readFileSync(filePath, "utf-8");
        console.log(textContent);

        const lines: string[] = textContent.split("\n");
        return lines.map(line => line.split(""));
    }
}
