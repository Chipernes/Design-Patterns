import DocumentType from "../core/templates/documentType.ts";

export default class Identity extends DocumentType {
    public isInfoHidden: boolean;

    constructor(type: string, id: string, firstname: string, lastname: string, birthDate: Date, photo: string) {
        super(type, id, firstname, lastname, birthDate, photo);
        this.isInfoHidden = false;
        this.documentInner = this.initializeDocumentInner('Passport of a citizen of Ukraine');
    }

    private initializeDocumentInner(title: string) {
        return {
            title,
            birthDate: this.birthDate.toLocaleDateString('uk-UA'),
            id: this.id,
            firstname: this.firstname,
            lastname: this.lastname,
            photo: this.photo,
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
                                <h3>Number:</h3>
                                <p id="contentToCopy">${documentInner.id}</p>
                            </div>
                        </div>
                    </div>
                    <div class="card__footer">
                        <h2 class="card__peron">${documentInner.firstname} ${documentInner.lastname}</h2>
                    </div>
                </div>
                <a class="copy__link" id="copyIdentity" href="">Copy the identification code</a>
            `;

        const copyIdentityButton = document.getElementById('copyIdentity');
        copyIdentityButton?.addEventListener('click', (e) => {
            this.copyIdentity();
            e.preventDefault();
        });

        return this.documentCard;
    }

    copyIdentity() {
        const contentToCopy = document.getElementById('contentToCopy');
        const range = document.createRange();
        if (contentToCopy) {
            range.selectNode(contentToCopy);
            window.getSelection()?.removeAllRanges();
            window.getSelection()?.addRange(range);
            document.execCommand("copy");
            window.getSelection()?.removeAllRanges();
            alert("Content copied!");
        }
    }

    hideInfo() {
        if (this.isInfoHidden) {
            this.isInfoHidden = false;
            return this.showFront();
        }

        this.isInfoHidden = true;
        const hiddenDoc = this.initializeDocumentInner('Passport of a citizen of Ukraine');
        hiddenDoc.birthDate = '###';
        hiddenDoc.id = '###';
        hiddenDoc.firstname = '###';
        hiddenDoc.lastname = '###';
        hiddenDoc.photo = 'user';

        return this.createCard(hiddenDoc, true);
    }

    public initialize(container: HTMLElement) {
        super.initialize(container);
    }
}