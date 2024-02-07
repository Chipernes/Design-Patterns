import DocumentType from "../core/templates/documentType.ts";

export default class DriverLicense extends DocumentType {
    private isInfoHidden: boolean;
    private readonly category: string[];

    constructor(type: string, id: string, firstname: string, lastname: string, birthDate: Date, photo: string, category: string[]) {
        super(type, id, firstname, lastname, birthDate, photo);
        this.isInfoHidden = false;
        this.category = category;
        this.documentInner = this.initializeDocumentInner('Driver license');
    }

    private initializeDocumentInner(title: string) {
        return {
            title,
            birthDate: this.birthDate.toLocaleDateString('uk-UA'),
            id: this.id,
            firstname: this.firstname,
            lastname: this.lastname,
            photo: this.photo,
            category: this.category,
        };
    }

    protected createCard(documentInner: any, hidden: boolean) {
        const innerMain = this.documentCard.querySelector('.card__main');
        if (innerMain)
            innerMain.innerHTML = `
              <h2 class="card__title">${documentInner.title}</h2>
              <div>
                <div class="card__inner">
                  <img class="card__photo" src="src/assets/${documentInner.photo}.jpg" alt="">
                  <div class="card__info">
                    <div class="card__birth">
                      <h3>Date of birth:</h3>
                      <p>${!hidden ? documentInner.birthDate : '###'}</p>
                    </div>
                    <div class="card__number">
                      <h3>Category:</h3>
                      <p>${documentInner.category.join(', ')}</p>
                    </div>
                    <div class="card__number">
                      <h3>Number:</h3>
                      <p>${documentInner.id}</p>
                    </div>
                  </div>
                </div>
                <div class="card__footer">
                  <h2 class="card__peron">${documentInner.firstname} ${documentInner.lastname}</h2>
                </div>
                </div>
                <a class="copy__link" id="registerCar" href="">Registrate a car</a>
            `;

        const registerCarButton = document.getElementById('registerCar');
        registerCarButton?.addEventListener('click', (e) => {
            this.registerCar();
            e.preventDefault();
        });

        return this.documentCard;
    }

    registerCar() {
        alert("Your car was registered!");
    }

    hideInfo() {
        if (this.isInfoHidden) {
            this.isInfoHidden = false;
            return this.showFront();
        }

        this.isInfoHidden = true;
        const hiddenDoc = this.initializeDocumentInner('Driver license');
        hiddenDoc.birthDate = '###';
        hiddenDoc.id = '###';
        hiddenDoc.firstname = '###';
        hiddenDoc.lastname = '###';
        hiddenDoc.photo = 'user';
        hiddenDoc.category = ['###'];
        return this.createCard(hiddenDoc, true);
    }

    public initialize(container: HTMLElement) {
        super.initialize(container);
    }
}

