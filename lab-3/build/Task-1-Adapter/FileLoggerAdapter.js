import Logger from "./Logger.js";
export default class FileLoggerAdapter extends Logger {
    constructor(fileWriter) {
        super();
        this.fileWriter = fileWriter;
    }
    log(message) {
        this.fileWriter.write(`[LOG] ${message}`);
    }
    error(message) {
        this.fileWriter.writeLine(`[ERROR] ${message}`);
    }
    warn(message) {
        this.fileWriter.writeLine(`[WARN] ${message}`);
    }
}
//# sourceMappingURL=FileLoggerAdapter.js.map