const requests = require("./requests")

class User {

    constructor(token) {
        if (token) this.token = token; else return;
    }

    makeUser(username) {
        if (this.token) throw new Error("Client already has an auth token, no need to make a user.")
        return requests.signup(username).then((e) => {
            this.token = e.data.token;
        })
    }

    async fetchData() {
        return requests.fetchData(this.token).then((e) => {
            this.userData = e.data.user;
        });
    }

    fetchUserData(id) {
        return requests.fetchUserData(this.token, id);
    }

    async fetchOwnedCosmetics() {
        if (!this.userData) await this.fetchData();
        return requests.fetchOwnedCosmetics(this.token, this.userData.id);
    }
    fetchUserCosmetics(userId) {
        return requests.fetchUserCosmetics(this.token, userId);
    }

    refreshGameSession(id) {
        return requests.refreshGameSession(this.token, id);
    }

    joinBranch(id) {
        return requests.joinBranch(this.token, id);
    }

    giveAcorns(acorns, userId) {
        return requests.giveAcorns(this.token, acorns, userId);
    }


    loadCosmetics(cosmetics) {
        cosmetics.forEach(e => {
            console.log(e.cosmetic.id, " ", e.equipped_amount);
        });
    }

    equipCosmetic(cosmeticId) {
        return requests.equipCosmetic(this.token, cosmeticId);
    }

    unequipCosmetic(cosmeticId) {
        return requests.unequipCosmetic(this.token, cosmeticId);
    }

    purchaseCosmetic(cosmeticId) {
        return requests.purchaseCosmetic(this.token,cosmeticId);
    }

    updateStatus(status) {
        return requests.updateStatus(this.token, status);
    }

    init(branch) {
        return requests.init(this.token, branch);
    }

    on(event) {
        return requests.on(this.token, event);
    }

}


exports.User = User;

