import Device from "../devices/Device.js";

export default interface DeviceFactory {
    createLaptop(): Device;
    createNetbook(): Device;
    createEBook(): Device;
    createSmartphone(): Device;
}