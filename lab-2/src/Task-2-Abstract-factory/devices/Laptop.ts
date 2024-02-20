import Device from "./Device.js";

export default class Laptop implements Device {
    getType(): string {
        return 'Laptop';
    }
}