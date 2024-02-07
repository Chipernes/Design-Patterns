import DocumentType from "../core/templates/documentType.ts";

export default class StudentID extends DocumentType {
    private isInfoHidden: boolean;
    private readonly validTo: Date;
    private readonly studyType: string;

    constructor(type: string, id: string, firstname: string, lastname: string, birthDate: Date, photo: string, validTo: Date, studyType: string) {
        super(type, id, firstname, lastname, birthDate, photo);
        this.isInfoHidden = false;
        this.validTo = validTo;
        this.studyType = studyType;
        this.documentInner = this.initializeDocumentInner('Student Identity');
    }

    private initializeDocumentInner(title: string) {
        return {
            title,
            id: this.id,
            firstname: this.firstname,
            lastname: this.lastname,
            photo: this.photo,
            validTo: this.validTo.toLocaleDateString('uk-UA'),
            studyType: this.studyType,
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
                  <div class="card__number">
                      <h3>Number:</h3>
                      <p>${documentInner.id}</p>
                    </div>
                    <div class="card__birth">
                      <h3>Valid to:</h3>
                      <p>${!hidden ? documentInner.validTo : '###'}</p>
                    </div>
                    <div class="card__number">
                      <h3>Study type:</h3>
                      <p>${documentInner.studyType}</p>
                    </div>
                  </div>
                </div>
                <div class="card__footer">
                  <h2 class="card__peron">${documentInner.firstname} ${documentInner.lastname}</h2>
                </div>
                </div>
            `;

        return this.documentCard;
    }

    hideInfo() {
        if (this.isInfoHidden) {
            this.isInfoHidden = false;
            return this.showFront();
        }

        this.isInfoHidden = true;
        const hiddenDoc = this.initializeDocumentInner('Student Identity');
        hiddenDoc.id = '###';
        hiddenDoc.firstname = '###';
        hiddenDoc.lastname = '###';
        hiddenDoc.photo = 'user';
        hiddenDoc.validTo = '###';
        hiddenDoc.studyType = '###';
        return this.createCard(hiddenDoc, true);
    }

    public initialize(container: HTMLElement) {
        super.initialize(container);
    }
}

