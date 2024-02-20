export default class Authenticator {
    private static authentication: boolean = false;

    static isUserAuthenticated(): boolean {
        return this.authentication;
    }
    static signIn() {
        this.authentication = true;
    }

    static signOut() {
        this.authentication = false;
    }
}