import Laptop from "../devices/Laptop.js";
import Netbook from "../devices/Netbook.js";
import EBook from "../devices/EBook.js";
import Smartphone from "../devices/Smartphone.js";
export default class KiaomiFactory {
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
//# sourceMappingURL=KiaomiFactory.js.map