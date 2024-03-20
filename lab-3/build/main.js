import FileWriter from "./Task-1-Adapter/FileWriter.js";
import FileLoggerAdapter from "./Task-1-Adapter/FileLoggerAdapter.js";
function adapter() {
    const fileWriter = new FileWriter();
    const fileLogger = new FileLoggerAdapter(fileWriter);
    fileLogger.log("This is a LOGGING.");
    fileLogger.error("This is an ERROR!");
    fileLogger.warn("This is a WARN.");
}
import Warrior from "./Task-2-Decorator/heroes/Warrior.js";
import Mage from "./Task-2-Decorator/heroes/Mage.js";
import Paladin from "./Task-2-Decorator/heroes/Paladin.js";
import ArmorDecorator from "./Task-2-Decorator/inventory/ArmorDecorator.js";
import WeaponDecorator from "./Task-2-Decorator/inventory/WeaponDecorator.js";
import ArtifactDecorator from "./Task-2-Decorator/inventory/ArtifactDecorator.js";
function decorator() {
    const warrior = new Warrior("Warrior Name");
    const mage = new Mage("Mage Name");
    const paladin = new Paladin("Paladin Name");
    const warriorWithArmor = new ArmorDecorator(warrior);
    const warriorWithWeapon = new WeaponDecorator(warrior);
    const warriorWithArtifact = new ArtifactDecorator(warrior);
    const mageWithArmor = new ArmorDecorator(mage);
    const mageWithArtifact = new ArtifactDecorator(mage);
    const paladinWithWeapon = new WeaponDecorator(paladin);
    const paladinWithArtifact = new ArtifactDecorator(paladin);
    warriorWithArmor.equip("Steel");
    warriorWithWeapon.equip("Sword");
    warriorWithArtifact.equip("Amulet");
    mageWithArmor.equip("Robe");
    mageWithArtifact.equip("Ring");
    paladinWithWeapon.equip("Sword");
    paladinWithArtifact.equip("Shield");
}
import VectorRenderer from "./Task-3-Bringe/renders/VectorRenderer.js";
import RasterRenderer from "./Task-3-Bringe/renders/RasterRenderer.js";
import Circle from "./Task-3-Bringe/shapes/Circle.js";
import Square from "./Task-3-Bringe/shapes/Square.js";
import Triangle from "./Task-3-Bringe/shapes/Triangle.js";
function bridge() {
    const vectorRenderer = new VectorRenderer();
    const rasterRenderer = new RasterRenderer();
    const circle = new Circle(vectorRenderer);
    const square = new Square(rasterRenderer);
    const triangle = new Triangle(vectorRenderer);
    circle.draw();
    square.draw();
    triangle.draw();
}
import SmartTextReader from "./Task-4-Proxy/SmartTextReader.js";
import SmartTextChecker from "./Task-4-Proxy/SmartTextChecker.js";
import SmartTextReaderLocker from "./Task-4-Proxy/SmartTextReaderLocker.js";
function proxy() {
    const realReader = new SmartTextReader();
    const checkerProxy = new SmartTextChecker(realReader);
    checkerProxy.readFile("Task-4-Proxy/file.txt");
    const restrictedFilesRegex = /Task-4-Proxy\/restricted_file\.txt/;
    const lockerProxy = new SmartTextReaderLocker(realReader, restrictedFilesRegex);
    lockerProxy.readFile("Task-4-Proxy/file.txt");
    lockerProxy.readFile("Task-4-Proxy/restricted_file.txt");
}
import LightElementNode from "./Task-6-Lightweight/LightElementNode.js";
import LightTextNode from "./Task-6-Lightweight/LightTextNode.js";
import fs from "fs";
function createLightHTML(text) {
    const lines = text.split(/[\r\n]+/);
    const result = [];
    let isFirstLine = true;
    for (const line of lines) {
        if (line.trim() === '') {
            continue;
        }
        let elementTagName = 'p';
        if (isFirstLine) {
            elementTagName = 'h1';
            isFirstLine = false;
        }
        else if (line.trim().length < 20) {
            elementTagName = 'h2';
        }
        else if (line.startsWith(' ')) {
            elementTagName = 'blockquote';
        }
        result.push(new LightElementNode(elementTagName, [new LightTextNode(line)]));
    }
    return result;
}
function lightweight() {
    const text = fs.readFileSync('D:\\University\\Second term\\Design Patterns\\lab-3\\src\\Task-6-Lightweight\\book.txt', "utf-8");
    const lightHTMLTree = createLightHTML(text);
    console.log(lightHTMLTree.map(node => node.outerHTML()).join(''));
    const memorySize = lightHTMLTree.reduce((acc, node) => acc + node.memorySize(), 0);
    console.log(`Розмір дерева в пам'яті: ${memorySize} байт`);
}
lightweight();
//# sourceMappingURL=main.js.map