import MainPage from "../main/main.ts";
import Container from "../main/container.ts";

export default class App {
    private readonly container: HTMLElement;
    private initialPage: MainPage;

    constructor() {
        this.container = document.body;
        this.initialPage = new MainPage('main-page');
    }

    run() {
        const mainPageHTML = this.initialPage.render();
        this.container.append(mainPageHTML);

        const documentsContainer = new Container();
        documentsContainer.initializeAllDocuments(this.container);

        this.initializeOrderButtons(documentsContainer);
    }

    initializeOrderButtons(documentsContainer: Container) {
        const order = document.getElementById('order');
        const orderButton = document.getElementById('orderButton');
        let orderPosition: string[] = [''];
        if (!order || !orderButton) {
            throw new Error('Required elements not found');
        }
        orderButton.addEventListener('click', () => {
            orderPosition = (<HTMLInputElement>order).value.split(', ');

            documentsContainer.changeDocumentsPosition(orderPosition, this.container);
        });
    }
}