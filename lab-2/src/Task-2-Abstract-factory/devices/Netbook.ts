import Device from "./Device.js";

export default class Netbook implements Device {
    getType(): string {
        return 'Netbook';
    }
}