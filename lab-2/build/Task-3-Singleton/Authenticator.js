class Authenticator {
    static isUserAuthenticated() {
        return this.authentication;
    }
    static signIn() {
        this.authentication = true;
    }
    static signOut() {
        this.authentication = false;
    }
}
Authenticator.authentication = false;
export default Authenticator;
//# sourceMappingURL=Authenticator.js.map