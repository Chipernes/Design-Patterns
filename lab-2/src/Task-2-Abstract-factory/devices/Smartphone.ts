import Device from "./Device.js";

export default class Smartphone implements Device {
    getType(): string {
        return 'Smartphone';
    }
}