import DeviceFactory from "./DeviceFactory.js";
import Device from "../devices/Device.js";
import EBook from "../devices/EBook.js";
import Smartphone from "../devices/Smartphone.js";
import Netbook from "../devices/Netbook.js";
import Laptop from "../devices/Laptop.js";

export default class BalaxyFactory implements DeviceFactory {
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