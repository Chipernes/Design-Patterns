import DeviceFactory from "./DeviceFactory.js";
import Device from "../devices/Device.js";
import Laptop from "../devices/Laptop.js";
import Netbook from "../devices/Netbook.js";
import EBook from "../devices/EBook.js";
import Smartphone from "../devices/Smartphone.js";

export default class KiaomiFactory implements DeviceFactory {
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