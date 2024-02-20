import Subscription from "../templates/Subscription.js";

export default class PremiumSubscription extends Subscription {
    constructor() {
        super(449, 6, ['All Channels', 'SmartTV']);
    }
}