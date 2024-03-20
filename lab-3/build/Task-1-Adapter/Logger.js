export default class Logger {
    log(message) {
        console.log(`This is a green correct message: ${message}`);
    }
    error(message) {
        console.error(`This is a red incorrect message: ${message}`);
    }
    warn(message) {
        console.warn(`This is a yellow warning message: ${message}`);
    }
}
//# sourceMappingURL=Logger.js.map