import WebSite from "./Task-1-Factory-method/buySubscription/WebSite.js";
import MobileApp from "./Task-1-Factory-method/buySubscription/MobileApp.js";
import ManagerCall from "./Task-1-Factory-method/buySubscription/ManagerCall.js";
function factoryMethod() {
    const websiteSubscription = WebSite.purchaseSubscription();
    console.log('Website Subscription:', websiteSubscription);
    const mobileAppSubscription = MobileApp.purchaseSubscription();
    console.log('Mobile App Subscription:', mobileAppSubscription);
    const managerCallSubscription = ManagerCall.purchaseSubscription();
    console.log('Manager Call Subscription:', managerCallSubscription);
}
factoryMethod();
import IProneFactory from "./Task-2-Abstract-factory/factories/IProneFactory.js";
import KiaomiFactory from "./Task-2-Abstract-factory/factories/KiaomiFactory.js";
import BalaxyFactory from "./Task-2-Abstract-factory/factories/BalaxyFactory.js";
function abstractFactory() {
    const iproneFactory = new IProneFactory();
    const kiaomiFactory = new KiaomiFactory();
    const balaxyFactory = new BalaxyFactory();
    const iproneLaptop = iproneFactory.createLaptop();
    const kiaomiSmartphone = kiaomiFactory.createSmartphone();
    const balaxyNetbook = balaxyFactory.createNetbook();
    console.log('IProne Laptop:', iproneLaptop.getType());
    console.log('Kiaomi Smartphone:', kiaomiSmartphone.getType());
    console.log('Balaxy Netbook:', balaxyNetbook.getType());
}
import Authenticator from "./Task-3-Singleton/Authenticator.js";
function singleton() {
    console.log('Is user authenticated: ', Authenticator.isUserAuthenticated());
    Authenticator.signIn();
    console.log('Is user authenticated: ', Authenticator.isUserAuthenticated());
    Authenticator.signOut();
    console.log('Is user authenticated: ', Authenticator.isUserAuthenticated());
}
import Virus from "./Task-4-Prototype/Virus.js";
function virus() {
    const grandChildVirus1 = new Virus(1.5, 1, "Grandchild1", "Coronavirus");
    const grandChildVirus2 = new Virus(1.6, 1, "Grandchild2", "Coronavirus");
    const grandChildVirus3 = new Virus(1.7, 1, "Grandchild3", "Coronavirus");
    const childVirus1 = new Virus(2.0, 2, "Child1", "Coronavirus", [grandChildVirus1, grandChildVirus2]);
    const childVirus2 = new Virus(2.1, 2, "Child2", "Coronavirus", [grandChildVirus3]);
    const parentVirus = new Virus(3.0, 3, "Parent", "Coronavirus", [childVirus1, childVirus2]);
    const clonedParentVirus = parentVirus.clone();
    console.log("Cloned Parent Virus:", clonedParentVirus);
    console.log("Cloned Parent Virus Children:", clonedParentVirus.children);
}
import HeroBuilder from "./Task-5-Builder/HeroBuilder.js";
import EnemyBuilder from "./Task-5-Builder/EnemyBuilder.js";
import CharacterDirector from "./Task-5-Builder/CharacterDirector.js";
function builder() {
    const heroBuilder = new HeroBuilder();
    const enemyBuilder = new EnemyBuilder();
    const heroDirector = new CharacterDirector(heroBuilder);
    const hero = heroDirector.buildHero();
    console.log('Hero:', hero);
    const enemyDirector = new CharacterDirector(enemyBuilder);
    const enemy = enemyDirector.buildEnemy();
    console.log('Enemy:', enemy);
}
//# sourceMappingURL=main.js.map