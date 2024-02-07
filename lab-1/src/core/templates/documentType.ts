export default abstract class DocumentType {
    protected documentCard: HTMLElement = document.createElement('div');
    protected documentInner = {};
    protected isQRShown: boolean = false;

    protected readonly type: string;
    protected readonly id: string;
    protected readonly firstname: string;
    protected readonly lastname: string;
    protected birthDate: Date;
    protected photo: string;

    protected constructor(type: string, id: string, firstname: string, lastname: string, birthDate: Date, photo: string) {
        this.type = type;
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthDate = birthDate;
        this.photo = photo;
        this.createDocumentCard();
    }

    private createDocumentCard() {
        this.documentCard.classList.add('card');
        this.documentCard.id = this.type;
        this.documentCard.innerHTML = `
            <div class="card__main"></div>
            <div class="card__links">
                <a id="hideInfo${this.type}" href="">Hide the information</a>
            </div>
        `;
    }

    protected generateQR(documentInner: any) {
        const innerMain = this.documentCard.querySelector('.card__main');
        if (innerMain)
            innerMain.innerHTML = `
                <h2 class="card__title">${documentInner.title}</h2>
                <img class="card__qr" src="src/assets/QR.jpg" alt="">
            `;

        return this.documentCard;
    }

    protected abstract createCard(documentInner: any, hidden: boolean): HTMLElement;

    protected showFront() {
        this.isQRShown = false;
        return this.createCard(this.documentInner, false);
    }

    protected abstract hideInfo(): HTMLElement;

    protected getQR() {
        this.isQRShown = true;
        return this.generateQR(this.documentInner);
    }

    protected initialize(container: HTMLElement) {
        let identityHTML = this.showFront();
        container.append(identityHTML);

        const documentCard = document.getElementById(this.type);
        const copyIdentityButton = document.getElementById('copyIdentity');
        documentCard?.addEventListener('click', (e) => {
            if (e.target === hideButton || e.target === copyIdentityButton)
                return

            this.isQRShown ? this.showFront() : this.getQR()
        });

        const hideButton = document.getElementById(`hideInfo${this.type}`);
        hideButton?.addEventListener('click', (e) => {
            identityHTML = this.hideInfo();
            e.preventDefault();
        });
    }
}