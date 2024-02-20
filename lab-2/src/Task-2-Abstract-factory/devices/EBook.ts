import Device from "./Device.js";

export default class EBook implements Device {
    getType(): string {
        return 'EBook';
    }
}