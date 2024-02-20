import Smartphone from "../devices/Smartphone.js";
import Laptop from "../devices/Laptop.js";
import Netbook from "../devices/Netbook.js";
import EBook from "../devices/EBook.js";
export default class IProneFactory {
    createLaptop() {
        return new Laptop();
    }
    createNetbook() {
        return new Netbook();
    }
    createEBook() {
        return new EBook();
    }
    createSmartphone() {
        return new Smartphone();
    }
}
//# sourceMappingURL=IProneFactory.js.map