import DeviceFactory from "./DeviceFactory.js";
import Device from "../devices/Device.js";
import Smartphone from "../devices/Smartphone.js";
import Laptop from "../devices/Laptop.js";
import Netbook from "../devices/Netbook.js";
import EBook from "../devices/EBook.js";

export default class IProneFactory implements DeviceFactory {
    createLaptop(): Device {
        return new Laptop();
    }

    createNetbook(): Device {
        return new Netbook();
    }

    createEBook(): Device {
        return new EBook();
    }

    createSmartphone(): Device {
        return new Smartphone();
    }
}