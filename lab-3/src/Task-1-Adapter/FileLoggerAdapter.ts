import Logger from "./Logger.js";
import FileWriter from "./FileWriter.js";

export default class FileLoggerAdapter extends Logger {
    private fileWriter: FileWriter;

    constructor(fileWriter: FileWriter) {
        super();
        this.fileWriter = fileWriter;
    }

    log(message: string): void {
        this.fileWriter.write(`[LOG] ${message}`);
    }

    error(message: string): void {
        this.fileWriter.writeLine(`[ERROR] ${message}`);
    }

    warn(message: string): void {
        this.fileWriter.writeLine(`[WARN] ${message}`);
    }
}