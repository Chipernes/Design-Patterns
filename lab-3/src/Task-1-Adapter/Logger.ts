export default class Logger {
    public log(message: string): void {
        console.log(`This is a green correct message: ${message}`);
    }
    public error(message: string): void {
        console.error(`This is a red incorrect message: ${message}`);
    }
    public warn(message: string): void {
        console.warn(`This is a yellow warning message: ${message}`);
    }
}