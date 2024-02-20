import EBook from "../devices/EBook.js";
import Smartphone from "../devices/Smartphone.js";
import Netbook from "../devices/Netbook.js";
import Laptop from "../devices/Laptop.js";
export default class BalaxyFactory {
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
//# sourceMappingURL=BalaxyFactory.js.map