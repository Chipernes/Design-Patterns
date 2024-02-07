import Page from "../../core/templates/page.ts";

export default class MainPage extends Page{
    static TextObject = {
        MainTitle: 'DIA: Public services online'
    };
    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.creteHeaderTitle(MainPage.TextObject.MainTitle);
        title.classList.add('page-title');
        title.insertAdjacentHTML('beforeend', `
          <div class="order">
            <label class="order__label" for="order">Input the order of the documents (ID, Licence, StudentID)</label>
            <input class="order__input" type="text" id="order">
            <a id="orderButton" class="order__button" href="#">Change order</a>
          </div>
        `);
        this.container.append(title);
        return this.container;
    }
}